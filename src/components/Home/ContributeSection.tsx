import Image from "next/image";
import React from "react";
import Link from "next/link";
import contributeImage from "@/assets/images/contribute.svg";
import { getStaticURL } from "@/utils/constants";
import { useTranslation } from "react-i18next";
import "../../../i18n";

export const ContributeSection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-8 flex-col-reverse md:flex-row md:gap-6">
      <div className="w-full flex flex-col gap-8">
        <h3 className="text-[24px] md:text-[32px] font-bold dark:text-[#FAFAFA] ">
          {t("contribute.title")}
        </h3>
        <span>{t("contribute.description")}</span>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 flex-wrap">
          <Link
            href="/coming-soon"
            className="hover:bg-white hover:opacity-[.92] rounded hover:scale-105 hover:transform duration-300"
          >
            <button className="border-none flex items-center px-4 py-2 rounded bg-secondary dark:bg-secondaryDark text-[#FAFAFA]">
              {t("contribute.moreContribute")}
            </button>
          </Link>
          <Link
            href="/coming-soon"
            className="hover:bg-white hover:opacity-[.92] rounded hover:scale-105 hover:transform duration-300"
          >
            <button className="border-none flex items-center px-4 py-2 rounded bg-secondary dark:bg-secondaryDark text-[#FAFAFA]">
              {t("contribute.gitHub")}
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full">
        <Image
          width={100}
          height={100}
          className="w-full"
          src={`${getStaticURL()}/assets/images/contribute.svg`}
          alt=""
        />
      </div>
    </div>
  );
};
