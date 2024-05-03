"use client";
import { VerifyEmailIcon } from "@/assets/icons/VerifyEmailIcon";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export const VerifyEmail = ({ email }: { email: string }) => {
  const { t } = useTranslation();
  return (
    <div className=" bg-white dark:bg-[#111111] boxShadow w-[480px] max-w-full mx-auto p-6 flex flex-col rounded-xl border text-[14.5px] ">
      <div className="w-full flex justify-center">
        <div className="w-20 h-20">
          <VerifyEmailIcon />
        </div>
      </div>

      <h5 className="text-[21.8px] mb-4 font-bold text-dark900 dark:text-gray200 text-center">
        {t("vinaScan.register.verify.title")}
      </h5>
      <div className="p-[10px] mb-4 text-[#066a9c] bg-[#cde6f3] !border !border-[#9ccee7] rounded-lg">
        {t("vinaScan.register.verify.message")}
        &nbsp;
        <span className="font-bold">
          {t("vinaScan.register.verify.message_link")}
        </span>
        .
      </div>
      <p className="mb-4 text-[14.5px] text-dark900 dark:text-gray200">
        {t("vinaScan.register.verify.content1_1")}{" "}
        <span className="font-bold">{email}</span> 
        {t("vinaScan.register.verify.content1_2")}
      </p>
      <p className="mb-4 text-[14.5px] text-dark900 dark:text-gray200">
        {t("vinaScan.register.verify.content2_1")}
        &nbsp;
        <span className="font-bold">
          {t("vinaScan.register.verify.content2_link")}
        </span>&nbsp;
        {t("vinaScan.register.verify.content2_2")}
      </p>
      <span className="text-dark900 dark:text-gray200">
        {t("vinaScan.register.verify.content3")}
        <Link href={"/coming-soon"} className="text-[#0784c3]">
          {t("vinaScan.register.verify.content3_link")}
        </Link>
        .
      </span>
    </div>
  );
};
