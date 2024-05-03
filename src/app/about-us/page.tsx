"use client";

import { IStaffInfo, StaffInfoCard } from "@/components/AboutUs/StaffInfoCard";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { STAFF_INFO_DATA, getStaticURL } from "@/utils/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function AboutUsPage() {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    router.replace("/coming-soon");
  },[])

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark">
      <div className="flex flex-col items-center gap-12 px-3 lg:px-10">
        <div className="flex flex-col lg:flex-row pt-12 pb-16">
          <div className="flex-1 flex flex-col justify-center gap-4 lg:pr-10 text-base text-[#212529]">
            <h2 className="text-2xl lg:text-3xl">
              {t("vinaScan.aboutUs.aboutVinascanTitle")}
            </h2>
            <span>{t("vinaScan.aboutUs.aboutVinascanContent")}</span>
            <span>{t("vinaScan.aboutUs.aboutVinascanSubContent")}</span>
          </div>
          <div className="flex-1 relative pl-10">
            <div
              className="h-[400px] rounded-xl grayscale"
              style={{
                backgroundImage: `url(${getStaticURL()}/assets/images/staff-1.jpg)`,
                backgroundSize: "cover",
                backgroundPositionY: "40%",
              }}
            />
            <div className="absolute -bottom-4 -right-4">
              <Image
                src={`${getStaticURL()}/assets/images/corner-lines.svg`}
                width={100}
                height={100}
                className="w-[352px]"
                alt="corner line"
              />
            </div>
          </div>
        </div>
        <div className="contact-concept-header">
          <h3 className="contact-heading">
            {" "}
            {t("vinaScan.aboutUs.meetTheVinascannersTitle")}
          </h3>
          <span>{t("vinaScan.aboutUs.meetTheVinascannersContent")}</span>
        </div>
        <div className="grid xs:grid-cols-1 lg:grid-cols-6 w-full">
          {STAFF_INFO_DATA.map((staff: IStaffInfo, index: number) => (
            <StaffInfoCard
              key={index}
              avatar={staff.avatar}
              name={staff.name}
              position={staff.position}
              desc={staff.desc}
            />
          ))}
        </div>
        <div className="contact-concept-header">
          <h3 className="contact-heading">
            {t("vinaScan.aboutUs.withSupportFromTitle")}
          </h3>
          <span>{t("vinaScan.aboutUs.withSupportFromContent")}</span>
        </div>
        <div className="lg:mx-[100px]">
          <Image
            src={`${getStaticURL()}/assets/images/world-link.svg`}
            alt="World Link"
            height={100}
            width={100}
            className="w-full"
          />
        </div>
      </div>
    </ScanLayout>
  );
}
