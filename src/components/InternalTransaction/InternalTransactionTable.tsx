import { CopyIcon } from "@/assets/CopyIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { CheckIcon } from "@/assets/icons/CheckIcon";
import { FileLineIcon } from "@/assets/icons/FileLineIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { handleCopy } from "@/utils";
import {
  formatTrxHash,
  formatTrxId,
  generateRandomEthereumAddress,
} from "@/utils/formatTrxId";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { TooltipCustom } from "../Tooltip";
import { CellText } from "../tables/CellText";
import { DataTable } from "../tables/DataTable";
import { HeaderTable } from "../tables/HeaderTable";
const defaultData = [
  {
    block: 19731398,
    age: "15 secs ago",
    txHash: generateRandomEthereumAddress(),
    type: "call",
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    block: "",
    age: "15 secs ago",
    txHash: generateRandomEthereumAddress(),
    type: "call",
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    block: "",
    age: "15 secs ago",
    txHash: generateRandomEthereumAddress(),
    type: "call",
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    block: "",
    age: "15 secs ago",
    txHash: generateRandomEthereumAddress(),
    type: "call",
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    block: "",
    age: "15 secs ago",
    txHash: generateRandomEthereumAddress(),
    type: "call",
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    block: "",
    age: "15 secs ago",
    txHash: generateRandomEthereumAddress(),
    type: "call",
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    block: "",
    age: "15 secs ago",
    txHash: generateRandomEthereumAddress(),
    type: "call",
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    block: "",
    age: "15 secs ago",
    txHash: generateRandomEthereumAddress(),
    type: "call",
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    block: "",
    age: "15 secs ago",
    txHash: generateRandomEthereumAddress(),
    type: "call",
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    block: "",
    age: "15 secs ago",
    txHash: generateRandomEthereumAddress(),
    type: "call",
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
];

export const InternalTransactionsTable = () => {
  const { t } = useTranslation();

  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor((row) => row.block, {
      id: "block",
      header: () => (
        <HeaderTable
          textStyle=" dark:text-gray200"
          text={t("internalTransaction.block")}
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={
            <Link
              href={`blocks/${getValue()}`}
              className="link-color text-[14.5px]"
            >
              {getValue()}
            </Link>
          }
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.age, {
      id: "age",
      header: () => (
        <HeaderTable
          text={t("internalTransaction.age")}
          textStyle="link-color"
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.txHash, {
      id: "txHash",
      header: () => (
        <HeaderTable
          textStyle="dark:text-gray200"
          text={t("internalTransaction.parentTransactionHash")}
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={
            <div className="flex items-center gap-1">
              <CheckIcon width={14.5} height={15} />
              <Link
                href={`txs/${getValue()}`}
                className="link-color text-[14.5px]"
              >
                {formatTrxHash(getValue())}
              </Link>
            </div>
          }
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.type, {
      id: "type",
      header: () => (
        <HeaderTable
          textStyle=" dark:text-gray200"
          text={t("internalTransaction.type")}
        />
      ),
      cell: ({ getValue }) => (
        <CellText className=" dark:text-gray200" text={getValue()} />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.from, {
      id: "from",
      header: () => (
        <HeaderTable
          text={t("internalTransaction.from")}
          textStyle=" dark:text-gray200"
        />
      ),
      cell: ({ getValue }) => {
        return (
          <CellText
            icon={
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center cursor-pointer">
                  <TooltipCustom content={getValue()}>
                    <Link
                      href={`/address/${getValue()}`}
                      className="flex items-center gap-1 link-color border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc] rounded-md duration-150 ease-in-out"
                    >
                      <TooltipCustom
                        content={t("internalTransaction.contract")}
                      >
                        <FileLineIcon />
                      </TooltipCustom>
                      {formatTrxId(getValue())}
                    </Link>
                  </TooltipCustom>
                  <button
                    className="flex items-center justify-center"
                    onClick={() => handleCopy(getValue())}
                  >
                    <TooltipCustom content={t("copyAddress")}>
                      <CopyIcon />
                    </TooltipCustom>
                  </button>
                </div>
                <div className="flex items-center justify-center w-6 h-6 !border !border-[#00a18640] bg-[#00a1861a] rounded-full">
                  <ArrowRightIcon width={10.15} height={10.5} color="#00a186" />
                </div>
              </div>
            }
            containerStyle="gap-1"
            // className="text-secondary dark:text-secondaryDark"
          />
        );
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.to, {
      id: "to",
      header: () => (
        <HeaderTable
          text={t("internalTransaction.to")}
          textStyle=" dark:text-gray200"
        />
      ),
      cell: ({ getValue }) => {
        return (
          <CellText
            icon={
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center cursor-pointer">
                  <TooltipCustom content={getValue()}>
                    <Link
                      href={`/address/${getValue()}`}
                      className="flex items-center gap-1 link-color border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc] rounded-md duration-150 ease-in-out"
                    >
                      <TooltipCustom
                        content={t("internalTransaction.contract")}
                      >
                        <FileLineIcon />
                      </TooltipCustom>
                      {formatTrxId(getValue())}
                    </Link>
                  </TooltipCustom>
                  <button
                    className="flex items-center justify-center"
                    onClick={() => handleCopy(getValue())}
                  >
                    <TooltipCustom content={t("copyAddress")}>
                      <CopyIcon />
                    </TooltipCustom>
                  </button>
                </div>
              </div>
            }
            containerStyle="gap-1"
            // className="text-secondary dark:text-secondaryDark"
          />
        );
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.value, {
      id: "value",
      header: () => (
        <HeaderTable
          text={t("internalTransaction.value")}
          textStyle="dark:text-gray200 "
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={`${getValue()} VPC`}
          className="text-dark900 dark:text-gray200 text-[14.5px]"
        />
      ),
      footer: (props) => props.column.id,
    }),
  ];

  return (
    <div>
      <DataTable
        data={defaultData}
        // fetchData={getListFeedbacks}
        columns={columns}
        showPagination={true}
        isDownloadData
        childrenHeaderTable={
          <div>
            <div className="text-[14.5px] text-dark900 dark:text-gray200">
              {`${t("internalTransaction.aTotalOf")} 19,673,783 ${t(
                "internalTransaction.internalTransactionsFound"
              )}`}
            </div>
            <span className="text-[12.5px] text-dark900 dark:text-gray400">
              {`(${t("internalTransaction.showingTheLast10kRecordsOnly")})`}
            </span>
          </div>
        }
      />
    </div>
  );
};
