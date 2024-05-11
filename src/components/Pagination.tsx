import { ChevronLeftIcon } from "@/assets/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/assets/icons/ChevronRightIcon";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onClickFirstPage: () => void;
  onClickLastPage: () => void;
  prevPageStyle: string;
  nextPageStyle: string;
  prevIconColor?: string;
  nextIconColor?: string;
}

export const Pagination = ({
  currentPage,
  totalPage,
  onClickNextPage,
  onClickPrevPage,
  onClickFirstPage,
  onClickLastPage,
  prevPageStyle,
  nextPageStyle,
  prevIconColor,
  nextIconColor,
}: PaginationProps) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="flex gap-1 items-center">
      <div className={`flex items-center ${prevPageStyle}`}>
        <button
          disabled={currentPage <= 1}
          className="h-6 flex items-center justify-center px-2 rounded-[4px] text-xs"
          onClick={onClickFirstPage}
        >
          {t("first")}
        </button>
        <button
          disabled={currentPage <= 1}
          className="w-6 h-6 border-paginate"
          onClick={onClickPrevPage}
        >
          <ChevronLeftIcon color={prevIconColor} />
        </button>
      </div>
      <span className="border-paginate h-6 w-fit px-1">{`Page ${currentPage}/${totalPage}`}</span>
      <div className={`flex items-center ${nextPageStyle}`}>
        <button
          disabled={currentPage >= totalPage}
          className="w-6 h-6 border-paginate"
          onClick={onClickNextPage}
        >
          <ChevronRightIcon color={nextIconColor} />
        </button>
        <button
          disabled={currentPage >= totalPage}
          onClick={onClickLastPage}
          className=" h-6 flex items-center justify-center px-2 rounded-md text-xs"
        >
          {t("last")}
        </button>
      </div>
    </div>
  );
};
