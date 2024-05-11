"use client";
import { useFormik } from "formik";
import { ChangeEvent, useEffect, useState } from "react";
import * as Yup from "yup";

import { EyeHide } from "@/assets/icons/EyeHide";
import { EyeShow } from "@/assets/icons/EyeShow";
import FormInput from "@/components/FormInput";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ModalChoosePlan } from "@/components/ModalChoosePlan";
import { TransferVPLForm } from "@/components/TransferVPLForm";
import { TopModal } from "@/components/controls/TopModal";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useAuth } from "@/hooks/useAuth";
import { onToast } from "@/hooks/useToast";
import { useConnectorByName } from "@/pkgs/wallet-connector/connector";
import { useWalletContext } from "@/pkgs/wallet-connector/context";
import { useAliUpload } from "@/services/CloundService";
import { swapService } from "@/services/SwapService";
import {
  FIELD_NAME_BUCKET_USER_IMAGE,
  MAX_SIZE_IMAGE,
} from "@/utils/constants";
import { errorMsg } from "@/utils/errMsg";
import { useTranslation } from "react-i18next";

const enum TYPE_IMAGE_UPLOAD {
  LIKE_FANPAGE = "like_fanpage",
  FOLLOW_TELEGRAM = "follow_telegram",
}
const enum TAB {
  VERIFY = "verify",
  TRANSACTION = "transaction",
}

declare const window: any;

