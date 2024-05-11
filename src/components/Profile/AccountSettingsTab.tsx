import { useTheme } from "@/hooks/useTheme";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { PasswordCard } from "./PasswordCard";
import { ProfileLayout } from "./ProfileLayout";
import { ProfileService, profileService } from "@/services/ProfileServices";
import { onToast } from "@/hooks/useToast";
import { errorMsg } from "@/utils/errMsg";
import { useState } from "react";
import { LoadingSpinner } from "../LoadingSpinner";

export const AccountSettingsTab = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const { theme } = useTheme();

  const validationSchema = Yup.object({
    oldPassword: Yup.string()
      .required("Please enter Password.")
      .min(8, "Password must be at least 8 characters long")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[^a-zA-Z0-9.]/,
        "Password must contain at least one special character"
      )
      .test(
        "no-whitespace",
        t("vinaScan.register.passwordMustNotContainWhitespace"),
        (value) => {
          return !/\s/.test(value);
        }
      ),
    newPassword: Yup.string()
      .required("Please enter Password.")
      .min(8, "Password must be at least 8 characters long")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[^a-zA-Z0-9.]/,
        "Password must contain at least one special character"
      )
      .test(
        "no-whitespace",
        t("vinaScan.register.passwordMustNotContainWhitespace"),
        (value) => {
          return !/\s/.test(value);
        }
      ),
    confirmNewPassword: Yup.string()
      .required(t("Please enter confirm password"))
      .oneOf([Yup.ref("newPassword")], "Passwords must match"),
  });

  const handleChangePassword = async (values: {
    oldPassword: string;
    newPassword: string;
  }) => {
    try {
      setLoading(true);
      const response = await profileService.changePassword(values);
      if (response.success) {
        onToast(t("profile.changedPasswordSuccessfully"), "success");
      } else {
        onToast(
          t(`errorMsg.${errorMsg(response.code)}`) || response.message,
          "error"
        );
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      handleChangePassword({
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      });
    },
  });

  return (
    <ProfileLayout
      title={t("profile.changePassword")}
      content={t("profile.passwordSettingsContent")}
      isForgotPassword={true}
    >
      <form onSubmit={formik.handleSubmit}>
        <PasswordCard
          id="oldPassword"
          name="oldPassword"
          title={t("profile.oldPassword")}
          value={formik.values.oldPassword}
          error={
            formik.touched.oldPassword && formik.errors.oldPassword
              ? formik.errors.oldPassword
              : null
          }
          onChange={formik.handleChange}
        />
        <PasswordCard
          id="newPassword"
          name="newPassword"
          title={t("profile.newPassword")}
          value={formik.values.newPassword}
          error={
            formik.touched.newPassword && formik.errors.newPassword
              ? formik.errors.newPassword
              : null
          }
          onChange={formik.handleChange}
        />
        <PasswordCard
          id="confirmNewPassword"
          name="confirmNewPassword"
          title={t("profile.confirmNewPassword")}
          value={formik.values.confirmNewPassword}
          error={
            formik.touched.confirmNewPassword &&
            formik.errors.confirmNewPassword
              ? formik.errors.confirmNewPassword
              : null
          }
          onChange={formik.handleChange}
        />
        <div className="flex justify-end w-full">
          <button disabled={loading} type="submit" className="px-4 py-2 flex items-center gap-2 text-theme rounded-md cursor-pointer bg-[#3B3BFC] dark:bg-[#DA6C1D]  disabled:opacity-50 disabled:cursor-not-allowed">
            {t("profile.saveChange")}
            {loading && (
              <div className="w-5 h-5">
                <LoadingSpinner />
              </div>
            )}
          </button>
        </div>
      </form>
    </ProfileLayout>
  );
};
