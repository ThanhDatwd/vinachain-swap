"use client";

import { CopyIcon } from "@/assets/CopyIcon";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { AdditionalInfoModal } from "@/components/referral/AdditionalInfoModal";
import { CellText } from "@/components/tables/CellText";
import { DataTableSwap } from "@/components/tables/DataTableSwap";
import { HeaderTable } from "@/components/tables/HeaderTable";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { onToast } from "@/hooks/useToast";
import { referralService } from "@/services/ReferralService";
import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
  STAKING_CURRENCY,
  THEME,
} from "@/utils/constants";
import {
  convertNumberToFormattedString,
  fixedNumber,
  removeTrailingZeros,
} from "@/utils/converter";
import {
  formatTrxIdSwap,
  formatVPC,
  generateRandomEthereumAddress,
} from "@/utils/formatTrxId";
import { createColumnHelper } from "@tanstack/react-table";
import { DateTime } from "luxon";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const enum TYPE_IMAGE_UPLOAD {
  LIKE_FANPAGE = "like_fanpage",
  FOLLOW_TELEGRAM = "follow_telegram",
}
const enum TAB {
  VERIFY = "verify",
  TRANSACTION = "transaction",
}

declare const window: any;

export default function SwapPage() {
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
  const [totalPage, setTotalPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState(DEFAULT_PAGE_SIZE);
  const [currentToken, setCurrentToken] = useState<STAKING_CURRENCY>(
    STAKING_CURRENCY.VPC
  );

  const [isOpenWalletAddressInfoModal, setIsOpenWalletAddressInfoModal] =
    useState<{
      [key: number]: boolean;
    }>();

  const [activePage, setActivePage] = useState<{ [key: string]: boolean }>({
    prev: true,
  });
  const [activeCurrentPage, setActiveCurrentPage] = useState<number>(1);
  const [currentPage, seCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (currentUser) {
      fetchDataReferral();
    }
  }, [currentUser, offset, limit, currentToken]);

  ClickOutside(ref, () => {
    setIsOpenWalletAddressInfoModal(undefined);
  });

  useEffect(() => {
    if (currentUser) {
      fetchTotal();
    }
  }, [currentUser]);

  const fetchTotal = async () => {
    const res = await referralService.getListReferral({
      offset,
      limit,
    });
    if (res.success && res.data.rows.length !== 0) {
      setTotal(res.data.total);
    }
  };

  const fetchDataReferral = async () => {
    try {
      let res = null;
      if (currentToken === STAKING_CURRENCY.VPC) {
        res = await referralService.getListReferral({
          offset,
          limit,
        });
      } else if (currentToken === STAKING_CURRENCY.USDT) {
        res = await referralService.getDirectReferralReward({
          offset,
          limit,
        });
      }

      if (res.success && res.data.rows.length !== 0) {
        setData(res.data.rows);
        setTotalPage(Math.ceil(res.data.total / limit));
      }
    } catch (error) {}
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

  const columnsVPC = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => <HeaderTable text="#" />,
      cell: (info) => {
        const orderNumber = info.row.index + 1 + Number(offset);
        return <CellText text={orderNumber} />;
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.email, {
      id: "email",
      cell: ({ getValue }) => <CellText text={getValue()} />,
      header: () => <HeaderTable text={t("referral.email")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.walletAddress, {
      id: "walletAddress",
      cell: ({ getValue, row }) => (
        <CellText
          text={
            <>
              <div className="flex items-center justify-between w-40">
                {getValue() ? (
                  <AdditionalInfoModal
                    walletAddress={getValue()}
                    title={
                      <div className="flex items-center justify-between w-40">
                        <button>{formatTrxIdSwap(getValue())}</button>
                        <button onClick={() => handleCopy(getValue())}>
                          <CopyIcon />
                        </button>
                      </div>
                    }
                    content={""}
                    styleTooltip={{
                      backgroundColor:
                        theme === THEME.DARK ? "#111111" : "#fff",
                      boxShadow:
                        theme === THEME.DARK
                          ? "0px 2px 10px 0px #7b9fc926"
                          : "0px 2px 10px 0px #172e4826",
                    }}
                  />
                ) : (
                  <div>{t("referral.noWalletAddress")}</div>
                )}
              </div>
            </>
          }
        />
      ),
      header: () => <HeaderTable text={t("referral.walletAddress")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.totalStaked, {
      id: "totalStaked",
      cell: ({ getValue }) => (
        <CellText
          text={`${convertNumberToFormattedString(
            removeTrailingZeros(fixedNumber(getValue(), 5))
          )} VPC`}
        />
      ),
      header: () => <HeaderTable text={t("referral.vpcStakingAmount")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.profitPercent, {
      id: "profitPercent",
      cell: ({ getValue }) => <CellText text={`${getValue()}%`} />,
      header: () => <HeaderTable text={t("referral.profit")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.usdtProfitReward, {
      id: "usdtProfitReward",
      cell: ({ getValue }) => (
        <CellText
          text={`${convertNumberToFormattedString(
            removeTrailingZeros(fixedNumber(getValue(), 5))
          )} USDT`}
        />
      ),
      header: () => <HeaderTable text={t("referral.usdtStakingValue")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.referralAt, {
      id: "referralAt",
      cell: ({ getValue }) => (
        <CellText
          text={DateTime.fromISO(getValue()).toFormat("dd-MM-yyyy HH:mm")}
        />
      ),
      header: () => <HeaderTable text={t("referral.time")} />,
      footer: (props) => props.column.id,
    }),
  ];

  const columnsUSDT = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => <HeaderTable text="#" />,
      cell: (info) => {
        const orderNumber = info.row.index + 1 + Number(offset);
        return <CellText text={orderNumber} />;
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.email, {
      id: "email",
      cell: ({ getValue }) => <CellText text={getValue()} />,
      header: () => <HeaderTable text={t("referral.email")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.walletAddress, {
      id: "walletAddress",
      cell: ({ getValue, row }) => (
        <CellText
          text={
            <>
              <div className="flex items-center justify-between w-40">
                {getValue() ? (
                  <AdditionalInfoModal
                    walletAddress={getValue()}
                    title={
                      <div className="flex items-center justify-between w-40">
                        <button>{formatTrxIdSwap(getValue())}</button>
                        <button onClick={() => handleCopy(getValue())}>
                          <CopyIcon />
                        </button>
                      </div>
                    }
                    content={""}
                    styleTooltip={{
                      backgroundColor:
                        theme === THEME.DARK ? "#111111" : "#fff",
                      boxShadow:
                        theme === THEME.DARK
                          ? "0px 2px 10px 0px #7b9fc926"
                          : "0px 2px 10px 0px #172e4826",
                    }}
                  />
                ) : (
                  <div>{t("referral.noWalletAddress")}</div>
                )}
              </div>
            </>
          }
        />
      ),
      header: () => <HeaderTable text={t("referral.walletAddress")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.stakeAmount, {
      id: "stakeAmount",
      cell: ({ getValue }) => (
        <CellText
          text={`${convertNumberToFormattedString(
            removeTrailingZeros(fixedNumber(getValue(), 5))
          )} USDT`}
        />
      ),
      header: () => <HeaderTable text={t("referral.usdtStakingAmount")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.profitPercent, {
      id: "profitPercent",
      cell: ({ getValue }) => <CellText text={`${getValue()}%`} />,
      header: () => <HeaderTable text={t("referral.profit")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.usdtProfitReward, {
      id: "usdtProfitReward",
      cell: ({ getValue }) => (
        <CellText
          text={`${convertNumberToFormattedString(
            removeTrailingZeros(fixedNumber(getValue(), 5))
          )} USDT`}
        />
      ),
      header: () => <HeaderTable text={t("referral.usdtStakingValue")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.createdAt, {
      id: "createdAt",
      cell: ({ getValue }) => (
        <CellText
          text={DateTime.fromISO(getValue()).toFormat("dd-MM-yyyy HH:mm")}
        />
      ),
      header: () => <HeaderTable text={t("referral.time")} />,
      footer: (props) => props.column.id,
    }),
  ];

  const handleToggle = async () => {
    setCurrentToken(
      currentToken === STAKING_CURRENCY.VPC
        ? STAKING_CURRENCY.USDT
        : STAKING_CURRENCY.VPC
    );
  };

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark font-sans-serif relative">
      <div className="text-base text-purple550 dark:text-purple600 px-4 lg:px-24 xl:px-[169px]">
        <div className="flex flex-col gap-6 py-14">
          <h2 className="text-[32px] lg:text-5xl font-bold text-[#7E4DE0] dark:text-purple500">
            {t("referral.title")}
          </h2>
          <span>{t("referral.content")}</span>
        </div>
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="boxShadowStaking flex flex-col py-4 gap-4  w-full  rounded-3xl bg-white dark:bg-gray900 text-base text-black800 dark:text-purple400 font-bold">
            <div className=" flex flex-col gap-[35px] lg:gap-4 xl:gap-40 lg:flex-row lg:justify-between w-full  px-4 font-bold">
              <div className="flex-1 flex items-center gap-2">
                <span className="min-w-[148px]">
                  {t("referral.yourReferralCode")}
                </span>
                <div className="flex justify-between items-center ref-block font-normal">
                  {currentUser.code ?? t("referral.noReferrer")}
                  {currentUser.code && (
                    <button onClick={() => handleCopy(currentUser.code)}>
                      <CopyIcon
                        color={theme === THEME.DARK ? "#E8DEFD" : "#1D0F3A"}
                      />
                    </button>
                  )}
                </div>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <span className="min-w-[148px]">
                  {t("referral.enteredReferralCode")}
                </span>
                <div className="ref-block font-normal">
                  {currentUser?.referrerCode ?? t("referral.noReferrer")}
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-[35px] lg:gap-4 xl:gap-40 lg:flex-row lg:justify-between w-full px-4  font-bold">
              <div className="flex-1 flex items-center gap-2">
                <span className="min-w-[148px]">{t("referral.totalF1")}</span>
                <div className="flex justify-between items-center ref-block font-normal">
                  {total ?? 0}
                </div>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <span className="min-w-[148px]">{t("referral.teammate")}</span>
                <div className="ref-block font-normal">
                  {t("comingSoon.title")}
                </div>
              </div>
            </div>
          </div>
          <DataTableSwap
            // fetchData={getListFeedbacks}
            columns={
              currentToken === STAKING_CURRENCY.USDT ? columnsUSDT : columnsVPC
            }
            data={data}
            className="hidden lg:flex w-full boxShadowStaking"
            currentPagination={Math.ceil(offset / total + 1)}
            totalPagination={totalPage}
            activePage={activePage}
            onClickFirstPage={handleFirstPage}
            onClickLastPage={handleLastPage}
            onClickNextPage={handleNextPage}
            onClickPrevPage={handlePrevPage}
            onChangePageSize={handleChangePageSize}
            pageCount={pageCount}
            handleToggle={handleToggle}
            currentToken={currentToken}
            isShowSwitch
          />
          <div className="lg:hidden block w-full">
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
            {data.map((item, index) => (
              <table
                key={index}
                className={`lg:hidden w-full boxShadowStaking dark:boxShadowStakingDark rounded-3xl ${
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
                  <th className="text-header-table">{t("referral.email")}</th>
                  <td className="text-content-table">{item.email}</td>
                </tr>
                <tr className="row-between">
                  <th className="text-header-table">
                    {t("referral.walletAddress")}
                  </th>
                  <td className="flex gap-1 items-center text-content-table">
                    {item.walletAddress ? (
                      <div className="flex gap-2">
                        {formatTrxIdSwap(item.walletAddress)}
                        <button onClick={() => handleCopy(item.walletAddress)}>
                          <CopyIcon />
                        </button>
                      </div>
                    ) : (
                      <div>{t("referral.noWalletAddress")}</div>
                    )}
                  </td>
                </tr>
                <tr className="row-between">
                  <th className="text-header-table">
                    {t("referral.vpcStakingAmount")}
                  </th>
                  <td className="text-content-table">{`${convertNumberToFormattedString(
                    removeTrailingZeros(
                      fixedNumber(String(item.totalStaked), 5)
                    )
                  )} VPC`}</td>
                </tr>
                <tr className="row-between">
                  <th className="text-header-table">{t("referral.profit")}</th>
                  <td className="text-content-table">{`${item.profitPercent}%`}</td>
                </tr>
                <tr className="row-between">
                  <th className="text-header-table">
                    {t("referral.usdtStakingValue")}
                  </th>
                  <td className="text-content-table">{`${convertNumberToFormattedString(
                    removeTrailingZeros(
                      fixedNumber(String(item.usdtProfitReward), 5)
                    )
                  )} USDT`}</td>
                </tr>
                <tr className="row-between">
                  <th className="text-header-table">{t("referral.time")}</th>
                  <td className="text-content-table">
                    {DateTime.fromISO(item.referralAt).toFormat(
                      "dd-MM-yyyy HH:mm"
                    )}
                  </td>
                </tr>
              </table>
            ))}
          </div>
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
            <div className="block lg:hidden text-content-table text-center">
              {t("referral.noData")}
            </div>
          )}
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
