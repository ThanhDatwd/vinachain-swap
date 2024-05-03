import { CloseIcon } from "@/assets/icons/CloseIcon";
import { InfoIcon } from "@/assets/icons/InfoIcon";
import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/utils/constants";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const InfoMore = ({ content }: { content: string }) => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="flex items-start lg:items-center gap-[2px] p-[10.4px] bg-[#e9ecef] dark:bg-[#222] !border !border-[#dee2e6] dark:!border-gray600 rounded-lg">
      <InfoIcon
        width={18}
        height={18}
        color={theme === THEME.DARK ? "#f5f5f5" : "#495057"}
      />
      <div className="flex-1 text-[14.5px] text-[#495057] dark:text-[#F5F5F5]">
        {content}&nbsp;
        <Link href="/coming-soon" className="link-color">
          {t("tokenTransfers.siteSettings")}
        </Link>
      </div>
      <CloseIcon />
    </div>
  );
};
