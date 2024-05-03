import { useTheme } from "@/hooks/useTheme";
import { BLOCK_ANALYTIC_DATA } from "@/utils/constants";
import { BlockAnalyticCard } from "./BlockAnalyticCard";
import { useTranslation } from "react-i18next";

export const BlockAnalytic = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {BLOCK_ANALYTIC_DATA.map((item, index) => (
        <BlockAnalyticCard
          key={index}
          title={t(`block.${item.title}`)}
          percentage={item.value}
        />
      ))}
    </div>
  );
};
