"use client";
import { BeaconWithdrawalTable } from "@/components/BeaconWithdrawal/BeaconWithdrawalTable";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useTranslation } from "react-i18next";

const BeaconWithdrawalPage = () => {
  const { t } = useTranslation();

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-[#181818] dark:bg-primaryDark font-sans-serif relative">
      <div className="container-xxl">
        <div className="flex flex-col gap-4 md:gap-6 px-3  md:px-0 lg:px-0">
          <div>
            <div className="py-5 flex flex-col  gap-2 border-b border-b-[#e9ecef] dark:border-b-[#222]">
              <div className="flex ">
                <h1 className="text-[18.75px] font-bold mr-1 text-[#212529] dark:text-[#FAFAFA]">
                  {t("beaconWithdrawal.title")}
                </h1>
              </div>
            </div>
          </div>
          <BeaconWithdrawalTable />
        </div>
      </div>
    </ScanLayout>
  );
};

export default BeaconWithdrawalPage;
