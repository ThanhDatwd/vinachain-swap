import React, { ReactNode, useState } from "react";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { THEME } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";
import { KeyboardArrowLeft } from "@/assets/icons/KeyboardArrowLeft";
import { KeyboardArrowRight } from "@/assets/icons/KeyboardArrowRight";
import { HourGlassIcon } from "@/assets/icons/HourGlassIcon";
import { TimerIcon } from "@/assets/icons/TimerIcon";
import Link from "next/link";
import { CopyIcon } from "@/assets/icons/CopyIcon";
import { RainbowIcon } from "@/assets/icons/RainbowIcon";
import { FireIcon } from "@/assets/icons/FireIcon";
import { MinusIcon } from "@/assets/icons/MinusIcon";
import { boolean } from "yup";
import PlusIcon from "@/assets/icons/PlusIcon";
import { TooltipCustom } from "../Tooltip";

export const OverviewTab = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [isShowmore, setIsShowmore] = useState(false);

  return (
    <div className="flex flex-col gap-5 text-[14.5px]">
      <div className="flex flex-col bg-white dark:bg-[#111111] border border-[#bdc5d133] p-5 rounded-xl">
        <div className="flex  md:flex-row mb-4">
          <div className="flex items-center  mb-2 md:mb-0 w-1/3 md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.overview.blockHeight")}
            </p>
          </div>
          <div className="flex item-center gap-1 w-1/3 md:w-3/4">
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              181712406
            </p>
            <KeyboardArrowLeft />
            <KeyboardArrowRight />
          </div>
        </div>
        <div className="flex  md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0  w-1/3 md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.overview.status")}
            </p>
          </div>
          <TooltipCustom content="This block is unfinalized and may be susceptible to reorgs.">
            <div className="flex items-center gap-[2px] bg-[#adb5bd1a] border-[#DCDCDC] border border-opacity-25  py-[6px] px-2 rounded-[4px]">
              <HourGlassIcon
                color={theme === THEME.DARK ? "#BBBBBB" : "#6C757D"}
              />
              <p className="text-[10px] font-bold leading-[1]">Unfinalized</p>
            </div>
          </TooltipCustom>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.overview.timestamp")}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <TimerIcon color={theme === THEME.DARK ? "#FAFAFA" : "#333"} />
            <p className="text-[14.5px] ">
              7 mins ago (Dec 7, 2023 at 8:24 am UTC)
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.overview.proposeOne")}
            </p>
          </div>
          <div className="text-[14.5px]">
            Block proposed on slot{" "}
            <Link
              className="link-color"
              href="/coming-soon"
            >
              123456
            </Link>
            , epoch{" "}
            <Link
              className="link-color"
              href="/coming-soon"
            >
              123456
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.overview.transactions")}
            </p>
          </div>
          <div>
            <TooltipCustom content="Click to view Transactions">
              <Link
                className="link-color"
                href="/coming-soon"
              >
                303 transactions
              </Link>{" "}
            </TooltipCustom>
            &nbsp;
            and{" "}
            <TooltipCustom content="Click to view internal transactions">
              <Link
                className="link-color"
                href="/coming-soon"
              >
                71 contract internal transactions in this block
              </Link>
            </TooltipCustom>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.overview.withdrawals")}
            </p>
          </div>
          <div>
            <TooltipCustom content="Click to view withdrawals">
              <Link
                className="link-color"
                href="/coming-soon"
              >
                16 withdrawals
              </Link>
            </TooltipCustom>
            &nbsp;
            in this block
          </div>
        </div>
      <div className="w-full my-5 h-[1px] bg-[#DCDCDC] dark:bg-gray700"></div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.overview.freeRecipient")}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <TooltipCustom content="0x22eEC85ba6a5cD97eAd4728eA1c69e1D9c6fa778">
              <Link
                className="link-color"
                href="/coming-soon"
              >
                beavaerbuild
              </Link>
            </TooltipCustom>
            &nbsp;
            <CopyIcon color={theme === THEME.DARK ? "#FAFAFA" : "#333"} />
            &nbsp; in 12 secs
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.overview.blockReward")}
            </p>
          </div>
          <div>
            <p className="text-[14.5px] break-words">
              0.07531995379530558 VPC (0 + 0.886028519580104528 -
              0.810708565784798948)
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.overview.totalDifficulty")}
            </p>
          </div>
          <div>
            <p className="text-[14.5px]">58,750,003,716,598,352,816,469</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.overview.size")}
            </p>
          </div>
          <div>
            <p className="text-[14.5px]">222,952 bytes</p>
          </div>
        </div>

      <div className="w-full my-5 h-[1px] bg-[#DCDCDC] dark:bg-gray700"></div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.overview.gasUsed")}
            </p>
          </div>
          <div className="flex items-center gap-1">
            25,717,948(85.73%)
            <RainbowIcon />
            in 12 secs
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.overview.gasLimit")}
            </p>
          </div>
          <div>
            <p className="text-[14.5px] ">30.000.000</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.overview.baseFeePerGas")}
            </p>
          </div>
          <div>
            <p className="text-[14.5px] ">
              0.000000031523065751 USDT (31.523065751 Gwei)
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.overview.burntFees")}
            </p>
          </div>
          <div className="flex items-center gap-1">
            🔥
            <p className="text-[14.5px]">0.810708565784798948 USDV</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.overview.extraData")}
            </p>
          </div>
          <div>
            <p className="text-[14.5px] break-words">
              beaverbuild.org (Hex:0x6265617665726275696c642e6f7267)
            </p>
          </div>
        </div>
      </div>
      <div className=" relative overflow-hidden flex flex-col bg-white dark:bg-[#111111] border border-[#bdc5d133] p-5 rounded-2xl">
        <div
          className={` overflow-y-hidden duration-300 ease-linear flex flex-col ${
            isShowmore ? "h-[430px] md:h-[205px]" : "h-0"
          }`}
        >
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
              <HelpIcon />
              <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
                {t("vinaScan.tabs.overview.hash")}
              </p>
            </div>
            <div>
              <p className="text-[14.5px] break-words ">
                0xab0b4a85fb89aecb1dd9fcf83dd05a3d55a197a1c8b8f2d34063e056f50b080e
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
              <HelpIcon />
              <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
                {t("vinaScan.tabs.overview.parentHash")}
              </p>
            </div>
            <div>
              <Link
                href="//coming-soon"
                className="link-color break-words"
              >
                0x276e701704174274d20bd0c0ea90b9b6f352e79e705daf09d5d4f68b35e95be9
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
              <HelpIcon />
              <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
                {t("vinaScan.tabs.overview.stateRoot")}
              </p>
            </div>
            <div>
              <p className="text-[14.5px] break-words">
                0x79656cca7777a3ca41f1762c7208db6b72fccebff75904fb3f770d39cf9b3d63
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
              <HelpIcon />
              <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
                {t("vinaScan.tabs.overview.withdrawalsRoots")}
              </p>
            </div>
            <div>
              <p className="text-[14.5px] break-words">
                0xe297adb16f4f4dfd9cababb3d28622bdd01276dbaca1c3aebdb2ef8e68468851
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
              <HelpIcon />
              <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
                {t("vinaScan.tabs.overview.nonce")}
              </p>
            </div>
            <div>
              <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
                0x0000000000000000
              </p>
            </div>
          </div>
        <div className="w-full my-5 h-[1px] bg-[#DCDCDC] dark:bg-gray700"></div>
        </div>
        <div className="flex">
          <div className="flex items-center mb-2 md:mb-0 w-1/2 md:w-1/4 gap-1 ">
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.moreDetail")}
            </p>
          </div>
          <div
            className="flex gap-1 items-center cursor-pointer"
            onClick={() => setIsShowmore(!isShowmore)}
          >
            {isShowmore ? (
              <MinusIcon color={theme === THEME.DARK ? "#DA6C1D" : "#0784c3"} />
            ) : (
              <PlusIcon color={theme === THEME.DARK ? "#DA6C1D" : "#0784c3"} />
            )}

            <span className="link-color whitespace-nowrap">
              Click to show {isShowmore ? "less" : "more"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
