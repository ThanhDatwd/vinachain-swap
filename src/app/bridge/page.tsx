"use client";

import { ArrowCircleBottomIcon } from "@/assets/icons/ArrowCircleBottomIcon";
import { BnbIcon } from "@/assets/icons/BnbIcon";
import { InfoIcon } from "@/assets/icons/InfoIcon";
import { HeaderExchange } from "@/components/HeaderExchange";
import { TooltipCustom } from "@/components/Tooltip";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useTheme } from "@/hooks/useTheme";
import { calcVPCToUSD } from "@/utils";
import { NETWORK, VINACHAIN_NETWORK, getStaticURL } from "@/utils/constants";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LIST_NETWORK = [
  { value: "BNB", symbol: "BNB", label: "BNB network", icon: <BnbIcon /> },
];
interface NetworkProps {
  value: string;
  label: string;
  symbol: string;
  icon: any;
}
export default function SwapPage() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [currentNetwork, setCurrentNetwork] = useState<NetworkProps>(
    LIST_NETWORK[0]
  );
  const [sendAmount, setSendAmount] = useState<any>();

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark font-sans-serif relative">
      <HeaderExchange
        title={t("bridgePage.title")}
        content={t("bridgePage.subTitle")}
      />
        <div className="flex justify-center px-4 py-8 lg:px-0  lg:pb-10">
          <div className=" flex flex-col gap-6 w-full lg:w-3/4 xl:w-3/5 bg-white dark:bg-gray900 rounded-2xl boxShadowStaking p-5 ">
            <div className=" flex flex-col items-center lg:flex-row gap-6 w-full ">
              <div className="w-full flex-1 gap-4 exchange-color-main font-semibold text-xl">
                <div className="flex flex-col">
                  <div className="mb-5 text-[#6B5695] dark:text-[#B5A1DC] ">
                    {t("bridgePage.fromThisNetwork")}
                  </div>
                  <div className="flex items-center gap-2 w-full font-semibold exchange-bg rounded-2xl h-16 px-4">
                    <img
                      src={`${getStaticURL()}/assets/images/icons/logo_${theme}.svg`}
                      alt="metamask"
                      className="h-8"
                    />
                    <div className="font-light text-black dark:text-white text-[16px]">
                      {VINACHAIN_NETWORK.name}
                    </div>
                  </div>
                  <div className="my-5 text-[#6B5695] dark:text-[#B5A1DC]">
                    {t("bridgePage.youSend")}
                  </div>
                  <div className="w-full flex flex-col justify-center exchange-bg exchange-color-second exchange-bg rounded-2xl h-16 text-[16px] px-4 font-normal">
                    <div className="flex items-center justify-between">
                    <input
                      className="w-full text-[16px] font-normal flex items-center bg-purple200 dark:bg-purple800 rounded-2xl  focus:outline-none"
                      value={sendAmount}
                      placeholder="0.00"
                      type="number"
                      onChange={(e) => {
                        setSendAmount(e.target.value);
                      }}
                      onKeyDown={(e) =>
                        ["e", "E", "+", "-"].includes(e.key) &&
                        e.preventDefault()
                      }
                      disabled={!currentNetwork}
                    />
                    <span>VPC</span>
                    </div>
                    <span className="text-[16px] text-[#6B5695] dark:text-[#B5A1DC]">~{calcVPCToUSD(sendAmount||0)} USDT</span>

                  </div>
                </div>
              </div>
              <div className="lg:-rotate-90">
                <ArrowCircleBottomIcon />
              </div>
              <div className="w-full flex-1 gap-4 exchange-color-main font-semibold text-xl">
                <div className="flex flex-col">
                  <div className="mb-5 text-[#6B5695] dark:text-[#B5A1DC]">
                    {t("bridgePage.toThisNetwork")}
                  </div>
                  <div className="flex items-center gap-4 w-full font-semibold exchange-bg rounded-2xl h-16 px-4 relative">
                    <button
                      type="button"
                      className={`flex w-full justify-between items-center gap-x-1.5 text-[#1D0F3A] dark:text-[#E8DEFD] font-normal text-[16px] rounded-2xl  whitespace-nowrap `}
                    >
                      <div className="flex items-center gap-2">
                        {currentNetwork.icon}
                        <span className="font-normal text-[16px]">
                          {" "}
                          {currentNetwork.label}
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="my-5 text-[#6B5695] dark:text-[#B5A1DC]">
                    {t("bridgePage.youReceive")}
                  </div>
                  <div className="exchange-bg px-4 exchange-color-second exchange-bg rounded-2xl text-xl h-16 ">
                    {currentNetwork && (
                      <div className="w-full grid grid-cols-12  h-full  ">
                        <div className=" col-span-4 flex items-center gap-2 border-r border-r-[#D2C5ED] h-full pr-4">
                          <div className="w-10 h-10 rounded-full">
                            <img
                              src={`${getStaticURL()}/assets/images/logo_vpc.svg`}
                              alt="logo-vpc"
                              className="w-full h-full"
                            />
                          </div>
                          <span className="font-normal text-[16px] truncate">
                            {" "}
                            VPC
                          </span>
                        </div>{" "}
                        {sendAmount && (
                          <div className=" text-[16px] col-span-8 flex items-center justify-between w-full pl-4">
                            <span>0.52916</span>
                            <span>~$311.46</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col">
              <span className="exchange-color-main text-base font-semibold">
                {" "}
                {t("bridgePage.bridgeOverview")}
              </span>
              <div className="flex items-center justify-between py-2 px-1 ">
                <span className="text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  {t("bridgePage.youPayOnVinachain")}
                </span>
                <span className="text-[16px] font-normal text-[#FF5263] dark:text-[#FF5263] !font-kanit">
                  -0.102563 VPC
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 ">
                <span className="text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  VPC {t("bridgePage.VPCTransferAmount")}
                </span>
                <span className=" text-[16px] font-normal text-[#1D0F3A] dark:text-[#E8DEFD]">
                  {/* {availableAmount} VPC */}
                  -0.1 VPC
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 pl-6  ">
                <span className=" flex items-center gap-1 text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  {t("bridgePage.includedFeeEstimate")}{" "}
                  <TooltipCustom
                    content={
                      <div className="flex flex-col text-left py-1">
                        <strong className="mb-2 font-semibold text-[14px]">
                          {t("bridgePage.includedFeeEstimate")}{" "}
                        </strong>
                        <span>
                          {t("bridgePage.includedFeeEstimateTooltip")}{" "}
                        </span>
                      </div>
                    }
                  >
                    <InfoIcon />
                  </TooltipCustom>
                </span>
                <span className="text-[16px] font-normal text-[#1D0F3A] dark:text-[#E8DEFD]">
                  {/* {FACTOR} */}
                  -0.001264 VPC
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#B5A1DC]">
                <span className=" flex items-center gap-1 text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  {t("bridgePage.gasFee")}{" "}
                  <TooltipCustom
                    content={
                      <div className="flex flex-col text-left py-1">
                        <strong className="mb-2 font-semibold text-[14px]">
                          {t("bridgePage.gasFee")}{" "}
                        </strong>
                        <span>{t("bridgePage.gasFeeTooltip")} </span>
                      </div>
                    }
                  >
                    <InfoIcon />
                  </TooltipCustom>
                </span>
                <span className="text-[16px] font-normal text-[#1D0F3A] dark:text-[#E8DEFD]">
                  {/* {currentMonthProfit.months} {t("stakingPage.months")} */}
                  -0.002563 VPC
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 border-b border-dashed !border-b-[#666666] dark:!border-b-[#B5A1DC] ">
                <span className="text-sm font-light text-[#6B5695] dark:text-[#B5A1DC] ">
                  {t("bridgePage.swapRate")}
                </span>
                <span className="text-[16px] font-semibold text-[#1D0F3A] dark:text-[#E8DEFD]">
                  1 VPC = 0.2916 VPC
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 ">
                <span className="text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  {t("bridgePage.youReceiveOnBNBChain")}
                </span>
                <span className="text-[16px] font-normal text-[#28A745] dark:text-[#28A745]">
                  +0.52916 VPC
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-1 ">
                <span className="flex items-center gap-1 text-sm font-light text-[#6B5695] dark:text-[#B5A1DC]">
                  {t("bridgePage.returnEstimate")}{" "}
                  <TooltipCustom
                    content={
                      <div className="flex flex-col text-left py-1">
                        <strong className="mb-2 font-semibold text-[14px]">
                          {t("bridgePage.returnEstimate")}{" "}
                        </strong>
                        <span>{t("bridgePage.returnEstimateTooltip")} </span>
                      </div>
                    }
                  >
                    <InfoIcon />
                  </TooltipCustom>
                </span>
                <span className="text-[16px] font-normal text-[#1D0F3A] dark:text-[#E8DEFD]">
                  +0.52916 VPC
                </span>
              </div>
            </div>
          </div>
        </div>
    </ScanLayout>
  );
}
