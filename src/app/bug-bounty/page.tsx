"use client";
import BottomShapeIcon from "@/assets/icons/BottomShapeIcon";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/utils/constants";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function BugBounty() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark">
      <div className="flex flex-col items-center px-3 lg:px-10 py-10 lg:py-16 bg-[#fbfbfd] dark:bg-[#111]">
        <div
          className="w-full lg:w-[1012px] rounded-xl"
          style={{ boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)" }}
        >
          <div className="relative p-8 pb-8 lg:pt-10 lg:pb-14 bg-[#081d35] dark:bg-[#0a0a0a] rounded-xl">
            <h2 className="text-[30px] font-bold text-white mb-2 text-center">
              {t("vinaScan.bugBounty.title")}
            </h2>
            <figure className="w-full absolute -bottom-[18px] left-0">
              <BottomShapeIcon className="w-full" color={theme === THEME.DARK ? "#0a0a0a" : "#FFF"}/>
            </figure>
          </div>
          <div className="lg:p-8 bg-white dark:bg-[#0a0a0a] rounded-xl">
            <ol className="list-decimal">
                <br />
                <li className="style-term-privacy-text ml-8 font-medium mb-4">
                {t("vinaScan.bugBounty.guidelines")}
                <ul className="style-term-privacy-text-content">
                    <li className="ml-4">
                    {t("vinaScan.bugBounty.guidelinesContent")}
                    </li>
                    <ul className="ml-8 list-disc">
                    <li>{t("vinaScan.bugBounty.guidelinesContent1")}</li>
                    <li>{t("vinaScan.bugBounty.guidelinesContent2")}</li>
                    <li>{t("vinaScan.bugBounty.guidelinesContent3")}</li>
                    <li>{t("vinaScan.bugBounty.guidelinesContent4")}</li>
                    </ul>
                </ul>
                </li>
                <br />
                <li className="style-term-privacy-text font-medium mb-4 ml-8">
                {t("vinaScan.bugBounty.ifYouAreTheFirstToReportTheIssue")}
                <ul className="style-term-privacy-text-content list-disc">
                    <li className="ml-12">
                    {t(
                        "vinaScan.bugBounty.ifYouAreTheFirstToReportTheIssueContent1"
                    )}
                    </li>
                    <li className="ml-12">
                    {t(
                        "vinaScan.bugBounty.ifYouAreTheFirstToReportTheIssueContent2"
                    )}
                    </li>
                    <ul className="ml-16">
                    <li>
                        -{" "}
                        {t(
                        "vinaScan.bugBounty.ifYouAreTheFirstToReportTheIssueContent21"
                        )}
                    </li>
                    <li>
                        -{" "}
                        {t(
                        "vinaScan.bugBounty.ifYouAreTheFirstToReportTheIssueContent22"
                        )}
                    </li>
                    <li>
                        -{" "}
                        {t(
                        "vinaScan.bugBounty.ifYouAreTheFirstToReportTheIssueContent23"
                        )}
                    </li>
                    <li>
                        -{" "}
                        {t(
                        "vinaScan.bugBounty.ifYouAreTheFirstToReportTheIssueContent24"
                        )}
                    </li>
                    <li>
                        -{" "}
                        {t(
                        "vinaScan.bugBounty.ifYouAreTheFirstToReportTheIssueContent25"
                        )}
                    </li>
                    </ul>
                </ul>
                <li className="flex flex-col italic list-none">
                    <span>
                    {t(
                        "vinaScan.bugBounty.ifYouAreTheFirstToReportTheIssueContent3"
                    )}
                    </span>
                    <span>
                    {t(
                        "vinaScan.bugBounty.ifYouAreTheFirstToReportTheIssueContent4"
                    )}
                    </span>
                    <span>
                    {t(
                        "vinaScan.bugBounty.ifYouAreTheFirstToReportTheIssueContent5"
                    )}
                    </span>
                </li>
                </li>
                <br />
                <li className="style-term-privacy-text font-medium mb-4 ml-8">
                {t("vinaScan.bugBounty.scope")}
                <ul className="style-term-privacy-text-content mt-2">
                    <li className="ml-4">
                    {t("vinaScan.bugBounty.scopeContent1")}
                    </li>
                    <li className="ml-4">
                    {t("vinaScan.bugBounty.scopeContent2")}
                    </li>
                    <ul className="list-disc ml-12">
                    <li>{t("vinaScan.bugBounty.scopeContent21")}</li>
                    <li>{t("vinaScan.bugBounty.scopeContent22")}</li>
                    <li>{t("vinaScan.bugBounty.scopeContent23")}</li>
                    <li>{t("vinaScan.bugBounty.scopeContent24")}</li>
                    <li>{t("vinaScan.bugBounty.scopeContent25")}</li>
                    <li>{t("vinaScan.bugBounty.scopeContent26")}</li>
                    <li>{t("vinaScan.bugBounty.scopeContent27")}</li>
                    <li>{t("vinaScan.bugBounty.scopeContent28")}</li>
                    </ul>
                </ul>
                </li>
                <br />
                <li className="style-term-privacy-text font-medium mb-4 ml-8">
                {t("vinaScan.bugBounty.outOfScope")}
                <ul className="style-term-privacy-text-content">
                    <li className="ml-4">
                    {t("vinaScan.bugBounty.outOfScopeContent")}
                    </li>
                    <ul className="list-disc ml-12">
                    <li>{t("vinaScan.bugBounty.outOfScopeContent1")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent2")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent3")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent4")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent5")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent6")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent7")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent8")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent9")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent10")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent11")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent12")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent13")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent14")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent15")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent16")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent17")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent18")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent19")}</li>
                    <li>{t("vinaScan.bugBounty.outOfScopeContent20")}</li>
                    </ul>
                </ul>
                </li>
                <br />
                <li className="style-term-privacy-text font-medium mb-4 ml-8">
                {t("vinaScan.bugBounty.howToReportASecurityVulnerability")}
                <ul className="style-term-privacy-text-content list-disc">
                    <li className="ml-12">
                    {t(
                        "vinaScan.bugBounty.howToReportASecurityVulnerabilityContent1"
                    )}
                    </li>
                    <li className="ml-12">
                    {t(
                        "vinaScan.bugBounty.howToReportASecurityVulnerabilityContent2"
                    )}
                    </li>
                    <li className="ml-12">
                    {t(
                        "vinaScan.bugBounty.howToReportASecurityVulnerabilityContent3"
                    )}
                    </li>
                    <li className="ml-12">
                    {t(
                        "vinaScan.bugBounty.howToReportASecurityVulnerabilityContent4"
                    )}
                    </li>
                    <li className="ml-12">
                    {t("vinaScan.bugBounty.emailUsAt")}{" "}
                    <Link href={"/coming-soon"}>
                        {t("vinaScan.bugBounty.bugBoutyReport")}
                    </Link>
                    </li>
                </ul>
                </li>
                <br />
            </ol>
            <br className="line" />
            <div className="flex flex-col pl-4 style-term-privacy-text font-medium">
                {t("vinaScan.bugBounty.hallOfFame")}
                <span className="mt-2 mb-4">{t("vinaScan.bugBounty.hallOfFameContent")}</span>
                <ul className="ml-4">
                <li>- SamCzun</li>
                <li>- Martin Abbatemarco</li>
                <li>- Andrew Curtin</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </ScanLayout>
  );
}
