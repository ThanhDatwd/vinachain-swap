"use client";

import { HeaderExchange } from "@/components/HeaderExchange";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { formatTrxIdSwap } from "@/utils/formatTrxId";
import { useTranslation } from "react-i18next";

export default function ClaimPage() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const vpcAvailable = 0;
  const fee = 0.01;
  const total = vpcAvailable * fee;
  const { currentUser } = useAuth();

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark font-sans-serif relative">
      <HeaderExchange
        title={`VPC ${t("exchangePage.claimedTitle")}`}
        content={t("exchangePage.claimedSubTitle")}
      />
      <div className="flex justify-center px-4 py-8 lg:px-0  lg:pb-10">
        <div className="flex flex-col gap-6 p-6 rounded-2xl boxShadowStaking exchange-color-main w-full lg:w-fit">
          <div className="flex flex-col lg:flex-row gap-6 text-xl font-semibold">
            <div className="flex flex-col gap-4 w-full lg:min-w-[234px]">
              {t("exchangePage.walletAddress")}
              <div className="exchange-bg py-[22px] px-4 rounded-2xl exchange-color-second">
                {currentUser?.walletAddress &&
                  formatTrxIdSwap(currentUser?.walletAddress)}
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full lg:min-w-[234px]">
              {t("exchangePage.enterVPCToBeClaimed")}
              <div className="flex justify-between font-normal text-base exchange-bg py-[22px] px-4 rounded-2xl">
                <span className="exchange-color-second">0.0</span>
                VPC
              </div>
              <div className="flex justify-between text-sm font-semibold text-secondary dark:text-[#FF8911]">
                <span className="exchange-color-main text-sm font-normal">
                  {vpcAvailable.toLocaleString("en-US")} VPC{" "}
                  {t("exchangePage.available")}
                </span>
                {t("exchangePage.max")}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 exchange-color-main text-base font-semibold">
            {t("exchangePage.claimingOverview")}
            <div className="claimed-block font-light">
              {t("exchangePage.vpcToBeClaimed")}
              <span className="font-light exchange-color-second">
                {vpcAvailable} VPC
              </span>
            </div>
            <div className="claimed-block font-light">
              {t("exchangePage.fee")}
              <span className="font-light exchange-color-second">
                {fee} VPC
              </span>
            </div>
            <div className="claimed-block">
              {t("exchangePage.total")}
              <span className="exchange-color-second font-semibold">
                {total} VPC
              </span>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <button className="button-transfer w-full lg:w-1/2">
              {t("exchangePage.claim")}
            </button>
          </div>
        </div>
      </div>
    </ScanLayout>
  );
}
