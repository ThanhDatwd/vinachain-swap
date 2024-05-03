"use client";

import { useTheme } from "@/hooks/useTheme";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import { Logo } from "../Logo";
import AddNetworkButton from "../controls/buttons/AddNetworkButton";
import { getStaticURL } from "@/utils/constants";
import ScrollToTopButton from "../controls/buttons/BackToTopButton";

const companyLinks = [
  // { label: "About Us", href: "/about-us" },
  { label: "Brand Assets", href: "/brand-assets" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Terms", href: "/terms-of-service" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Bug Bounty", href: "/bug-bounty" },
];

const communityLinks = [
  { label: "API Documentation", href: "/coming-soon" },
  { label: "Knowledge Base", href: "/coming-soon" },
  { label: "Network Status", href: "/coming-soon" },
  { label: "Newsletters", href: "/coming-soon" },
];

const productLinks = [
  { label: "Advertise", href: "/coming-soon" },
  { label: "Explorer-as-a-Service (EaaS)", href: "/coming-soon" },
  { label: "API Plans", href: "/coming-soon" },
  { label: "Priority Support", href: "/coming-soon" },
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
  return (
    <div className="w-screen bg-gray200 dark:bg-gray800">
      <div className="flex justify-end md:pt-8 py-6 container-xxl p-4 px-4  md:p-8 lg:px-14">
        <ScrollToTopButton />
      </div>
      <div className=" container-xxl  px-4  lg:px-14">
        <hr className="" />
      </div>
      <div className="grid grid-cols-12 justify-between md:pt-8  container-xxl p-4 px-4  md:p-8 lg:py-6 lg:px-14">
        <div className="col-span-12 md:col-span-4 mb-4 mb-lg-0 md:pr-10 ">
          <div className="flex items-center mb-3">
            <img
              className="w-8 h-8"
              src={`${getStaticURL()}/assets/images/logo_${theme}.svg`}
              alt=""
            />
            <span className="text-lg">Powered by Vinachain</span>
          </div>
          <p className="text-xs">
            Vinascan is a Block Explorer and Analytics Platform for Vinachain, a
            decentralized smart contracts platform.
          </p>
          <div className="mt-4 mb-6">
            <AddNetworkButton />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 grid md:grid-cols-3 grid-cols-2 gap-6">
          <div className="col-span-1 mb-10 mb-md-0">
            <h4 className="text-sm font-bold mb-1">Company</h4>
            <ul className="list-unstyled list-sm-space fs-sm mb-0">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="hover:text-blue dark:hover:text-scanDark text-xs"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 mb-10 mb-md-0">
            <h4 className="text-sm font-bold mb-1">Community</h4>
            <ul className="list-unstyled list-sm-space fs-sm mb-0">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="hover:text-blue dark:hover:text-scanDark text-xs"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-sm font-bold mb-1">Products &amp; Services</h4>
            <ul className="list-unstyled list-sm-space fs-sm mb-0">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="hover:text-blue dark:hover:text-scanDark text-xs"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
