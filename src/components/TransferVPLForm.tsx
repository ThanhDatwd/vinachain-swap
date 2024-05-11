"use client";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

import { CopyIcon } from "@/assets/CopyIcon";
import FormInput from "@/components/FormInput";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { onToast } from "@/hooks/useToast";
import { swapService } from "@/services/SwapService";
import {
  EXCESS_AMOUNT_ERROR_MSG,
  MINIMUM_TX_CONFIRMATION,
  REFECT_CONFIRMATION_BLOCK,
  THEME,
  getStaticURL,
} from "@/utils/constants";
import { convertString } from "@/utils/convertString";
import {
  convertBalanceDecimalToNumber,
  convertNumberToFormattedString,
} from "@/utils/converter";
import { errorMsg } from "@/utils/errMsg";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import abiToken from "@/web3/abi/token.json";
import Swal from "sweetalert2";
import { useConnectorByName } from "@/pkgs/wallet-connector/connector";
import { useWalletContext } from "@/pkgs/wallet-connector/context";
import { useToken } from "@/web3/hooks/useToken";
import { CONTRACT_ADDRESS, EToken, ITokenOption, TOKENS } from "@/web3/token";
import { E_NETWORK_ID } from "@/pkgs/wallet-connector/types";
import { toast } from "react-toastify";

interface IProps {
  tokenVerify: string;
}

