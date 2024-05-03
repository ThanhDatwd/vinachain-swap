"use client";
import HashtagIcon from "@/assets/icons/HashtagIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { ConsensusInfo } from "@/components/block/ConsensusInfo";
import { MevInfo } from "@/components/block/MevInfo";
import { OverviewTab } from "@/components/block/OverviewTab";
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

export default function BlockDetailPage() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const params = useParams();

  const DATA_TABS = [
    { hash: "", label: "Overview Tab", content: <OverviewTab /> },
    {
      hash: "consensusinfo",
      label: "Consensus Info",
      content: <ConsensusInfo />,
    },
    { hash: "mevinfo", label: "Mev Info", content: <MevInfo /> },
    {
      hash: "blobinfo",
      label: "Blob Info",
      content: <BlobInfo />,
    },
  ];
  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-[#181818]">
      <div className=" container-xxl">
        <div className="flex flex-col gap-4 md:gap-6 px-3  md:px-0 lg:px-0">
          <div>
            <div className="py-5 flex flex-col  gap-2 border-b border-b-[#e9ecef] dark:border-b-[#222]">
              <div className="flex ">
                <h1 className="text-[18.75px] font-bold mr-1 text-[#212529] dark:text-[#FAFAFA]">
                  {t("block.title")}
                </h1>
                <span className="text-gray550 dark:text-gray400">
                  #{params?.id}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <TooltipCustom content="This block contains one or more MEV transactions and was not ordered by gas.">
                  <div className="text-[10.8px] hover:bg-[#e9ecef] dark:hover:bg-[#222222] flex items-center gap-1 w-fit bg-white dark:bg-[#111111]   font-normal border border-dark dark:border-[#fafafa26] border-opacity-20 text-dark dark:text-gray200 text-nowrap leading-none rounded-full py-1.5 px-2 cursor-pointer ">
                    <HashtagIcon
                      color={theme === THEME.DARK ? "#F5F5F5" : "#000000"}
                    />
                    MEW Block
                    <InfoIcon
                      color={theme === THEME.DARK ? "#F5F5F5" : "#000000"}
                    />
                  </div>
                </TooltipCustom>
                <TooltipCustom content="Transactions & blocks with this label include another MEV-related label provided by EigenPhi.">
                  <div className="text-[10.8px] hover:bg-[#e9ecef] dark:hover:bg-[#222222] flex items-center gap-1 w-fit bg-white dark:bg-[#111111]   font-normal border border-dark dark:border-[#fafafa26] border-opacity-20 text-dark dark:text-gray200 text-nowrap leading-none rounded-full py-1.5 px-2 cursor-pointer ">
                    <HashtagIcon
                      color={theme === THEME.DARK ? "#F5F5F5" : "#000000"}
                    />
                    Eigenphi
                    <InfoIcon
                      color={theme === THEME.DARK ? "#F5F5F5" : "#000000"}
                    />
                  </div>
                </TooltipCustom>
              </div>
            </div>
            {/* <div className="text-[14.5px] text-gray550 dark:text-gray400 py-4 ">
              <b>{t("block.sponsored")}: &nbsp; </b>

              <b>Stake:&nbsp;</b>
              <span>
                200% Bonus, 75k Raffle, Best VIP Program, Instant Withdrawals -
                Provably Fair. &nbsp;
              </span>
              <Link href={"coming-soon"} className="text-[#0784C3] font-bold">
                Claim Bonus
              </Link>
            </div> */}
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
