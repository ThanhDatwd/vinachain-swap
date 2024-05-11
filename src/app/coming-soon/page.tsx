"use client";

import React, { createContext, useEffect } from "react";
import Image from "next/image";
import { getStaticURL } from "@/utils/constants";
import { useTranslation } from "react-i18next";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@/assets/icons/ChevronLeftIcon";
import { DateTime } from "luxon";

export default function ComingSoon() {
  const { t } = useTranslation();
  const { getCurrentUser } = useAuth();
  const router = useRouter();
  const currentDate = DateTime.now();

// Add days to the current date
const newDate = currentDate.plus({ days: 120 });

// Format the new date to only include the month
const formattedMonth = newDate.toFormat("MMMM", {  locale: t("dateFormat") });


  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    const user = await getCurrentUser();
  };

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark font-sans-serif relative">
      <div className="flex flex-col gap-6 pb-[30px] px-4 pt-[20px] md:pt-[80px] md:pl-[120px] text-[#1C1C73] dark:text-[#FAFAFA]">
        <div
          className="flex items-center text-[#6B5695] dark:text-[#B5A1DC] -translate-x-[8px] cursor-pointer"
          onClick={() => router.back()}
        >
          <ChevronLeftIcon />
          <span>{t("back")}</span>
        </div>
        <h2 className="text-2xl md:text-[32px] dark:text-[#FAFAFA] mt-10">
          {t("comingSoon.vinachain")}
        </h2>
        <div className="flex flex-col gap-1">
          <p className="text-[32px] md:text-[64px] font-bold mb-1">
            {t("comingSoon.title")} !
          </p>
          <p className="text-base md:text-[40px] font-light leading-6 md:leading-[60px]">
            {t("comingSoon.experimentContent")}
          </p>
          <p className="text-base md:text-[40px] font-light leading-6 md:leading-[60px]">
            {t("comingSoon.comeBackContent",{month:formattedMonth})}
            
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-[52px] md:gap-0">
          <div className="flex flex-col w-full md:w-1/2 gap-2">
            <p className="text-base md:text-2xl font-normal">
              {t("comingSoon.getNotifyContent")}
            </p>
            <form className="flex justify-between border-2 border-[#1C1C73] dark:border-[#A55115] rounded">
              <input
                type="email"
                name="email"
                placeholder={t("comingSoon.placeholder")}
                className="flex-1 placeholder:text-[#8A8A9A] outline-none border-none bg-[#FAFAFA] dark:bg-[#2D2D2C] pl-2 rounded"
              />
              <div className="hover:bg-white hover:opacity-0.92">
                <button
                  type="submit"
                  className="text-[#FAFAFA] bg-[#3B3BFC] dark:bg-scanDark py-[13.5px] px-2"
                >
                  {t("comingSoon.subscribeBtn")}
                </button>
              </div>
            </form>
          </div>
          <Image
            src={`${getStaticURL()}/assets/images/coming-soon.svg`}
            width={100}
            height={100}
            alt="Coming soon"
            className="w-full md:w-1/2"
          />
        </div>
      </div>
    </ScanLayout>
  );
}
