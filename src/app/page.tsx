"use client";
import HistorySection from "@/components/Scan/HistorySection";
import MarketSection from "@/components/Scan/MarketSection";
import SearchSection from "@/components/Scan/SearchSection";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import React from "react";
import { useTranslation } from "react-i18next";

export default function VinaScanPage() {
  const { t } = useTranslation();
  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark font-sans-serif relative">
      <div
        className="bg-[#081D34] dark:bg-gray900 dark:border-t dark:border-gray600 absolute inset-x-0 top-0 pt-24 pb-40 z-0 "
        style={{
          backgroundImage:
            "url('https://etherscan.io/images/svg/waves-light.svg')",
        }}
      />
     <div className="relative z-10">
     <section className=" w-full pt-12 pb-8">
        <div className=" px-4 py-2 lg:px-14 flex flex-col gap-3 container-xxl">
          <span className="text-xl font-[550] text-[#FAFAFA]">
            {t("vinaScan.scanFilter.title")}
          </span>
          <div className="md:w-3/5 w-full">
            <SearchSection />
          </div>
        </div>
      </section>
      <section className=" flex flex-col gap-8 md:gap-6 px-4 py-4 md:px-8  lg:py-6 lg:px-14 container-xxl  ">
        <MarketSection />
      </section>
     </div>
      <section className=" flex flex-col gap-8 md:gap-6 px-4 md:px-8   pb-20 lg:px-14 container-xxl ">
        <HistorySection />
      </section>
    </ScanLayout>
  );
}
