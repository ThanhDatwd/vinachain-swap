"use client";
import { LightBulbIcon } from "@/assets/icons/LightBulbIcon";
import { BeaconDepositTable } from "@/components/BeaconDeposit/BeaconDepositTable";
import { InternalTransactionsTable } from "@/components/InternalTransaction/InternalTransactionTable";
import { TokensTable } from "@/components/Tokens/TokensTable";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const TokenPage = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-[#181818] dark:bg-primaryDark font-sans-serif relative">
      <div className="container-xxl">
        <div className="flex flex-col gap-4 md:gap-6 px-3  md:px-0 lg:px-0">
          <div>
            <div className="py-5 flex flex-col  gap-2 border-b border-b-[#e9ecef] dark:border-b-[#222]">
              <div className="flex ">
                <h1 className="text-[18.75px] font-bold mr-1 text-[#212529] dark:text-[#FAFAFA]">
                  {t("topTokens.title")}
                </h1>
              </div>
            </div>
          </div>
          <TokensTable />
        </div>
        <div className="flex items-start lg:items-center gap-[2px] text-xs text-[#6c757d] dark:text-[#bbb] my-4 px-3 lg:px-0">
          <div className="pt-[2px] lg:pt-0">
            <LightBulbIcon />
          </div>
          <span>
            {t("topTokens.notesContent")}&nbsp;
            <Link href="/coming-soon" className="link-color">
              {t("topTokens.erc20")}
            </Link>
            &nbsp;
            {t("topTokens.notesSubContent")}&nbsp;
            <Link href="/coming-soon" className="link-color">
              {t("topTokens.knowledgeBase")}.
            </Link>
          </span>
        </div>
      </div>
    </ScanLayout>
  );
};

export default TokenPage;
