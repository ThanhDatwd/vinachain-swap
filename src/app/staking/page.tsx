"use client";

import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useAuth } from "@/hooks/useAuth";
import * as Yup from "yup";
import { useTheme } from "@/hooks/useTheme";
import { onToast } from "@/hooks/useToast";
import { stakeService } from "@/services/StakeService";
import {
  FACTOR,
  LINK_GET_USDT,
  MINIMUM_TX_CONFIRMATION,
  REFECT_CONFIRMATION_BLOCK,
  STAKING_CURRENCY,
  VPC_EXCHANGE_RATE_USD,
  getStaticURL,
} from "@/utils/constants";
import {
  convertBalanceDecimalToNumber,
  convertNumberToFormattedString,
} from "@/utils/converter";
import { errorMsg } from "@/utils/errMsg";
import { isDarkTheme } from "@/utils/theme";
import { useFormik } from "formik";
import { DateTime } from "luxon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import abiToken from "@/web3/abi/token.json";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  connectWallet,
  disconnectWallet,
  useConnectorByName,
} from "@/pkgs/wallet-connector/connector";
import { useWalletContext } from "@/pkgs/wallet-connector/context";
import { E_CONNECTOR_NAMES, E_NETWORK_ID } from "@/pkgs/wallet-connector/types";
import { CONTRACT_ADDRESS, EToken, ITokenOption, TOKENS } from "@/web3/token";
import { useToken } from "@/web3/hooks/useToken";
import FormInput from "@/components/FormInput";
import { TopModal } from "@/components/controls/TopModal";
import { toast } from "react-toastify";

const ONE_YEAR_DAYS = 365;
const PERCENT_PROFIT_VPC = [
  {
    label: "12 ",
    months: 12,
    value: ONE_YEAR_DAYS,
    profit: 30,
  },
  {
    label: "24 ",
    months: 24,
    value: 2 * ONE_YEAR_DAYS,
    profit: 80,
  },
  {
    label: "36 ",
    months: 36,
    value: 3 * ONE_YEAR_DAYS,
    profit: 150,
  },
];

const PERCENT_PROFIT_USDT = [
  {
    label: "1 ",
    value: ONE_YEAR_DAYS,
    profit: 8,
    months: 12,
    amount: 100,
  },
  {
    label: "2 ",
    value: ONE_YEAR_DAYS,
    months: 12,
    profit: 9,
    amount: 500,
  },
  {
    label: "3 ",
    value: ONE_YEAR_DAYS,
    profit: 10,
    months: 12,
    amount: 1000,
  },
  {
    label: "4 ",
    value: ONE_YEAR_DAYS,
    profit: 12,
    months: 12,
    amount: 5000,
  },
  {
    label: "5 ",
    value: ONE_YEAR_DAYS,
    months: 12,
    profit: 15,
    amount: 10000,
  },
];

