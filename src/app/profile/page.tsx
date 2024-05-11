"use client";

import { ShieldPersonIcon } from "@/assets/icons/ShieldPersonIcon";
import { TVSignInIcon } from "@/assets/icons/TVSigninIcon";
import { AccountOverviewTab } from "@/components/Profile/AccountOverviewTab";
import { AccountSettingsTab } from "@/components/Profile/AccountSettingsTab";
import { TabProfile } from "@/components/TabProfile";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/utils/constants";
import { useTranslation } from "react-i18next";

export default function HistoryStakingPage() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { currentUser } = useAuth();

  const DATA_TABS = [
    {
      hash: "",
      label: t("profile.accountOverview"),
      icon: (
        <TVSignInIcon color={theme === THEME.DARK ? "#E8DEFD" : "#1D0F3A"} />
      ),
      content: <AccountOverviewTab />,
    },
    {
      hash: "account-setting",
      label: t("profile.accountSetting"),
      icon: (
        <ShieldPersonIcon
          color={theme === THEME.DARK ? "#E8DEFD" : "#1D0F3A"}
        />
      ),
      content: <AccountSettingsTab />,
    },
  ];

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark font-sans-serif relative">
      <div className="text-base text-purple550 dark:text-purple600 px-4 lg:px-24 xl:px-[169px]">
        <div className="flex flex-col gap-6 py-8 md:py-14 ">
          <h1 className=" text-[32px] lg:text-5xl tracking-wide text-[#763DE8] dark:text-[#9F70FD] uppercase font-bold">
            {t("profile.title")}
          </h1>
          <TabProfile
            tabs={DATA_TABS}
            tabTopContent={
              <div className="flex flex-col w-full lg:min-w-[266px]">
                <span className="exchange-color-heading text-xl font-normal mb-1">
                  {currentUser.username}
                </span>
                <span className="exchange-color-main text-base">
                  {currentUser.email}
                </span>
                <hr className="line-profile" />
              </div>
            }
          />
        </div>
      </div>
      {/* <div className="flex lg:justify-center pt-14 px-4 lg:px-0">
        <div className="flex flex-col gap-14 items-start w-full lg:w-auto">
          <h2 className="exchange-color-heading text-[32px] lg:text-5xl">
            {t("profile.title")}
          </h2>
          <TabProfile
            tabs={DATA_TABS}
            tabTopContent={
              <div className="flex flex-col w-full lg:min-w-[266px]">
                <span className="exchange-color-heading text-xl font-normal mb-1">
                  {currentUser.username}
                </span>
                <span className="exchange-color-main text-base">
                  {currentUser.email}
                </span>
                <hr className="line-profile" />
              </div>
            }
          />
        </div>
      </div> */}
    </ScanLayout>
  );
}
