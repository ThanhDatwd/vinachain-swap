import { DiscordIcon } from "@/assets/icons/DiscordIcon";
import { ArrowUpRightIcon } from "@/assets/icons/ArrowUpRightIcon";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/hooks/useTheme";
import { isDarkTheme } from "@/utils/theme";

export const CommunityCard = ({ discordUrl }: { discordUrl: string }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="flex flex-col md:flex-row gap-[46px] w-full md:py-20 md:pl-8 md:pr-[121px]">
      <div className="flex flex-col justify-center w-full md:w-2/5 gap-6 px-4 pt-8 md:px-0 md:pt-0">
        <h5 className="text-2xl md:text-[32px] text-[#333] dark:text-[#FAFAFA] font-bold">
          {t("communityVinachain")}
        </h5>
        <div className="text-sm md:text-base text-[#333] dark:text-[#FAFAFA]">
          <span>{t("joinAlmost")}</span>&nbsp;
          <span className="font-bold">{`40.000 ${t("members")}`}</span>&nbsp;
          <span>{t("onOur")}</span>&nbsp;
          <Link
            href={"/coming-soon"}
            className="text-[#3B3BFC] dark:text-secondaryDark hover:underline"
          >
            {t("discordServer")}
          </Link>
        </div>
        <p className="text-sm md:text-base">{t("communityVinachainDesc")}</p>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-3/5">
        <div className="flex flex-col justify-between gap-20 md:gap-0 h-full px-4 py-5 md:px-3 md:py-10 w-full md:w-1/2 bg-gradient-to-r from-[#E6E3F7] dark:from-[#323544] from-51.24% to-[#DFEAEE] dark:to-[#354546] to-95.28%">
          <div className="flex flex-col gap-8 text-center">
            <div className="flex flex-col text-2xl font-bold">
              <h5 className="text-[#333] dark:text-[#FAFAFA]">
                {t("qaSessions")}
              </h5>
              <h5 className="text-[#333] dark:text-[#FAFAFA]">
                {t("vinachainPortal")}
              </h5>
            </div>
            <p className="text-[#333] dark:text-[#FAFAFA]">
              December 10, 2023 at 23:30
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="hover:bg-white hover:opacity-[0.92] hover:scale-105 hover:transform duration-300">
              <Link
                href="/coming-soon"
                className="flex items-center justify-center gap-2 py-2 bg-secondary dark:bg-secondaryDark"
              >
                <DiscordIcon color="#FAFAFA" />
                <div className="text-sm md:text-base text-[#FAFAFA] text-center">
                  {t("joinDiscordBtn")}
                </div>
                <ArrowUpRightIcon color="#FAFAFA" />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 hover:scale-105 hover:transform duration-300">
              <Link
                href="/coming-soon"
                className="text-sm md:text-base  font-bold text-center text-secondary dark:text-secondaryDark underline"
              >
                {t("calendarBtn")}
              </Link>
              <ArrowUpRightIcon
                color={isDarkTheme(theme) ? "#D9610B" : "#3B3BFC"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-8 w-full md:w-1/2 bg-[#F7F7F7] dark:bg-[#1E1E22] pr-[58px] md:pr-8">
          <p className="text-lg text-[#333] font-bold dark:text-[#FAFAFA]">
            {t("upComingCalls")}
          </p>
          <div className="flex gap-8">
            <p className="text-[#333] dark:text-[#FAFAFA] flex-1">
              Dec 14, 2023
            </p>
            <Link
              href="/coming-soon"
              className="text-sm md:text-base flex-1 text-[#3B3BFC] dark:text-secondaryDark hover:underline"
            >
              ethereum.org Office Hours: How to create content on ethereum.org
            </Link>
          </div>
          <div className="flex gap-8">
            <p className="text-[#333] dark:text-[#FAFAFA] flex-1">
              Dec 19, 2023
            </p>
            <Link
              href="/coming-soon"
              className="text-sm md:text-base flex-1 text-[#3B3BFC] dark:text-secondaryDark hover:underline"
            >
              ethereum.org Office Hours: How to create content on ethereum.org
            </Link>
          </div>
          <p className="text-lg font-bold text-[#333] dark:text-[#FAFAFA]">
            {t("previousComingCalls")}
          </p>
          <div className="flex gap-8">
            <p className="text-[#333] dark:text-[#FAFAFA] flex-1">
              Dec 14, 2023
            </p>
            <Link
              href="/coming-soon"
              className="text-sm md:text-base flex-1 text-[#3B3BFC] dark:text-secondaryDark hover:underline"
            >
              ethereum.org Office Hours: How to create content on ethereum.org
            </Link>
          </div>
          <div className="flex gap-8">
            <p className="text-[#333] dark:text-[#FAFAFA] flex-1">
              Dec 19, 2023
            </p>
            <Link
              href="/coming-soon"
              className="text-sm md:text-base flex-1 text-[#3B3BFC] dark:text-secondaryDark hover:underline"
            >
              ethereum.org Office Hours: How to create content on ethereum.org
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
