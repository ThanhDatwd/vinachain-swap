"use client";
import HashtagIcon from "@/assets/icons/HashtagIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { ConsensusInfo } from "@/components/block/ConsensusInfo";
import { MevInfo } from "@/components/block/MevInfo";
import { Tabs } from "@/components/Tabs";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import Link from "next/link";

import React from "react";
import { BlobInfo } from "@/components/block/BlobInfo";
import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/utils/constants";
import { InfoIcon } from "@/assets/icons/InfoIcon";
import LightIcon from "@/assets/icons/LightIcon";
import { useTranslation } from "react-i18next";
import { TooltipCustom } from "@/components/Tooltip";
import { useParams } from "next/navigation";
import { OverviewTab } from "@/components/transactions/OverviewTab";
import { LogTabs } from "@/components/transactions/LogsTab";
import { StateTab } from "@/components/transactions/StateTab";
import { ChevronDownIcon } from "@/assets/icons/ChevronDownIcon";

export default function BlockDetailPage() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const params = useParams();

  const DATA_TABS = [
    { hash: "", label: "Overview Tab", content: <OverviewTab /> },
    { hash: "eventlog", label: "Log", content: <LogTabs /> },
    {
      hash: "statechange",
      label: "State",
      content: <StateTab />,
    },
  ];
  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-[#181818]">
      <div className=" container-xxl">
        <div className="flex flex-col gap-4 md:gap-6 px-3  md:px-0 lg:px-0">
          <div>
            <div className="py-5 flex flex-col  gap-2 border-b border-b-[#e9ecef] dark:border-b-[#222]">
              <div className="flex items-center justify-between">
                <div className="flex ">
                  <h1 className="text-[18.75px] font-bold mr-1 text-[#212529] dark:text-[#FAFAFA]">
                    {t("transactionPage.title")}
                  </h1>
                  <span className="text-gray550 dark:text-gray400">
                    #{params?.id}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="button-address">
                    {t("vinaScan.address.buy")}
                    <ChevronDownIcon />
                  </button>
                  <button className="button-address">
                    {t("vinaScan.address.exchange")}
                    <ChevronDownIcon />
                  </button>
                  <button className="button-address">
                    {t("vinaScan.address.play")}
                    <ChevronDownIcon />
                  </button>
                  <button className="button-address">
                    {t("vinaScan.address.gaming")}
                    <ChevronDownIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Tabs tabs={DATA_TABS} />
          <div className="flex gap-1">
            <div>
              <LightIcon color={theme === THEME.DARK ? "#F5F5F5" : "#000000"} />
            </div>
            <span className="text-[12.56px] text-gray550">
              {t("block.note")}
            </span>
          </div>
        </div>
      </div>
    </ScanLayout>
  );
}
