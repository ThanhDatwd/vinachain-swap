"use client";

import { ArrowCircleBottomIcon } from "@/assets/icons/ArrowCircleBottomIcon";
import { ExpendMoreIcon } from "@/assets/icons/ExpendMoreIcon";
import { Dropdown } from "@/components/Dropdown";
import { BalanceCard } from "@/components/Exchange/BalanceCard";
import { HeaderExchange } from "@/components/HeaderExchange";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useTheme } from "@/hooks/useTheme";
import { EXCHANGE_OPTIONS, THEME } from "@/utils/constants";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ExchangePage() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [exchange, setExchange] = useState<string>(EXCHANGE_OPTIONS[0].value);

  const handleChange = (value: string) => {
    setExchange(value);
  };

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark font-sans-serif relative">
      <HeaderExchange
        title={t("exchangePage.title")}
        content={t("exchangePage.subTitle")}
      />
      <div className="flex justify-center px-4 py-8 lg:px-0  lg:pb-10">
        <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-3/4 xl:w-3/5">
          <div className="flex-1 exchange-card gap-[17.5px] exchange-color-heading font-semibold text-xl">
            {t("exchangePage.yourBalance")}
            <BalanceCard
              title={t("exchangePage.vpcAmount")}
              value={0}
              currency="VPC"
            />
            <BalanceCard
              title={t("exchangePage.wvpcAmount")}
              value={0}
              currency="VPC"
            />
            <BalanceCard
              title={t("exchangePage.rvpcAmount")}
              value={0}
              currency="VPC"
            />
            <span className="text-base">
              {t("exchangePage.exchangeRate")}&nbsp;
              <span className="exchange-color-main font-normal">
                1 VPC = 1 WVPC = 1 RVPC
              </span>
            </span>
          </div>
          <div className="flex-1 exchange-card gap-4 exchange-color-main font-semibold text-xl">
            {t("exchangePage.exchangeFrom")}
            <div className="flex flex-col items-center gap-2">
              <div className="w-full flex items-center exchange-bg rounded-2xl">
                <div className="flex items-center gap-4 py-[22px] px-4 border-r border-purple300 dark:border-purple700 exchange-color-main text-base font-normal">
                  RVPC
                  <ExpendMoreIcon
                    color={theme === THEME.DARK ? "#B5A1DC" : "#6B5695"}
                  />
                </div>
                <span className="px-4 exchange-color-second">0.0</span>
              </div>
              <ArrowCircleBottomIcon />
              <div className="flex flex-col gap-4 w-full font-semibold">
                {t("exchangePage.youWillGet")}
                <div className="flex justify-between exchange-bg rounded-2xl py-[22px] px-4 exchange-color-second">
                  <span>0.0</span>
                  <span className="exchange-color-main font-semibold">VPC</span>
                </div>
              </div>
            </div>
            <button className="button-transfer">
              {t("exchangePage.exchange")}
            </button>
          </div>
        </div>
      </div>
    </ScanLayout>
  );
}
