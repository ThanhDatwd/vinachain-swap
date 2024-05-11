import Link from "next/link";
import { useTranslation } from "react-i18next";

interface IProfileLayout {
  title: string;
  content: string;
  children: React.ReactNode;
  isForgotPassword?: boolean;
}

export const ProfileLayout = ({
  title,
  content,
  children,
  isForgotPassword = false,
}: IProfileLayout) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col bg-white dark:bg-gray900 rounded-2xl boxShadowStaking">
      <div className="flex items-center justify-between p-4 !border-b !border-[#D2C5ED] dark:!border-[#534A64]">
        <span className="exchange-color-second text-xl font-semibold">
          {title}
        </span>
        {isForgotPassword && (
          <Link
            href={"/request-lost-password"}
            className="text-sm text-secondary dark:text-[#FF8911] hover:text-secondary hover:dark:text-[#FF8911] hover:opacity-70 font-normal"
          >
            {t("profile.forgotPassword")}
          </Link>
        )}
      </div>
      <div className="flex flex-col p-4">
        <span className="exchange-color-second text-base mb-4 lg:mb-8">
          {content}
        </span>
        {children}
      </div>
    </div>
  );
};
