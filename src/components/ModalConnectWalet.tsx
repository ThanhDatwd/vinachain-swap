"use client";

import { CheckIcon } from "@/assets/icons/CheckIcon";
import { CheckSmallIcon } from "@/assets/icons/CheckSmallIcon";
import { useAuth } from "@/hooks/useAuth";
import { onToast } from "@/hooks/useToast";
import {
  connectWallet,
  disconnectWallet,
  useConnectorByName,
} from "@/pkgs/wallet-connector/connector";
import { useWalletContext } from "@/pkgs/wallet-connector/context";
import { E_CONNECTOR_NAMES, E_NETWORK_ID } from "@/pkgs/wallet-connector/types";
import { swapService } from "@/services/SwapService";
import { userService } from "@/services/UserService";
import {
  CODE_CONTRACT_BUY_SWAP,
  PLAN_SWAP,
  getStaticURL,
} from "@/utils/constants";
import {
  convertBalanceDecimalToNumber,
  convertNumberToFormattedString,
  isGreaterOrEqual,
} from "@/utils/converter";
import { errorMsg } from "@/utils/errMsg";
import { signMsg } from "@/utils/generateMsg";
import { SwapPackage } from "@/utils/type";
import abiUsdtToken from "@/web3/abi/usdt.json";
import { useToken } from "@/web3/hooks/useToken";
import { CONTRACT_ADDRESS, EToken, ITokenOption, TOKENS } from "@/web3/token";
import { useFormik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Web3 from "web3";
import * as Yup from "yup";
import FormInput from "./FormInput";
import { LoadingSpinner } from "./LoadingSpinner";
import { TopModal } from "./controls/TopModal";

enum STATE {
  CONNECT_WALLET = "CONNECT_WALLET",
  CHOOSE_PLAN = "CHOOSE_PLAN",
}
interface IProps {
  onVerifySuccess: () => void;
}

const TokenOptions: ITokenOption[] = [
  {
    name: TOKENS.USDT.name,
    value: EToken.USDT,
    image: `${getStaticURL()}/assets/images/liquidity/${TOKENS.USDT.image}`,
    abi: abiUsdtToken,
    address: "",
  },
];

declare const window: any;

export const ModalConnectWalet = ({ onVerifySuccess }: IProps) => {
  const { t } = useTranslation();
  const { currentUser, fetchCurrentUser } = useAuth();
  const [openVerifyTransaction, setOpenVerifyTransaction] = useState(false);
  const [modalState, setModalState] = useState<STATE>(STATE.CONNECT_WALLET);
  const [currentPlan, setCurrentPlan] = useState<SwapPackage>();
  const [token, setToken] = useState<ITokenOption>(TokenOptions[0]);
  const [connectSuccess, setConnectSuccess] = useState(false);
  const [isUserBuyPlan, setIsUserBuyPlan] = useState(false);
  const [swapPackage, setSwapPackage] = useState<SwapPackage[]>([
    {
      _id: "basic",
      packageName: "basic",
      price: 0,
      currency: "USDT",
      maxSwapAmount: 0,
      swapUnit: "VPL",
    },
    {
      _id: "premium",
      packageName: "premium",
      price: 0,
      currency: "USDT",
      maxSwapAmount: 0,
      swapUnit: "VPL",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const {
    setConnectorName,
    connectorName,
    walletNetwork,
    setWalletNetwork,
    openModalConnectWallet,
    setOpenModalConnectWallet,
  } = useWalletContext();
  const { getDecimals, checkAllowance, approve, buySwapPackage } = useToken();

  const {
    hook,
    connector: { provider },
  } = useConnectorByName(connectorName);

  const account = hook.useAccount();
  const networkSeleted = hook.useChainId() as E_NETWORK_ID;

  const toggleOpenModalConnectWallet = async () => {
    setOpenModalConnectWallet(!openModalConnectWallet);
    setConnectorName(E_CONNECTOR_NAMES.UNKNOWN);
    setModalState(STATE.CONNECT_WALLET);
    if (account) {
      await disconnectWallet(connectorName);
      setConnectSuccess(false);
    }
  };

  useEffect(() => {
    if (account && connectSuccess) {
      handleCheckWalletAddress();
    }
  }, [account, connectSuccess]);

  const connectWalletHandler = async (connectorName: E_CONNECTOR_NAMES) => {
    try {
      await connectWallet(connectorName, walletNetwork);
      setConnectorName(connectorName);
      setConnectSuccess(true);
    } catch (e) {
      console.log(e);
    }
  };

  const checkAllowanceOfToken = async (ammout: string): Promise<boolean> => {
    const fnPromiseCheckAllowance = () =>
      new Promise<string>(async (resolve, reject) => {
        if (!networkSeleted || !ammout)
          return reject("ammout or networkSeleted is null");
        try {
          const allowance = await checkAllowance(token.address, token.abi);
          const decimal = await getDecimals(token.address, token.abi);
          const allowanceConvert = convertBalanceDecimalToNumber(
            allowance,
            decimal
          );
          resolve(allowanceConvert);
        } catch (error) {
          reject(error);
        }
      });
    try {
      const allowance = await toast.promise(fnPromiseCheckAllowance, {
        pending: t("checkingAllowance") + "...",
        success: t("checkedAllowance") || "",
        error: t("errorWhenCheckingAllowance"),
      });
      const checkAllowanceGreaterThanAmount = isGreaterOrEqual(
        allowance,
        ammout
      );
      return checkAllowanceGreaterThanAmount;
    } catch {
      return false;
    }
  };

  const checkAllowanceAndApprove = async (): Promise<boolean> => {
    if (!currentPlan?.currency) throw new Error("amount is null");
    const fnPromiseCheckAllowance = () =>
      new Promise<boolean>(async (resolve, reject) => {
        try {
          let check = false;
          do {
            check = await checkAllowanceOfToken(currentPlan.price.toString());
            if (!check) {
              await approve(token.address, token.abi);
              check = await checkAllowanceOfToken(currentPlan.price.toString());
            }
          } while (!check);
          resolve(true);
        } catch (error) {
          reject(error);
        }
      });
    try {
      await toast.promise(fnPromiseCheckAllowance, {
        pending: t("checkingAndApprovingToken") + "...",
        success: t("checkedAndApprovedToken") || "",
        error: t("errorWhenCheckingAndApprovingToken"),
      });
      return true;
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    if (account && networkSeleted) {
      setToken({
        ...token,
        address: CONTRACT_ADDRESS[EToken.USDT][networkSeleted],
      });
    }
  }, [account, networkSeleted]);

  const handleCheckWalletAddress = async () => {
    if (!account || !networkSeleted) return;

    if (!currentUser.walletAddress) {
      try {
        const signature = await signMessage(
          signMsg.confirmWalletAddress(account as string),
          account as string
        );
        const res = await userService.linkWalletAddress({
          walletAddress: account,
          signature,
        });
        if (res.success) {
          onToast(t("swapPage.confirmWalletAddressSuccess"), "success");
          fetchCurrentUser();
          toggleOpenModalConnectWallet();
        } else {
          onToast(t(`errorMsg.${errorMsg(res.code)}`) || res.message, "error");
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      }
    } else if (
      String(currentUser.walletAddress).toLowerCase() !==
      String(account).toLowerCase()
    ) {
      onToast(t("swapPage.walletAddressNotMatch"), "error");
    } else if (
      String(currentUser.walletAddress).toLowerCase() ===
      String(account).toLowerCase()
    ) {
    }
  };

  const checkPurchasePlanStatus = async () => {
    const check = await getPurchasePlanStatus(account ?? "");
    if (check) {
      setOpenModalConnectWallet(false);
      onVerifySuccess();
    } else {
      setModalState(STATE.CHOOSE_PLAN);
    }
  };

  const handleBuyPlan = async (currentPlan: SwapPackage) => {
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
    try {
      if (!networkSeleted || !account) {
        throw new Error("account or networkSeleted is null");
      }
      setLoading(true);

      const checkApprove = await checkAllowanceAndApprove();
      if (!checkApprove) {
        toast.dismiss(toastId);
        return;
      }

      const check = await buySwapPackage(
        currentPlan.price === PLAN_SWAP.BASIC
          ? CODE_CONTRACT_BUY_SWAP.BASIC
          : CODE_CONTRACT_BUY_SWAP.PREMIUM
      );

      if (check) {
        const res = await swapService.buySwapPackage({
          swapPackageId: currentPlan._id,
          txHash: check.transactionHash,
        });
        if (res.success) {
          onToast(t(`swapPage.buySuccessful`), "success");
          setOpenModalConnectWallet(false);
          onVerifySuccess();
        } else {
          onToast(t(`errorMsg.${errorMsg(res.code)}`), "error");
        }
      }
      toast.dismiss(toastId);
    } catch (error) {
      toast.dismiss(toastId);
      console.log(error);
      await onToast(t(`errorMsg.${errorMsg()}`), "error");
    } finally {
      setLoading(false);
    }
  };

  const getCurrentPlan = async () => {
    try {
      const res = await swapService.getSwapPackage();
      if (res.success) {
        setSwapPackage(res.data);
        setCurrentPlan(res.data[0]);
      } else {
        onToast(t(`errorMsg.${errorMsg(res.code)}`), "error");
      }
    } catch (error) {}
  };

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
      try {
        if (!networkSeleted || !account) {
          throw new Error("account or networkSeleted is null");
        }
        setLoading(true);

        const res = await swapService.buySwapPackage({
          swapPackageId: currentPlan?._id ?? "",
          txHash: values.transaction,
        });

        if (res.success) {
          onToast(t(`swapPage.buySuccessful`), "success");
          setOpenModalConnectWallet(false);
          onVerifySuccess();
        } else {
          onToast(t(`errorMsg.${errorMsg(res.code)}`), "error");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
  });

  const signMessage = async (
    message: string,
    fromAddress: string
  ): Promise<string> => {
    const web3 = new Web3(provider as any);

    if (typeof window.web3Connector !== "undefined") {
      web3.setProvider(window.web3Connector);
    }

    return web3.eth.personal.sign(message, fromAddress, "");
  };

  const getPurchasePlanStatus = async (account: string) => {
    try {
      const res = await swapService.getBuySwapPackageStatus(account);

      if (res.success) {
        setIsUserBuyPlan(res.data.isPurchased);
        return res.data.isPurchased;
      } else {
        onToast(t(`errorMsg.${errorMsg(res.code)}`), "error");
      }
    } catch (error) {}
  };

  useEffect(() => {
    getCurrentPlan();
  }, []);

  return (
    <>
      <div
        id="wallet-connect-header"
        onClick={() => {
          setOpenModalConnectWallet(true);
        }}
      />
      <TopModal
        isOpen={openModalConnectWallet}
        titleModal={t(
          modalState === STATE.CHOOSE_PLAN
            ? "swapPage.pleaseChooseYourPlan"
            : "connectWallet"
        )}
        toggleOpenModal={toggleOpenModalConnectWallet}
      >
        {modalState === STATE.CONNECT_WALLET && (
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
        )}
        {modalState === STATE.CHOOSE_PLAN && (
          <div>
            <div className="grid grid-cols-2 gap-2 w-[90vw] md:w-[550px]">
              {!!swapPackage?.length &&
                swapPackage?.map((item) => (
                  <div
                    key={item._id}
                    className={`box-shadow border cursor-pointer rounded-2xl flex flex-col  ${
                      currentPlan?._id === item._id ? " !border-[#2B2B87]" : ""
                    }`}
                    onClick={() => {
                      if (!loading) {
                        setCurrentPlan(item);
                      }
                    }}
                  >
                    <div className="pt-3 px-3">
                      <div
                        className={`text-center px-10 py-5 rounded-xl  text-white text-[24px]  ${
                          currentPlan?._id === item._id
                            ? "bg-[#2B2B87] dark:bg-scanDark font-bold"
                            : "bg-button-theme "
                        }`}
                      >
                        {t(`swapPage.${item.packageName.toLowerCase()}`)}
                      </div>
                      <div className="flex justify-between items-center mt-5">
                        <p className="text-muted text-sm">
                          {t("swapPage.planPrice")}
                        </p>
                        <p className="text-[#2B64C1] dark:text-scanDark font-semibold">
                          {item.price} {item.currency}
                        </p>
                      </div>
                    </div>
                    <hr
                      className={` ${
                        currentPlan?._id === item._id
                          ? "!border-t-[#2B2B87] dark:!text-scanDark"
                          : ""
                      }`}
                    />
                    <div className="py-5 px-3">
                      <div className="flex gap-2 items-center text-[#2B2B87] dark:text-scanDark">
                        <CheckSmallIcon className="!w-6 !h-6 " />
                        <p className="text-sm ">
                          {t("swapPage.descriptionPlan", {
                            value: convertNumberToFormattedString(
                              String(item.maxSwapAmount)
                            ),
                          })}
                        </p>
                      </div>
                    </div>
                    {currentPlan?._id === item._id && (
                      <div className="text-[#2B64C1] dark:text-scanDark flex w-full justify-center my-4">
                        <CheckIcon currentColor={true} width={24} height={24} />
                      </div>
                    )}
                  </div>
                ))}
            </div>

            {openVerifyTransaction && (
              <form
                onSubmit={transtionFormik.handleSubmit}
                className=" py-5 md:py-6 flex flex-col  gap-4"
              >
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
              </form>
            )}
            {!openVerifyTransaction && (
              <button
                onClick={() => {
                  if (openVerifyTransaction) {
                    setOpenVerifyTransaction(false);
                  } else {
                    setOpenVerifyTransaction(true);
                  }
                }}
                disabled={!!transtionFormik.errors.transaction || loading}
                className="w-full mt-6 bg-theme-hover mx-auto border capitalize flex items-center justify-center gap-2 rounded-lg  px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t("swapPage.verifyYourTransactionHash")}
              </button>
            )}
            <div className="my-2 flex gap-2">
              {openVerifyTransaction && (
                <button
                  onClick={() => {
                    if (openVerifyTransaction) {
                      setOpenVerifyTransaction(false);
                    } else {
                      setOpenVerifyTransaction(true);
                    }
                  }}
                  className="w-full bg-theme-hover mx-auto border capitalize flex items-center justify-center gap-2 rounded-lg  px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t("cancel")}
                </button>
              )}
              <button
                onClick={() => {
                  if (openVerifyTransaction) {
                    transtionFormik.handleSubmit();
                  } else {
                    if (currentPlan) {
                      handleBuyPlan(currentPlan);
                    }
                  }
                }}
                disabled={loading}
                className="w-full mx-auto bg-[#3841b4] dark:bg-scanDark dark:hover:bg-[#885836] hover:bg-[#2B2B87] capitalize flex items-center justify-center gap-2 rounded-lg text-[#fff] px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t(
                  openVerifyTransaction ? "swapPage.verify" : "swapPage.buyNow"
                )}
                {loading && (
                  <div className="w-5 h-5">
                    <LoadingSpinner />
                  </div>
                )}
              </button>
            </div>
          </div>
        )}
      </TopModal>
    </>
  );
};