const TokenOptions: ITokenOption[] = [
  {
    name: TOKENS.USDT.name,
    value: EToken.USDT,
    image: `${getStaticURL()}/assets/images/liquidity/${TOKENS.USDT.image}`,
    abi: abiToken,
    address: "",
  },
];
export const TransferVPLForm = ({ tokenVerify }: IProps) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const {
    currentUser,
    fetchAvailableAmount,
    swapPackageBought,
    swapPackageBalanceSwapped,
    fetchSwapPackageBalanceRemaining,
  } = useAuth();
  const { theme } = useTheme();
  const [balance, setBalance] = useState<number>(0);
  const router = useRouter();
  const [token, setToken] = useState<ITokenOption>(TokenOptions[0]);
  const [isShowFormVerify, setIsShowFormVerify] = useState(false);
  const { connectorName } = useWalletContext();
  const [balanceSwapPackageRemaining, setBalanceSwapPackageRemaining] =
    useState<number>(0);

  const {
    hook,
    connector: { provider },
  } = useConnectorByName(connectorName);
  const account = hook.useAccount();
  const networkSeleted = hook.useChainId() as E_NETWORK_ID;

  const { transferToken, getBalance, getDecimals } = useToken();

  useEffect(() => {
    if (currentUser) {
      fetchSwapPackageBalanceRemaining();
    }
  }, [currentUser]);

  useEffect(() => {
    if (account && networkSeleted) {
      fetchTokenBalance();
    }
  }, [account, networkSeleted, balanceSwapPackageRemaining]);

  useEffect(() => {
    if (swapPackageBought) {
      const balance =
        swapPackageBought?.maxSwapAmount - swapPackageBalanceSwapped;
      setBalanceSwapPackageRemaining(balance > 0 ? balance : 0);
    }
  }, [swapPackageBought, swapPackageBalanceSwapped]);

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
      await handleVerify(values.transaction, tokenVerify);
    },
  });

  const validationAmountSchema = Yup.object().shape({
    amount: Yup.number()
      .required(t("validationMessages.amount.required"))
      .min(0, t("validationMessages.amount.min", { value: 0 })),
  });

  const amountFormik = useFormik({
    initialValues: {
      amount: 0,
    },
    validationSchema: validationAmountSchema,
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

  const handleVerify = async (trxHash: string, token: string) => {
    try {
      if (!tokenVerify || !account) return;
      setLoading(true);
      const res = await swapService.verifyTransactionHash({
        txHash: trxHash,
        token,
      });

      if (res.success) {
        if (res.message === EXCESS_AMOUNT_ERROR_MSG) {
          onToast(t("errorMsg.excessAmount"));
        }
        fetchAvailableAmount();
        Swal.fire({
          title: t("congratulations"),
          text: t("swapPage.transactionHasbeenRecorded"),
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: t("continue"),
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/staking");
          }
        });
        await fetchSwapPackageBalanceRemaining();
        await fetchTokenBalance();
        transtionFormik.resetForm();
      } else {
        onToast(t(`errorMsg.${errorMsg(res.code)}`), "error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleTransfer = async (amountTransfer: number) => {
    if (!account) {
      document.getElementById("wallet-connect")?.click();
    }
    try {
      setLoading(true);

      if (amountTransfer === 0) {
        onToast(t("swapPage.yourPackageRemainingIsOver"), "error");
        setLoading(false);
        return;
      }

      if (balance === 0) {
        onToast(t("swapPage.availableBalanceIsOver"), "error");
        setLoading(false);
        return;
      }

      await transfer(amountTransfer);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
    }
  };

  const fetchTokenBalance = async () => {
    if (!account || !networkSeleted) return;

    setToken({
      ...token,
      address: CONTRACT_ADDRESS[EToken.VPL][networkSeleted],
    });
    let balanceConvert = 0;

    const decimal = await getDecimals(
      CONTRACT_ADDRESS[EToken.VPL][networkSeleted],
      token.abi
    );
    const balance = await getBalance(
      CONTRACT_ADDRESS[EToken.VPL][networkSeleted],
      token.abi
    );

    balanceConvert = Number(convertBalanceDecimalToNumber(balance, decimal));

    const availableAmountTransfer =
      balanceConvert > balanceSwapPackageRemaining
        ? balanceSwapPackageRemaining
        : balanceConvert;

    amountFormik.setFieldValue(
      "amount",
      Math.floor(availableAmountTransfer * 10000) / 10000
    );
    amountFormik.setFieldTouched("amount", true);

    setBalance(balanceConvert);
  };

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
        EToken.VPL,
        String(amountTransfer),
        addressTransfer,
        {
          blocksToWait: MINIMUM_TX_CONFIRMATION,
          interval: REFECT_CONFIRMATION_BLOCK,
        }
      );

      if (check) {
        await handleVerify(check.transactionHash, tokenVerify);
      }
      toast.dismiss(toastId);
    } catch (error) {
      console.log(error);

      await onToast(t(`errorMsg.${errorMsg()}`), "error");
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="">
      <div className="w-[768px] max-w-full mx-auto flex flex-col px-3 md:px-0 lg:px-0">
        <div className="mt-4">
          <div className="text-base flex items-center gap-2 whitespace-nowrap flex-wrap">
            <p className="font-bold">{t("swapPage.addressVPC")}:&nbsp;</p>
            <span className="flex items-center">
              <p className="block md:hidden">
                {convertString(
                  process.env.NEXT_PUBLIC_VINACHAIN_RECIPIENT_ADDRESS ?? ""
                )}
              </p>
              <p className="hidden md:block">
                {process.env.NEXT_PUBLIC_VINACHAIN_RECIPIENT_ADDRESS}
              </p>
              <button
                className="ml-2"
                onClick={() => {
                  navigator.clipboard.writeText(
                    process.env.NEXT_PUBLIC_VINACHAIN_RECIPIENT_ADDRESS || ""
                  );
                  onToast(t("copied"), "success");
                }}
              >
                <CopyIcon color={theme === THEME.DARK ? "#888" : "#adb5bd"} />
              </button>
            </span>
          </div>
          <div className="flex whitespace-nowrap flex-wrap gap-2">
            <p className="font-bold">{t("swapPage.vpcRemaining")}:&nbsp;</p>
            <p>
              {swapPackageBought
                ? convertNumberToFormattedString(
                    String(
                      Math.floor(balanceSwapPackageRemaining * 10000) / 10000
                    )
                  )
                : 0}
              &nbsp;VPL
            </p>
          </div>
          {account && (
            <div className="flex whitespace-nowrap flex-wrap gap-2">
              <p className="font-bold">
                {t("swapPage.availableBalance")}:&nbsp;
              </p>
              <p>
                {swapPackageBought
                  ? convertNumberToFormattedString(
                      String(Math.floor(balance * 10000) / 10000)
                    )
                  : 0}
                &nbsp;VPL
              </p>
            </div>
          )}
        </div>

        {isShowFormVerify ? (
          <form
            onSubmit={transtionFormik.handleSubmit}
            className="flex flex-col  gap-4  mb-10"
          >
            {/* Form fields */}
            <div className="flex flex-col gap-2">
              <FormInput
                name="transaction"
                id="transaction"
                label={
                  <p className="font-bold">
                    {t("swapPage.transaction")}:&nbsp;
                  </p>
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
            <p className="italic text-sm text-center ">
              *{t("swapPage.transactionCannotReverse")}
            </p>
            <div className="flex gap-2">
              <button
                disabled={loading}
                onClick={() => setIsShowFormVerify(false)}
                className="w-1/2 mx-auto bg-theme-hover border capitalize flex items-center justify-center gap-2 rounded-lg  px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t("swapPage.backToSwap")}
              </button>
              <button
                type="submit"
                className="w-1/2 mx-auto bg-[#3B3BFC] capitalize flex items-center justify-center gap-2 rounded-lg text-[#fff] px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
          <div className="flex flex-col  gap-4  mb-10">
            <form className=" ">
              {/* Form fields */}
              <div className="flex flex-col gap-2">
                <FormInput
                  name="amount"
                  type="number"
                  id="amount"
                  label={
                    <p className="font-bold">
                      {t("swapPage.amountVPLToSwap")}:&nbsp;
                    </p>
                  }
                  placeholder="0.0"
                  min={0}
                  step={0.1}
                  onChange={amountFormik.handleChange}
                  value={amountFormik.values.amount}
                  onBlur={amountFormik.handleBlur}
                  error={
                    amountFormik.touched.amount && amountFormik.errors.amount
                      ? amountFormik.errors.amount
                      : null
                  }
                  className="lg:w-[400px]"
                  endIcon={
                    <div
                      className="absolute right-1 top-1/2 -translate-y-1/2 aspect-square  px-1 "
                      onClick={() => {
                        amountFormik.setFieldValue(
                          "amount",
                          Math.floor(Number(balance) * 10000) / 10000
                        );
                      }}
                    >
                      <div className="flex items-center text-[#3B3BFC] dark:text-[#DA6C1D] justify-center w-full h-full bg-transparent cursor-pointer hover:underline whitespace-nowrap ">
                        {t("swapPage.max")}
                      </div>
                    </div>
                  }
                />
              </div>
            </form>
            <p className="italic text-sm text-center ">
              *{t("swapPage.transactionCannotReverse")}
            </p>
            <div className="flex gap-2">
              <button
                disabled={loading}
                onClick={() => setIsShowFormVerify(true)}
                className="w-1/2 mx-auto bg-theme-hover border capitalize flex items-center justify-center gap-2 rounded-lg  px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t("swapPage.verifyYourTransactionHash")}
              </button>
              <button
                type="submit"
                onClick={() => amountFormik.handleSubmit()}
                className="w-1/2 mx-auto bg-[#3B3BFC] capitalize flex items-center justify-center gap-2 rounded-lg text-[#fff] px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!!transtionFormik.errors.transaction || loading}
              >
                {t("swapPage.swapNow")}
                {loading && (
                  <div className="w-5 h-5">
                    <LoadingSpinner />
                  </div>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
