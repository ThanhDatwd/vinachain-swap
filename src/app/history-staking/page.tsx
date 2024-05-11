"use client";

import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { ChevronLeftIcon } from "@/assets/icons/ChevronLeftIcon";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { CellText } from "@/components/tables/CellText";
import { DataTableSwap } from "@/components/tables/DataTableSwap";
import { HeaderTable } from "@/components/tables/HeaderTable";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { onToast } from "@/hooks/useToast";
import { stakeService } from "@/services/StakeService";
import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
  STAKING_CURRENCY,
} from "@/utils/constants";
import { createColumnHelper } from "@tanstack/react-table";
import { DateTime } from "luxon";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const ONE_YEAR_DAYS = 365;
declare const window: any;

export default function HistoryStakingPage() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const columnHelper = createColumnHelper<any>();
  const ref = useRef(null);
  const [{ offset, limit }, setPaginations] = useState({
    offset: DEFAULT_PAGE_NUMBER,
    limit: DEFAULT_PAGE_SIZE,
  });
  const { currentUser } = useAuth();
  const [data, setData] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState(DEFAULT_PAGE_SIZE);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currency = searchParams.get("currency");
  const [currentToken, setCurrentToken] = useState<STAKING_CURRENCY>(
    currency as STAKING_CURRENCY ?? STAKING_CURRENCY.VPC
  );
  const [isOpenWalletAddressInfoModal, setIsOpenWalletAddressInfoModal] =
    useState<{
      [key: number]: boolean;
    }>();

  const [activePage, setActivePage] = useState<{ [key: string]: boolean }>({
    prev: true,
  });
  const [activeCurrentPage, setActiveCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (currentUser && currentToken) {
      fetchDataReferral(currentToken, offset, limit);
    }
  }, [currentUser, offset, limit]);

  ClickOutside(ref, () => {
    setIsOpenWalletAddressInfoModal(undefined);
  });

  const fetchDataReferral = async (
    currency: STAKING_CURRENCY,
    offset: number,
    limit: number
  ) => {
    try {
      const res = await stakeService.getListStakeHistory({
        offset,
        limit,
        currency: currency.toLowerCase(),
      });

      if (res.success && res.data.rows.length !== 0) {
        setData(res.data.rows);
        setTotal(res.data.total);
        setTotalPage(Math.ceil(res.data.total / limit));
      }
    } catch (error) {
    }
  };

  const handleCopy = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => onToast("You successfully copied", "success"));
  };

  const handleFirstPage = () => {
    setPaginations({ offset: DEFAULT_PAGE_NUMBER, limit: DEFAULT_PAGE_SIZE });
    setActiveCurrentPage(1);
  };

  const handleLastPage = () => {
    setPaginations({
      offset: (totalPage - 1) * DEFAULT_PAGE_SIZE,
      limit: DEFAULT_PAGE_SIZE,
    });
    setActiveCurrentPage(totalPage);
  };

  const handlePrevPage = () => {
    setActivePage({ prev: true });
    setPaginations((prev) => ({
      ...prev,
      offset: prev.offset - DEFAULT_PAGE_SIZE,
    }));
  };

  const handleNextPage = () => {
    setActivePage({ next: true });
    setPaginations((prev) => ({
      ...prev,
      offset: prev.offset + prev.limit,
    }));
  };

  const handleActiveCurrentPage = (page: number) => {
    setActiveCurrentPage(page);
  };

  const handleChangePageSize = (value: string) => {
    setPaginations({
      offset: DEFAULT_PAGE_NUMBER,
      limit: Number(value),
    });
    setPageCount(Number(value));
  };

  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => <HeaderTable icon={<span className="pl-3">#</span>} />,
      cell: (info) => {
        const orderNumber = info.row.index + 1 + Number(offset);
        return <CellText text={<span className="pl-3">{orderNumber}</span>} />;
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.periodInDays, {
      id: "periodInDays",
      cell: ({ getValue }) => (
        <CellText
          text={`${(getValue() / ONE_YEAR_DAYS) * 12} ${t(
            "stakingPage.months"
          )}`}
        />
      ),
      header: () => <HeaderTable text={t("stakingHistory.packageDuration")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.profitPercentage, {
      id: "profitPercentage",
      cell: ({ getValue }) => <CellText text={`${getValue()}%`} />,
      header: () => <HeaderTable text={t("stakingHistory.packageProfit")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.amount, {
      id: "amount",
      cell: ({ getValue }) => (
        <CellText
          text={`${getValue().toLocaleString("en-US")} ${currentToken}`}
        />
      ),
      header: () => (
        <HeaderTable
          text={t(
            currentToken === STAKING_CURRENCY.VPC
              ? "stakingHistory.vpcLocked"
              : "stakingHistory.usdtLocked"
          )}
        />
      ),
      footer: (props) => props.column.id,
    }),

    columnHelper.accessor((row) => row.fullPeriodUSDTRewards, {
      id: "fullPeriodUSDTRewards",
      cell: ({ getValue }) => (
        <CellText text={`${getValue().toLocaleString("en-US")} USDT`} />
      ),
      header: () => <HeaderTable text={t("stakingHistory.usdtReceive")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row: any) => row.createdAt, {
      id: "createdAt",
      cell: ({ getValue, row }) => (
        <CellText
          text={DateTime.fromISO(getValue()).toFormat("MMMM dd, yyyy hh:mm a")}
        />
      ),
      header: () => <HeaderTable text={t("stakingHistory.lockOn")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.createdAt, {
      id: "createdAt",
      cell: ({ getValue, row }) => (
        <CellText
          text={DateTime.fromISO(getValue())
            .plus({ days: row.getValue("periodInDays") })
            .toFormat("MMMM dd, yyyy hh:mm a")}
        />
      ),
      header: () => <HeaderTable text={t("stakingHistory.unlockOn")} />,
      footer: (props) => props.column.id,
    }),
  ];

  const handleToggle = async () => {
    const currency =
      currentToken === STAKING_CURRENCY.VPC
        ? STAKING_CURRENCY.USDT
        : STAKING_CURRENCY.VPC;
    setCurrentToken(currency);
    window.history.pushState(null, "", `/history-staking?currency=${currency}`);

    setPaginations({
      offset: DEFAULT_PAGE_NUMBER,
      limit: DEFAULT_PAGE_SIZE,
    });
    await fetchDataReferral(currency, DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE);
  };

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark font-sans-serif relative">
      <div className="text-base text-purple550 dark:text-purple600 px-4 lg:px-24 xl:px-[169px]">
        <div className="flex flex-col gap-6 py-8 md:py-14 ">
          <h1 className=" text-[32px] lg:text-5xl tracking-wide text-[#763DE8] dark:text-[#9F70FD] uppercase font-bold">
            {t("stakingPage.title", { value: currentToken })}
          </h1>
          <span className="text-[16px] font-normal text-[#6B5695] dark:text-[#B5A1DC]">
            {t("stakingPage.enjoyBenefits", { value: currentToken })}
          </span>
          {currentToken === STAKING_CURRENCY.VPC && (
            <Link
              href={"/swap"}
              className="text-[16px] w-fit flex items-center gap-2 font-semibold text-[#3B3BFC] dark:text-[#FF8911] hover:text-[#3B3BFC] dark:hover:text-[#FF8911] hover:opacity-70"
            >
              {t("stakingPage.get")} {currentToken}
              <ArrowRightIcon width={16} height={12} />
            </Link>
          )}
        </div>
        <div className="">
          <div className="flex flex-col items-center w-full bg-[#FFFFFF] dark:bg-[#111111] shadow-2xl rounded-3xl pb-4">
            <div className="py-6 w-full px-4 flex flex-col text-[16px] gap-3">
              <div className="flex justify-between">
                <div
                  className="flex items-center text-[#6B5695] dark:text-[#B5A1DC] -translate-x-[8px] cursor-pointer"
                  onClick={() => router.back()}
                >
                  <ChevronLeftIcon />
                  <span>{t("back")}</span>
                </div>
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
              </div>
              <h2 className="rounded-2xl text-[24px] text-left lg:text-[32px] font-bold text-[#7E4DE0] dark:text-purple500">
                {t("stakingHistory.title")}
              </h2>
            </div>
            <DataTableSwap
              // fetchData={getListFeedbacks}
              columns={columns}
              data={data}
              className="hidden lg:flex w-full"
              currentPagination={
                Number(Math.ceil(offset / total)) > 0
                  ? Number(Math.ceil(offset / total))
                  : 1
              }
              totalPagination={totalPage}
              activePage={activePage}
              onClickFirstPage={handleFirstPage}
              onClickLastPage={handleLastPage}
              onClickNextPage={handleNextPage}
              onClickPrevPage={handlePrevPage}
              onChangePageSize={handleChangePageSize}
              pageCount={pageCount}
              currentToken={currentToken}
              handleToggle={handleToggle}
              // isShowSwitch
            />

            {data.map((item, index) => (
              <table
                key={index}
                className={`lg:hidden w-full rounded-3xl ${
                  index % 2 === 0
                    ? "bg-white dark:bg-gray900"
                    : "bg-purple200 dark:bg-purple800"
                }`}
              >
                <tr className="row-between">
                  <th className="text-header-table">#</th>
                  <td className="text-content-table">
                    {index + 1 + Number(offset)}
                  </td>
                </tr>
                <tr className="row-between">
                  <th className="text-header-table">
                    {t("stakingHistory.packageDuration")}
                  </th>
                  <td className="text-content-table">
                    {(item.periodInDays / ONE_YEAR_DAYS) * 12}{" "}
                    {t("stakingPage.months")}
                  </td>
                </tr>

                <tr className="row-between">
                  <th className="text-header-table">
                    {t("stakingHistory.packageProfit")}
                  </th>
                  <td className="text-content-table">{`${item?.profitPercentage}%`}</td>
                </tr>
                <tr className="row-between">
                  <th className="text-header-table">
                    {t("stakingHistory.locked")}
                  </th>
                  <td className="text-content-table">
                    {`${item?.amount?.toLocaleString("en-US")} VPC`}
                  </td>
                </tr>
                <tr className="row-between">
                  <th className="text-header-table">
                    {t("stakingHistory.usdtReceive")}
                  </th>
                  <td className="text-content-table">
                    {`${item?.fullPeriodUSDTRewards?.toLocaleString(
                      "en-US"
                    )} USDT`}
                  </td>
                </tr>
                <tr className="row-between">
                  <th className="text-header-table">
                    {t("stakingHistory.lockOn")}
                  </th>
                  <td className="text-content-table">
                    {DateTime.fromISO(item.createdAt).toFormat(
                      "MMMM dd, yyyy hh:mm a"
                    )}
                  </td>
                </tr>
                <tr className="row-between">
                  <th className="text-header-table">
                    {t("stakingHistory.unlockOn")}
                  </th>
                  <td className="text-content-table">
                    {DateTime.fromISO(item.createdAt)
                      .plus({ days: item.periodInDays })
                      .toFormat("MMMM dd, yyyy hh:mm a")}
                  </td>
                </tr>
              </table>
            ))}
            {data.length > 0 ? (
              <div className="lg:hidden flex gap-1 items-center">
                {activeCurrentPage > 1 && (
                  <button onClick={handleFirstPage} className="page-btn">
                    {t("first")}
                  </button>
                )}
                <div className="lg:hiden flex gap-1 items-center">
                  {Array.from({ length: totalPage }, (_, index) => (
                    <button
                      key={index}
                      className={`flex items-center justify-center w-6 h-6 text-xs font-normal border-[1px] ${
                        activeCurrentPage === index + 1
                          ? "text-gray100 bg-blue900 dark:bg-[#FF8911] border-blue900 dark:border-[#FF8911]"
                          : "text-[#898989] border-[#898989] dark:border-[#898989]"
                      } rounded-full`}
                      onClick={() => handleActiveCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                {totalPage > 1 && activeCurrentPage < totalPage && (
                  <button onClick={handleLastPage} className="page-btn">
                    {t("last")}
                  </button>
                )}
              </div>
            ) : (
              <div className="block lg:hidden text-content-table text-center pb-10">
                {t("referral.noData")}
              </div>
            )}
          </div>
        </div>
      </div>
    </ScanLayout>
  );
}

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
