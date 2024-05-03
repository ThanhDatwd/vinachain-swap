"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { DiscordIcon } from "@/assets/icons/DiscordIcon";
import { TelegramIcon } from "@/assets/icons/TelegramIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
import { getStaticURL } from "@/utils/constants";
import { isDarkTheme } from "@/utils/theme";
import { useTheme } from "@/hooks/useTheme";

export const PresaleCard = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="bg-primary dark:bg-primaryDark p-6 rounded-lg">
      <div className="flex gap-2 mb-4">
        <div className="w-14 h-14 lg:w-20 lg:h-20 bg-white rounded-full overflow-hidden flex justify-center items-center">
          <Image
            src={`${getStaticURL()}/assets/images/${
              isDarkTheme(theme) ? "logo-bg-orange" : "logo-bg-blue"
            }.svg`}
            alt="metamask"
            width={100}
            height={100}
          />
        </div>
        <div className="">
          <p className="text-base lg:text-2xl text-[#333] dark:text-[#FAFAFA] font-bold mb-2 md:mb-6">
            {t("preSaleTitle")}
          </p>
          <div className="flex gap-6 items-center">
            <Link href="/coming-soon" className="cursor-pointer">
              <TwitterIcon color={isDarkTheme(theme) ? "#FAFAFA" : "#333"} />
            </Link>
            <Link href="/coming-soon" className="cursor-pointer">
              <TelegramIcon color={isDarkTheme(theme) ? "#FAFAFA" : "#333"} />
            </Link>
            <Link href="/coming-soon" className="cursor-pointer">
              <DiscordIcon color={isDarkTheme(theme) ? "#FAFAFA" : "#333"} />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-xs lg:text-base text-[#333] dark:text-[#FAFAFA]">
        {t("preSaleSubTitle")}
      </p>
    </div>
  );
};
