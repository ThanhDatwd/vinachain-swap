"use client";

import { ScanLayout } from "@/components/layouts/ScanLayout";
import { getStaticURL } from "@/utils/constants";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { CopyIcon } from "@/assets/icons/CopyIcon";
import Link from "next/link";

export default function AboutUsPage() {
  const { t } = useTranslation();

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark">
      <div className="px-3 lg:px-[283px] pt-12 pb-16">
        <div className="flex justify-center w-full">
          <div className="content-heading text-center lg:w-[560px]">
            <h2 className="text-[30px] text-dark900 dark:text-[#FAFAFA] font-bold">
              {t("vinaScan.brandAssets.title")}
            </h2>
            <span className="mb-4">{t("vinaScan.brandAssets.subTitle")}</span>
          </div>
        </div>
        <hr className="line" />
        <div className="content-heading">
          <h3 className="text-dark900 dark:text-[#FAFAFA] font-medium text-[22.5px]">
            {t("vinaScan.brandAssets.ourBrandNameTittle")}
          </h3>
          <span className="mb-10">
            {t("vinaScan.brandAssets.vinascan")}{" "}
            {t("vinaScan.brandAssets.ourBrandNameContent")}
          </span>
        </div>
        <div>
          <div className="content-heading">
            <h3 className="text-dark900 dark:text-[#FAFAFA] font-medium text-[22.5px]">
              {t("vinaScan.brandAssets.brandingGuidelines")}
            </h3>
            <span className="mb-4">
              {t("vinaScan.brandAssets.brandingGuidelinesContent1")}
            </span>
          </div>
          <ul className="list-style-custom">
            <li>{t("vinaScan.brandAssets.brandingGuidelinesContent11")}</li>
            <li>{t("vinaScan.brandAssets.brandingGuidelinesContent12")}</li>
            <li>{`${t("vinaScan.brandAssets.brandingGuidelinesContent13")} "${t(
              "vinaScan.brandAssets.wePartnerWithVinascan"
            )}"`}</li>
            <li>
              {t("vinaScan.brandAssets.brandingGuidelinesContent14")}
              <ul className="list-style-custom list-circle">
                <li>
                  {t("vinaScan.brandAssets.brandingGuidelinesContent141")}
                </li>
                <li>
                  {t("vinaScan.brandAssets.brandingGuidelinesContent142")}
                </li>
                <li>
                  {t("vinaScan.brandAssets.brandingGuidelinesContent143")}
                </li>
              </ul>
            </li>
            <li>{t("vinaScan.brandAssets.brandingGuidelinesContent15")}</li>
          </ul>
        </div>
        <hr className="line" />
        <div className="content-heading">
          <h3 className="text-dark900 dark:text-[#FAFAFA] font-medium text-[22.5px]">
            {t("vinaScan.brandAssets.downloads")}
          </h3>
          <span className="mb-10">
            {t("vinaScan.brandAssets.downloadsContent")}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-5">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className="mt-4 text-[15px] text-gray550 rounded-[11px] border border-[#e9ecef]"
            >
              <div
                className="h-[250px]"
                style={{
                  backgroundImage: `url(${getStaticURL()}/assets/images/logo.svg)`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "-90px",
                }}
              />
              <div className="w-full p-4 border-t border-[#e9ecef]">
                PNG & SVG
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="flex items-center gap-1 button-primary text-[15px]">
            <CopyIcon color="#fff" />
            <label className="capitalize">
              {t("vinaScan.brandAssets.downloadButton")}
            </label>
          </button>
        </div>
        <hr className="line" />
        <div className="content-heading">
          <h3 className="text-dark900 dark:text-[#FAFAFA] font-medium text-[22.5px]">
            {t("vinaScan.brandAssets.agreement")}
          </h3>
          <div>
            {t("vinaScan.brandAssets.agreementContent")}{" "}
            <Link href="/scan/terms">
              {t("vinaScan.brandAssets.termsAndConditions")}
            </Link>
            {""}
            {t("vinaScan.brandAssets.agreementContentRest")}{" "}
            <Link href={"/scan/contactUs"}>
              {t("vinaScan.contactUs.title")}
            </Link>
          </div>
        </div>
      </div>
    </ScanLayout>
  );
}
