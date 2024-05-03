import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/utils/constants";
import { numberWithComma } from "@/utils/formatNumber";
import React from "react";

interface TransactionProps {
  title: string;
  time: string;
  quantity: number;
  percent: string;
  growth: number;
}

export const TransactionCard = ({
  title,
  time,
  quantity,
  percent,
  growth,
}: TransactionProps) => {
  const { theme } = useTheme();
  return (
    <div className="bg-white dark:bg-[#111111] px-6 py-4 shadow-[0px_2px_15px_0px_#DCDCDC] rounded-3xl">
      <span className="text-sm text-[#666666] dark:text-[#C4C4C4] uppercase">{`${title} (${time})`}</span>
      <div className="flex items-end text-xl text-[#1A1A1A] dark:text-[#FAFAFA]">
        {numberWithComma(quantity)}&nbsp;
        <span
          className="text-sm"
          style={{
            color:
              theme === THEME.LIGHT
                ? growth >= 0
                  ? growth == 0
                    ? "#1A1A1A"
                    : "#2DCF12"
                  : "#DA1C1C"
                : growth >= 0
                  ? growth == 0
                    ? "#FAFAFA"
                    : "#2DCF12"
                  : "#DA1C1C",
          }}
        >
          ({percent})
        </span>
      </div>
    </div>
  );
};