export default function SwapPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const { currentUser, fetchSwapPackageBalanceRemaining } = useAuth();
  const [imagesUpload, setImagesUpload] = useState<any>();
  const [previewLikeFanpage, setPreviewLikeFanpage] = useState<any>([]);
  const [previewFollowTelegram, setPreviewFollowTelegram] = useState<any>([]);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tokenVerify, setTokenVerify] = useState<string>();
  const [currentTab, setCurrentTab] = useState(TAB.VERIFY);

  const { onAliUpload } = useAliUpload();
  const { setOpenModalConnectWallet, connectorName } = useWalletContext();
  const {
    hook,
    connector: { provider },
  } = useConnectorByName(connectorName);
  const account = hook.useAccount();

  const validationVerifySchema = Yup.object().shape({
    accountAddress: Yup.string()
      .required(t("validationMessages.accountAddress.required"))
      .matches(/^0x/, t("validationMessages.accountAddress.startsWith0x")),
  });

  const validationConfirmPasswordSchema = Yup.object().shape({
    password: Yup.string().required(t("validationMessages.password.required")),
  });


  const verifyFormik = useFormik({
    initialValues: {
      accountAddress: "",
    },
    validationSchema: validationVerifySchema,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: async (values) => {
      try {
        setOpenModalConfirm(true);
      } catch (error) {}
    },
  });
  const confirmPasswordFormik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: validationConfirmPasswordSchema,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await handleVerify({
          accountAddress: verifyFormik.values.accountAddress,
          password: values.password,
        });
        setLoading(false);
      } catch (error) {}
    },
  });

  useEffect(() => {
    if (account && currentUser?.walletAddress) {
      if (
        String(currentUser?.walletAddress).toLowerCase() ===
        account.toLowerCase()
      ) {
        verifyFormik.setFieldValue("accountAddress", account);
      }
    }
  }, [account, currentUser ]);

  const handleUploadImage = async (imagesUpload: any): Promise<string[]> => {
    let images = [];
    if (
      !imagesUpload[TYPE_IMAGE_UPLOAD.FOLLOW_TELEGRAM] ||
      !imagesUpload[TYPE_IMAGE_UPLOAD.LIKE_FANPAGE]
    ) {
      throw new Error("");
    }

    const arrayImage = [
      {
        imageName: currentUser?.username + `-follow-telegram`,
        image: imagesUpload[TYPE_IMAGE_UPLOAD.FOLLOW_TELEGRAM],
      },
      {
        imageName: currentUser?.username + `-like-fanpage`,
        image: imagesUpload[TYPE_IMAGE_UPLOAD.LIKE_FANPAGE],
      },
    ];
    const uploadedImageFolowTelegram = await onAliUpload(
      arrayImage,
      FIELD_NAME_BUCKET_USER_IMAGE
    );

    if (uploadedImageFolowTelegram) {
      images = [
        uploadedImageFolowTelegram[0].url,
        uploadedImageFolowTelegram[1].url,
      ];
      return images;
    } else {
      throw new Error("");
    }
  };

  const handleVerify = async ({
    accountAddress,
    password,
  }: {
    accountAddress: string;
    password: string;
  }) => {
    try {
      const res = await swapService.verifyInfo({
        password,
        walletAddress: accountAddress,
      });

      if (res.success && res.data.token) {
        onToast(t("swapPage.youHaveBeenVerified"), "success");
        setCurrentTab(TAB.TRANSACTION);
        setIsVerified(true);
        setTokenVerify(res.data.token);
        setOpenModalConfirm(false);
        await fetchSwapPackageBalanceRemaining();
      } else {
        onToast(t(`errorMsg.${errorMsg(res.code)}`), "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImgUpload = async (
    event: ChangeEvent<HTMLInputElement>,
    type: TYPE_IMAGE_UPLOAD
  ) => {
    const maxQuantity = 1;
    const allowedExtensions: string[] = ["png", "jpg", "jpeg", "webp"];
    const files: File[] = Array.from(event.target.files || []);

    if (files.length > maxQuantity) return;

    const filesAccepted = await Promise.all(
      files.map((file: File) => {
        const fileExtension: string =
          file.name.split(".").pop()?.toLowerCase() || "";
        if (!allowedExtensions.includes(fileExtension)) {
          onToast(`${t("invalidFileFormat")}`, "error");
          return;
        }

        if (file.size <= MAX_SIZE_IMAGE) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (event) => {
            switch (type) {
              case TYPE_IMAGE_UPLOAD.LIKE_FANPAGE:
                setPreviewLikeFanpage([event?.target?.result]);
                break;
              case TYPE_IMAGE_UPLOAD.FOLLOW_TELEGRAM:
                setPreviewFollowTelegram([event?.target?.result]);
                break;
            }
          };
          return file;
        } else {
          onToast(`${t("minimumCapacityError")}`, "error");
          return;
        }
      })
    );
    setImagesUpload((prev: any) => {
      return {
        ...prev,
        [type]: filesAccepted,
      };
    });

    event.target.value = "";
  };

  const handleRemoveImage = (type: TYPE_IMAGE_UPLOAD) => {
    switch (type) {
      case TYPE_IMAGE_UPLOAD.LIKE_FANPAGE:
        setPreviewLikeFanpage([]);
        break;
      case TYPE_IMAGE_UPLOAD.FOLLOW_TELEGRAM:
        setPreviewFollowTelegram([]);
        break;
    }
    setImagesUpload((prev: any) => {
      if (prev[type]) {
        delete prev[type];
      }
      return prev;
    });
  };

  const onVerifySuccess = (account: string) => {
    verifyFormik.setFieldValue("accountAddress", account);
  };

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark font-sans-serif relative">
      <div className="flex flex-col items-center gap-2 pt-10 md:pt-20">
        <h1 className="text-[22.5px] font-meidum text-dark900 dark:text-gray200 uppercase font-bold">
          {t("swapPage.title")}
        </h1>
      </div>
      <div className="flex justify-center w-full bg-bgColor dark:bg-gray700 px-3 py-12 lg:px-10  lg:pb-32 ">
        <div className="flex flex-col gap-5 w-full lg:w-fit boxShadow p-6 rounded-xl bg-white dark:bg-[#111111]">
          <div className="w-full">
            <div className="grid grid-cols-2 border-b  w-full">
              <button
                className={`px-4 py-2 bg-transparent rounded-t-lg focus:outline-none ${
                  currentTab === TAB.VERIFY
                    ? "border-b-2 border-sky-500 dark:border-scanDark link-color"
                    : ""
                }`}
                onClick={() => setCurrentTab(TAB.VERIFY)}
              >
                {t("swapPage.verify")}
              </button>
              <button
                className={`px-4 py-2 bg-transparent rounded-t-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none ${
                  currentTab === TAB.TRANSACTION
                    ? "border-b-2 border-sky-500 dark:border-scanDark link-color"
                    : ""
                }`}
                disabled={!isVerified}
                onClick={() => setCurrentTab(TAB.TRANSACTION)}
              >
                {t("swapPage.transaction")}
              </button>
            </div>
            <div className="md:p-4">
              <div
                className={`transition-all duration-500 ${
                  currentTab === TAB.VERIFY ? "block" : "hidden"
                }`}
              >
                {currentTab === TAB.VERIFY && (
                  <div className="">
                    <div className="w-[768px] max-w-full mx-auto flex flex-col gap-4 md:gap-6 px-3 md:px-0 lg:px-0">
                      <form
                        onSubmit={verifyFormik.handleSubmit}
                        className=" py-5 md:py-6 flex flex-col  gap-4  mb-10"
                      >
                        {/* Form fields */}
                        <div className="flex flex-col gap-2">
                          <FormInput
                            name="accountAddress"
                            id="accountAddress"
                            label={
                              <div className="flex items-center gap-2 w-full justify-between">
                                {t("swapPage.accountAddress")}{" "}
                                {!account && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setOpenModalConnectWallet(true)
                                    }
                                    className="text-[10px] bg-theme-hover border p-1 flex gap-1 items-center rounded-md"
                                  >
                                    <div className="w-3 h-3 bg-red-600 rounded-full" />
                                    {t("connectToWeb3")}
                                  </button>
                                )}
                              </div>
                            }
                            placeholder={t(
                              "swapPage.connectWalletToShowAddress"
                            )}
                            value={verifyFormik.values.accountAddress}
                            onBlur={verifyFormik.handleBlur}
                            onChange={verifyFormik.handleChange}
                            error={
                              verifyFormik.touched.accountAddress &&
                              verifyFormik.errors.accountAddress
                                ? verifyFormik.errors.accountAddress
                                : null
                            }
                            className="lg:w-[400px]"
                          />
                        </div>
                        {!isVerified && (
                          <button
                            type="submit"
                            className="w-1/2 mt-10 mx-auto bg-[#3B3BFC] dark:bg-[#FF8911] capitalize flex items-center justify-center gap-2 rounded-lg text-[#fff] px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!!verifyFormik.errors.accountAddress}
                          >
                            {t("swapPage.verify")}
                          </button>
                        )}
                      </form>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`transition-all duration-500 ${
                  currentTab === TAB.TRANSACTION ? "block" : "hidden"
                }`}
              >
                {currentTab == TAB.TRANSACTION && (
                  // && tokenVerify
                  <TransferVPLForm tokenVerify={tokenVerify ?? ""} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalChoosePlan
        onVerifySuccess={() => {
          if (account) {
            onVerifySuccess(account);
          }
        }}
      />
      <TopModal
        isOpen={openModalConfirm}
        titleModal={t("Confirm password")}
        toggleOpenModal={() => {
          confirmPasswordFormik.resetForm();
          setOpenModalConfirm(!openModalConfirm);
        }}
      >
        <form
          onSubmit={confirmPasswordFormik.handleSubmit}
          className=" w-[90vw] md:w-[550px] py-2"
        >
          <FormInput
            name="password"
            id="password"
            label={t("swapPage.password")}
            onChange={confirmPasswordFormik.handleChange}
            autoComplete="new-password"
            onBlur={confirmPasswordFormik.handleBlur}
            value={confirmPasswordFormik.values.password}
            forgotPassword={t("swapPage.forgotPassword")}
            error={
              confirmPasswordFormik.touched.password &&
              confirmPasswordFormik.errors.password
                ? confirmPasswordFormik.errors.password
                : null
            }
            type={showPassword ? "text" : "password"}
            endIcon={
              <div
                className="absolute right-2  h-full aspect-square py-[6px]  px-1 "
                onClick={() => setShowPassword(!showPassword)}
              >
                <div className="flex items-center justify-center w-full h-full bg-transparent cursor-pointer rounded ">
                  {showPassword ? <EyeShow color="#6c757d" /> : <EyeHide />}
                </div>
              </div>
            }
          />
          <button
            type="submit"
            className="w-1/2 mt-4 mx-auto bg-[#3B3BFC] dark:bg-[#FF8911] capitalize flex items-center justify-center gap-2 rounded-lg text-[#fff] px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!!confirmPasswordFormik.errors.password || loading}
          >
            {t("confirm")}
            {loading && (
              <div className="w-5 h-5">
                <LoadingSpinner />
              </div>
            )}
          </button>
        </form>
      </TopModal>
    </ScanLayout>
  );
}