const TokenOptions: ITokenOption[] = [
  {
    name: TOKENS.USDT.name,
    value: EToken.USDT,
    image: `${getStaticURL()}/assets/images/liquidity/${TOKENS.USDT.image}`,
    abi: abiToken,
    address: "",
  },
];
export default function StakingPage() {
  const { t } = useTranslation();

  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const { currentUser, availableAmount, fetchAvailableAmount } = useAuth();
  const currentDate = DateTime.now();
  const [stakedAmount, setStakedAmount] = useState(0);
  const [isShowFormVerify, setIsShowFormVerify] = useState(false);
  const [interestAmount, setInterestAmount] = useState(0);
  const [balance, setBalance] = useState<number>(0);
  const [stakeSuccess, setStakeSuccess] = useState(false);
  const [openModalConnectWallet, setOpenModalConnectWallet] = useState(false);
  const router = useRouter();
  const { setConnectorName, connectorName, walletNetwork, setWalletNetwork } =
    useWalletContext();
  const [currentToken, setCurrentToken] = useState<STAKING_CURRENCY>(
    STAKING_CURRENCY.USDT
  );
  const [token, setToken] = useState<ITokenOption>(TokenOptions[0]);

  const [currentMonthProfit, setCurrentMonthProfit] = useState(
    PERCENT_PROFIT_VPC[0]
  );

  const [currentAmountProfit, setCurrentAmountProfit] = useState(
    PERCENT_PROFIT_USDT[0]
  );
  const {
    hook,
    connector: { provider },
  } = useConnectorByName(connectorName);
  const account = hook.useAccount();
  const networkSeleted = hook.useChainId() as E_NETWORK_ID;
  const { transferToken, getBalance, getDecimals } = useToken();

  const validationTransferUSDTSchema = Yup.object().shape({
    amount: Yup.number()
      .required(t("validationMessages.amount.required"))
      .min(100, t("validationMessages.amount.min", { value: 100 })),
  });

  useEffect(() => {
    if (account && networkSeleted) {
      fetchTokenBalance();
    }
  }, [account, networkSeleted]);

  useEffect(() => {
    if (currentUser) {
      fetchStakeAmount(currentToken);
    }
  }, [currentUser, currentToken]);

  const fetchTokenBalance = async () => {
    if (!account || !networkSeleted) return;

    setToken({
      ...token,
      address: CONTRACT_ADDRESS[EToken.USDT][networkSeleted],
    });
    let balanceConvert = 0;

    const decimal = await getDecimals(
      CONTRACT_ADDRESS[EToken.USDT][networkSeleted],
      token.abi
    );
    const balance = await getBalance(
      CONTRACT_ADDRESS[EToken.USDT][networkSeleted],
      token.abi
    );

    balanceConvert = Number(convertBalanceDecimalToNumber(balance, decimal));

    stakeUSDTFormik.setFieldValue("amount", currentAmountProfit.amount);
    stakeUSDTFormik.setFieldTouched("amount", true);
    setBalance(balanceConvert);
  };

  const handleStaking = async () => {
    setLoading(true);
    try {
      if (availableAmount > 0) {
        const data = {
          amount: availableAmount,
          stakeCurrency: currentToken.toLowerCase(),
          periodInDays: currentMonthProfit.value,
        };
        const res = await stakeService.staking(data);
        if (res.success) {
          onToast(t(`stakingPage.stakingSuccessFully`), "success");
          await fetchAvailableAmount();
          await fetchStakeAmount(currentToken);
        } else {
          onToast(t(`errorMsg.${errorMsg(res.code)}`), "error");
        }
      } else {
        onToast(t(`stakingPage.notEnoughBalance`), "error");
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const stakeUSDTFormik = useFormik({
    initialValues: {
      amount: 100,
    },
    validationSchema: validationTransferUSDTSchema,
    onSubmit: async (values) => {
      if (!account) {
        document.getElementById("wallet-connect")?.click();
        return;
      }
      if (balance < values.amount) {
        onToast(t("stakingPage.notEnoughBalance"), "error");
        return;
      }
      await handleTransfer(values.amount);
    },
  });

  const handleTransfer = async (balance: number) => {
    if (!account) {
      document.getElementById("wallet-connect")?.click();
    }
    try {
      setLoading(true);

      if (balance === 0) {
        onToast(t("swapPage.availableBalanceIsOver"), "error");
        setLoading(false);
        return;
      }

      await transfer(balance);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkChooseProfit(stakeUSDTFormik.values.amount);
  }, [stakeUSDTFormik.values.amount]);

  const validationTransactionSchema = Yup.object().shape({
    transaction: Yup.string()
      .required(t("validationMessages.transaction.required"))
      .matches(/^0x/, t("validationMessages.transaction.startsWith0x")),
  });
  const transtionFormik = useFormik({
    initialValues: {
      transaction: "",
    },
    validationSchema: validationTransactionSchema,
    onSubmit: async (values) => {
      await handleStakeUSDT(values.transaction);
    },
  });

  const transfer = async (amountTransfer: number) => {
    const toastId = toast.info(
      `${t("swapPage.purchasingAndWaitConfirmation")}`,
      {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
    if (!networkSeleted || !amountTransfer) {
      throw new Error("amount or networkSeleted is null");
    }
    try {
      const addressTransfer =
        process.env.NEXT_PUBLIC_VINACHAIN_RECIPIENT_ADDRESS ?? "";
      if (!addressTransfer) return;

      const check = await transferToken(
        EToken.USDT,
        String(amountTransfer),
        addressTransfer,
        {
          blocksToWait: MINIMUM_TX_CONFIRMATION,
          interval: REFECT_CONFIRMATION_BLOCK,
        }
      );

      if (check) {
        await handleStakeUSDT(check.transactionHash);
      }
      toast.dismiss(toastId);
    } catch (error) {
      console.log(error);

      await onToast(t(`errorMsg.${errorMsg()}`), "error");
    } finally {
      toast.dismiss(toastId);
    }
  };

  const handleStakeUSDT = async (trxHash: string) => {
    try {
      setLoading(true);
      const data = {
        txHash: trxHash,
        periodInDays: currentAmountProfit.value,
        stakeCurrency: currentToken.toLowerCase(),
      };

      const res = await stakeService.staking(data);

      if (res.success) {
        onToast(t(`stakingPage.stakingSuccessFully`), "success");
        await fetchTokenBalance();
        await fetchStakeAmount(currentToken);
        setCurrentAmountProfit(PERCENT_PROFIT_USDT[0]);
        setIsShowFormVerify(false);
      } else {
        onToast(t(`errorMsg.${errorMsg(res.code)}`), "error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const connectWalletHandler = async (connectorName: E_CONNECTOR_NAMES) => {
    try {
      await connectWallet(connectorName, walletNetwork);
      setConnectorName(connectorName);
      setOpenModalConnectWallet(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleToggle = async () => {
    setCurrentToken(
      currentToken === STAKING_CURRENCY.VPC
        ? STAKING_CURRENCY.USDT
        : STAKING_CURRENCY.VPC
    );
  };

  const toggleOpenModalConnectWallet = async () => {
    setOpenModalConnectWallet(!openModalConnectWallet);
    setConnectorName(E_CONNECTOR_NAMES.UNKNOWN);
    if (account) {
      await disconnectWallet(connectorName);
    }
  };

  const fetchStakeAmount = async (currentToken: STAKING_CURRENCY) => {
    try {
      const res = await stakeService.getStakeHistory(
        currentToken.toLowerCase()
      );
      if (res.success && res.data.rows.length > 0) {
        const totalLocked = res.data.rows.reduce((total: any, stake: any) => {
          const { amount, token } = stake;

          if (token === currentToken.toLowerCase()) {
            return total + amount;
          }
          return total;
        }, 0);
        const rewardsForAllStakes = res.data.rows.reduce(
          (total: any, stake: any) => {
            const { token, fullPeriodUSDTRewards, fullPeriodVPCRewards } =
              stake;

            if (token === currentToken.toLowerCase()) {
              if (currentToken === STAKING_CURRENCY.VPC) {
                return total + fullPeriodVPCRewards;
              }
              if (currentToken === STAKING_CURRENCY.USDT) {
                return total + fullPeriodUSDTRewards;
              }
            }
            return total;
          },
          0
        );
        setStakedAmount(totalLocked);
        setInterestAmount(rewardsForAllStakes);
      }
    } catch (error) {}
  };

  const calcValueToUSD = (
    amount: number,
    currency: STAKING_CURRENCY
  ): string => {
    if (currency === STAKING_CURRENCY.USDT) {
      return convertNumberToFormattedString(String(amount));
    }
    return convertNumberToFormattedString(
      String(amount * VPC_EXCHANGE_RATE_USD)
    );
  };

  const calcAPRVPC = (profit: number, months: number) => {
    return (profit / months) * 12;
  };

  const checkChooseProfit = (balance: number) => {
    for (let i = PERCENT_PROFIT_USDT.length - 1; i >= 0; i--) {
      if (balance >= PERCENT_PROFIT_USDT[i].amount) {
        setCurrentAmountProfit(PERCENT_PROFIT_USDT[i]);
        return;
      }
    }
  };
  return (
    <ScanLayout containerStyle="bg-bgColor dark:bg-gray700 font-sans-serif relative">
      <form className="flex px-4 lg:px-24 xl:px-[169px] gap-2  py-8 md:py-14  ">
        <div className="flex flex-col gap-6">
          <h1 className=" text-[32px] lg:text-5xl tracking-wide text-[#763DE8] dark:text-[#9F70FD] uppercase font-bold">
            {t("stakingPage.title", { value: currentToken })}
          </h1>
          <span className="text-[16px] font-normal text-[#6B5695] dark:text-[#B5A1DC]">
            {t("stakingPage.enjoyBenefits", { value: currentToken })}
          </span>
          {currentToken === STAKING_CURRENCY.VPC && (
            <Link
              href={"/swap"}
              className="text-[16px] w-fit flex items-center gap-2 font-semibold text-[#3B3BFC] dark:text-[#FF8911] hover:text-[#3B3BFC] dark:hover:text-[#FF8911] hover:opacity-70"
            >
              {t("stakingPage.get")} {currentToken}
              <ArrowRightIcon width={16} height={12} />
            </Link>
          )}
          {currentToken === STAKING_CURRENCY.USDT && (
            <Link
              target="_blank"
              href={LINK_GET_USDT}
              className="text-[16px] w-fit flex items-center gap-2 font-semibold text-[#3B3BFC] dark:text-[#FF8911] hover:text-[#3B3BFC] dark:hover:text-[#FF8911] hover:opacity-70"
            >
              {t("stakingPage.get")} {currentToken}
              <ArrowRightIcon width={16} height={12} />
            </Link>
          )}
        </div>
      </form>
      <div className="flex justify-center w-full  px-4  lg:px-0  lg:pb-10 ">
        <div className="w-[768px] max-w-full mx-auto flex flex-col gap-5  boxShadow p-6 rounded-xl bg-white dark:bg-[#111111]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col justify-between gap-4 h-full ">
              <div className="flex items-center justify-between">
                <span className="text-[20px] font-semibold text-[#6B5695] dark:text-[#B5A1DC] uppercase">
                  {" "}
                  {t("stakingPage.add")} {currentToken}
                </span>
                <div className="relative border rounded-full bg-[#6B5695] p-1">
                  <button
                    className={`px-2 uppercase transition-all duration-300 rounded-full w-1/2 ${
                      currentToken === STAKING_CURRENCY.VPC
                        ? "bg-white text-[#6B5695] font-bold"
                        : "text-white"
                    }`}
                    onClick={handleToggle}
                  >
                    {STAKING_CURRENCY.VPC}
                  </button>
                  <button
                    className={`px-2 uppercase transition-all duration-300 rounded-full w-1/2 ${
                      currentToken === STAKING_CURRENCY.USDT
                        ? "bg-white text-[#6B5695] font-bold"
                        : "text-white"
                    }`}
                    onClick={handleToggle}
                  >
                    {STAKING_CURRENCY.USDT}
                  </button>
                </div>
              </div>
              {currentToken === STAKING_CURRENCY.VPC && (
                <div className="h-[68px] lg:h-full py-2 flex items-center gap-2 px-4 !border !border-[#DDD4EF] bg-[#F9F6FF] dark:bg-[#3C3548] dark:!border-[#534A64] rounded-2xl">
                  <div>
                    <div className=" w-10 h-10 lg:w-20 lg:h-20   rounded-full">
                      <img
                        src={`${getStaticURL()}/assets/images/logo_vpc.svg`}
                        alt="logo-vpc"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <input
                      className=" text-[16px] font-normal py-1 outline-none border-none bg-transparent"
                      name="amount"
                      disabled
                      value={convertNumberToFormattedString(
                        String(availableAmount)
                      )}
                      placeholder="0.0"
                    />
                    <span className="text-[16px] font-normal text-[#6B5695] dark:text-[#B5A1DC] ">
                      ~ {calcValueToUSD(availableAmount, currentToken)} USDT
                    </span>
                  </div>
                </div>
              )}
              {currentToken === STAKING_CURRENCY.USDT && (
                <>
                  <form
                    onSubmit={stakeUSDTFormik.handleSubmit}
                    className="  flex flex-col  gap-4  "
                  >
                    {/* Form fields */}
                    <div className="flex flex-col gap-2">
                      <div className="h-[68px] flex items-center justify-between gap-2 py-2 px-4 !border !border-[#DDD4EF] bg-[#F9F6FF] dark:bg-[#3C3548] dark:!border-[#534A64] rounded-2xl">
                        <div className="relative w-full">
                          <input
                            type="number"
                            name="amount"
                            id="amount"
                            className="flex-1 outline-none border-none py-3 text-lg placeholder:text-gray550 bg-transparent w-full"
                            min={100}
                            max={balance}
                            placeholder={t("stakingPage.enterUSDT")}
                            onChange={(e)=> {
                              stakeUSDTFormik.handleChange(e);
                            }}
                            value={stakeUSDTFormik.values.amount}
                            step={0.1}
                            onBlur={stakeUSDTFormik.handleBlur}
                          />
                          <div
                            className="absolute right-0 top-1/2 -translate-y-1/2 aspect-square  px-1 "
                            onClick={() => {
                              if (!account) {
                                setOpenModalConnectWallet(true);
                                return;
                              }
                              if (balance < 100) {
                                onToast(
                                  t("stakingPage.notEnoughBalance"),
                                  "error"
                                );
                              }
                              checkChooseProfit(balance);
                              stakeUSDTFormik.setFieldValue(
                                "amount",
                                Math.floor(Number(balance) * 10000) / 10000
                              );
                            }}
                          >
                            <div className="flex items-center text-[#3B3BFC] dark:text-[#DA6C1D] justify-center w-full h-full bg-transparent cursor-pointer hover:underline whitespace-nowrap ">
                              {t("swapPage.max")}
                            </div>
                          </div>
                          {stakeUSDTFormik.touched.amount &&
                            stakeUSDTFormik.errors.amount && (
                              <p className="absolute -bottom-1 left-1 error-message text-[#EA868F] dark:text-[#EA868F] text-[12.5px]">
                                {stakeUSDTFormik.errors.amount}
                              </p>
                            )}
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="flex-1 p-2 flex items-center justify-between w-full text-[16px] rounded-full  ">
                    {t("stakingPage.yourBalance")}:
                    <div>
                      {convertNumberToFormattedString(
                        String(Math.floor(balance * 10000) / 10000)
                      )}
                      &nbsp;USDT
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* ///// */}
            <div className="flex flex-col justify-between gap-4 h-full">
              <div className="flex items-center justify-between">
                <span className="text-[20px] font-semibold text-[#6B5695] dark:text-[#B5A1DC] uppercase">
                  {" "}
                  {t("stakingPage.choosePackage")}
                </span>
              </div>
              <div className="h-[68px] flex items-center justify-between gap-2 py-2 px-4 !border !border-[#DDD4EF] bg-[#F9F6FF] dark:bg-[#3C3548] dark:!border-[#534A64] rounded-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full">
                    <img
                      src={`${getStaticURL()}/assets/images/icons/money-bag.svg`}
                      alt="logo-vpc"
                      className="w-full h-full"
                    />
                  </div>
                  {currentToken === STAKING_CURRENCY.VPC && (
                    <span>{currentMonthProfit.profit}%</span>
                  )}
                  {currentToken === STAKING_CURRENCY.USDT && (
                    <span>{currentAmountProfit.profit}%</span>
                  )}
                </div>
                <span className="text-[#6B5695] dark:text-[#B5A1DC] font-semibold">
                  {t("stakingPage.profit")}
                </span>
              </div>
              <div className="flex items-center gap-1">
                {currentToken === STAKING_CURRENCY.VPC &&
                  PERCENT_PROFIT_VPC.map((item, index) => {
                    return (
                      <div
                        className={`flex-1 p-2 flex items-center justify-center text-[16px] font-semibold rounded-full cursor-pointer  ${
                          item.value === currentMonthProfit.value
                            ? "bg-[#6B5695] text-white dark:bg-[#B5A1DC] dark:text-[#2C2A28]"
                            : "bg-[#FAFBFF] text-[#6B5695] dark:bg-[#2C2A28] dark:text-[#B5A1DC] hover:opacity-70"
                        }   `}
                        key={index}
                        onClick={() => setCurrentMonthProfit(item)}
                      >
                        {item.label} {t("stakingPage.months")}
                      </div>
                    );
                  })}
                {currentToken === STAKING_CURRENCY.USDT &&
                  PERCENT_PROFIT_USDT.map((item, index) => {
                    return (
                      <div
                        className={`flex-1 p-2 flex items-center justify-center text-[16px] font-semibold rounded-full cursor-pointer  ${
                          item.profit === currentAmountProfit.profit
                            ? "bg-[#6B5695] text-white dark:bg-[#B5A1DC] dark:text-[#2C2A28]"
                            : "bg-[#FAFBFF] text-[#6B5695] dark:bg-[#2C2A28] dark:text-[#B5A1DC] hover:opacity-70"
                        }   `}
                        key={index}
                        onClick={() => {
                          setCurrentAmountProfit(item);
                          stakeUSDTFormik.setFieldValue("amount", item.amount);
                        }}
                      >
                        {item.label}
                      </div>
                    );
                  })}
              </div>
            </div>
            {/* /////// */}
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[16px] font-semibold text-[#6B5695] dark:text-[#FAFAFA]">
              {t("stakingPage.lockOverview")}
            </span>
            <div
              className={`w-full rounded-2xl py-1 px-4  flex items-center justify-between bg-bl text-[#ffff] ${
                isDarkTheme(theme)
                  ? "gradient-staking-dark"
                  : "gradient-staking-light"
              }  `}
            >
              <span>
                {t("stakingPage.amountStaked", { value: currentToken })}
              </span>
              {currentToken === STAKING_CURRENCY.VPC && (
                <div className="flex flex-col justify-end text-end">
                  <span className="text-[20px] font-semibold">
                    {convertNumberToFormattedString(
                      String(Math.floor(stakedAmount * 10000) / 10000)
                    )}
                  </span>
                  <span className="text-[16px] font-normal">
                    ~
                    {calcValueToUSD(
                      Math.floor(stakedAmount * 10000) / 10000,
                      currentToken
                    )}{" "}
                    USDT
                  </span>
                </div>
              )}
              {currentToken === STAKING_CURRENCY.USDT && (
                <div className="flex flex-col my-3 justify-end text-end">
                  <span className="text-[20px] font-semibold">
                    {convertNumberToFormattedString(
                      String(Math.floor(stakedAmount * 10000) / 10000)
                    )}
                    &nbsp;USDT
                  </span>
                </div>
              )}
            </div>
            <div
              className={`w-full rounded-2xl py-1 px-4 flex items-center justify-between bg-bl text-[#ffff] ${
                isDarkTheme(theme)
                  ? "gradient-staking-dark"
                  : "gradient-staking-light"
              }  `}
            >
              <span>{t("stakingPage.interest")}</span>
              {currentToken === STAKING_CURRENCY.VPC && (
                <div className="flex flex-col justify-end text-end">
                  <span className="text-[20px] font-semibold">
                    {convertNumberToFormattedString(
                      String(Math.floor(interestAmount * 10000) / 10000)
                    )}
                  </span>
                  <span className="text-[16px] font-normal">
                    ~
                    {calcValueToUSD(
                      Math.floor(interestAmount * 10000) / 10000,
                      currentToken
                    )}{" "}
                    USDT
                  </span>
                </div>
              )}
              {currentToken === STAKING_CURRENCY.USDT && (
                <div className="flex flex-col  my-3  justify-end text-end">
                  <span className="text-[20px] font-semibold">
                    {convertNumberToFormattedString(
                      String(Math.floor(interestAmount * 10000) / 10000)
                    )}
                    &nbsp;USDT
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#B5A1DC]">
                <span className="text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  {t("stakingPage.totalApr")}
                </span>
                {currentToken === STAKING_CURRENCY.VPC && (
                  <span className="text-[16px] font-semibold text-[#3B3BFC] dark:text-[#DA6C1D] !font-kanit">
                    {t("stakingPage.upTo")}{" "}
                    {calcAPRVPC(
                      currentMonthProfit.profit,
                      currentMonthProfit.months
                    )}
                    %
                  </span>
                )}
                {currentToken === STAKING_CURRENCY.USDT && (
                  <span className="text-[16px] font-semibold text-[#3B3BFC] dark:text-[#DA6C1D] !font-kanit">
                    {t("stakingPage.upTo")} {currentAmountProfit.profit}%
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#B5A1DC]">
                <span className="text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  {currentToken} {t("stakingPage.toBeLocked")}
                </span>
                {currentToken === STAKING_CURRENCY.VPC && (
                  <span className=" text-[16px] font-normal text-[#1D0F3A] dark:text-[#E8DEFD]">
                    {availableAmount} VPC
                  </span>
                )}
                {currentToken === STAKING_CURRENCY.USDT && (
                  <span className=" text-[16px] font-normal text-[#1D0F3A] dark:text-[#E8DEFD]">
                    {stakeUSDTFormik.values.amount} USDT
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#B5A1DC]">
                <span className="text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  {t("stakingPage.factor")}
                </span>
                <span className="text-[16px] font-normal text-[#1D0F3A] dark:text-[#E8DEFD]">
                  {FACTOR}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#B5A1DC]">
                <span className="text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  {t("stakingPage.duration")}
                </span>
                {currentToken === STAKING_CURRENCY.VPC && (
                  <span className="text-[16px] font-normal text-[#1D0F3A] dark:text-[#E8DEFD]">
                    {currentMonthProfit.months} {t("stakingPage.months")}
                  </span>
                )}
                {currentToken === STAKING_CURRENCY.USDT && (
                  <span className="text-[16px] font-normal text-[#1D0F3A] dark:text-[#E8DEFD]">
                    {currentAmountProfit.months} {t("stakingPage.months")}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#B5A1DC]">
                <span className="text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  {t("stakingPage.unlockOn")}
                </span>
                {currentToken === STAKING_CURRENCY.VPC && (
                  <span className="text-[16px] font-normal text-[#1D0F3A] dark:text-[#E8DEFD]">
                    {currentDate
                      .plus({ days: currentMonthProfit.value })
                      .toFormat("MMMM dd, yyyy hh:mm a")}
                  </span>
                )}
                {currentToken === STAKING_CURRENCY.USDT && (
                  <span className="text-[16px] font-normal text-[#1D0F3A] dark:text-[#E8DEFD]">
                    {currentDate
                      .plus({ days: currentAmountProfit.value })
                      .toFormat("MMMM dd, yyyy hh:mm a")}
                  </span>
                )}
              </div>
            </div>
          </div>
          {currentToken === STAKING_CURRENCY.VPC && (
            <button
              onClick={() => {
                handleStaking();
              }}
              disabled={loading}
              className="flex items-center justify-center gap-2 py-2 px-4 text-[16px] font-semibold rounded bg-[#3B3BFC] dark:bg-[#DA6C1D] w-full lg:w-1/2 mx-auto text-white hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {stakeSuccess ? t("stakingPage.done") : t("stakingPage.lock")}
              {loading && (
                <div className="w-5 h-5">
                  <LoadingSpinner />
                </div>
              )}
            </button>
          )}
          {currentToken === STAKING_CURRENCY.USDT && (
            <>
              {isShowFormVerify ? (
                <form
                  onSubmit={transtionFormik.handleSubmit}
                  className="  flex flex-col  gap-4  mb-10"
                >
                  {/* Form fields */}
                  <div className="flex flex-col gap-2">
                    <FormInput
                      name="transaction"
                      id="transaction"
                      label={
                        <div className="flex items-center gap-2">
                          {t("swapPage.transaction")}{" "}
                        </div>
                      }
                      placeholder="0x..."
                      onChange={transtionFormik.handleChange}
                      value={transtionFormik.values.transaction}
                      onBlur={transtionFormik.handleBlur}
                      error={
                        transtionFormik.touched.transaction &&
                        transtionFormik.errors.transaction
                          ? transtionFormik.errors.transaction
                          : null
                      }
                      className="lg:w-[400px]"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      disabled={loading}
                      onClick={() => setIsShowFormVerify(false)}
                      className="flex items-center justify-center gap-2 py-2 px-4 text-[16px] border rounded bg-theme-hover w-full lg:w-1/2 mx-auto  hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {t("stakingPage.backToLock")}
                    </button>
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 py-2 px-4 text-[16px] font-semibold rounded bg-[#3B3BFC] dark:bg-[#DA6C1D] w-full lg:w-1/2 mx-auto text-white hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!!transtionFormik.errors.transaction || loading}
                    >
                      {t("confirm")}
                      {loading && (
                        <div className="w-5 h-5">
                          <LoadingSpinner />
                        </div>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex w-full flex-col md:flex-row gap-2">
                  <button
                    disabled={loading}
                    onClick={() => setIsShowFormVerify(true)}
                    className="md:w-1/2  mx-auto bg-theme-hover whitespace-nowrap w-full border capitalize flex items-center justify-center gap-2 rounded-lg  px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t("swapPage.verifyYourTransactionHash")}
                  </button>
                  {account ? (
                    <button
                      className="flex md:w-1/2 items-center justify-center gap-2 py-2 px-4 text-[16px] font-semibold rounded bg-[#3B3BFC] dark:bg-[#DA6C1D] w-full lg:w-1/2 mx-auto text-white hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={
                        loading ||
                        (!!account && stakeUSDTFormik.values.amount === 0) ||
                        !!stakeUSDTFormik.errors.amount
                      }
                      onClick={() => {
                        stakeUSDTFormik.handleSubmit();
                      }}
                    >
                      {t("stakingPage.lock")}
                      {loading && (
                        <div className="w-5 h-5">
                          <LoadingSpinner />
                        </div>
                      )}
                    </button>
                  ) : (
                    <button
                      className="flex items-center justify-center gap-2 py-2 px-4 text-[16px] font-semibold rounded bg-[#3B3BFC] dark:bg-[#DA6C1D] w-full lg:w-1/2 mx-auto text-white hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => {
                        setOpenModalConnectWallet(true);
                      }}
                    >
                      {t("connectWallet")}
                    </button>
                  )}
                </div>
              )}
            </>
          )}
          <div className="flex items-center justify-center">
            <Link
              href={`/history-staking?currency=${currentToken}`}
              className="text-[16px] w-fit flex items-center gap-2 font-normal text-[#3B3BFC] dark:text-[#FF8911] hover:text-[#3B3BFC] dark:hover:text-[#FF8911] hover:opacity-70"
            >
              {t("stakingPage.viewStakingHistory", { value: currentToken })}
              <ArrowRightIcon width={16} height={12} />
            </Link>
          </div>
        </div>
      </div>
      <TopModal
        isOpen={openModalConnectWallet}
        titleModal={t("connectWallet")}
        toggleOpenModal={toggleOpenModalConnectWallet}
      >
        <div className="flex flex-col gap-2 w-[90vw] md:w-[550px]">
          <div className="">
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className={`inline-flex rounded-lg p-3 text-sm font-semibold shadow-sm items-center bg-gray-200 dark:bg-gray600 justify-between border `}
                onClick={() => {
                  setWalletNetwork(
                    process.env.NEXT_PUBLIC_DEV
                      ? E_NETWORK_ID.BSC_TESTNET
                      : E_NETWORK_ID.BSC_MAINNET
                  );
                }}
              >
                <span className="self-center text-left font-thin">
                  {t("binance")}
                </span>
                <Image
                  src={`${getStaticURL()}/assets/images/logo-binance.svg`}
                  alt="wallet"
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px]"
                />
              </button>
            </div>
          </div>
          <hr className="my-2" />
          <div className="flex flex-col gap-2 mb-4">
            <button
              type="button"
              className={`inline-flex rounded-lg p-3 text-sm font-semibold shadow-sm items-center bg-theme-hover justify-between border `}
              onClick={() => connectWalletHandler(E_CONNECTOR_NAMES.INJECTED)}
            >
              <span className="self-center text-left font-thin">
                {t("metaMask")}
              </span>
              <Image
                src={`${getStaticURL()}/assets/images/metamask-no-bg.svg`}
                alt="wallet"
                width={22}
                height={22}
                className="h-[22px] w-[22px]"
              />
            </button>
            <button
              type="button"
              className={`inline-flex mb-2 rounded-lg p-3 text-sm font-semibold shadow-sm items-center bg-theme-hover justify-between border`}
              onClick={() =>
                connectWalletHandler(E_CONNECTOR_NAMES.WALLET_CONNECT)
              }
            >
              <span className="self-center text-left font-thin ">
                {t("walletConnect")}
              </span>
              <Image
                src={`${getStaticURL()}/assets/images/walletconnect.svg`}
                alt="walletConnect"
                width={22}
                height={22}
                className="h-[22px] w-[22px]"
              />
            </button>
          </div>
        </div>
      </TopModal>
    </ScanLayout>
  );
}
