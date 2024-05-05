"use client";

import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useTheme } from "@/hooks/useTheme";
import { getStaticURL } from "@/utils/constants";
import { isDarkTheme } from "@/utils/theme";
import { t } from "i18next";
import Link from "next/link";
import { useState } from "react";

enum STAKING_TOKEN {
  VPC = "vpc",
  VPL = "vpl",
}
const PERCENT_BALANCE = [
  { label: "25%" , value: 25 },
  { label: "50%", value: 50 },
  { label: "75%", value: 75 },
  { label: "MAX", value: 100 },
];

const PERCENT_PROFIT = [
  { label: "12 " + t("stakingPage.months"), value: 12 },
  { label: "24 " + t("stakingPage.months"), value: 24 },
  { label: "36 " + t("stakingPage.months"), value: 36 },
];
export default function StakingPage() {
  const { theme } = useTheme();

  const [stakingToken, setStakingToken] = useState(STAKING_TOKEN.VPC);
  const [currentPercentBalance, setCurrentBalance] = useState(
    PERCENT_BALANCE[0].value
  );
  const [currentPercentProfit, setCurrentProfit] = useState(
    PERCENT_PROFIT[0].value
  );
  return (
    <ScanLayout containerStyle="bg-bgColor dark:bg-gray700 font-sans-serif relative">
      <div className="flex  container-xl  px-4 lg:px-0 gap-2 pt-6 ">
        <div className="flex flex-col gap-6">
          <h1 className=" text-[32px] lg:text-5xl tracking-wide text-[#763DE8] dark:text-[#9F70FD] uppercase font-bold">
            {t("stakingPage.titleVPC")}
          </h1>
          <span className="text-[16px] font-normal text-[#6B5695] dark:text-[#B5A1DC]">
            {t("stakingPage.enjoyBenefitsVPC")}
          </span>
          <Link
            href={"/coming-soon"}
            className="text-[16px] flex items-center gap-2 font-semibold text-[#3B3BFC] dark:text-[#FF8911] hover:text-[#3B3BFC] dark:hover:text-[#FF8911]"
          >
            {t("stakingPage.get")} VPC
            <ArrowRightIcon width={16} height={12} />
          </Link>
        </div>
      </div>
      <div className="flex justify-center w-full  px-4 py-10 lg:px-0  lg:pb-32  ">
        <div className="w-[768px] max-w-full mx-auto flex flex-col gap-5  boxShadow p-6 rounded-xl bg-white dark:bg-[#111111]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col justify-between  h-full 0">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[20px] font-semibold text-[#6B5695] dark:text-[#B5A1DC] uppercase">
                  {" "}
                  {t("stakingPage.add")} VPC
                </span>
              </div>
              <div className="h-[68px] lg:h-full flex items-center gap-2 py-2 px-4 !border !border-[#DDD4EF] bg-[#F9F6FF] dark:bg-[#3C3548] dark:!border-[#534A64] rounded-2xl">
                <div>
                  <div className="w-10 h-10 lg:w-20 lg:h-20 rounded-full">
                    <img
                      src={`${getStaticURL()}/assets/images/logo_vpc.svg`}
                      alt="logo-vpc"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <input
                    className=" text-[16px] font-normal py-1 outline-none border-none bg-transparent"
                    type="number"
                    placeholder="0.0"
                  />
                  <span className="text-[16px] font-normal text-[#6B5695] dark:text-[#B5A1DC] ">
                    ~ 0 USD
                  </span>
                </div>
              </div>
            </div>
            {/* ///// */}
            <div className="flex flex-col justify-between gap-4 h-full 0">
              <div className="flex items-center justify-between">
                <span className="text-[20px] font-semibold text-[#6B5695] dark:text-[#B5A1DC] uppercase">
                  {" "}
                  {t("stakingPage.choosePackage")}
                </span>
              </div>
              <div className="h-[68px] flex items-center justify-between gap-2 py-2 px-4 !border !border-[#DDD4EF] bg-[#F9F6FF] dark:bg-[#3C3548] dark:!border-[#534A64] rounded-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full">
                    <img
                      src={`${getStaticURL()}/assets/images/icons/money-bag.svg`}
                      alt="logo-vpc"
                      className="w-full h-full"
                    />
                  </div>
                  <span>30%</span>
                </div>
                <span className="text-[#6B5695] dark:text-[#B5A1DC] font-semibold">
                  {t("stakingPage.profit")}
                </span>
              </div>
              <div className="flex items-center gap-1">
                {PERCENT_PROFIT.map((item, index) => {
                  return (
                    <div
                      className={`flex-1 p-2 flex items-center justify-center text-[16px] font-semibold rounded-full cursor-pointer  ${
                        item.value === currentPercentProfit
                          ? "bg-[#6B5695] text-white dark:bg-[#B5A1DC] dark:text-[#2C2A28]"
                          : "bg-[#FAFBFF] text-[#6B5695] dark:bg-[#2C2A28] dark:text-[#B5A1DC] hover:opacity-70"
                      }   `}
                      key={index}
                      onClick={() => setCurrentProfit(item.value)}
                    >
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* /////// */}
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[16px] font-semibold text-[#6B5695] dark:text-[#FAFAFA]">
              {t("stakingPage.lockOverview")}
            </span>
            <div className={`w-full rounded-2xl p-4 flex items-center justify-between bg-bl text-[#ffff] ${isDarkTheme(theme)?"gradient-staking-dark":"gradient-staking-light"}  `}>
              <span>My VPC</span>
              <span>0</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#B5A1DC]">
                <span className="text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  {t("stakingPage.totalApr")}
                </span>
                <span className="text-[16px] font-semibold text-[#3B3BFC] dark:text-[#DA6C1D] !font-kanit">
                  {t("stakingPage.upTo")} 8%
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 pl-6 ">
                <span className="text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  VPC {t("stakingPage.poolApr")}
                </span>
                <span className="text-[16px] font-normal text-[#1D0F3A] dark:text-[#E8DEFD]">
                  {t("stakingPage.upTo")} 150%
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#B5A1DC]">
                <span className="text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  VPC {t("stakingPage.toBeLocked")}
                </span>
                <span className=" text-[16px] font-normal text-[#1D0F3A] dark:text-[#E8DEFD]">
                  100,000 VPC
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#B5A1DC]">
                <span className="text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  {t("stakingPage.factor")}
                </span>
                <span className="text-[16px] font-normal text-[#1D0F3A] dark:text-[#E8DEFD]">
                  0.99
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#B5A1DC]">
                <span className="text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  {t("stakingPage.duration")}
                </span>
                <span className="text-[16px] font-normal text-[#1D0F3A] dark:text-[#E8DEFD]">
                  12 months
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#B5A1DC]">
                <span className="text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  {t("stakingPage.unlockOn")}
                </span>
                <span className="text-[16px] font-normal text-[#1D0F3A] dark:text-[#E8DEFD]">
                  May 9, 2024 15:00 pm
                </span>
              </div>
            </div>
          </div>
          <button className="py-2 px-4 text-[16px] font-semibold rounded bg-[#3B3BFC] dark:bg-[#DA6C1D] w-full lg:w-1/2 mx-auto text-white hover:opacity-70">
            {t("stakingPage.lock")}
          </button>
        </div>
      </div>
    </ScanLayout>
  );
}
