import { EyeHide } from "@/assets/icons/EyeHide";
import { EyeShow } from "@/assets/icons/EyeShow";
import { onToast } from "@/hooks/useToast";
import { authService } from "@/services/AuthServices";
import { errorMsg } from "@/utils/errMsg";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import FormInput from "./FormInput";
import { TooltipCustom } from "./Tooltip";
import { LoadingSpinner } from "./LoadingSpinner";
import { useAuth } from "@/hooks/useAuth";

export const LoginForm = () => {
  const { setCurrentUser, login } = useAuth();
  const { t } = useTranslation();
  const router = useRouter();
  const [messageErr, setMessageErr] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const validationSchema = Yup.object({
    username: Yup.string().required(t("vinaScan.login.usernameRequiredError")),
    password: Yup.string().required(t("vinaScan.login.passwordRequiredError")),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const data = {
          username: values.username,
          password: values.password,
        };
        const user = await login(data);
        if (user) {
          router.push("/swap");
        }
      } catch (error) {
        //console.log("error", error);
      }
    },
  });
  const handleFieldChange = (e: any) => {
    const { name, value } = e.target;
    formik.setFieldTouched(name, true);
    formik.handleChange(e);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 w-full">
      {messageErr !== "" && (
        <div className="p-[10.4px] bg-[#f8d7da] border !border-[#f1aeb5] text-[#b02a37] rounded-lg">
          {messageErr}
        </div>
      )}

      <FormInput
        name="username"
        id="username"
        label={t("vinaScan.register.username")}
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
        name="password"
        id="password"
        label={t("vinaScan.register.password")}
        placeholder="*************"
        onChange={handleFieldChange}
        value={formik.values.password}
        forgotPassword="Forgot your password?"
        error={
          formik.touched.password && formik.errors.password
            ? formik.errors.password
            : null
        }
        type={showPassword ? "text" : "password"}
        endIcon={
          <div
            className="absolute right-2  h-full aspect-square py-[6px]  px-1 "
            onClick={() => setShowPassword(!showPassword)}
          >
            <div className="flex items-center justify-center w-full h-full hover:bg-[#e9ecef] dark:hover:bg-[#252525] bg-white dark:bg-[#111111] cursor-pointer rounded ">
              {showPassword ? <EyeShow color="#6c757d" /> : <EyeHide />}
            </div>
          </div>
        }
      />
      <div className="flex gap-1">
        <input type="checkbox" id="checkbox_remember" className="border cursor-pointer border-[#6c757d]" />
        <TooltipCustom
          position="bottom"
          content={
            "Please do not check this box if you are using a public or shared PC"
          }
        >
          <label className="text-gray550" htmlFor="checkbox_remember">
            {t("vinaScan.login.rememberAutoLogin")}
          </label>
        </TooltipCustom>
      </div>
      <button
        disabled={formik.isSubmitting}
        type="submit"
        className="button-primary bg-[#0784c3] disabled:hover:bg-[#0784c3] disabled:opacity-70  disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {t("vinaScan.login.loginBtn")}
        {formik.isSubmitting && (
          <div className="w-4 h-4">
            <LoadingSpinner />
          </div>
        )}
      </button>
    </form>
  );
};
