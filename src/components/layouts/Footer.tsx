"use client";

import { DiscordIcon } from "@/assets/icons/DiscordIcon";
import { TelegramIcon } from "@/assets/icons/TelegramIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
import { useTheme } from "@/hooks/useTheme";
import { isDarkTheme } from "@/utils/theme";
import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";

type Footer = {
  page: string;
  footerItemKey: string;
  footerItemValue: string;
  footerList: {
    label: string;
    link: string;
  }[];
}[];
interface Props {
  footerData: Footer;
}
export const Footer: FC<Props> = ({ footerData }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <div
      className={`pb-8 container-xxl md:py-20 px-4 flex flex-col gap-10 max-w-[1504px] mx-auto`}
    >
      <div className="flex justify-between items-center flex-wrap gap-1">
        <span className="text-[14px]">
          {t("dateUpdate", { value: new Date().toDateString() })}
        </span>
        <div className="flex gap-6 items-center">
          <Link href="/coming-soon" className="cursor-pointer">
            <TwitterIcon color={isDarkTheme(theme) ? "#FAFAFA" : "#C4C4C4"} />
          </Link>
          <Link href="/coming-soon" className="cursor-pointer">
            <TelegramIcon color={isDarkTheme(theme) ? "#FAFAFA" : "#C4C4C4"} />
          </Link>
          <Link href="/coming-soon" className="cursor-pointer">
            <DiscordIcon color={isDarkTheme(theme) ? "#FAFAFA" : "#C4C4C4"} />
          </Link>
        </div>
      </div>
      <div className="flex justify-between flex-col gap-4 md:gap-2 md:flex-row  text-[14px] ">
        {footerData.map((footerItem, index) => {
          const footerItemLabel = `${footerItem.page}.footer.${footerItem.footerItemKey}`;
          return (
            <div key={index} className="flex flex-col gap-4 justify-start ">
              <span className="font-semibold">
                {t(`${footerItemLabel}.${footerItem.footerItemValue}`)}
              </span>
              <div
                className={`flex flex-col gap-4 font-normal text-[${
                  isDarkTheme(theme) ? "green" : "#666"
                }] `}
              >
                {footerItem.footerList.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="cursor-pointer hover:text-[#3B3BFC] dark:hover:text-scanDark"
                  >
                    {t(`${footerItemLabel}.${item.label}`)}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
