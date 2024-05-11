"use client";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { LostPasswordForm } from "@/components/lost-password/LostPasswordForm";
import { useTranslation } from "react-i18next";

export default function LostPasswordPage() {
  const { t } = useTranslation();
  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark font-sans-serif relative">
        <LostPasswordForm />
    </ScanLayout>
  );
}
