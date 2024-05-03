import React from "react";
import { IntroduceCard } from "./Introducecard";
import { getStaticURL } from "@/utils/constants";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export const ExploreVinachainCard = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10 px-4 py-8 md:py-20 md:px-[120px]">
      <h5 className="text-[32px] font-bold text-[#333] dark:text-[#FAFAFA]">
        {t("exploreVinachain")}
      </h5>
      <div className="flex flex-col md:flex-row gap-8 md:gap-6">
        <Link
          href="/coming-soon"
          className="transition-all duration-300 group cursor-pointer border border-[#333] dark:border-[#FAFAFA] hover:scale-[1.02] shadow-[4px_4px_0px_0px_#B69FD3] dark:shadow-[4px_4px_4px_0px_#F6AF86"
        >
          <IntroduceCard
            imgUrl={`${getStaticURL()}/assets/images/upgrade-knowledge.svg`}
            title={t("upgradeKnowlegde")}
            subTitle={t("upgradeKnowlegdeDesc")}
            contentStyle="flex-col py-6 px-4"
            titleStyle="group-hover:text-secondary dark:group-hover:text-secondaryDark pb-6"
            isLink
          />
        </Link>
        <Link
          href="/coming-soon"
          className="transition-all duration-300 group cursor-pointer border border-[#333] dark:border-[#FAFAFA] hover:scale-[1.02] shadow-[4px_4px_0px_0px_#B69FD3] dark:shadow-[4px_4px_4px_0px_#F6AF86"
        >
          <IntroduceCard
            imgUrl={`${getStaticURL()}/assets/images/vinachain-for-enterprise.svg`}
            title={t("vinachainForEnterprise")}
            subTitle={t("upgradeKnowlegdeDesc")}
            contentStyle="flex-col py-6 px-4"
            titleStyle="group-hover:text-secondary dark:group-hover:text-secondaryDark pb-6"
            isLink
          />
        </Link>
        <Link
          href="/coming-soon"
          className="transition-all duration-300 group cursor-pointer border border-[#333] dark:border-[#FAFAFA] hover:scale-[1.02] shadow-[4px_4px_0px_0px_#B69FD3] dark:shadow-[4px_4px_4px_0px_#F6AF86"
        >
          <IntroduceCard
            imgUrl={`${getStaticURL()}/assets/images/the-vina-community.svg`}
            title={t("theVinaCommunity")}
            subTitle={t("upgradeKnowlegdeDesc")}
            contentStyle="flex-col py-6 px-4"
            titleStyle="group-hover:text-secondary dark:group-hover:text-secondaryDark pb-6"
            isLink
          />
        </Link>
      </div>
    </div>
  );
};
