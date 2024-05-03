"use client";
import { DownloadIcon } from "@/assets/icons/DownloadIcon";
import { LastestTradesTable } from "@/components/NFTTrades/LastestTradesTable";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/utils/constants";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const LastestTradesPage = () => {
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
                  {t("lastestTrades.title")}
                </h1>
              </div>
            </div>
          </div>
          <LastestTradesTable />
          <div className="flex gap-1 items-center justify-end text-xs text-gray550">
            [{t("lastestTrades.download")}{" "}
            <Link href="/coming-soon" className="text-[#6ab5db] hover:text-[#066a9c] font-semibold">{t("lastestTrades.csvExport")}</Link>
            <DownloadIcon width={11.6} height={12} color={theme === THEME.DARK ? "" : ""}/>]
          </div>
        </div>
      </div>
    </ScanLayout>
  );
};

export default LastestTradesPage;
