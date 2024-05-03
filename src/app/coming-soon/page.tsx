"use client";

import React, { createContext } from "react";
import Image from "next/image";
import { getStaticURL } from "@/utils/constants";
import { useTranslation } from "react-i18next";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";

export default function ComingSoon() {
  const { t } = useTranslation();
  return (
    <DefaultLayout
      headerStyle="bg-gradient-to-r from-[#E6E3F7] dark:from-[#323544] dark:from-5.26% from-16.64% to-[#DFEAEE] dark:to-[#354546] dark:to-82.23% to-86.77%"
      containerStyle="bg-gradient-to-r from-[#E6E3F7] dark:from-[#323544] dark:from-5.26% from-16.64% to-[#DFEAEE] dark:to-[#354546] dark:to-82.23% to-86.77%"
      tootlipStyle="bg-gradient-to-r from-[#E6E3F7] dark:from-[#323544] dark:from-5.26% from-16.64% to-[#DFEAEE] dark:to-[#354546] dark:to-82.23% to-86.77%"
    >
      <div className="flex flex-col gap-6 pb-[30px] px-4 pt-[20px] md:pt-[140px] md:pl-[120px] text-[#1C1C73] dark:text-[#FAFAFA]">
        <h2 className="text-2xl md:text-[32px] dark:text-[#FAFAFA]">
          {t("comingSoon.vinachain")}
        </h2>
        <div className="flex flex-col gap-1">
          <p className="text-[32px] md:text-[64px] font-bold mb-1">
            {t("comingSoon.title")}
          </p>
          <p className="text-base md:text-[40px] font-light leading-6 md:leading-[60px]">
            {t("comingSoon.experimentContent")}
          </p>
          <p className="text-base md:text-[40px] font-light leading-6 md:leading-[60px]">
            {t("comingSoon.comeBackContent")}
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
    </DefaultLayout>
  );
}
