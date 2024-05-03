"use client";

import { useTranslation } from "react-i18next";

import { CardInfo } from "./CardInfo";
import { PieChart } from "./PieChart";
import { PresaleCard } from "./PresaleCard";
import { ReferralCard } from "./ReferralCard";
import { SaleEndInCard } from "./SaleEndInCard";
import { TokenCard } from "./TokenCard";
import { PoolDetailsSectionData, TokenSectionData } from "@/utils/constants";
import { isDarkTheme } from "@/utils/theme";
import { useTheme } from "@/hooks/useTheme";

export const PreSaleSectionForMobile = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-6 px-4">
      <PresaleCard />
      <SaleEndInCard />
      <TokenCard />
      <ReferralCard />
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
      <div className="bg-primary relative dark:bg-primaryDark min-h-[300px] flex flex-col justify-center rounded-lg p-2 text-xs lg:text-base text-[#333] dark:text-[#FAFAFA]">
        <p className="text-md lg:text-lg absolute z-10 top-4 left-4 text-[#333] dark:text-[#FAFAFA]">
          {t("tokenomics")}
        </p>

        <PieChart
          backgroundColor={isDarkTheme(theme) ? "#1E1E22" : "#C0E7E5"}
        />
      </div>
    </div>
  );
};
