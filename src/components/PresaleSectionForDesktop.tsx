"use client";

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { useTheme } from "@/hooks/useTheme";
import { isDarkTheme } from "@/utils/theme";
import { CardInfo } from "./CardInfo";
import { PieChart } from "./PieChart";
import { PresaleCard } from "./PresaleCard";
import { ReferralCard } from "./ReferralCard";
import { SaleEndInCard } from "./SaleEndInCard";
import { TokenCard } from "./TokenCard";
import { PoolDetailsSectionData, TokenSectionData } from "@/utils/constants";

export const PreSaleSectionForDesktop = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="flex flex-row gap-6 px-4">
      <div className="flex flex-col w-2/3 justify-between gap-6">
        <PresaleCard />
        <div className="flex flex-row gap-6">
          <CardInfo
            label={t("poolDetail")}
            data={PoolDetailsSectionData}
            containerStyle="p-4"
            itemStyle="py-2"
          />
          <CardInfo
            label={t("token")}
            data={TokenSectionData}
            containerStyle="p-4"
            itemStyle="py-2"
          />
        </div>
        <div className="bg-primary relative dark:bg-primaryDark min-h-[500px] flex flex-col justify-center rounded-lg p-2 text-xs lg:text-base text-[#333] dark:text-[#FAFAFA]">
          <p className="text-md lg:text-lg absolute z-10 top-4 left-4 text-[#333] dark:text-[#FAFAFA]">
            {t("tokenomics")}
          </p>
          <div className="w-full flex justify-center">
            <PieChart
              backgroundColor={isDarkTheme(theme) ? "#1E1E22" : "#C0E7E5"}
            />
          </div>
        </div>
      </div>
      <div className="w-1/3 text-[#333] flex flex-col gap-6 justify-between">
        <SaleEndInCard />
        <TokenCard />
        <ReferralCard />
      </div>
    </div>
  );
};
