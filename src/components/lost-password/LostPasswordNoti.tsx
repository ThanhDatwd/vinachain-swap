"use client";
import { VerifyEmailIcon } from "@/assets/icons/VerifyEmailIcon";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export const LostPasswordNotification = () => {
  const { t } = useTranslation();

  return (
    <div className=" bg-white dark:bg-[#111111] boxShadow w-[480px] max-w-full mx-auto p-6 flex flex-col rounded-xl border text-[14.5px] ">
      <div className="w-full flex justify-center">
        <div className="w-12 h-8 leading-[0] mb-4">
          <VerifyEmailIcon />
        </div>
      </div>

      <h5 className="text-[21.8px] mb-4 font-bold text-dark900 dark:text-gray200 text-center">
        {t("vinaScan.lostPassword.notification.title")}
      </h5>
      <div className="p-[10px] mb-4 text-[#066a9c] bg-[#cde6f3] !border !border-[#9ccee7] rounded-lg">
        {t("vinaScan.lostPassword.notification.message")}
      </div>
      <p className="mb-4 text-[14.5px] text-dark900 dark:text-gray200">
        {t("vinaScan.lostPassword.notification.content1")}
      </p>

      <ul className="list-disc pl-10 mb-4 ">
        <li className="mb-3">
          {t("vinaScan.lostPassword.notification.subContent1")}{" "}
          <span className="font-bold">
            {t("vinaScan.lostPassword.notification.subContent1_link")}{" "}
          </span>
        </li>
        <li className="">
          {t("vinaScan.lostPassword.notification.subContent2")}
        </li>
      </ul>
      <span className="text-dark900 dark:text-gray200">
        {t("vinaScan.lostPassword.notification.content2")}
        <Link href={"/coming-soon"} className="text-[#0784c3]">
          {t("vinaScan.lostPassword.notification.content2_link")}
        </Link>
      </span>
    </div>
  );
};
