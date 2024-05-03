import { VERIFIED_CONTRACT_ANALYTIC_DATA } from "@/utils/constants";
import { BlockAnalyticCard } from "../block/BlockAnalyticCard";
import { useTranslation } from "react-i18next";

export const ContractVerifiedAnalytic = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {VERIFIED_CONTRACT_ANALYTIC_DATA.map((item, index) => (
        <BlockAnalyticCard
          key={index}
          title={t(`verifiedContract.${item.title}`)}
          percentage={item.value}
        />
      ))}
    </div>
  );
};
