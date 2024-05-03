import React from "react";
import { KeyboardArrowLeft } from "@/assets/icons/KeyboardArrowLeft";
import { KeyboardArrowRight } from "@/assets/icons/KeyboardArrowRight";
import { useTranslation } from "react-i18next";
import { ChevronLeftIcon } from "@/assets/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/assets/icons/ChevronRightIcon";
import { THEME } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  prevPageStyle: string;
  nextPageStyle: string;
}

export const Pagination = ({
  currentPage,
  totalPage,
  onClickNextPage,
  onClickPrevPage,
  prevPageStyle,
  nextPageStyle,
}: PaginationProps) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="flex gap-1 items-center">
      <button
        className={`flex items-center gap-1 ${prevPageStyle}`}
        onClick={onClickPrevPage}
      >
        <span className="bg-white_98  dark:bg-gray800  h-[28.8px] flex items-center justify-center px-2 border border-[#bdc5d133] text-gray550 dark:text-gray500 rounded-md text-[12.56px]">
          {t("first")}
        </span>
        <div className=" bg-white_98  dark:bg-gray800  h-[28.8px] flex items-center justify-center px-1  border border-[#bdc5d133] text-gray550 dark:text-gray500 rounded-md">
          <ChevronLeftIcon
            color={theme === THEME.DARK ? "#BBBBBB" : "#6C757D"}
          />
        </div>
      </button>
      <span className=" bg-white_98  dark:bg-gray800 h-[28.8px] flex items-center justify-center px-2 border border-[#bdc5d133] text-gray550 dark:text-gray500 rounded-md text-[12.56px] whitespace-nowrap">{`Page ${2}/1000`}</span>
      <button
        className={`flex items-center gap-1 ${nextPageStyle}`}
        onClick={onClickNextPage}
      >
        <div className=" bg-white_98  dark:bg-gray800  h-[28.8px] flex items-center justify-center px-1  border border-[#bdc5d133] text-gray550 dark:text-gray500 rounded-md">
          <ChevronRightIcon
            color={theme === THEME.DARK ? "#BBBBBB" : "#6C757D"}
          />
        </div>
        <span className=" bg-white_98  dark:bg-gray800 h-[28.8px] flex items-center justify-center px-2 border border-[#bdc5d133] text-gray550 dark:text-gray500 rounded-md text-[12.56px]">
          {t("last")}
        </span>
      </button>
    </div>
  );
};
