"use client";
import { RegisterForm } from "@/components/RegisterForm";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useTranslation } from "react-i18next";

export default function RegisterPage() {
  const { t } = useTranslation();

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-gray700 font-sans-serif relative">
        <RegisterForm />
    </ScanLayout>
  );
}
