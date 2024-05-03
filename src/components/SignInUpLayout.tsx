import Link from "next/link";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export const SignInUpLayout = ({
  subTitle,
  title,
  children,
  isShowLinkRedirect = true,
}: {
  subTitle: string;
  title: string;
  children: ReactNode;
  isShowLinkRedirect?: boolean;
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center w-96 max-w-full mx-auto   bg-bgColor dark:bg-gray700 px-3 py-12 lg:px-10 lg:pt-20 lg:pb-32">
      <div className="flex flex-col gap-5 w-full lg:w-fit boxShadow p-6 border rounded-xl bg-white dark:bg-[#111111]">
        <div className="flex flex-col items-center gap-2 ">
          <h1 className="text-[22.5px] text-center font-meidum text-dark900 dark:text-gray200">
            {title}
          </h1>
          <div className="text-[15px] text-gray550 dark:text-gray200 text-center">
            {subTitle}&nbsp;
            {isShowLinkRedirect && (
              <Link
                className="text-[#0784c3] dark:text-[#DA6C1D]"
                href={
                  title === t("vinaScan.register.title")
                    ? "/login"
                    : "/register"
                }
              >
                {title === t("vinaScan.register.title")
                  ? t("vinaScan.register.signInHere")
                  : t("vinaScan.register.title")}
              </Link>
            )}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
