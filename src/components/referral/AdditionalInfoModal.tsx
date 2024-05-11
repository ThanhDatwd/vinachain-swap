import { EyeIcon } from "@/assets/icons/EyeIcon";
import { useTheme } from "@/hooks/useTheme";
import { referralService } from "@/services/ReferralService";
import { generateRandomString } from "@/utils";
import { THEME } from "@/utils/constants";
import { formatTrxIdSwap } from "@/utils/formatTrxId";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Tooltip, TooltipRefProps, TooltipWrapper } from "react-tooltip";
import { LoadingSpinner } from "../LoadingSpinner";

interface IProps {
  style?: React.CSSProperties;
  content: string | React.ReactNode;
  title: string | React.ReactNode;
  styleTooltip?: React.CSSProperties;
  walletAddress: string;
}
interface dataAnalytic {
  totalReferrer: number;
  totalStaked: number;
}
export const AdditionalInfoModal = ({
  content,
  title,
  styleTooltip,
  walletAddress,
}: IProps) => {
  const { t } = useTranslation();
  const [dataAnalytic, setDataAnalytic] = useState<dataAnalytic>();
  const [loading, setIsLoading] = useState(true);

  const randomClassName = generateRandomString(16);
  const { theme } = useTheme();

  const contentRef = useRef<TooltipRefProps>(null);
  const parentRef = useRef<any>(null);
  ClickOutside(parentRef, () => {
    contentRef.current?.close();
  });

  const handleGetAnalytic = async (address: string) => {
    setIsLoading(true);
    try {
      if (address && !loading && !dataAnalytic) {
        const res = await referralService.getReferralAnalytic(address);
        if (res.success) {
          setDataAnalytic(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="relative z-50" ref={parentRef}>
        <div
          onMouseEnter={() => {
            handleGetAnalytic(walletAddress);
          }}
          className={` ${randomClassName} relative rounded  w-fit cursor-pointer z-[1]`}
        >
          {title}
        </div>

        {/* <div
          className={` ${randomClassName} absolute rounded top-0 left-0 w-full h-full opacity-0`}
        ></div> */}
      </div>

      <Tooltip
        ref={contentRef}
        anchorSelect={"." + randomClassName}
        place="bottom"
        opacity={1}
        style={{
          backgroundColor: "transparent",
          pointerEvents: "auto",
          position: "absolute",
          zIndex: 10000,
          padding: "0px",
          borderRadius: "24px",
          ...styleTooltip,
        }}
        render={() => (
          <div className="">
            <div className="wallet-address-modal !relative !z-[10000]">
              {loading ? (
                <div className="w-80 h-32 flex items-center justify-center">
                  <div className="w-4 h-4 ">
                    <LoadingSpinner
                      color={theme === THEME.DARK ? "#FF8911" : "#3B3BFC"}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col text-header-table">
                  <div className="flex w-full  wallet-address-border">
                    <span className="wallet-address-row">
                      {t("referral.walletAddress")}
                    </span>
                    <span className="wallet-address-row">
                      {formatTrxIdSwap(walletAddress)}
                    </span>
                  </div>
                  <div className="flex w-full  wallet-address-border">
                    <span className="wallet-address-row">
                      {t("referral.numberOfInvestors")}
                    </span>
                    <span className="wallet-address-row">
                      {dataAnalytic?.totalReferrer}
                    </span>
                  </div>
                  <div className="flex w-full  wallet-address-border">
                    <span className="wallet-address-row">
                      {t("referral.totalStackingValue")}
                    </span>
                    <span className="wallet-address-row">
                      {dataAnalytic?.totalStaked}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      />
    </>
  );
};

const ClickOutside = (ref: any, onClickOutside: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};
