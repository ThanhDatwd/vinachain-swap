"use client";

import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { TelegramIcon } from "@/assets/icons/TelegramIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
import { useTheme } from "@/hooks/useTheme";
import { SOCIAL_LIST, getStaticURL } from "@/utils/constants";
import { isDarkTheme } from "@/utils/theme";
import { DateTime } from "luxon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const AboutUsLinks = [
  { label: "privacyPolicy", href: "/privacy-policy" },
  { label: "termOfUse", href: "/coming-soon" },
];

const supportLinks = [
  { label: "supportCenter", href: "/coming-soon" },
  { label: "stakingGuide", href: "/coming-soon" },
  { label: "referralGuide", href: "/coming-soon" },
  { label: "payment", href: "/coming-soon" },
];

type Footer = {
  page: string;
  footerItemKey: string;
  footerItemValue: string;
  footerList: {
    label: string;
    link: string;
  }[];
}[];
interface Props {}
export const FooterScan: FC<Props> = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const pathname = usePathname();
  return (
    <div
      className={`w-screen ${
        pathname === "/coming-soon"
          ? "bg-transparent"
          : "bg-white dark:bg-[#111111]"
      }  !border-t !border-t-purple300 dark:!border-purple700`}
    >
      <div className="grid grid-cols-12 justify-between  container-xxl p-4 px-4  md:p-8 lg:py-6 lg:px-14">
        <div className="col-span-12 md:col-span-4 mb-4 mb-lg-0 md:pr-10 flex flex-col justify-between ">
          <div className="flex items-center mb-3">
            <img
              className="w-8 h-8"
              src={`${getStaticURL()}/assets/images/logo_${theme}.svg`}
              alt=""
            />
            <span className="text-lg text-[#1D0F3A] dark:text-[#E8DEFD] font-semibold ">
              {t("vinaChain.footer.poweredBy")}
            </span>
          </div>
          <span className="text-black800 dark:text-purple400 text-base">
            {t(`lastUpdated`)}{" "}
            {DateTime.now().toLocaleString(DateTime.DATE_FULL, {
              locale: t("dateFormat"),
            })}{" "}
          </span>
        </div>
        <div className="col-span-12 md:col-span-8 grid md:grid-cols-3  gap-4 md:gap-6">
          <div className="col-span-1 ">
            <h4 className="footer-title">
              {t("vinaChain.footer.aboutUs.title")}
            </h4>
            <ul className="list-unstyled list-sm-space fs-sm mb-0">
              {AboutUsLinks.map((link, index) => (
                <li key={index}>
                  <a className="footer-content" href={link.href}>
                    {t(`vinaChain.footer.aboutUs.${link.label}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 ">
            <h4 className="footer-title ">
              {" "}
              {t(`vinaChain.footer.support.title`)}
            </h4>
            <ul className="list-unstyled list-sm-space fs-sm mb-0">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a className="footer-content" href={link.href}>
                    {t(`vinaChain.footer.support.${link.label}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="footer-title">
              {t(`vinaChain.footer.followUs.title`)}
            </h4>
            <ul className="list-unstyled list-sm-space fs-sm mb-0 mt-2">
              <li>
                <Link
                  href={SOCIAL_LIST.TELEGRAM}
                  className="footer-content flex items-center gap-2 mb-2"
                >
                  <TelegramIcon />
                  Telegram
                </Link>
              </li>
              <li>
                <Link
                  href={SOCIAL_LIST.TWITTER}
                  className="footer-content flex items-center gap-2 mb-2"
                >
                  <TwitterIcon
                    color={isDarkTheme(theme) ? "#FFF" : "#000"}
                    width={24}
                    height={24}
                  />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href={SOCIAL_LIST.FACEBOOK}
                  className="footer-content flex items-center gap-2"
                >
                  <FacebookIcon />
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
