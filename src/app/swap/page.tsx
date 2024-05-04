"use client";
import { useFormik } from "formik";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import * as Yup from "yup";

import { CopyIcon } from "@/assets/CopyIcon";
import { EyeHide } from "@/assets/icons/EyeHide";
import { EyeShow } from "@/assets/icons/EyeShow";
import { UploadIcon } from "@/assets/icons/UploadIcon";
import FormInput from "@/components/FormInput";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ModalConnectWallet } from "@/components/controls/ModalConnectWallet";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { onToast } from "@/hooks/useToast";
import { useConnectorByName } from "@/pkgs/wallet-connector/connector";
import { useWalletContext } from "@/pkgs/wallet-connector/context";
import { E_NETWORK_ID } from "@/pkgs/wallet-connector/types";
import { useAliUpload } from "@/services/CloundService";
import { swapService } from "@/services/SwapService";
import {
  FIELD_NAME_BUCKET_USER_IMAGE,
  MAX_SIZE_IMAGE,
  THEME,
  getStaticURL,
} from "@/utils/constants";
import { errorMsg } from "@/utils/errMsg";
import { signMsg } from "@/utils/generateMsg";
import { t } from "i18next";
import Swal from "sweetalert2";
import Web3 from "web3";
import { ModalChoosePlan } from "@/components/ModalChoosePlan";

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
  const { theme } = useTheme();
  const { currentUser } = useAuth();
  const [imagesUpload, setImagesUpload] = useState<any>();
  const [previewLikeFanpage, setPreviewLikeFanpage] = useState<any>([]);
  const [previewFollowTelegram, setPreviewFollowTelegram] = useState<any>([]);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState(TAB.TRANSACTION);
  const [tokenVerify, setTokenVerify] = useState<string>();
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
    email: Yup.string()
      .email(t("validationMessages.email.invalidEmail"))
      .matches(/@[^.]*\./, t("validationMessages.email.invalidEmail"))
      .required(t("validationMessages.email.required"))
      .max(255, t("validationMessages.email.tooLong")),
    password: Yup.string().required(t("validationMessages.password.required")),
  });

  const validationTransactionSchema = Yup.object().shape({
    transaction: Yup.string()
      .required(t("validationMessages.transaction.required"))
      .matches(/^0x/, t("validationMessages.transaction.startsWith0x")),
  });

  const verifyFormik = useFormik({
    initialValues: {
      accountAddress: "",
      email: "",
      password: "",
    },
    validationSchema: validationVerifySchema,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: async (values) => {
      try {
        setLoading(true);
      
        await handleVerify({
          accountAddress: values.accountAddress,
          email: values.email,
          password: values.password,
          imagesUpload,
        });
        setLoading(false);
      } catch (error) {}
      // Handle form submission
    },
  });

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
    email,
    password,
    imagesUpload,
  }: {
    accountAddress: string;
    email: string;
    password: string;
    imagesUpload: any;
  }) => {
    try {
      const images = await handleUploadImage(imagesUpload);
      const res = await swapService.verifyInfo({
        email,
        password,
        walletAddress: accountAddress,
        images,
      });

      if (res.success && res.data.token) {
        onToast(t("swapPage.youHaveBeenVerified"), "success");
        setCurrentTab(TAB.TRANSACTION);
        setIsVerified(true);
        setTokenVerify(res.data.token);
      } else {
        onToast(t(`errorMsg.${errorMsg(res.code)}`), "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const transtionFormik = useFormik({
    initialValues: {
      transaction: "",
    },
    validationSchema: validationTransactionSchema,
    onSubmit: async (values) => {
      try {
        if (!tokenVerify) return;
        setLoading(true);
        const res = await swapService.verifyTransactionHash({
          txHash: values.transaction,
          token: tokenVerify,
        });
        if (res.success) {
          Swal.fire({
            title: t("congratulations"),
            text: t("swapPage.transactionHasbeenRecorded"),
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: t("continue"),
          });
          transtionFormik.resetForm();
          verifyFormik.resetForm();
          setCurrentTab(TAB.VERIFY);
          setPreviewFollowTelegram([]);
          setPreviewLikeFanpage([]);
          setImagesUpload({});
          setImagesUpload([]);
        } else {
          onToast(t(`errorMsg.${errorMsg(res.code)}`), "error");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

      // Handle form submission
    },
  });

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
                            disabled
                            value={verifyFormik.values.accountAddress}
                            error={
                              verifyFormik.touched.accountAddress &&
                              verifyFormik.errors.accountAddress
                                ? verifyFormik.errors.accountAddress
                                : null
                            }
                            className="lg:w-[400px]"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <FormInput
                            name="email"
                            autoComplete="new-password"
                            id="email"
                            label={
                              <div className="flex items-center gap-2">
                                {t("swapPage.emailAddress")}{" "}
                              </div>
                            }
                            placeholder={t("swapPage.emailAddress")}
                            onBlur={verifyFormik.handleBlur}
                            onChange={verifyFormik.handleChange}
                            value={verifyFormik.values.email}
                            error={
                              verifyFormik.touched.email &&
                              verifyFormik.errors.email
                                ? verifyFormik.errors.email
                                : null
                            }
                            className="lg:w-[400px]"
                          />
                        </div>
                        <FormInput
                          name="password"
                          id="password"
                          label={t("swapPage.password")}
                          onChange={verifyFormik.handleChange}
                          autoComplete="new-password"
                          onBlur={verifyFormik.handleBlur}
                          value={verifyFormik.values.password}
                          forgotPassword="Forgot your password?"
                          error={
                            verifyFormik.touched.password &&
                            verifyFormik.errors.password
                              ? verifyFormik.errors.password
                              : null
                          }
                          type={showPassword ? "text" : "password"}
                          endIcon={
                            <div
                              className="absolute right-2  h-full aspect-square py-[6px]  px-1 "
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <div className="flex items-center justify-center w-full h-full bg-transparent cursor-pointer rounded ">
                                {showPassword ? (
                                  <EyeShow color="#6c757d" />
                                ) : (
                                  <EyeHide />
                                )}
                              </div>
                            </div>
                          }
                        />
                        {/* Upload images */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="" className="text-[15px]">
                            {t("swapPage.followTelegram")}
                          </label>
                          <div className="flex justify-center">
                            <div className="w-[200px] h-[200px] aspect-square rounded-xl border border-dashed box-shadow">
                              {!!previewFollowTelegram.length ? (
                                <div
                                  className="w-full h-full bg-cover relative rounded-md"
                                  style={{
                                    backgroundImage: `url(${previewFollowTelegram[0]})`,
                                  }}
                                >
                                  {previewFollowTelegram[0] && (
                                    <img
                                      className="border absolute right-0 top-0 bg-white bg-opacity-60 cursor-pointer rounded-full"
                                      src={`${getStaticURL()}/assets/images/close.svg`}
                                      alt="menu"
                                      width={20}
                                      onClick={() =>
                                        handleRemoveImage(
                                          TYPE_IMAGE_UPLOAD.FOLLOW_TELEGRAM
                                        )
                                      }
                                    />
                                  )}
                                </div>
                              ) : (
                                <div className="w-full h-full cursor-pointer">
                                  <label
                                    className="w-full h-full flex items-center justify-center cursor-pointer"
                                    htmlFor={`upload-${TYPE_IMAGE_UPLOAD.FOLLOW_TELEGRAM}`}
                                  >
                                    <UploadIcon />
                                  </label>
                                  <input
                                    type="file"
                                    id={`upload-${TYPE_IMAGE_UPLOAD.FOLLOW_TELEGRAM}`}
                                    accept="image/png, image/jpeg, image/webp"
                                    style={{ display: "none" }}
                                    onChange={(event) => {
                                      handleImgUpload(
                                        event,
                                        TYPE_IMAGE_UPLOAD.FOLLOW_TELEGRAM
                                      );
                                    }}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="" className="text-[15px]">
                            {t("swapPage.likeFanpage")}
                          </label>
                          <div className="flex justify-center ">
                            <div className="w-[200px] h-[200px] aspect-square rounded-xl border border-dashed box-shadow">
                              {!!previewLikeFanpage.length ? (
                                <div
                                  className="w-full h-full bg-cover relative rounded-md"
                                  style={{
                                    backgroundImage: `url(${previewLikeFanpage[0]})`,
                                  }}
                                >
                                  {previewLikeFanpage[0] && (
                                    <img
                                      className="border absolute right-0 top-0 bg-white bg-opacity-60 cursor-pointer rounded-full"
                                      src={`${getStaticURL()}/assets/images/close.svg`}
                                      alt="menu"
                                      width={20}
                                      onClick={() =>
                                        handleRemoveImage(
                                          TYPE_IMAGE_UPLOAD.LIKE_FANPAGE
                                        )
                                      }
                                    />
                                  )}
                                </div>
                              ) : (
                                <div className="w-full h-full cursor-pointer">
                                  <label
                                    className="w-full h-full flex items-center justify-center cursor-pointer"
                                    htmlFor={`upload-${TYPE_IMAGE_UPLOAD.LIKE_FANPAGE}`}
                                  >
                                    <UploadIcon />
                                  </label>
                                  <input
                                    type="file"
                                    id={`upload-${TYPE_IMAGE_UPLOAD.LIKE_FANPAGE}`}
                                    accept="image/png, image/jpeg, image/webp"
                                    style={{ display: "none" }}
                                    onChange={(event) => {
                                      handleImgUpload(
                                        event,
                                        TYPE_IMAGE_UPLOAD.LIKE_FANPAGE
                                      );
                                    }}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        {!isVerified && (
                          <button
                            type="submit"
                            className="w-1/2 mt-10 mx-auto bg-[#3B3BFC] capitalize flex items-center justify-center gap-2 rounded-lg text-[#fff] px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={
                              !!verifyFormik.errors.accountAddress ||
                              !!verifyFormik.errors.email ||
                              !imagesUpload ||
                              loading
                            }
                          >
                            {t("swapPage.verify")}
                            {loading && (
                              <div className="w-5 h-5">
                                <LoadingSpinner />
                              </div>
                            )}
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
                  <div className="">
                    <div className="w-[768px] max-w-full mx-auto flex flex-col px-3 md:px-0 lg:px-0">
                      <div>
                        <div className="text-base flex">
                          <p className="font-bold">
                            {t("swapPage.addressVPC")}:&nbsp;
                          </p>
                          <span>
                            {process.env.NEXT_PUBLIC_VINACHAIN_RECIPIENT_ADDRESS}
                            <button
                              className="ml-2"
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  process.env.NEXT_PUBLIC_VINACHAIN_RECIPIENT_ADDRESS ||
                                    ""
                                );
                                onToast(t("copied"), "success");
                              }}
                            >
                              <CopyIcon
                                color={
                                  theme === THEME.DARK ? "#888" : "#adb5bd"
                                }
                              />
                            </button>
                          </span>
                        </div>
                      </div>
                      <form
                        onSubmit={transtionFormik.handleSubmit}
                        className=" py-5 md:py-6 flex flex-col  gap-4  mb-10"
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
                        <p className="italic text-sm text-center mt-10">
                          *{t("swapPage.transactionCannotReverse")}
                        </p>
                        <button
                          type="submit"
                          className="w-1/2 mx-auto bg-[#3B3BFC] capitalize flex items-center justify-center gap-2 rounded-lg text-[#fff] px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={
                            !!transtionFormik.errors.transaction || loading
                          }
                        >
                          {t("confirm")}
                          {loading && (
                            <div className="w-5 h-5">
                              <LoadingSpinner />
                            </div>
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
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
    </ScanLayout>
  );
}
