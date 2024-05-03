"use client";

import { ArrowUpRightIcon } from "@/assets/icons/ArrowUpRightIcon";
import { ArrowUpRightSquareIcon } from "@/assets/icons/ArrowUpRightSquareIcon";
import { Wrapper } from "@/components/ContactUs/Wrapper";
import { DropdownContact } from "@/components/DropdownContact";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { HELPFUL_LINKS_DATA, SUBJECT_DATA } from "@/utils/constants";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactUsPage() {
  const { t } = useTranslation();
  const [subject, setSubject] = useState(SUBJECT_DATA[0]);

  const handleChangeSubject = (value: { label: string; value: string }) => {
    setSubject(value);
  };

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark">
      <div className="px-3 lg:px-10">
        <h2 className="py-5 text-[18.75px] font-bold text-black200 dark:text-[#FAFAFA] border-b border-[#e9ecef]">
          {t("vinaScan.contactUs.title")}
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 pt-3 pb-12">
          <Wrapper title="Feedback Form" className="lg:w-3/4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 p-[10px] rounded-md bg-[#cde6f3] dark:bg-[#da6c1d15] border border-[#0784c3] dark:border-[#044f75]">
                <span className="contact-blue-text-bold">
                  {t("vinaScan.contactUs.feedbackFormContent")}
                </span>
                <ol className="list-decimal pl-8">
                  <li className="contact-blue-text-bold">
                    {t("vinaScan.contactUs.pendingTransactionTitle")}
                    <ul>
                      <li className="contact-blue-text-regular">
                        {t("vinaScan.contactUs.weDoNot")}{" "}
                        <span className="contact-blue-text-bold">
                          {t("vinaScan.contactUs.processTransactions")}
                        </span>{" "}
                        {t("vinaScan.contactUs.pendingTransactionContentRest")}
                        <span>{t("vinaScan.contactUs.here")}</span>.
                      </li>
                    </ul>
                  </li>

                  <li className="contact-blue-text-bold">
                    {t("vinaScan.contactUs.vinachainBlockExplorerTitle")}
                    <ul>
                      <li className="contact-blue-text-regular">
                        {t("vinaScan.contactUs.vinascanIsAnIndependent")}
                        <span className="contact-blue-text-bold">
                          {t("vinaScan.contactUs.blockExplorer")}
                        </span>{" "}
                        {t(
                          "vinaScan.contactUs.vinachainBlockExplorerContentRest"
                        )}
                      </li>
                    </ul>
                  </li>

                  <li className="contact-blue-text-bold">
                    {t("vinaScan.contactUs.knowledgeBaseTitle")}
                    <ul>
                      <li className="contact-blue-text-regular">
                        {t("vinaScan.contactUs.knowledgeBaseContentRest")}
                        <span className="contact-blue-text-bold">
                          {t("vinaScan.contactUs.knowledgeBase")}
                        </span>{" "}
                        {t("vinaScan.contactUs.pageDoes")}
                      </li>
                    </ul>
                  </li>

                  <li className="contact-blue-text-bold">
                    {t("vinaScan.contactUs.communitySupportTitle")}
                    <ul>
                      <li className="contact-blue-text-regular">
                        {t("vinaScan.contactUs.communitySupportContent")}
                        <span className="contact-blue-text-bold">
                          {t("vinaScan.contactUs.neverSendUsThese")}
                        </span>
                        {t("vinaScan.contactUs.communitySupportContentRest")}
                        <span className="contact-blue-text-bold">
                          {t("vinaScan.contactUs.spamUs")}
                        </span>
                      </li>
                    </ul>
                  </li>

                  <li className="contact-blue-text-bold">
                    {t("vinaScan.contactUs.relatedIssuesTitle")}
                    <ul>
                      <li className="contact-blue-text-regular">
                        {t("vinaScan.contactUs.relatedIssuesContent")}
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
              <div>
                <div className="text-sm text-black200 dark:text-[#F5F5F5]">
                  {t("vinaScan.contactUs.subject")}
                  <span className="text-[#dc3545]">*</span>
                </div>
              </div>
              <DropdownContact
                reverse
                defaultValue={subject}
                options={SUBJECT_DATA}
                onChange={handleChangeSubject}
                containerStyle={{ width: "478px" }}
              />
              <div className="text-gray550 dark:text-[#bbb] text-sm">
                <strong>{t("vinaScan.contactUs.note")}</strong>{" "}
                <span>{t("vinaScan.contactUs.nodeContent")}</span>
              </div>
            </div>
          </Wrapper>
          <Wrapper title="Helpful Links" className="lg:w-1/4">
            <div className="flex flex-col gap-4">
              {HELPFUL_LINKS_DATA.map((helpful: any, index: number) => (
                <div key={index}>
                  <span className="text-sm font-semibold text-black200 dark:text-[#FAFAFA]">
                    {t(`vinaScan.contactUs.${helpful.title}`)}
                  </span>
                  <>
                    {helpful.data.map((link: any, index: number) => (
                      <div
                        key={index}
                        className={`flex gap-2 items-center py-2 ${
                          index < helpful.data.length - 1
                            ? "border-b border-[#e9ecef]"
                            : ""
                        }`}
                      >
                        <Link
                          href={link.link}
                          className="max-w-[272px] contact-blue-text"
                        >
                          {t(`vinaScan.contactUs.${link.label}`)}
                        </Link>
                        <ArrowUpRightSquareIcon
                          color="#adb5bd"
                          width={14.5}
                          height={15}
                        />
                      </div>
                    ))}
                  </>
                </div>
              ))}
            </div>
          </Wrapper>
        </div>
      </div>
    </ScanLayout>
  );
}
