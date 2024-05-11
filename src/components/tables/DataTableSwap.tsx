/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useTheme } from "@/hooks/useTheme";
import { Integration } from "@/models/commonn";
import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
  PAGINATION_OPTIONS,
  STAKING_CURRENCY,
  THEME,
} from "@/utils/constants";
import classNames from "classnames";
import { FC, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import { Dropdown } from "../Dropdown";
import { Pagination } from "../Pagination";

interface DataTableProps {
  columns: Array<ColumnDef<any, any>>;
  columnsVisibility?: Array<any>;
  currentPagination: number;
  totalPagination: number;
  viewMore?: ReactNode;
  data: any[];
  className?: string;
  activePage: {
    [key: string]: boolean;
  };
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onClickFirstPage: () => void;
  onClickLastPage: () => void;
  onChangePageSize: (value: string) => void;
  pageCount: number;
  currentToken: STAKING_CURRENCY;
  handleToggle: () => void;
  isShowSwitch?: boolean;
}

export const DataTableSwap: FC<DataTableProps> = ({
  columns,
  // fetchData,
  currentPagination,
  totalPagination,
  viewMore,
  data = [],
  className,
  activePage,
  onClickPrevPage,
  onClickNextPage,
  onClickFirstPage,
  onClickLastPage,
  onChangePageSize,
  pageCount,
  currentToken,
  handleToggle,
  isShowSwitch = false,
}) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const limit = searchParams.get("limit");
  // const filters = searchParams.get("filters");
  const offset = searchParams.get("offset");
  // const { filter, limit } = router.query;

  const [itemOffset, setItemOffset] = useState(0);
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: DEFAULT_PAGE_NUMBER,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const isParseUrlDone = useRef<boolean>(false);

  const paginate = {
    limit: pageSize,
    offset: itemOffset,
    sort: "-createdAt",
  };

  useEffect(() => {
    if (pathname) {
      if (!limit || !offset) {
        // persistToUrl();
      } else {
        setItemOffset(Number(offset as string));
        setPagination({
          pageIndex: Number(offset as string) / Number(limit as string),
          pageSize: Number(limit as string),
        });
      }
      isParseUrlDone.current = true;
    }
  }, [pathname]);

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data: data,
    columns,
    manualFiltering: true,
    manualPagination: true,
    pageCount: totalPagination,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    isParseUrlDone.current = true;
  }, [
    table,
    pageSize,
    pageIndex,
    itemOffset,
    pathname,
    // isRefresh,
  ]);

  const persistToUrl = () => {
    const queryParams = {
      sort: "-createdAt",
      limit: pageSize.toString(),
      offset: itemOffset.toString(),
    };

    const queryString = new URLSearchParams(queryParams).toString();

    router.push(`${pathname}?${queryString}`);

    return { queryString };
  };

  const resetPagination = () => {
    if (itemOffset !== 0 || pageIndex !== DEFAULT_PAGE_NUMBER) {
      setItemOffset(0);
      setPagination({
        pageIndex: DEFAULT_PAGE_NUMBER,
        pageSize: Number(limit),
      });
    }
  };

  return (
    <>
      <div className={`flex flex-wrap rounded-3xl ${className}`}>
        <div className="w-full max-w-full flex-0 ">
          <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-[#111111] rounded-2xl bg-clip-border">
            <div className="fixed-columns">
              <div className="overflow-x-auto ">
                <div
                  className={classNames(
                    `scrollbar ${
                      theme === THEME.DARK ? "dark" : ""
                    }  overflow-auto pb-2 ${
                      data.length > 0 && "min-h-[140px]"
                    } `
                  )}
                >
                  {isShowSwitch && (
                    <div className="p-4 flex items-center gap-2">
                      <span>{t("referral.showAs")}</span>
                      <div className="relative border rounded-full bg-[#6B5695] p-1 w-fit">
                        <button
                          className={`px-2 uppercase transition-all duration-300 rounded-full w-1/2 whitespace-nowrap ${
                            currentToken === STAKING_CURRENCY.VPC
                              ? "bg-white text-[#6B5695] font-bold"
                              : "text-white"
                          }`}
                          onClick={handleToggle}
                        >
                          {STAKING_CURRENCY.VPC}
                        </button>
                        <button
                          className={`px-2 uppercase transition-all duration-300 rounded-full w-1/2 whitespace-nowrap ${
                            currentToken === STAKING_CURRENCY.USDT
                              ? "bg-white text-[#6B5695] font-bold"
                              : "text-white"
                          }`}
                          onClick={handleToggle}
                        >
                          {STAKING_CURRENCY.USDT}
                        </button>
                      </div>
                    </div>
                  )}
                  <table className="table table-flush dataTable-table  ">
                    <thead className="thead-light">
                      {table.getHeaderGroups().map((headerGroup, index) => (
                        <tr key={index}>
                          {headerGroup.headers.map((header, index) => (
                            <th
                              className={`${index === 0 ? "w-[20px]" : ""}`}
                              style={{ border: "none" }}
                              key={index}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    {/* {!loading && ( */}
                    <tbody>
                      {table.getRowModel().rows.map((row, index) => (
                        <tr
                          key={index}
                          className={`${
                            index % 2 == 0 && "bg-purple200 dark:bg-purple800"
                          }`}
                        >
                          {row.getVisibleCells().map((cell, index) => (
                            <td
                              key={index}
                              className={`${
                                index === 0 ? "w-[20px]" : ""
                              } border-none relative`}
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                    {/* )} */}
                  </table>
                </div>
              </div>
              {data.length === 0 && (
                <div className="top-1/2 left-1/2 right-1/2 text-[14.5px] text-dark900 dark:text-[#F5F5F5] py-4 flex justify-center pb-10">
                  {t("referral.noDataTable")}
                </div>
              )}
              {data.length > 0 && (
                <div className="px-4 my-4 relative">
                  <div className="flex md:items-center gap-3 md:gap-0 justify-between relative md:py-4">
                    <div className="flex md:block md:justify-center items-center">
                      <span className="text-gray450 dark:text-dark400 text-xs">
                        {t("show")}&nbsp;
                      </span>
                      <Dropdown
                        reverse
                        defaultValue={
                          PAGINATION_OPTIONS.filter(
                            ({ value }) => Number(value) === pageCount
                          )[0]
                        }
                        options={PAGINATION_OPTIONS}
                        onChange={onChangePageSize}
                        className=""
                      />
                      &nbsp;
                      <span className="text-gray450 dark:text-dark400 text-xs">
                        {t("referral.record")}&nbsp;
                      </span>
                    </div>

                    <Pagination
                      prevPageStyle={`${
                        currentPagination > 1
                          ? "text-secondary dark:text-secondaryDark"
                          : "text-[#666666] dark:text-[#C4C4C4]"
                      }`}
                      nextPageStyle={`${
                        currentPagination < totalPagination
                          ? "text-secondary dark:text-secondaryDark"
                          : "text-[#666666] dark:text-[#C4C4C4]"
                      }`}
                      prevIconColor={
                        currentPagination > 1
                          ? theme === THEME.DARK
                            ? "#FF8911"
                            : "#3B3BFC"
                          : "#C4C4C4"
                      }
                      nextIconColor={
                        currentPagination < totalPagination
                          ? theme === THEME.DARK
                            ? "#FF8911"
                            : "#3B3BFC"
                          : "#C4C4C4"
                      }
                      currentPage={currentPagination}
                      totalPage={totalPagination}
                      onClickPrevPage={onClickPrevPage}
                      onClickNextPage={onClickNextPage}
                      onClickFirstPage={onClickFirstPage}
                      onClickLastPage={onClickLastPage}
                    />
                  </div>
                </div>
              )}
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
