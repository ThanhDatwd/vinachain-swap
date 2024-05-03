import { CopyIcon } from "@/assets/CopyIcon";
import { ArrowDownWideShort } from "@/assets/icons/ArrowDownWideShortIcon";
import { FileLineIcon } from "@/assets/icons/FileLineIcon";
import { useTheme } from "@/hooks/useTheme";
import { handleCopy } from "@/utils";
import {
    formatTrxId,
    generateRandomEthereumAddress
} from "@/utils/formatTrxId";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TooltipCustom } from "../Tooltip";
import { CellText } from "../tables/CellText";
import { DataTable } from "../tables/DataTable";
import { HeaderTable } from "../tables/HeaderTable";

export const AccountsTable = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const defaultData = [
    {
      id: 1,
      address: generateRandomEthereumAddress(),
      nameTag: "Beacon Deposit Contract",
      balance: `${Math.random() * 100000000} VPC`,
      percentage: `${Math.random() * 100}`,
      txnCount: Math.floor(Math.random() * 10000000),
    },
    {
      id: 2,
      address: generateRandomEthereumAddress(),
      nameTag: "Wrapped Ether",
      balance: `${Math.random() * 100000000} VPC`,
      percentage: `${Math.random() * 100}`,
      txnCount: Math.floor(Math.random() * 10000000),
    },
    {
      id: 3,
      address: generateRandomEthereumAddress(),
      nameTag: "Binance 7",
      balance: `${Math.random() * 100000000} VPC`,
      percentage: `${Math.random() * 100}`,
      txnCount: Math.floor(Math.random() * 10000000),
    },
    {
      id: 4,
      address: generateRandomEthereumAddress(),
      nameTag: "Arbitrum: Bridge",
      balance: `${Math.random() * 100000000} VPC`,
      percentage: `${Math.random() * 100}`,
      txnCount: Math.floor(Math.random() * 10000000),
    },
    {
      id: 5,
      address: generateRandomEthereumAddress(),
      nameTag: "Robinhood",
      balance: `${Math.random() * 100000000} VPC`,
      percentage: `${Math.random() * 100}`,
      txnCount: Math.floor(Math.random() * 10000000),
    },
    {
      id: 1,
      address: generateRandomEthereumAddress(),
      nameTag: "Beacon Deposit Contract",
      balance: `${Math.random() * 100000000} VPC`,
      percentage: `${Math.random() * 100}`,
      txnCount: Math.floor(Math.random() * 10000000),
    },
    {
      id: 6,
      address: generateRandomEthereumAddress(),
      nameTag: "Kraken 13",
      balance: `${Math.random() * 100000000} VPC`,
      percentage: `${Math.random() * 100}`,
      txnCount: Math.floor(Math.random() * 10000000),
    },
    {
      id: 7,
      address: generateRandomEthereumAddress(),
      nameTag: "Binance: Binance-Peg Tokens",
      balance: `${Math.random() * 100000000} VPC`,
      percentage: `${Math.random() * 100}`,
      txnCount: Math.floor(Math.random() * 10000000),
    },
    {
      id: 8,
      address: generateRandomEthereumAddress(),
      nameTag: "Binance 8",
      balance: `${Math.random() * 100000000} VPC`,
      percentage: `${Math.random() * 100}`,
      txnCount: Math.floor(Math.random() * 10000000),
    },
    {
      id: 9,
      address: generateRandomEthereumAddress(),
      nameTag: "Bitfinex 19",
      balance: `${Math.random() * 100000000} VPC`,
      percentage: `${Math.random() * 100}`,
      txnCount: Math.floor(Math.random() * 10000000),
    },
  ];

  const columnHelper = createColumnHelper<any>();
  const [isHovered, setIsHovered] = useState(false);

  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => <HeaderTable text="#" />,
      cell: ({ getValue }) => (
        <CellText className=" dark:text-gray200" text={getValue()} />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.address, {
      id: "address",
      header: () => (
        <HeaderTable
          text={t("accounts.address")}
          textStyle=" dark:text-gray200"
        />
      ),
      cell: ({ getValue }) => {
        return (
          <CellText
            icon={
              <div className="flex gap-2 items-center cursor-pointer">
                <TooltipCustom content={getValue()}>
                  <Link
                    href={`/address/${getValue()}`}
                    className="flex items-center gap-1 link-color border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc] rounded-md duration-150 ease-in-out"
                  >
                    <TooltipCustom content={t("internalTransaction.contract")}>
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
            }
          />
        );
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.nameTag, {
      id: "nameTag",
      cell: ({ getValue }) => <CellText text={getValue()} />,
      header: () => <HeaderTable text={t("accounts.nameTag")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.balance, {
      id: "balance",
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-dark900 dark:text-[#FAFAFA] text-[14.5px]"
        />
      ),
      header: () => (
        <HeaderTable
          text={t("accounts.balance")}
          leftIcon={
            <ArrowDownWideShort width={12.4} height={11.5} color="#adb5bd" />
          }
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.percentage, {
      id: "percentage",
      cell: ({ getValue }) => (
        <CellText
          text={`${getValue().slice(0, 11)}%`}
          className="text-[14.5px] text-dark900 dark:text-[#FAFAFA]"
        />
      ),
      header: () => <HeaderTable text={t("accounts.percentage")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.txnCount, {
      id: "txnCount",
      header: () => (
        <HeaderTable
          text={t("accounts.txnCount")}
          textStyle="dark:text-gray200 "
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-[14.5px] text-dark900 dark:text-[#FAFAFA]"
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
            <span>
              {t("accounts.moreThan")}&nbsp;
              <TooltipCustom content={t("accounts.accountsTooltip")}>
                <Link
                  className="link-color hover:text-blue "
                  href={"/coming-soon"}
                >{`1,999,999 ${t("accounts.accountsFound")}`}</Link>
              </TooltipCustom>
              &nbsp; (122,049,449.673 VPC)
            </span>
            <span className="text-[12.5px] text-gray550 dark:text-gray400">
              {`(${t("accounts.showingTheLast10000TopAccounts")})`}
            </span>
          </div>
        }
      />
    </div>
  );
};
