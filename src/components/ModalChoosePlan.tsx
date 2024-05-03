"use client";

import { CheckIcon } from "@/assets/icons/CheckIcon";
import { CheckSmallIcon } from "@/assets/icons/CheckSmallIcon";
import { onToast } from "@/hooks/useToast";
import {
  connectWallet,
  disconnectWallet,
  useConnectorByName,
} from "@/pkgs/wallet-connector/connector";
import { useWalletContext } from "@/pkgs/wallet-connector/context";
import { E_CONNECTOR_NAMES, E_NETWORK_ID } from "@/pkgs/wallet-connector/types";
import { swapService } from "@/services/SwapService";
import {
  MINIMUM_TX_CONFIRMATION,
  REFECT_CONFIRMATION_BLOCK,
  getStaticURL,
} from "@/utils/constants";
import { errorMsg } from "@/utils/errMsg";
import { signMsg } from "@/utils/generateMsg";
import { SwapPackage } from "@/utils/type";
import { useToken } from "@/web3/hooks/useToken";
import { EToken } from "@/web3/token";
import { useFormik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Web3 from "web3";
import * as Yup from "yup";
import FormInput from "./FormInput";
import { LoadingSpinner } from "./LoadingSpinner";
import { TopModal } from "./controls/TopModal";
import { toast } from "react-toastify";
import { convertNumberToFormattedString } from "@/utils/converter";

enum STATE {
  CONNECT_WALLET = "CONNECT_WALLET",
  CHOOSE_PLAN = "CHOOSE_PLAN",
}
interface IProps {
  onVerifySuccess: () => void;
}

declare const window: any;

export const ModalChoosePlan = ({ onVerifySuccess }: IProps) => {
  const { t } = useTranslation();
  const [openVerifyTransaction, setOpenVerifyTransaction] = useState(false);
  const [modalState, setModalState] = useState<STATE>(STATE.CONNECT_WALLET);
  const [currentPlan, setCurrentPlan] = useState<SwapPackage>();
  const [isUserBuyPlan, setIsUserBuyPlan] = useState(false);
  const [currentToken, setCurrentToken] = useState<EToken>(EToken.USDT);
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
  const { transferUsdt } = useToken();

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
    }
  };

  const connectWalletHandler = async (connectorName: E_CONNECTOR_NAMES) => {
    try {
      await connectWallet(connectorName, walletNetwork);
      setConnectorName(connectorName);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (account) {
      checkPurchasePlanStatus();
    }
  }, [account]);

  const checkPurchasePlanStatus = async () => {
    const check = await getPurchasePlanStatus(account ?? "");
    if (check) {
      setOpenModalConnectWallet(false);
      onVerifySuccess();
    } else {
      setModalState(STATE.CHOOSE_PLAN);
    }
  };

  const handleBuyPlan = async (price: number) => {
    try {
      if (!networkSeleted || !account) {
        throw new Error("account or networkSeleted is null");
      }
      setLoading(true);

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

      const check = await transferUsdt(currentToken, String(price), {
        blocksToWait: MINIMUM_TX_CONFIRMATION,
        interval: REFECT_CONFIRMATION_BLOCK,
      });

      if (check) {
        const signature = await signMessage(
          signMsg.confirmBuyPlan(currentPlan?.price ?? 0, account),
          account as string
        );

        const res = await swapService.buySwapPackage({
          swapPackageId: currentPlan?._id ?? "",
          signature,
          txHash: check.transactionHash,
          walletAddress: account,
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

        const signature = await signMessage(
          signMsg.confirmBuyPlan(currentPlan?.price ?? 0, account),
          account as string
        );

        const res = await swapService.buySwapPackage({
          swapPackageId: currentPlan?._id ?? "",
          signature,
          txHash: values.transaction,
          walletAddress: account,
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
              {swapPackage?.length &&
                swapPackage?.map((item) => (
                  <div
                    key={item._id}
                    className={`box-shadow border cursor-pointer rounded-2xl flex flex-col  ${
                      currentPlan?._id === item._id ? " !border-[#2B2B87]" : ""
                    }`}
                    onClick={() => setCurrentPlan(item)}
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
                      handleBuyPlan(currentPlan.price);
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
