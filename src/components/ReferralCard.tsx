"use client";

import { useTranslation } from "react-i18next";

import { CopyIcon } from "@/assets/icons/CopyIcon";
import { useTheme } from "@/hooks/useTheme";
import { onToast } from "@/hooks/useToast";
import { useConnectorByName } from "@/pkgs/wallet-connector/connector";
import { useWalletContext } from "@/pkgs/wallet-connector/context";
import { ADDRESS_NULL, THEME } from "@/utils/constants";
import contractJson from "@/web3/abi/VinachainPoint.json";
import { useToken } from "@/web3/hooks/useToken";
import { useEffect, useMemo, useState } from "react";
import { E_NETWORK_ID } from "@/pkgs/wallet-connector/types";
import { CONTRACT_ADDRESS } from "@/web3/token";
import { convertBalanceDecimalToNumber } from "@/utils/converter";

export const ReferralCard = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const { connectorName } = useWalletContext();
  const { hook } = useConnectorByName(connectorName);
  const [referralBalance, setReferralBalance] = useState<number>();
  const account = hook.useAccount();
  const networkSeleted = hook.useChainId() as E_NETWORK_ID;
  const [referrer, setReferrer] = useState<string>();

  const { getDecimals, getReferralReward, getReferrer } = useToken();
  const hashAccount = useMemo(() => {
    if (referrer) {
      return `${referrer.slice(0, 4)}...${referrer.slice(
        referrer.length - 4,
        referrer.length,
      )}`;
    }

    return "";
  }, [referrer]);
  useEffect(() => {
    getBalanceOfReferral();
  }, [account, networkSeleted]);

  const getBalanceOfReferral = async () => {
    if (!account || !networkSeleted) return;

    let referralAmount = 0;

    const address = CONTRACT_ADDRESS.VINACHAIN[networkSeleted] as string;

    const decimal = await getDecimals(address, contractJson);
    const refBalance = await getReferralReward();
    referralAmount = Number(convertBalanceDecimalToNumber(refBalance, decimal));
    setReferralBalance(referralAmount);
    const referrerAddress = await getReferrer();
    if (referrerAddress !== ADDRESS_NULL) {
      setReferrer(referrerAddress);
    }
  };

  const linkCopy = `${process.env.NEXT_PUBLIC_APP_URL}?refCode=${account}`;
  const handleCopy = () => {
    navigator.clipboard
      .writeText(linkCopy)
      .then(() => onToast("You successfully copied", "success"));
  };

  return (
    <div className="text-base text-[#333] dark:text-[#FAFAFA] p-6 bg-primary dark:bg-primaryDark rounded-lg">
      <div
        id="update-balance-referral"
        onClick={() => {
          getBalanceOfReferral();
        }}
      />
      <p className="font-bold mb-2 ">{t("referenceTitle")}</p>
      <p>{t("referenceSubTitle")}</p>
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex justify-between border border-secondary dark:border-secondaryDark rounded-lg px-2 py-3">
          {account ? (
            <>
              <p className="text-md text-secondary dark:text-secondaryDark truncate pr-4">
                {linkCopy}
              </p>
              <div onClick={handleCopy} className="cursor-pointer">
                <CopyIcon
                  color={theme === THEME.DARK ? "#D9610B" : "#3B3BFC"}
                />
              </div>
            </>
          ) : (
            <p>{t("pleaseConnectWallet")}</p>
          )}
        </div>
        <p className="">{t("linkAddress")}</p>
        <p>
          {`${t("reward")}:`}&nbsp;
          {referralBalance ?? 0}
        </p>
        {referrer ? (
          <p>
            {`${t("yourReferrer")}:`}&nbsp;
            {hashAccount}
          </p>
        ) : (
          t("noReferrer")
        )}
        <div className="hover:bg-white hover:opacity-[0.92] rounded-[100px]">
          <button
            onClick={() => {
              if (!account || !networkSeleted) {
                document.getElementById("wallet-connect")?.click();
              } else {
                handleCopy();
              }
            }}
            className="btn-primary border-none w-full text-sm lg:text-base py-2 bg-secondary dark:bg-secondaryDark text-[#FAFAFA] rounded-[100px]"
          >
            {t("getReferenceBtn")}
          </button>
        </div>
      </div>
    </div>
  );
};
