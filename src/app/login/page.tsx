"use client";
import { LoginForm } from "@/components/LoginForm";
import { SignInUpLayout } from "@/components/SignInUpLayout";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
  const { t } = useTranslation();
  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark font-sans-serif relative">
      <SignInUpLayout title={t("vinaScan.login.title")} subTitle={t("vinaScan.login.dontHaveAnAccount")}>
        <LoginForm />
      </SignInUpLayout>
    </ScanLayout>
  );
}
