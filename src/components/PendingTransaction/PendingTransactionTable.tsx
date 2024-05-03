import { CopyIcon } from "@/assets/CopyIcon";
import { ChartAreaIcon } from "@/assets/icons/ChartAreaIcon";
import { FilterIcon } from "@/assets/icons/FilterIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { useTheme } from "@/hooks/useTheme";
import { handleCopy } from "@/utils";
import { THEME } from "@/utils/constants";
import {
  formatTrxHash,
  formatTrxId,
  generateRandomEthereumAddress,
} from "@/utils/formatTrxId";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TooltipCustom } from "../Tooltip";
import { CellText } from "../tables/CellText";
import { DataTable } from "../tables/DataTable";
import { HeaderTable } from "../tables/HeaderTable";

export const PendingTransactionsTable = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const defaultData = [
    {
      txHash: generateRandomEthereumAddress(),
      method: t("pendingTransaction.transfer"),
      nonce: Math.floor(Math.random() * 1000000),
      lastSeen: `${Math.floor(Math.random() * 60)} secs ago`,
      gasLimit: Math.floor(Math.random() * 100000),
      gasPrice: `${Math.random()}`,
      from: generateRandomEthereumAddress(),
      to: generateRandomEthereumAddress(),
      amount: `${Math.random()} VPC`,
    },
    {
      txHash: generateRandomEthereumAddress(),
      method: t("pendingTransaction.transfer"),
      nonce: Math.floor(Math.random() * 1000000),
      lastSeen: `${Math.floor(Math.random() * 60)} secs ago`,
      gasLimit: Math.floor(Math.random() * 100000),
      gasPrice: `${Math.random()}`,
      from: generateRandomEthereumAddress(),
      to: generateRandomEthereumAddress(),
      amount: `${Math.random()} VPC`,
    },
    {
      txHash: generateRandomEthereumAddress(),
      method: t("pendingTransaction.transfer"),
      nonce: Math.floor(Math.random() * 1000000),
      lastSeen: `${Math.floor(Math.random() * 60)} secs ago`,
      gasLimit: Math.floor(Math.random() * 100000),
      gasPrice: `${Math.random()}`,
      from: generateRandomEthereumAddress(),
      to: generateRandomEthereumAddress(),
      amount: `${Math.random()} VPC`,
    },
    {
      txHash: generateRandomEthereumAddress(),
      method: t("pendingTransaction.transfer"),
      nonce: Math.floor(Math.random() * 1000000),
      lastSeen: `${Math.floor(Math.random() * 60)} secs ago`,
      gasLimit: Math.floor(Math.random() * 100000),
      gasPrice: `${Math.random()}`,
      from: generateRandomEthereumAddress(),
      to: generateRandomEthereumAddress(),
      amount: `${Math.random()} VPC`,
    },
    {
      txHash: generateRandomEthereumAddress(),
      method: t("pendingTransaction.transfer"),
      nonce: Math.floor(Math.random() * 1000000),
      lastSeen: `${Math.floor(Math.random() * 60)} secs ago`,
      gasLimit: Math.floor(Math.random() * 100000),
      gasPrice: `${Math.random()}`,
      from: generateRandomEthereumAddress(),
      to: generateRandomEthereumAddress(),
      amount: `${Math.random()} VPC`,
    },
    {
      txHash: generateRandomEthereumAddress(),
      method: t("pendingTransaction.transfer"),
      nonce: Math.floor(Math.random() * 1000000),
      lastSeen: `${Math.floor(Math.random() * 60)} secs ago`,
      gasLimit: Math.floor(Math.random() * 100000),
      gasPrice: `${Math.random()}`,
      from: generateRandomEthereumAddress(),
      to: generateRandomEthereumAddress(),
      amount: `${Math.random()} VPC`,
    },
    {
      txHash: generateRandomEthereumAddress(),
      method: t("pendingTransaction.transfer"),
      nonce: Math.floor(Math.random() * 1000000),
      lastSeen: `${Math.floor(Math.random() * 60)} secs ago`,
      gasLimit: Math.floor(Math.random() * 100000),
      gasPrice: `${Math.random()}`,
      from: generateRandomEthereumAddress(),
      to: generateRandomEthereumAddress(),
      amount: `${Math.random()} VPC`,
    },
    {
      txHash: generateRandomEthereumAddress(),
      method: t("pendingTransaction.transfer"),
      nonce: Math.floor(Math.random() * 1000000),
      lastSeen: `${Math.floor(Math.random() * 60)} secs ago`,
      gasLimit: Math.floor(Math.random() * 100000),
      gasPrice: `${Math.random()}`,
      from: generateRandomEthereumAddress(),
      to: generateRandomEthereumAddress(),
      amount: `${Math.random()} VPC`,
    },
    {
      txHash: generateRandomEthereumAddress(),
      method: t("pendingTransaction.transfer"),
      nonce: Math.floor(Math.random() * 1000000),
      lastSeen: `${Math.floor(Math.random() * 60)} secs ago`,
      gasLimit: Math.floor(Math.random() * 100000),
      gasPrice: `${Math.random()}`,
      from: generateRandomEthereumAddress(),
      to: generateRandomEthereumAddress(),
      amount: `${Math.random()} VPC`,
    },
    {
      txHash: generateRandomEthereumAddress(),
      method: t("pendingTransaction.transfer"),
      nonce: Math.floor(Math.random() * 1000000),
      lastSeen: `${Math.floor(Math.random() * 60)} secs ago`,
      gasLimit: Math.floor(Math.random() * 100000),
      gasPrice: `${Math.random()}`,
      from: generateRandomEthereumAddress(),
      to: generateRandomEthereumAddress(),
      amount: `${Math.random()} VPC`,
    },
  ];

  const columnHelper = createColumnHelper<any>();
  const [isHovered, setIsHovered] = useState(false);

  const columns = [
    columnHelper.accessor((row) => row.txHash, {
      id: "txHash",
      header: () => (
        <HeaderTable textStyle="dark:text-gray200" text="Transaction hash" />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={
            <Link
              href={`txs/${getValue()}`}
              className="link-color text-[14.5px]"
            >
              {formatTrxHash(getValue())}
            </Link>
          }
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.method, {
      id: "method",
      header: () => (
        <HeaderTable
          textStyle="dark:text-gray200"
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
          text="Method"
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className="dark:text-gray200"
          icon={
            <div className="border-cell-value border-method text-center px-4 py-1 text-[10.8px] bg-white_98 dark:bg-gray700 dark:hover:bg-[#352b15] hover:bg-[#fbf1dc] rounded-md duration-150 ease-in-out">
              {getValue()}
            </div>
          }
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.nonce, {
      id: "nonce",
      header: () => <HeaderTable textStyle="link-color" text="Nonce" />,
      cell: ({ getValue }) => (
        <CellText className=" dark:text-gray200" text={getValue()} />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.lastSeen, {
      id: "lastSeen",
      header: () => <HeaderTable text="Last Seen" />,
      cell: ({ getValue }) => (
        <CellText
          text={
            <TooltipCustom content="Apr-25-2024 06:55:04 AM">
              {getValue()}
            </TooltipCustom>
          }
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.gasLimit, {
      id: "gasLimit",
      header: () => <HeaderTable text="Gas Limit" textStyle="link-color" />,
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.gasPrice, {
      id: "gasPrice",
      header: () => (
        <HeaderTable
          text="Gas Price"
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
          textStyle="link-color"
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={
            <TooltipCustom content={getValue()}>{`${getValue().slice(
              0,
              6
            )} Gwei`}</TooltipCustom>
          }
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.from, {
      id: "from",
      header: () => <HeaderTable text="From" textStyle=" dark:text-gray200" />,
      cell: ({ getValue }) => {
        return (
          <CellText
            icon={
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center cursor-pointer">
                  <TooltipCustom content={getValue()}>
                    <Link
                      href={`/address/${getValue()}`}
                      className="link-color border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
                    >
                      {formatTrxId(getValue())}
                    </Link>
                  </TooltipCustom>
                  <TooltipCustom content={t("copyAddress")}>
                    <button
                      className="flex items-center justify-center"
                      onClick={() => handleCopy(getValue())}
                    >
                      <CopyIcon />
                    </button>
                  </TooltipCustom>
                  <TooltipCustom content="Apply filter by address">
                    <Link
                      className="flex items-center justify-center"
                      href={"/coming-soon"}
                    >
                      <FilterIcon />
                    </Link>
                  </TooltipCustom>
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
      header: () => <HeaderTable text="To" textStyle=" dark:text-gray200" />,
      cell: ({ getValue }) => {
        return (
          <CellText
            icon={
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center cursor-pointer">
                  <TooltipCustom content={getValue()}>
                    <Link
                      href={`/address/${getValue()}`}
                      className="link-color border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
                    >
                      {formatTrxId(getValue())}
                    </Link>
                  </TooltipCustom>
                  <TooltipCustom content={t("copyAddress")}>
                    <button
                      className="flex items-center justify-center"
                      onClick={() => handleCopy(getValue())}
                    >
                      <CopyIcon />
                    </button>
                  </TooltipCustom>
                  <TooltipCustom content="Apply filter by address">
                    <Link
                      className="flex items-center justify-center"
                      href={"/coming-soon"}
                    >
                      <FilterIcon />
                    </Link>
                  </TooltipCustom>
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
    columnHelper.accessor((row) => row.amount, {
      id: "amount",
      header: () => (
        <HeaderTable text="Amount" textStyle="dark:text-gray200 " />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
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
        childrenHeaderTable={
          <div className="flex flex-col text-[14.5px] text-black dark:text-[#FAFAFA]">
            {`${t("pendingTransaction.aTotalOf")} 100 ${t(
              "pendingTransaction.pendingTxnsFound"
            )}`}
            <span className="text-[12.5px] text-gray550 dark:text-gray400">
              {`(${t("pendingTransaction.showingTheLast10000Records")})`}
            </span>
          </div>
        }
        infoMore={
          <>
            <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between p-4">
              <TooltipCustom
                content={t("pendingTransaction.pendingTransactionPoolTooltip")}
              >
                <Link
                  href={"/coming-soon"}
                  className="flex items-center gap-1 w-fit py-1 px-2 text-[12.6px] text-dark900 dark:text-[#FAFAFA] hover:text-dark900 dark:hover:text-[#FAFAFA] !border border-[#e9ecef] dark:!border-gray600 hover:bg-[#e9ecef] dark:hover:bg-gray600 rounded-md"
                >
                  <ChartAreaIcon />
                  <span>{t("pendingTransaction.pendingTransactionPool")}</span>
                </Link>
              </TooltipCustom>
              <div className="w-fit py-[6px] px-2 bg-[#e9ecef] dark:bg-gray600 rounded-md">
                <SearchIcon
                  color={theme === THEME.LIGHT ? "#081D35" : "#fafafa"}
                  width={12.6}
                  height={13.5}
                />
              </div>
            </div>
            <hr className="line my-0" />
          </>
        }
      />
    </div>
  );
};
