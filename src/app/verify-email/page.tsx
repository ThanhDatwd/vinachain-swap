"use client";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { LogoScan } from "@/components/LogoScan";
import { useTheme } from "@/hooks/useTheme";
import { onToast } from "@/hooks/useToast";
import { authService } from "@/services/AuthServices";
import { THEME } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";


const VerifyPage = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const isMounted = useRef(false);
  const { t } = useTranslation();


  const handleVerifyEmail = async (token: string) => {
    const response = await authService.verifyEmail({ token });
    if (response && response.success) {
      onToast("Verify email successfully", "success");
      router.push("/login");
    } else {
      onToast(response.message, "error");
      router.push("/register");
    }
  };

  useEffect(() => {
    if (!isMounted.current) {
      const token = new URLSearchParams(window.location.search).get("token");
      if (token) {
        handleVerifyEmail(token);
      }
      isMounted.current = true;
    }
  }, []);

  return (
    <div className="w-screen h-screen py-20 bg-white dark:bg-gray700">
      <div className=" container-xxl">
        <div className="flex flex-col  gap-3 px-3  md:px-6 lg:px-20 ">
          <LogoScan />
          <h2 className="text-[20px] md:text-[28px] dark:text-[#fff] text-gray700 mb-3">
          {t("verification.verifying")}
          </h2>
          <div className="w-12 h-12 dark:text-[#fff] text-gray700">
            <LoadingSpinner
              color={theme === THEME.DARK ? "#6AB5DB" : "#0784c3"}
            />
          </div>
          <h2 className="text-[20px] md:text-[28px] mt-6 dark:text-[#fff] text-gray700">
          {t("verification.securityCheck")} 
          </h2>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
