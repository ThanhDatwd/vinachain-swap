import { HelpIcon } from "@/assets/icons/HelpIcon";
import React from "react";
import { THEME } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export const MevInfo = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="flex flex-col bg-white dark:bg-[#111111] border border-[#bdc5d133] p-5 rounded-xl text-[14.5px] ">
      <div className="flex flex-col md:flex-row mb-4">
        <div className="flex items-center  mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400 ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400 ">
            {t("vinaScan.tabs.mevInfo.proposerFeeRecipient")}
          </p>
        </div>
        <div>
          <Link
            href="/coming-soon"
            className="link-color break-words"
          >
            0x6d2e03b7EfFEae98BD302A9F836D0d6Ab0002766
          </Link>
          &nbsp;{" "}
          <span className="text-[#212529] dark:text-gray200">
            (Fee Recipient: 0x6d2...766)
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-4">
        <div className="flex items-center  mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400 ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400 ">
            {t("vinaScan.tabs.mevInfo.mEVReward")}
          </p>
        </div>
        <div>
          <span className="text-[#212529] dark:text-gray200">
            1.940113626236917271 USDV
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="flex items-center  mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400 ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400 ">
            {t("vinaScan.tabs.mevInfo.mEVPayoutTxnHash")}
          </p>
        </div>
        <div>
          <Link
            href="/coming-soon"
            className="link-color break-words"
          >
            0xed2d4de78f113a668e5ea90b6d39066b61f7c43756b3a98583d689cc7bd643ca
          </Link>
        </div>
      </div>
    </div>
  );
};
