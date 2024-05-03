"use client";

import { TermAndPolicyWrapper } from "@/components/TermAndPolicyWrapper";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { SUBJECT_DATA } from "@/utils/constants";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TermOfServicePage() {
  const { t } = useTranslation();

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark">
      <TermAndPolicyWrapper
        title={t("vinaScan.terms.title")}
        lastedDate="September 12, 2022"
      >
        <div className="p-8 bg-white dark:bg-[#0a0a0a] rounded-xl">
          <div className="flex flex-col gap-4 style-term-privacy-text">
            <strong className="text-dark900 dark:text-[#F5F5F5] font-bold">
              {t("vinaScan.terms.pleaseReadTheseTermsOfServiceCarefully")}
            </strong>
            <span>
              {t(
                "vinaScan.terms.pleaseReadTheseTermsOfServiceCarefullyContent1"
              )}
            </span>
            <span>
              {t(
                "vinaScan.terms.pleaseReadTheseTermsOfServiceCarefullyContent2"
              )}
            </span>
          </div>
          <ol className="list-decimal ml-4">
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.terms.eligibility")}
              <ul className="style-term-privacy-text-content">
                <li>{t("vinaScan.terms.eligibilityContent1")}</li>
                <li>{t("vinaScan.terms.eligibilityContent2")}</li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.terms.accountRegistration")}
              <ul className="style-term-privacy-text-content">
                <li>{t("vinaScan.terms.accountRegistrationContent1")}</li>
                <li className="flex flex-col">
                  <span>
                    (a) {t("vinaScan.terms.accountRegistrationContent11")}
                  </span>
                  <span>
                    (b) {t("vinaScan.terms.accountRegistrationContent12")}
                  </span>
                  <span>
                    (c) {t("vinaScan.terms.accountRegistrationContent13")}
                  </span>
                  <span>
                    (d) {t("vinaScan.terms.accountRegistrationContent14")}
                  </span>
                  <span>
                    (e) {t("vinaScan.terms.accountRegistrationContent15")}
                  </span>
                  <span>
                    (f) {t("vinaScan.terms.accountRegistrationContent16")}
                  </span>
                </li>
                <li>{t("vinaScan.terms.accountRegistrationContent2")}</li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.terms.discontinuanceOfServices")}
              <ul className="mt-2 -ml-4">
                <li>{t("vinaScan.terms.discontinuanceOfServicesContent")}</li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.terms.assumptionOfRisk")}
              <ul className="style-term-privacy-text-content">
                <li>{t("vinaScan.terms.assumptionOfRiskContent1")}</li>
                <li>{t("vinaScan.terms.assumptionOfRiskContent2")}</li>
                <li className="flex flex-col">
                  <span>{`(a) ${t(
                    "vinaScan.terms.assumptionOfRiskContent21"
                  )} "${t("vinaScan.terms.bruteforced")}",`}</span>
                  <span>
                    (b) {t("vinaScan.terms.assumptionOfRiskContent22")}
                  </span>
                  <span>
                    (c) {t("vinaScan.terms.assumptionOfRiskContent23")},
                  </span>
                  <span>
                    (d) {t("vinaScan.terms.assumptionOfRiskContent24")},
                  </span>
                  <span>
                    (e) {t("vinaScan.terms.assumptionOfRiskContent25")}
                  </span>
                  <span>
                    (f) {t("vinaScan.terms.assumptionOfRiskContent26")}
                  </span>
                  <span>{`(g) "${t("vinaScan.terms.phishing")}," ${t(
                    "vinaScan.terms.assumptionOfRiskContent27"
                  )}`}</span>
                </li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.terms.thirdPartyServicesAndContent")}
              <ul className="style-term-privacy-text-content">
                <li>
                  {t("vinaScan.terms.thirdPartyServicesAndContentContent1")}
                </li>
                <li>
                  {t("vinaScan.terms.thirdPartyServicesAndContentContent2")}
                </li>
                <li>
                  {t("vinaScan.terms.thirdPartyServicesAndContentContent3")}
                </li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.terms.acceptableUse")}
              <ul className="mt-2">
                <li>{t("vinaScan.terms.acceptableUseContent")}</li>
              </ul>
              <ul className="style-term-privacy-text-content list-disc pl-8">
                <li>{t("vinaScan.terms.acceptableUseContent1")}</li>
                <li>{t("vinaScan.terms.acceptableUseContent2")}</li>
                <li>{t("vinaScan.terms.acceptableUseContent3")}</li>
                <li>
                  {t("vinaScan.terms.useAny")}{" "}
                  <strong>
                    {t("vinaScan.terms.robotSpiderCrawlerScraper")}
                  </strong>{" "}
                  {t("vinaScan.terms.acceptableUseContent4")}
                </li>
                <li>
                  {t("vinaScan.terms.engageIn")}{" "}
                  <strong>
                    {t("vinaScan.terms.automatedDataCollection")}
                  </strong>{" "}
                  {t("vinaScan.terms.acceptableUseContent5")}
                </li>
                <li>{t("vinaScan.terms.acceptableUseContent6")}</li>
                <li>{t("vinaScan.terms.acceptableUseContent7")}</li>
                <li>{t("vinaScan.terms.acceptableUseContent8")}</li>
                <li>{t("vinaScan.terms.acceptableUseContent9")}</li>
                <li>{t("vinaScan.terms.acceptableUseContent10")}</li>
                <li>{t("vinaScan.terms.acceptableUseContent11")}</li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.terms.userGeneratedContent")}
              <ul className="style-term-privacy-text-content font-decimal">
                <li>
                  7.1.
                  <strong>
                    {t("vinaScan.terms.userGeneratedContentContentStrong1")}
                  </strong>{" "}
                  {t("vinaScan.terms.userGeneratedContentContent1")}
                </li>
                <li>
                  7.2.
                  <strong>
                    {t("vinaScan.terms.userGeneratedContentContentStrong2")}
                  </strong>{" "}
                  {t("vinaScan.terms.userGeneratedContentContent2")}
                </li>
                <li>
                  7.3.
                  <strong>
                    {t("vinaScan.terms.userGeneratedContentContentStrong3")}{" "}
                  </strong>
                  {t("vinaScan.terms.userGeneratedContentContent3")}
                </li>
                <li>
                  7.4.
                  <strong>
                    {t("vinaScan.terms.userGeneratedContentContentStrong4")}{" "}
                  </strong>
                  {t("vinaScan.terms.userGeneratedContentContent4")}
                </li>
                <li>{t("vinaScan.terms.userGeneratedContentContent5")}</li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.terms.copyrightsAndOtherIntellectualPropertyRights")}
              <ul className="style-term-privacy-text-content">
                <li>
                  {t(
                    "vinaScan.terms.copyrightsAndOtherIntellectualPropertyRightsContent1"
                  )}
                </li>
                <li>
                  {t(
                    "vinaScan.terms.copyrightsAndOtherIntellectualPropertyRightsContent2"
                  )}
                </li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.terms.trademarks")}
              <ul className="style-term-privacy-text-content">
                <li>{t("vinaScan.terms.trademarksContent1")}</li>
                <li>{t("vinaScan.terms.trademarksContent2")}</li>
                <li>{t("vinaScan.terms.trademarksContent3")}</li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.terms.suspensionTermination")}
              <ul className="style-term-privacy-text-content">
                <li>{t("vinaScan.terms.suspensionTerminationContent1")}</li>
                <li>{t("vinaScan.terms.suspensionTerminationContent2")}</li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.terms.cookieStatement")}
              <ul className="style-term-privacy-text-content">
                <li>{t("vinaScan.terms.cookieStatementContent1")}</li>
                <li>{t("vinaScan.terms.cookieStatementContent2")}</li>
                <li> {t("vinaScan.terms.cookieStatementContent3")}</li>
                <li>{t("vinaScan.terms.cookieStatementContent4")}</li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4 uppercase">
              {t("vinaScan.terms.privacyPolicy")}
              <ul className="style-term-privacy-text-content">
                <li>
                  {t("vinaScan.terms.privacyPolicyContent")}{" "}
                  <Link href={"/coming-soon"} className="contact-blue-text-bold capitalize">
                    {t("vinaScan.terms.privacyPolicy")}
                  </Link>
                  .
                </li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.terms.disclaimerOfWarranties")}
              <ul className="style-term-privacy-text-content">
                <li>{t("vinaScan.terms.disclaimerOfWarrantiesContent1")}</li>
                <li>{t("vinaScan.terms.disclaimerOfWarrantiesContent2")}</li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.terms.limitationOfLiability")}
              <ul className="style-term-privacy-text-content">
                <li>{t("vinaScan.terms.limitationOfLiabilityContent")}</li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.terms.indemnity")}
              <ul className="style-term-privacy-text-content">
                <li>{t("vinaScan.terms.indemnityContent")}</li>
                <li className="flex flex-col">
                  <span>(a){" "}{t("vinaScan.terms.indemnityContent1")}</span>
                  <span>
                    (b){" "}
                    {t("vinaScan.terms.indemnityContent2")}
                  </span>
                  <span>
                    (c){" "}
                    {t("vinaScan.terms.indemnityContent3")}
                  </span>
                  <span>
                    (d){" "}
                    {t("vinaScan.terms.indemnityContent4")}
                  </span>
                </li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.terms.miscellaneous")}
              <ul className="style-term-privacy-text-content">
                <li>
                  16.1.
                  <strong>
                    {t("vinaScan.terms.miscellaneousContentStrong1")}
                  </strong>
                  {t("vinaScan.terms.miscellaneousContent1")}
                </li>
                <li>
                  16.2.
                  <strong>
                    {t("vinaScan.terms.miscellaneousContentStrong2")}
                  </strong>
                  {t("vinaScan.terms.miscellaneousContent2")}
                </li>
                <li>
                  16.3.
                  <strong>
                    {t("vinaScan.terms.miscellaneousContentStrong3")}
                  </strong>
                  {t("vinaScan.terms.miscellaneousContent3")}
                </li>
                <li>
                  16.4.
                  <strong>
                    {t("vinaScan.terms.miscellaneousContentStrong4")}
                  </strong>
                  {t("vinaScan.terms.miscellaneousContent4")}
                </li>
                <li>
                  16.5.
                  <strong>
                    {t("vinaScan.terms.miscellaneousContentStrong5")}
                  </strong>
                  {t("vinaScan.terms.miscellaneousContent5")}
                </li>
                <li>
                  16.6.
                  <strong>
                    {t("vinaScan.terms.miscellaneousContentStrong6")}
                  </strong>
                  {t("vinaScan.terms.miscellaneousContent6")}
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </TermAndPolicyWrapper>
    </ScanLayout>
  );
}
