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
        className={`flex items-center ${prevPageStyle}`}
        onClick={onClickPrevPage}
      >
        <span className="h-6 flex items-center justify-center px-2 text-gray550 dark:text-gray500 rounded-[4px] text-xs">
          {t("first")}
        </span>
        <div className="w-6 h-6 border-paginate">
          <ChevronLeftIcon
            color={theme === THEME.DARK ? "#BBBBBB" : "#6C757D"}
          />
        </div>
      </button>
      <span className="border-paginate h-6 w-fit px-1">{`Page ${2}/1000`}</span>
      <button
        className={`flex items-center ${nextPageStyle}`}
        onClick={onClickNextPage}
      >
        <div className="w-6 h-6 border-paginate">
          <ChevronRightIcon
            color={theme === THEME.DARK ? "#BBBBBB" : "#6C757D"}
          />
        </div>
        <span className=" h-6 flex items-center justify-center px-2 text-gray550 dark:text-gray500 rounded-md text-xs">
          {t("last")}
        </span>
      </button>
    </div>
  );
};
