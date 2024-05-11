"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function VinaScanPage() {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    router.replace("/referral");
  }, []);
  return (
    <></>
  );
}
