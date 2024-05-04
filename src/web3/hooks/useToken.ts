import { CONTRACT_ADDRESS, EToken, IAbis } from "../token";
import {
  getContract,
  getCurrentChainId,
  getGasPriceAndGasLimit,
  useConnectorByName,
} from "@/pkgs/wallet-connector/connector";
import { useWalletContext } from "@/pkgs/wallet-connector/context";
import { E_NETWORK_ID } from "@/pkgs/wallet-connector/types";
import { ADDRESS_NULL, Currencies } from "@/utils/constants";
import {
  convertBalanceDecimalToNumber,
  convertNumberToBalanceDecimal,
} from "@/utils/converter";
import { waitTransaction } from "@/utils/transactionHelpers";
import contractJson from "@/web3/abi/VinachainPoint.json";
import contractSwapJson from "@/web3/abi/vpc.json";
import { MaxUint256 } from "@ethersproject/constants";
import Web3 from "web3";
import abiUsdtToken from "@/web3/abi/token.json";
import { core } from "./useQuicknode";
import initialWeb3 from "./useWeb3";

export type TransferUsdt = {
  from: string;
  to: string;
  transactionHash: string;
};
export const useToken = () => {
  const { connectorName } = useWalletContext();
  const {
    hook,
    connector: { provider },
  } = useConnectorByName(connectorName);
  const networkSeleted = hook.useChainId() as E_NETWORK_ID;
  const account = hook.useAccount();

  const getBalance = async (
    token: string,
    contractAbi: IAbis
  ): Promise<string> => {
    if (!account || !networkSeleted) throw new Error("Please connect wallet");
    const contract = getContract(provider, contractAbi, token);

    const balance = await contract.methods.balanceOf(account).call();
    return balance;
  };

  const getDecimals = async (
    token: string,
    contractJson: IAbis
  ): Promise<number> => {
    const contract = getContract(provider, contractJson, token);
    const decimals = await contract.methods.decimals().call();
    return decimals;
  };

  const purchase = async (
    amount: string,
    referrerAddress: string
  ): Promise<string> => {
    if (!account || !networkSeleted) throw new Error("Please connect wallet");

    const address = CONTRACT_ADDRESS.VINACHAIN[networkSeleted] as string;

    const contract = getContract(provider, contractJson, address);
    const { gasLimit, gasPrice } = await getGasPriceAndGasLimit(provider);

    const balance = await contract.methods
      .purchasePoints(amount, referrerAddress)
      .send({ from: account, gasLimit, gasPrice });
    return balance;
  };

  const buySwapPackage = async (
    packageNumber: number
  ): Promise<TransferUsdt> => {
    if (!account || !networkSeleted) throw new Error("Please connect wallet");

    const address = CONTRACT_ADDRESS.VINACHAIN[networkSeleted] as string;

    const contract = getContract(provider, contractSwapJson, address);
    const { gasLimit, gasPrice } = await getGasPriceAndGasLimit(provider);

    const balance = await contract.methods
      .buyPackage(packageNumber)
      .send({ from: account, gasLimit, gasPrice });
    return balance;
  };

  const checkAllowance = async (
    token: string,
    contractJson: IAbis
  ): Promise<string> => {
    const contract = getContract(provider, contractJson, token);
    const allowance = await contract.methods
      .allowance(account, CONTRACT_ADDRESS.VINACHAIN[networkSeleted])
      .call();
    return allowance;
  };

  const approve = async (
    token: string,
    contractJson: IAbis
  ): Promise<boolean> => {
    const contract = getContract(provider, contractJson, token);
    const { gasLimit, gasPrice } = await getGasPriceAndGasLimit(provider);

    await contract.methods
      .approve(
        CONTRACT_ADDRESS.VINACHAIN[networkSeleted],
        MaxUint256.toString()
      )
      .send({ from: account, gasLimit, gasPrice });

    return true;
  };

  const totalSupply = async (address: string): Promise<string> => {
    const contract = getContract(provider, contractJson, address);
    const totalSupply = await contract.methods.totalSupply().call();

    return totalSupply;
  };

  const getReferralReward = async (): Promise<string> => {
    const address = CONTRACT_ADDRESS.VINACHAIN[networkSeleted] as string;

    const contract = getContract(provider, contractJson, address);
    const totalSupply = await contract.methods
      .viewReferralReward()
      .call({ from: account });
    return totalSupply;
  };

  const getReferrer = async (): Promise<string> => {
    if (!account || !networkSeleted) throw new Error("Please connect wallet");

    const address = CONTRACT_ADDRESS.VINACHAIN[networkSeleted] as string;

    const contract = getContract(provider, contractJson, address);
    const totalSupply = await contract.methods
      .viewReferrer()
      .call({ from: account });
    return totalSupply;
  };

  const checkIsReferrerValid = async (
    referrerAddress: string
  ): Promise<boolean> => {
    if (!account || !networkSeleted) throw new Error("Please connect wallet");

    const address = CONTRACT_ADDRESS.VINACHAIN[networkSeleted] as string;

    const contract = getContract(provider, contractJson, address);

    const isValid = await contract.methods
      .isReferrerValid(account, referrerAddress)
      .call();
    return isValid;
  };

  const totalSupplyNotConnectWallet = async (): Promise<string> => {
    const web3 = initialWeb3();
    const methodHash = web3.eth.abi.encodeFunctionSignature("totalSupply()");

    const response: any = await core.client.call({
      account: ADDRESS_NULL,
      data: methodHash as `0x${string}`,
      to: process.env.NEXT_PUBLIC_VINACHAIN_ADDRESS as `0x${string}`,
    });

    const decodedData = web3.eth.abi.decodeParameters(
      ["uint256"],
      response.data
    );

    const totalSupplyValue = decodedData[0];

    return totalSupplyValue.toString();
  };

  const transferUsdt = async (
    token: EToken,
    amount: string,
    opts?: { blocksToWait: number; interval: number },
  ): Promise<TransferUsdt> => {
    const networkSeleted = getCurrentChainId();
    if (!account) throw new Error("Please connect wallet");

    let contract = getContract(
      provider,
      abiUsdtToken,
      CONTRACT_ADDRESS[token][networkSeleted],
    );

    const { gasLimit, gasPrice } = await getGasPriceAndGasLimit(provider);

    const decimals = await contract.methods.decimals().call();
    const value = convertNumberToBalanceDecimal(amount, decimals);

    const address = CONTRACT_ADDRESS.VINACHAIN[networkSeleted];

    const result: TransferUsdt = await contract.methods
      .transfer(address, value)
      .send({ from: account, gasLimit, gasPrice });

    if (!opts) {
      return result;
    }
    const web3 = new Web3(provider as any);
    await waitTransaction(web3, result.transactionHash, {
      blocksToWait: opts.blocksToWait,
      interval: opts.interval,
    });

    return result;
  };


  const decimalNotConnectWallet = async (): Promise<number> => {
    const web3 = initialWeb3();
    const methodHash = web3.eth.abi.encodeFunctionSignature("decimals()");

    const response: any = await core.client.call({
      account: ADDRESS_NULL,
      data: methodHash as `0x${string}`,
      to: process.env.NEXT_PUBLIC_VINACHAIN_ADDRESS as `0x${string}`,
    });

    const decodedData = web3.eth.abi.decodeParameters(
      ["uint256"],
      response.data
    );

    const totalSupplyValue = decodedData[0];

    return Number(totalSupplyValue);
  };

  return {
    getBalance,
    getDecimals,
    purchase,
    approve,
    checkAllowance,
    getReferralReward,
    totalSupply,
    getReferrer,
    totalSupplyNotConnectWallet,
    decimalNotConnectWallet,
    checkIsReferrerValid,
    transferUsdt,
    buySwapPackage
  };
};
