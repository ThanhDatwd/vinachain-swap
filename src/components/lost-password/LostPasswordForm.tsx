import { useAuth } from "@/hooks/useAuth";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import FormInput from "../FormInput";
import { LoadingSpinner } from "../LoadingSpinner";
import { SignInUpLayout } from "../SignInUpLayout";
import { LostPasswordNotification } from "./LostPasswordNoti";
import { authService } from "@/services/AuthServices";
import { errorMsg } from "@/utils/errMsg";

export const LostPasswordForm = () => {
  const { setCurrentUser } = useAuth();
  const { t } = useTranslation();
  const [showNotification, setShowNotification] = useState(false);

  const router = useRouter();
  const [messageErr, setMessageErr] = useState("");

  const validationSchema = Yup.object({
    email: Yup.string()
      .required(t("vinaScan.register.emailAddressRequiredError"))
      .email(t("vinaScan.register.emailAddressRequiredError"))
      .matches(/@[^.]*\./, t("vinaScan.register.emailAddressRequiredError"))
      .max(255, "Email too long"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const data = {
          email: values.email,
        };
        const res = await authService.forgotPassword(data);
        if (res && res.success) {
          setCurrentUser(res?.data?.user);
          setShowNotification(true)
        } else {
          setMessageErr(t(`errorMsg.${errorMsg(res.code)}`) || res.message);
        }
      } catch (error) {}
    },
  });
  const handleFieldChange = (e: any) => {
    const { name, value } = e.target;
    formik.setFieldTouched(name, true);
    formik.handleChange(e);
  };

  return (
    <>
      {!showNotification ? (
        <SignInUpLayout
          title={t("vinaScan.lostPassword.title")}
          subTitle={t("vinaScan.lostPassword.subtitle")}
          isShowLinkRedirect={false}
        >
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 w-full"
          >
            {messageErr !== "" && (
              <div className="p-[10.4px] bg-[#f8d7da] border !border-[#f1aeb5] text-[#b02a37] rounded-lg">
                {messageErr}
              </div>
            )}

            <FormInput
              name="email"
              id="email"
              label={""}
              placeholder={t("vinaScan.lostPassword.placeholderEmail")}
              onChange={handleFieldChange}
              value={formik.values.email}
              error={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
              className="lg:w-[400px]"
            />

            <button
              disabled={formik.isSubmitting}
              type="submit"
              className="button-primary bg-[#0784c3] disabled:hover:bg-[#0784c3] disabled:opacity-70  disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {t("vinaScan.lostPassword.resetPassword")}
              {formik.isSubmitting && (
                <div className="w-4 h-4">
                  <LoadingSpinner />
                </div>
              )}
            </button>
            <Link
              className="text-[#0784c3] dark:text-[#DA6C1D] text-center"
              href={"/login"}
            >
              {t("vinaScan.lostPassword.backToLogin")}
            </Link>
          </form>
        </SignInUpLayout>
      ) : (
        <div className="w-full my-10 p-5 md:my-20">
          <LostPasswordNotification />
        </div>
      )}
    </>
  );
};
