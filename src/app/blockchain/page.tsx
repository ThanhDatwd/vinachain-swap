"use client";
import { EyeIcon } from "@/assets/icons/EyeIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { DataTable } from "@/components/tables/DataTable";
import { CellText } from "@/components/tables/CellText";
import { HeaderTable } from "@/components/tables/HeaderTable";
import { useTheme } from "@/hooks/useTheme";
import { PaginationQuery } from "@/models/commonn";
import { THEME, VinaScanFooter } from "@/utils/constants";
import { createColumnHelper } from "@tanstack/react-table";
import { CopyIcon } from "@/assets/icons/CopyIcon";
import HeaderScan from "@/components/layouts/HeaderScan";
import { Footer } from "@/components/layouts/Footer";
import Link from "next/link";
import { TransactionCard } from "@/components/TransactionCard";
import { onToast } from "@/hooks/useToast";
import { useTranslation } from "react-i18next";

export default function Blockchain() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const columnHelper = createColumnHelper<any>();

  // const getListFeedbacks = async (
  //   paginate: PaginationQuery,
  // ) => {
  //   try {
  //     // const data = await feedbackService.getListFeedBacks(paginate, filters);
  //     // if (data.success && data.data) {
  //     //   return data.data;
  //     // }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleCopy = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => onToast("You successfully copied", "success"));
  };

  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => (
        <HeaderTable
          icon={<HelpIcon color={theme === THEME.DARK ? "#FAFAFA" : "#333"} />}
        />
      ),
      cell: () => (
        <CellText
          icon={<EyeIcon color={theme === THEME.DARK ? "#FAFAFA" : "#333"} />}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.txnHash, {
      id: "txnHash",
      cell: ({ getValue }) => <CellText text={getValue()} />,
      header: () => <HeaderTable text={"Txn Hash"} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.method, {
      id: "method",
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          containerStyle="border border-[#DCDCDC] dark:border-[#C4C4C4] bg-[#F8F9FA] dark:bg-[#111111] dark:text-[#C4C4C4] rounded"
        />
      ),
      header: () => (
        <HeaderTable
          text="Block"
          icon={<HelpIcon color={theme === THEME.DARK ? "#FAFAFA" : "#333"} />}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.block, {
      id: "block",
      cell: ({ getValue }) => <CellText text={getValue()} />,
      header: () => <HeaderTable text="Block" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.age, {
      id: "age",
      cell: ({ getValue }) => <CellText text={getValue()} />,
      header: () => (
        <HeaderTable
          text="Age"
          textStyle="text-[#3B3BFC] dark:text-scanDark"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.from, {
      id: "from",
      cell: ({ getValue }) => (
        <CellText
          icon={
            <div
              className="flex gap-1 cursor-pointer"
              onClick={() => handleCopy(getValue())}
            >
              <span className="text-secondary dark:text-secondaryDark hover:underline">{`${getValue().slice(
                0,
                8,
              )}...${getValue().slice(
                getValue().length - 8,
                getValue().length,
              )}`}</span>
              <CopyIcon color="#C4C4C4" />
            </div>
          }
          containerStyle="gap-1"
          className="text-secondary dark:text-secondaryDark"
        />
      ),
      header: () => <HeaderTable text="From" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.to, {
      id: "to",
      cell: ({ getValue }) => (
        <CellText
          icon={
            <div
              className="flex gap-[10px] cursor-pointer"
              onClick={() => handleCopy(getValue())}
            >
              <span className="text-secondary dark:text-secondaryDark hover:underline">
                {getValue()}
              </span>
              <CopyIcon color="#C4C4C4" />
            </div>
          }
          containerStyle="gap-[10px]"
          className="text-secondary dark:text-secondaryDark"
        />
      ),
      header: () => <HeaderTable text="To" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.value, {
      id: "value",
      cell: ({ getValue }) => <CellText text={getValue()} />,
      header: () => <HeaderTable text="Value" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.txnFee, {
      id: "txnFee",
      cell: ({ getValue }) => <CellText text={getValue()} />,
      header: () => (
        <HeaderTable
          text="Txn Fee"
          textStyle="text-[#3B3BFC] dark:text-scanDark"
        />
      ),
      footer: (props) => props.column.id,
    }),
  ];

  const transactionInfo = [
    {
      name: "Transaction",
      time: "24h",
      quantity: 1126986,
      percent: "5.86%",
      growth: -1,
    },
    {
      name: "Pending Transaction",
      time: "Last 1h",
      quantity: 194028,
      percent: "Average",
      growth: 0,
    },
    {
      name: "Network Transaction Fee",
      time: "24h",
      quantity: 1126986,
      percent: "5.86%",
      growth: -1,
    },
    {
      name: "AVG. Transaction Fee",
      time: "24h",
      quantity: 1332,
      percent: "5.86%",
      growth: 3,
    },
  ];
  return (
    <main
      className={`ease-soft-in-out relative h-full transition-all duration-200 bg-[#FAFAFA] dark:bg-primaryDark`}
    >
      <HeaderScan />
      <div
        className="flex flex-col gap-8 relative w-full mx-auto min-h-[90vh] p-4 md:px-14 md:py-8"
        id="box"
      >
        <div className="flex flex-col gap-8 md:gap-10 md:py-4">
          <div className="flex flex-col gap-4">
            <h5 className="text-xl text-[#333] dark:text-[#FAFAFA] font-bold">
              {t("transaction")}
            </h5>
            <div className="text-sm text-[#333] dark:text-[#C4C4C4]">
              {t("sponsore")}&nbsp;
              <Link
                className="text-sm text-[#333] dark:text-[#C4C4C4] hover:text-secondary dark:hover:text-secondaryDark underline"
                href="/coming-soon"
              >
                {t("clickHereAndClaim")}
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {transactionInfo.map((item, index) => (
              <TransactionCard
                key={index}
                title={item.name}
                time={item.time}
                quantity={item.quantity}
                percent={item.percent}
                growth={item.growth}
              />
            ))}
          </div>
        </div>
        <DataTable
          // fetchData={getListFeedbacks}
          columns={columns}
        />
      </div>
      <Footer footerData={VinaScanFooter} />
    </main>
  );
}
