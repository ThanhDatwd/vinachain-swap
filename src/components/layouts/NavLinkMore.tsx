"use client";

import { AdvanceFilter } from "@/assets/icons/AdvanceFilter";
import { BalanceCheckerIcon } from "@/assets/icons/BalanceCheckerIcon";
import { BlockChainChat } from "@/assets/icons/BlockChainChat";
import { CSVExportIcon } from "@/assets/icons/CSVExport";
import { ChatIcon } from "@/assets/icons/ChatIcon";
import { DexIcon } from "@/assets/icons/DEXIcon";
import { GasIcon } from "@/assets/icons/GasIcon";
import { LabelIcon } from "@/assets/icons/LabelIcon";
import { LookUpIcon } from "@/assets/icons/LookUpIcon";
import { ServerIcon } from "@/assets/icons/ServerIcon";
import { TokenApproveIcon } from "@/assets/icons/TokenApproveIcon";
import { UnitConverterIcon } from "@/assets/icons/UnitConverter";
import { VerifySignature } from "@/assets/icons/VerifySignature";
import { useTheme } from "@/hooks/useTheme";
import { THEME, getStaticURL } from "@/utils/constants";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const NavLinkMore = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const path = usePathname();

  const MORE_OPTION = [
    {
      title: t("vinaChain.header.more.tool.title"),
      data: [
        {
          href: "coming-soon",
          label: t("vinaChain.header.more.tool.unitConverter"),
          icon: <UnitConverterIcon className="!w-3 !h-3" />,
        },
        {
          href: "coming-soon",
          label: t("vinaChain.header.more.tool.csvExport"),
          icon: <CSVExportIcon className="!w-5 !h-5" />,
        },
        {
          href: "coming-soon",
          label: t("vinaChain.header.more.tool.accountBalanceChecker"),
          icon: <BalanceCheckerIcon className="!w-4 !h-4" />,
        },
      ],
    },
    {
      title: t("vinaChain.header.more.explore.title"),
      data: [
        {
          href: "coming-soon",
          label: t("vinaChain.header.more.explore.gasTracker"),
          icon: <GasIcon className="!w-4 !h-4" />,
        },
        {
          href: "coming-soon",
          label: t("vinaChain.header.more.explore.dexTracker"),
          icon: <DexIcon className="!w-4 !h-4" />,
        },
        {
          href: "coming-soon",
          label: t("vinaChain.header.more.explore.nodeTracker"),
          icon: <ServerIcon className="!w-4 !h-4" />,
        },
        {
          href: "coming-soon",
          label: t("vinaChain.header.more.explore.labelCloud"),
          icon: <LabelIcon className="!w-5 !h-5" />,
        },
        {
          href: "coming-soon",
          label: t("vinaChain.header.more.explore.domainNameLookup"),
          icon: <LookUpIcon className="!w-5 !h-5" />,
        },
      ],
    },
    {
      title: t("vinaChain.header.more.services.title"),
      data: [
        {
          href: "coming-soon",
          label: (
            <div className="flex items-center gap-2">
              {t("vinaChain.header.more.services.tokenApprovals")}{" "}
              <span className="px-2 text-gray600 dark:text-white text-[10px] rounded-md bg-gray-100 dark:bg-gray900 border">
                {t("vinaChain.header.more.services.beta")}{" "}
              </span>
            </div>
          ),
          icon: <TokenApproveIcon className="!w-5 !h-5" />,
        },
        {
          href: "coming-soon",
          label: t("vinaChain.header.more.services.verifiedSignature"),
          icon: <VerifySignature className="!w-5 !h-5" />,
        },
        {
          href: "coming-soon",
          label: (
            <div className="flex items-center gap-2">
              {t("vinaChain.header.more.services.inputDataMessages")}{" "}
              <span className="px-2 text-gray600 dark:text-white text-[10px] rounded-md bg-gray-100 dark:bg-gray900 border">
                {t("vinaChain.header.more.services.beta")}{" "}
              </span>
            </div>
          ),
          icon: <ChatIcon className="!w-4 !h-4" />,
        },
        {
          href: "coming-soon",
          label: (
            <div className="flex items-center gap-2">
              {t("vinaChain.header.more.services.advancedFilter")}{" "}
              <span className="px-2 text-gray600 dark:text-white text-[10px] rounded-md bg-gray-100 dark:bg-gray900 border">
                {t("vinaChain.header.more.services.beta")}{" "}
              </span>
            </div>
          ),
          icon: <AdvanceFilter className="!w-4 !h-4" />,
        },
      ],
    },
  ];

  const mergedHrefs = MORE_OPTION.reduce((accumulator: any, currentValue) => {
    currentValue.data.forEach((item) => {
      if (!accumulator.includes(item.href)) {
        accumulator.push(item.href);
      }
    });
    return accumulator;
  }, []);

  return (
    <div
      className=" inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`inline-flex h-12 items-center px-3 py-2 text-base font-medium hover:text-sky-600 dark:hover:text-scanDark ${
          mergedHrefs.includes(path) ? "text-sky-600 dark:text-scanDark" : ""
        } focus:outline-none`}
      >
        {t(`vinaScan.header.more.title`)}{" "}
        <svg
          className="-mr-1 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={classNames(
          "absolute min-w-56 z-20 left-0 flex flex-col gap-8 md:gap-6 px-4 lg:px-14 container-xxl w-full  "
        )}
      >
        <div
          className={`navbar-list ${
            isHovered ? "show  border-t-[4px]" : ""
          }  absolute left-0  inset-x-0 border-sky-500 dark:border-scanDark w-full rounded-b-md box-shadow bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100`}
        >
          <div className="grid grid-cols-4 bg-theme">
            <div className="col-lg ">
              <div className="flex flex-column justify-between p-1 h-full">
                <div className="bg-light flex flex-col justify-between h-full p-4 rounded-md">
                  <div>
                    <p className="text-base mb-2 font-bold">
                      {t("vinaChain.header.more.toolAndServices.title")}
                    </p>
                    <p className="text-xs">
                      {t("vinaChain.header.more.toolAndServices.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {MORE_OPTION.map((item, index) => (
              <div key={index} className="col-sm p-5">
                <p className="pl-3 text-base mb-2 font-bold">{item.title}</p>
                <ul className="list-unstyled ">
                  {item.data.map((item, index) => (
                    <li
                      key={index}
                      className="py-2 my-1 px-2 rounded-md bg-theme-hover "
                    >
                      <Link
                        href={item.href}
                        id="LI50"
                        className="dropdown-item flex gap-1 !text-dark dark:!text-white text items-center"
                      >
                        {item?.icon && (
                          <div className="w-6 flex justify-center">
                            {item.icon}
                          </div>
                        )}
                        <p className="text-xs">{item.label}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLinkMore;
