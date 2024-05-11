"use client";
import { EyeHide } from "@/assets/icons/EyeHide";
import { EyeShow } from "@/assets/icons/EyeShow";
import { onToast } from "@/hooks/useToast";
import { authService } from "@/services/AuthServices";
import { errorMsg } from "@/utils/errMsg";
import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import FormInput from "./FormInput";
import { SignInUpLayout } from "./SignInUpLayout";
import { VerifyEmail } from "./register/verifyEmail";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { TooltipCustom } from "./Tooltip";
import { LoadingSpinner } from "./LoadingSpinner";

export const RegisterForm = () => {
  const [messageErr, setMessageErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showVerifyEmail, setShowShowVerifyEmail] = useState(false);
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    username: Yup.string()
      .matches(
        /^[^\d][a-zA-Z0-9_]*$/,
        t("vinaScan.register.usernameMustContainOnlyLettersAndNumbers")
      )
      .required(t("vinaScan.register.usernameRequiredError"))
      .min(5, "Username must be at least 5 characters")
      .max(30, "Username must be at most 30 characters"),
    refCode: Yup.string().required(t("vinaScan.register.refCodeRequiredError")),
    email: Yup.string()
      .required(t("vinaScan.register.emailAddressRequiredError"))
      .email(t("vinaScan.register.emailAddressRequiredError"))
      .matches(/@[^.]*\./, t("vinaScan.register.emailAddressRequiredError"))
      .max(255, "Email too long"),
    confirmEmail: Yup.string()
      .required(t("vinaScan.register.confirmEmailAddressRequiredError"))
      .oneOf([Yup.ref("email")], "Email must match"),

    password: Yup.string()
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
    confirmPassword: Yup.string()
      .required(t("Please enter confirm password"))
      .oneOf([Yup.ref("password")], "Passwords must match"),

    agreement: Yup.boolean().oneOf(
      [true],
      "Please accept our Terms and Conditions."
    ),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      refCode: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      agreement: false,
    },
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: async (values) => {
      try {
        const data = {
          username: values.username.trim(),
          email: values.email.trim(),
          password: values.password.trim(),
          refCode: values.refCode.trim(),
        };
        const res = await authService.register(data);
        if (res && res.success) {
          onToast(t("vinaScan.register.registerSuccessfully"), "success");
          setShowShowVerifyEmail(true);
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
    <div>
      {!showVerifyEmail ? (
        <SignInUpLayout
          title={t("vinaScan.register.title")}
          subTitle={t("vinaScan.register.alreadyHaveAnAccount")}
        >
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            {messageErr !== "" && (
              <div className="p-[10.4px] bg-[#f8d7da] border !border-[#f1aeb5] text-[#b02a37] rounded-lg">
                {messageErr}
              </div>
            )}
            <FormInput
              name="username"
              autoComplete="new-password"
              id="username"
              label={
                <div className="flex items-center gap-2">
                  {t("vinaScan.register.username")}{" "}
                  <TooltipCustom
                    content={
                      "Username has to be from 5 to 30 characters in length, only alphanumeric characters allowed"
                    }
                  >
                    <HelpIcon />
                  </TooltipCustom>{" "}
                </div>
              }
              placeholder={t("vinaScan.register.username")}
              onChange={handleFieldChange}
              value={formik.values.username}
              error={
                formik.touched.username && formik.errors.username
                  ? formik.errors.username
                  : null
              }
              className="lg:w-[400px]"
            />

            <FormInput
              name="email"
              autoComplete="new-password"
              id="email"
              label={t("vinaScan.register.emailAddress")}
              placeholder={t("vinaScan.register.emailAddressPlaceholder")}
              onChange={handleFieldChange}
              value={formik.values.email}
              error={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
            />
            <FormInput
              name="confirmEmail"
              id="confirmEmail"
              label={t("vinaScan.register.confirmEmailAddress")}
              placeholder={t(
                "vinaScan.register.confirmEmailAddressPlaceholder"
              )}
              onChange={handleFieldChange}
              value={formik.values.confirmEmail}
              error={
                formik.touched.confirmEmail && formik.errors.confirmEmail
                  ? formik.errors.confirmEmail
                  : null
              }
            />
            <FormInput
              name="password"
              autoComplete="new-password"
              id="password"
              label={t("vinaScan.register.password")}
              placeholder="*************"
              onChange={handleFieldChange}
              value={formik.values.password}
              error={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null
              }
              type={showPassword ? "text" : "password"}
              endIcon={
                <div
                  className="absolute right-2  h-full aspect-square py-[6px]  px-1"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <div className="flex items-center justify-center w-full h-full hover:bg-[#e9ecef] dark:hover:bg-[#252525] bg-white dark:bg-[#111111] cursor-pointer rounded ">
                    {showPassword ? <EyeShow color="#6c757d" /> : <EyeHide />}
                  </div>
                </div>
              }
            />
            <FormInput
              name="confirmPassword"
              id="confirmPassword"
              label={t("vinaScan.register.confirmPassword")}
              placeholder="*************"
              onChange={handleFieldChange}
              value={formik.values.confirmPassword}
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : null
              }
              type={showConfirmPassword ? "text" : "password"}
              endIcon={
                <div
                  className="absolute right-2  h-full aspect-square py-[6px]  px-1"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <div className="flex items-center justify-center w-full h-full hover:bg-[#e9ecef] dark:hover:bg-[#252525] bg-white dark:bg-[#111111] cursor-pointer rounded ">
                    {showConfirmPassword ? (
                      <EyeShow color="#6c757d" />
                    ) : (
                      <EyeHide />
                    )}
                  </div>
                </div>
              }
            />
            <FormInput
              name="refCode"
              id="refCode"
              label={t("vinaScan.register.refCode")}
              placeholder={t("vinaScan.register.refCodePlaceholder")}
              onChange={handleFieldChange}
              value={formik.values.refCode}
              error={
                formik.touched.refCode && formik.errors.refCode
                  ? formik.errors.refCode
                  : null
              }
              className="lg:w-[400px]"
            />
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <input
                  name="agreement"
                  id="agreement"
                  type="checkbox"
                  checked={formik.values.agreement}
                  onChange={handleFieldChange}
                  className="border cursor-pointer border-[#6c757d]"
                />
                <label
                  className="text-gray550 cursor-pointer"
                  htmlFor="agreement"
                >
                  <span>{t("vinaScan.register.agreeToThe")}</span>&nbsp;
                  <Link
                    href={"/terms"}
                    className="text-[#0784c3] dark:text-scanDark"
                  >
                    {t("vinaScan.register.termsAndConditions")}
                  </Link>
                </label>
              </div>
              {formik.touched.agreement && formik.errors.agreement && (
                <p className="error-message text-[#EA868F] text-[12.5px]">
                  {formik.errors.agreement}
                </p>
              )}
            </div>
            <div className="flex items-start gap-1">
              <input
                type="checkbox"
                id="checkbox_receive"
                className="relative cursor-pointer top-1 border border-[#6c757d]"
              />
              <label
                className=" cursor-pointer text-gray550 lg:w-[400px"
                htmlFor="checkbox_receive"
              >
                <span>
                  {t("vinaScan.register.receiveVinascan")}{" "}
                  <Link href={""} className="text-[#0784c3] dark:text-scanDark">
                    {t("vinaScan.register.unsubscribe")}
                  </Link>
                  &nbsp;
                  {t("vinaScan.register.atAnyTime")}
                </span>
              </label>
            </div>
            <button
              disabled={formik.isSubmitting}
              type="submit"
              className="button-primary bg-[#0784c3] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {t("vinaScan.register.createAnAccount")}
              {formik.isSubmitting && (
                <div className="w-4 h-4">
                  <LoadingSpinner />
                </div>
              )}
            </button>
          </form>
        </SignInUpLayout>
      ) : (
        <div className="w-full my-10 p-5 md:my-20">
          {" "}
          <VerifyEmail email={formik.values.email} />
        </div>
      )}
    </div>
  );
};
