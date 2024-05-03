"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  endsInTimer,
  calculateTimeRemaining,
  StartDate,
  DateRange,
} from "@/utils/constants";
import { DateTime } from "luxon";

export const SaleEndInCard = () => {
  const { t } = useTranslation();

  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(
      DateTime.fromFormat(StartDate, "dd/MM/yyyy")
        .plus({ days: DateRange })
        .toISO({ includeOffset: false }) as string,
    ),
  );

  const handleTimerComplete = () => {};

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeRemaining(
        DateTime.fromFormat(StartDate, "dd/MM/yyyy")
          .plus({ days: DateRange })
          .toISO() as string,
      );

      if (remaining.timeRemaining <= 0) {
        clearInterval(timer);
        handleTimerComplete();
      }

      setTimeRemaining(remaining);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6 bg-primary dark:bg-primaryDark rounded-lg flex flex-col md:h-[150px]">
      <p className="text-xs lg:text-base font-bold mb-6 text-[#333] dark:text-[#FAFAFA]">
        {t("preSaleEndsIn")}
      </p>
      <div className="flex justify-between">
        <div className="flex flex-col flex-1 items-center gap-2 text-[#333] dark:text-[#FAFAFA]">
          <p
            className="font-bold text-xl lg:text-[32px] text-stroke"
            suppressHydrationWarning
          >
            {timeRemaining.days}
          </p>
          <p className="text-[10px] lg:text-base">{t("days")}</p>
        </div>
        <p className="text-[10px] lg:text-base h-8 flex items-center justify-center flex-4">
          :
        </p>
        <div className="flex flex-col flex-1 items-center gap-2 text-[#333] dark:text-[#FAFAFA]">
          <p
            className="font-bold text-xl lg:text-[32px] text-stroke"
            suppressHydrationWarning
          >
            {timeRemaining.hours}
          </p>
          <p className="text-[10px] lg:text-base">{t("hours")}</p>
        </div>
        <p className="text-[10px] lg:text-base h-8 flex items-center justify-center flex-4">
          :
        </p>
        <div className="flex flex-col flex-1 items-center gap-2 text-[#333] dark:text-[#FAFAFA]">
          <p
            className="font-bold text-xl lg:text-[32px] text-stroke"
            suppressHydrationWarning
          >
            {timeRemaining.minutes}
          </p>
          <p className="text-[10px] lg:text-base">{t("minutes")}</p>
        </div>
        <p className="text-[10px] lg:text-base h-8 flex items-center justify-center flex-4">
          :
        </p>
        <div className="flex flex-col flex-1 items-center gap-2 text-[#333] dark:text-[#FAFAFA]">
          <p
            className="font-bold text-xl lg:text-[32px] text-stroke"
            suppressHydrationWarning
          >
            {timeRemaining.seconds}
          </p>
          <p className="text-[10px] lg:text-base">{t("seconds")}</p>
        </div>
      </div>
    </div>
  );
};
