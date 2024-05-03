import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { ChevronLeftIcon } from "@/assets/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/assets/icons/ChevronRightIcon";
import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/utils/constants";
import { useRouter } from "next/navigation";

interface IntroduceCardProps {
  imgUrl: string;
  title: string;
  subTitle: string;
  primaryBtn?: string;
  secondaryBtn?: string;
  containerStyle?: string;
  contentStyle: string;
  titleStyle?: string;
  primaryBtnUrl?: string;
  secondaryBtnUrl?: string;
  boardCodeEx?: boolean;
  isLink?: boolean;
}

export const IntroduceCard = ({
  imgUrl,
  title,
  subTitle,
  primaryBtn,
  secondaryBtn,
  containerStyle,
  contentStyle,
  titleStyle,
  primaryBtnUrl,
  secondaryBtnUrl,
  boardCodeEx = false,
  isLink,
}: IntroduceCardProps) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const router = useRouter();

  const codeExData = [
    {
      title: t("yourOwnBankTitle"),
      subTitle: t("yourOwnBankSubTitle"),
    },
    {
      title: t("yourOwnCurrencyTitle"),
      subTitle: t("yourOwnCurrencySubTitle"),
    },
    {
      title: t("aJsEthereumWalletTitle"),
      subTitle: t("aJsEthereumWalletSubTitle"),
    },
    {
      title: t("anOpenDNSTitle"),
      subTitle: t("anOpenDNSSubTitle"),
    },
  ];

  return (
    <div
      className={containerStyle}
      onClick={() => {
        if (isLink) {
          router.push("/coming-soon");
        }
      }}
    >
      {boardCodeEx ? (
        <div className="flex-1 shadow-[4px_4px_0px_0px_#B69FD3] dark:shadow-[4px_4px_4px_0px_#F6AF86]">
          <div className="flex justify-between bg-[#DCDCDC] dark:bg-[#222327] border border-[#333] pt-[22px] p-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#DC3737]" />
              <div className="w-3 h-3 rounded-full bg-[#F9DD49]" />
              <div className="w-3 h-3 rounded-full bg-[#1BA932]" />
            </div>
            <span className="text-[#333] dark:text-[#FAFAFA]">
              {t("codeExample")}
            </span>
            <div className="flex">
              <ChevronLeftIcon
                color={theme === THEME.DARK ? "#FAFAFA" : "#333"}
              />
              <ChevronRightIcon
                color={theme === THEME.DARK ? "#FAFAFA" : "#333"}
              />
            </div>
          </div>
          <div className="border-l border-r border-b border-[#333]">
            {codeExData.map((item, index) => (
              <Link
                href={"/coming-soon"}
                target="_blank"
                key={index}
                className="flex flex-col gap-1 border-b border-[#DCDCDC] p-6 bg-white dark:bg-[#222327] hover:bg-[#e1fefa] dark:hover:bg-[#141e1e] cursor-pointer"
              >
                <span className="text-[#333] dark:text-[#FAFAFA]">
                  {item.title}
                </span>
                <span className="text-[#333] dark:text-[#FAFAFA]">
                  {item.subTitle}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Image
          src={imgUrl}
          width={100}
          height={100}
          alt="Pick a wallet"
          className="flex-1 w-full"
        />
      )}
      <div className={`flex flex-1 ${contentStyle}`}>
        <h5
          className={`text-2xl text-[#333] dark:text-[#FAFAFA] font-bold ${titleStyle}`}
        >
          {title}
        </h5>
        <p className="text-[#333] dark:text-[#FAFAFA]">{subTitle}</p>
        {primaryBtn && (
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <Link
              href={primaryBtnUrl || ""}
              className="rounded hover:bg-white hover:opacity-[0.92] hover:scale-105 hover:transform duration-300"
            >
              <button className="border-none h-full bg-secondary dark:bg-secondaryDark text-[#FAFAFA] w-fit rounded px-4 py-2">
                {primaryBtn}
              </button>
            </Link>
            {secondaryBtn && (
              <Link
                href={secondaryBtnUrl || ""}
                className="border border-secondary text-secondary dark:border-secondaryDark dark:text-secondaryDark w-fit rounded px-4 py-2 hover:scale-105 hover:transform duration-300"
              >
                {secondaryBtn}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
