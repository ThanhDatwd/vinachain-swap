"use client";
import { BeaconDepositTable } from "@/components/BeaconDeposit/BeaconDepositTable";
import { InternalTransactionsTable } from "@/components/InternalTransaction/InternalTransactionTable";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";

const BeaconDepositPage = () => {
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
                  {t("internalTransaction.title")}
                </h1>
              </div>
            </div>
          </div>
          <BeaconDepositTable />
        </div>
      </div>
    </ScanLayout>
  );
};

export default BeaconDepositPage;
