import { useTranslation } from "react-i18next";
import { ProfileLayout } from "./ProfileLayout";
import { AccountCircleIcon } from "@/assets/icons/AccountCircleIcon";
import { MailIcon } from "@/assets/icons/MailIcon";
import { BalanceWalletIcon } from "@/assets/icons/BalanceWalletIcon";
import { PaidIcon } from "@/assets/icons/PaidIcon";
import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/utils/constants";
import { useAuth } from "@/hooks/useAuth";
import { formatTrxIdSwap } from "@/utils/formatTrxId";
import { numberWithComma } from "@/utils/formatNumber";
import { calcValueToUSD } from "@/utils/converter";

export const AccountOverviewTab = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { availableAmount, currentUser } = useAuth();

  return (
    <ProfileLayout
      title={t("profile.personalInformation")}
      content={t("profile.personalInformationContent")}
    >
      <div className="user-info-block">
        <div className="user-info-title">
          <AccountCircleIcon
            color={theme === THEME.DARK ? "#B5A1DC" : "#6B5695"}
          />{" "}
          {t("profile.username")}
        </div>
        <div className="text-ellipsis">{currentUser.username}</div>
      </div>
      <hr className="line-profile my-2 lg:my-4" />
      <div className="user-info-block">
        <div className="user-info-title">
          <MailIcon color={theme === THEME.DARK ? "#B5A1DC" : "#6B5695"} />
          {t("profile.emailAddress")}
        </div>
        <div className="text-ellipsis">{currentUser.email}</div>
      </div>
      <hr className="line-profile my-2 lg:my-4" />
      <div className="user-info-block">
        <div className="user-info-title">
          <BalanceWalletIcon
            color={theme === THEME.DARK ? "#B5A1DC" : "#6B5695"}
          />
          {t("profile.walletAddress")}
        </div>
        <div className="text-ellipsis">{currentUser?.walletAddress}</div>
      </div>
      <hr className="line-profile my-2 lg:my-4" />
      <div className="user-info-block">
        <div className="user-info-title">
          <PaidIcon color={theme === THEME.DARK ? "#B5A1DC" : "#6B5695"} />
          {t("profile.totalVPCBalance")}
        </div>
        <span>
          {numberWithComma(availableAmount)} VPC&nbsp;
          <span className="text-sm font-normal">
            (~ {calcValueToUSD(availableAmount)} USDT)
          </span>
        </span>
      </div>
    </ProfileLayout>
  );
};
