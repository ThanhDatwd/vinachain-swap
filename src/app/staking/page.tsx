"use client";

import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { getStaticURL } from "@/utils/constants";
import { t } from "i18next";
import Link from "next/link";
import { useState } from "react";

enum STAKING_TOKEN {
  VPC = "vpc",
  VPL = "vpl",
}
const PERCENT_BALANCE = [
  { label: "25%", value: 25 },
  { label: "50%", value: 50 },
  { label: "75%", value: 75 },
  { label: "MAX", value: 100 },
];

const PERCENT_PROFIT = [
  { label: "12 months", value: 12 },
  { label: "24 months", value: 24 },
  { label: "36 months", value: 36 },
];
export default function StakingPage() {
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
          <h1 className=" text-[32px] lg:text-5xl tracking-wide text-[#3B3BFC] dark:text-[#DA6C1D] uppercase font-bold">
            {t("stakingPage.title")}
          </h1>
          <span className="text-[16px] font-normal text-[#2B2B87] dark:text-[#DA6C1D]">
            {t("stakingPage.enjoyBenefitsVPC")}
          </span>
          <Link
            href={"/coming-soon"}
            className="text-[16px] flex items-center gap-2 font-semibold text-[#1B9BD2] dark:text-[#6BD3FF] hover:text-[#1B9BD2] dark:hover:text-[#6BD3FF]"
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
                <span className="text-[20px] font-semibold text-[#2B2B87] dark:text-[#FF964A] uppercase">
                  {" "}
                  {t("stakingPage.addVpc")}
                </span>
              </div>
              <div className="h-[68px] lg:h-full flex items-center gap-2 py-2 px-4 !border !border-[#D2D2ED] bg-[#FAFBFF] dark:bg-[#2C2A28] dark:!border-[#685C51] rounded-2xl">
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
                  <span className="text-[16px] font-normal text-[#2B2B87] dark:text-[#FF964A] ">
                    ~ 0 USD
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {/* {PERCENT_BALANCE.map((item, index) => {
                  return (
                    <div
                      className={`flex-1 p-2 flex items-center justify-center text-[16px] font-semibold rounded-full cursor-pointer  ${
                        item.value === currentPercentBalance
                          ? "bg-[#1687B7] dark:bg-[#6BD3FF] text-white dark:text-[#1A1A1A]"
                          : "bg-[#E1EEF1] dark:bg-[#435154] text-[#1B9BD2] dark:text-[#6BD3FF] hover:opacity-70"
                      }   `}
                      key={index}
                      onClick={() => setCurrentBalance(item.value)}
                    >
                      {item.label}
                    </div>
                  );
                })} */}
              </div>
            </div>
            {/* ///// */}
            <div className="flex flex-col justify-between gap-4 h-full 0">
              <div className="flex items-center justify-between">
                <span className="text-[20px] font-semibold text-[#2B2B87] dark:text-[#FF964A] uppercase">
                  {" "}
                  {t("stakingPage.choosePackage")}
                </span>
              </div>
              <div className="h-[68px] flex items-center justify-between gap-2 py-2 px-4 !border !border-[#D2D2ED] bg-[#FAFBFF] dark:bg-[#2C2A28] dark:!border-[#685C51] rounded-2xl">
                <div className="flex items-center gap-4 ">
                  <div className="w-6 h-6 rounded-full">
                    <img
                      src={`${getStaticURL()}/assets/images/money-bag.svg`}
                      alt="logo-vpc"
                      className="w-full h-full"
                    />
                  </div>
                  <span>30%</span>
                </div>
                <span className="text-[#2B2B87] dark:text-[#FF964A] font-semibold">
                  {t("stakingPage.profit")}
                </span>
              </div>
              <div className="flex items-center gap-1">
                {PERCENT_PROFIT.map((item, index) => {
                  return (
                    <div
                      className={`flex-1 p-2 flex items-center justify-center text-[16px] font-semibold rounded-full cursor-pointer  ${
                        item.value === currentPercentProfit
                          ? "bg-[#2B2B87] text-white dark:bg-[#FF964A] dark:text-[#2C2A28]"
                          : "bg-[#FAFBFF] text-[#2B2B87] dark:bg-[#2C2A28] dark:text-[#FF964A] hover:opacity-70"
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
            <span className="text-[16px] font-semibold text-[#1A1A1A] dark:text-[#FAFAFA]">
              {t("stakingPage.lockOverview")}
            </span>
            <div className="w-full rounded-2xl p-4 flex items-center justify-between bg-bl text-[#ffff] bg-gradient-to-r from-[#5959B9] dark:from-[#FF964A] to-[#3B3BFC] dark:to-[#DA6C1D] bg-opacity-90">
              <span>My VPC</span>
              <span>0</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#C4C4C4]">
                <span className="text-sm font-light text-[#2B2B87] dark:text-[#C4C4C4]">
                  {t("stakingPage.totalApr")}
                </span>
                <span className="text-[16px] font-semibold text-[#3B3BFC] dark:text-[#DA6C1D] !font-kanit">
                  {t("stakingPage.upTo")} 8%
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 pl-6 ">
                <span className="text-sm font-light text-[#2B2B87] dark:text-[#C4C4C4]">
                  VPC {t("stakingPage.poolApr")}
                </span>
                <span className="text-[16px] font-normal text-[#1A1A1A] dark:text-[#DA6C1D]">
                  {t("stakingPage.upTo")} 150%
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#C4C4C4]">
                <span className="text-sm font-light text-[#2B2B87] dark:text-[#C4C4C4]">
                  VPC {t("stakingPage.toBeLocked")}
                </span>
                <span className=" text-[16px] font-normal text-[#1A1A1A] dark:text-[#DA6C1D]">
                  100,000 VPC
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#C4C4C4]">
                <span className="text-sm font-light text-[#2B2B87] dark:text-[#C4C4C4]">
                  {t("stakingPage.factor")}
                </span>
                <span className="text-[16px] font-normal text-[#1A1A1A] dark:text-[#DA6C1D]">
                  0.99
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#C4C4C4]">
                <span className="text-sm font-light text-[#2B2B87] dark:text-[#C4C4C4]">
                  {t("stakingPage.duration")}
                </span>
                <span className="text-[16px] font-normal text-[#1A1A1A] dark:text-[#DA6C1D]">
                  12 months
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#C4C4C4]">
                <span className="text-sm font-light text-[#2B2B87] dark:text-[#C4C4C4]">
                  {t("stakingPage.unlockOn")}
                </span>
                <span className="text-[16px] font-normal text-[#1A1A1A] dark:text-[#DA6C1D]">
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
