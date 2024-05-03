"use client";

import { TermAndPolicyWrapper } from "@/components/TermAndPolicyWrapper";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function TermOfServicePage() {
  const { t } = useTranslation();

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark">
      <TermAndPolicyWrapper
        title={t("vinaScan.privacy.title")}
        lastedDate="March 28, 2023"
      >
        <div className="p-8 bg-white dark:bg-[#0a0a0a] rounded-xl">
          <div className="flex flex-col gap-4 style-term-privacy-text">
            <strong className="text-dark900 dark:text-[#F5F5F5] font-bold">
              {t("vinaScan.privacy.pleaseReadThePrivacyPolicyCarefully")}
            </strong>
            <span>
              {t("vinaScan.privacy.pleaseReadThePrivacyPolicyCarefullyContent")}
            </span>
          </div>
          <ol className="list-decimal pl-4">
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.privacy.typeOfDataWeCollect")}
              <ul className="style-term-privacy-text-content">
                <li>{t("vinaScan.privacy.typeOfDataWeCollectContent1")}</li>
                <li className="flex flex-col">
                  <span>
                    (a) {t("vinaScan.privacy.typeOfDataWeCollectContent11")}
                  </span>
                  <span>
                    (b) {t("vinaScan.privacy.typeOfDataWeCollectContent12")}
                  </span>
                  <span>
                    (c) {t("vinaScan.privacy.typeOfDataWeCollectContent13")}
                  </span>
                  <span>
                    (d) {t("vinaScan.privacy.typeOfDataWeCollectContent14")}
                  </span>
                </li>
                <li>{t("vinaScan.privacy.typeOfDataWeCollectContent2")}</li>
                <li>{t("vinaScan.privacy.typeOfDataWeCollectContent3")}</li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.privacy.howDoWeCollectPersonalData")}
              <ul className="style-term-privacy-text-content">
                <li>
                  {t("vinaScan.privacy.howDoWeCollectPersonalDataContent1")}
                </li>
                <li className="flex flex-col">
                  <span>
                    (a){" "}
                    {t("vinaScan.privacy.howDoWeCollectPersonalDataContent11")}
                  </span>
                  <span>
                    (b){" "}
                    {t("vinaScan.privacy.howDoWeCollectPersonalDataContent12")}
                  </span>
                  <span>
                    (c){" "}
                    {t("vinaScan.privacy.howDoWeCollectPersonalDataContent13")}
                  </span>
                </li>
                <li>
                  {t("vinaScan.privacy.howDoWeCollectPersonalDataContent2")}
                </li>
                <li className="flex flex-col">
                  <span>
                    (a){""}
                    {t("vinaScan.privacy.howDoWeCollectPersonalDataContent21")}
                  </span>
                  <span>
                    (b){" "}
                    {t("vinaScan.privacy.howDoWeCollectPersonalDataContent22")}
                  </span>
                  <span>
                    (c){" "}
                    {t("vinaScan.privacy.howDoWeCollectPersonalDataContent23")}
                  </span>
                  <span>
                    (d){" "}
                    {t("vinaScan.privacy.howDoWeCollectPersonalDataContent24")}
                  </span>
                  <span>
                    (e){" "}
                    {t("vinaScan.privacy.howDoWeCollectPersonalDataContent25")}
                  </span>
                </li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t(
                "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsite"
              )}
              <ul className="style-term-privacy-text-content mt-2">
                <li>
                  {t(
                    "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent"
                  )}
                </li>
                <li className="flex flex-col">
                  <span>
                    (a){" "}
                    <strong>
                      {t(
                        "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent1"
                      )}
                    </strong>
                  </span>
                  <span>
                    {t(
                      "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent11"
                    )}
                  </span>
                </li>
                <li className="flex flex-col">
                  <span>
                    (b){" "}
                    <strong>
                      {t(
                        "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent2"
                      )}
                    </strong>
                  </span>
                  <span>
                    {t(
                      "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent21"
                    )}
                  </span>
                </li>
                <li>
                  {t(
                    "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent22"
                  )}
                </li>
                <li>
                  {t(
                    "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent23"
                  )}
                </li>
                <li>
                  {t(
                    "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent24"
                  )}
                </li>
                <li>
                  {t(
                    "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent25"
                  )}
                </li>
                <li className="flex flex-col">
                  <span>
                    (c){" "}
                    <strong>
                      {" "}
                      {t(
                        "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent3"
                      )}
                    </strong>
                  </span>
                  <span>
                    <li>
                      {t(
                        "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent31"
                      )}
                    </li>
                  </span>
                </li>
                <li className="flex flex-col">
                  <span>
                    (d){" "}
                    <strong>
                      {t(
                        "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent4"
                      )}
                    </strong>
                  </span>
                  <span>
                    {" "}
                    {t(
                      "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent41"
                    )}
                  </span>
                </li>
                <li>
                  {t(
                    "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent42"
                  )}
                </li>
                <li className="flex flex-col">
                  <span>
                    (e){" "}
                    <strong>
                      {t(
                        "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent5"
                      )}
                    </strong>
                  </span>
                  <span>
                    {t(
                      "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent51"
                    )}
                  </span>
                </li>
                <li className="flex flex-col">
                  <span>
                    (i){" "}
                    {t(
                      "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent6"
                    )}
                  </span>
                  <span>
                    (ii){" "}
                    {t(
                      "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent7"
                    )}
                  </span>
                  <span>
                    (iii){" "}
                    {t(
                      "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent8"
                    )}
                  </span>
                  <span>
                    (iv)
                    {t(
                      "vinaScan.privacy.howDoWeCollectYourPersonalDataOnYourWebsiteContent9"
                    )}
                  </span>
                </li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.privacy.whatDoWeUseYourPersonalDataFor")}
              <ul className="style-term-privacy-text-content">
                <li>
                  {t("vinaScan.privacy.whatDoWeUseYourPersonalDataForContent")}
                </li>
                <li className="flex flex-col">
                  <span>
                    (a){" "}
                    {t(
                      "vinaScan.privacy.whatDoWeUseYourPersonalDataForContent1"
                    )}
                  </span>
                  <span>
                    (b){" "}
                    {t(
                      "vinaScan.privacy.whatDoWeUseYourPersonalDataForContent2"
                    )}
                  </span>
                  <span>
                    (c){" "}
                    {t(
                      "vinaScan.privacy.whatDoWeUseYourPersonalDataForContent3"
                    )}
                  </span>
                  <span>
                    (d){" "}
                    {t(
                      "vinaScan.privacy.whatDoWeUseYourPersonalDataForContent4"
                    )}
                  </span>
                  <span>
                    (e){" "}
                    {t(
                      "vinaScan.privacy.whatDoWeUseYourPersonalDataForContent5"
                    )}
                  </span>
                  <span>
                    (f){" "}
                    {t(
                      "vinaScan.privacy.whatDoWeUseYourPersonalDataForContent6"
                    )}
                    <strong>{t("vinaScan.privacy.corePurposes")}</strong>
                  </span>
                  <span>
                    (g){" "}
                    {t(
                      "vinaScan.privacy.whatDoWeUseYourPersonalDataForContent7"
                    )}
                  </span>
                  <span>
                    (h){" "}
                    {t(
                      "vinaScan.privacy.whatDoWeUseYourPersonalDataForContent8"
                    )}
                  </span>
                  <span>
                    (i){" "}
                    {t(
                      "vinaScan.privacy.whatDoWeUseYourPersonalDataForContent6"
                    )}{" "}
                    <strong>{`("${t("vinaScan.privacy.ancillaryPurposes")}")
(${t("vinaScan.privacy.collectively")}, "${t(
                      "vinaScan.privacy.purposes"
                    )}")`}</strong>
                  </span>
                </li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t(
                "vinaScan.privacy.accessingCorrectingUpdatingYourPersonalData"
              )}
              <ul className="style-term-privacy-text-content">
                <li>
                  {t(
                    "vinaScan.privacy.accessingCorrectingUpdatingYourPersonalDataContent1"
                  )}
                </li>
                <li>
                  {t(
                    "vinaScan.privacy.accessingCorrectingUpdatingYourPersonalDataContent2"
                  )}
                </li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.privacy.withdrawingConsent")}
              <ul className="style-term-privacy-text-content">
                <li>{t("vinaScan.privacy.withdrawingConsentContent1")}</li>
                <li>{t("vinaScan.privacy.withdrawingConsentContent2")}</li>
                <li className="flex flex-col">
                  <span>
                    (a) {t("vinaScan.privacy.withdrawingConsentContent21")}
                  </span>
                  <span>
                    (b) {t("vinaScan.privacy.withdrawingConsentContent22")}
                  </span>
                  <span>
                    (c) {t("vinaScan.privacy.withdrawingConsentContent23")}{" "}
                    <Link
                      href={"/contactus"}
                      className="contact-blue-text-bold"
                    >
                      {t("vinaScan.privacy.contactUs")}
                    </Link>
                  </span>
                </li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.privacy.toWhomDoWeDiscloseYourPersonalDataContent")}
              <ul className="style-term-privacy-text-content font-decimal">
                <li>
                  {t(
                    "vinaScan.privacy.toWhomDoWeDiscloseYourPersonalDataContent1"
                  )}
                </li>
                <li>
                  {t(
                    "vinaScan.privacy.toWhomDoWeDiscloseYourPersonalDataContent2"
                  )}
                </li>
                <li>
                  {t(
                    "vinaScan.privacy.toWhomDoWeDiscloseYourPersonalDataContent3"
                  )}
                </li>
                <li>
                  {t(
                    "vinaScan.privacy.toWhomDoWeDiscloseYourPersonalDataContent4"
                  )}
                </li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.privacy.howLongWillWeRetainYourPersonalData")}
              <ul className="mt-4 -ml-4">
                {t(
                  "vinaScan.privacy.howLongWillWeRetainYourPersonalDataContent"
                )}
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.privacy.linksToThirdPartyWebsites")}
              <ul className="style-term-privacy-text-content">
                <li>
                  {t("vinaScan.privacy.linksToThirdPartyWebsitesContent1")}
                </li>
                <li>
                  {t("vinaScan.privacy.linksToThirdPartyWebsitesContent2")}
                </li>
              </ul>
            </li>
            <br />
            <li className="style-term-privacy-text font-medium mb-4">
              {t("vinaScan.privacy.additionalInformationOrAssistance")}
              <ul className="style-term-privacy-text-content">
                <li>
                  {t(
                    "vinaScan.privacy.additionalInformationOrAssistanceContent1"
                  )}
                </li>
                <li>
                  {t(
                    "vinaScan.privacy.additionalInformationOrAssistanceContent2"
                  )}{" "}
                  <Link href={"/contactus"} className="contact-blue-text-bold">
                    {t("vinaScan.privacy.contactUs")}
                  </Link>
                  .
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </TermAndPolicyWrapper>
    </ScanLayout>
  );
}
