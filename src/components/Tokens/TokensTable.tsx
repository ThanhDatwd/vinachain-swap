import { CopyIcon } from "@/assets/CopyIcon";
import { ArrowDownWideShort } from "@/assets/icons/ArrowDownWideShortIcon";
import { FileLineIcon } from "@/assets/icons/FileLineIcon";
import { useTheme } from "@/hooks/useTheme";
import { handleCopy } from "@/utils";
import {
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
import { ArrowBottomIcon } from "@/assets/icons/ArrowDownIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { CaretDownIcon } from "@/assets/icons/CaretDownIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";

export const TokensTable = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const defaultData = [
    {
      id: 1,
      token: {
        name: "Tether USD",
        acronym: "USDC",
      },
      price: {
        usd: "1.00",
        vpc: "0.000317",
      },
      change: "-0.01%",
      volume: `${Math.random() * 100000000000}`,
      circulatingMarketCap: `${Math.random() * 1000000000000}`,
      onchainMarketCap: `${Math.random() * 100000000000}`,
      holders: {
        count: Math.floor(Math.random() * 10000000),
        percentage: `${Math.random() * 100}%`,
      },
    },
    {
      id: 2,
      token: {
        name: "BNB",
        acronym: "BNB",
      },
      price: {
        usd: "603.9793",
        vpc: "0.191455",
      },
      change: "-1.35%",
      volume: `${Math.random() * 100000000000}`,
      circulatingMarketCap: `${Math.random() * 1000000000000}`,
      onchainMarketCap: `${Math.random() * 100000000000}`,
      holders: {
        count: Math.floor(Math.random() * 10000000),
        percentage: `${Math.random() * 100}%`,
      },
    },
    {
      id: 3,
      token: {
        name: "SHIBA INU",
        acronym: "SHIB",
      },
      price: {
        usd: "1.00",
        vpc: "0.000317",
      },
      change: "0.02%",
      volume: `${Math.random() * 100000000000}`,
      circulatingMarketCap: `${Math.random() * 1000000000000}`,
      onchainMarketCap: `${Math.random() * 100000000000}`,
      holders: {
        count: Math.floor(Math.random() * 10000000),
        percentage: `${Math.random() * 100}%`,
      },
    },
    {
      id: 4,
      token: {
        name: "USDC",
        acronym: "USDC",
      },
      price: {
        usd: "3,149.81",
        vpc: "0.998458",
      },
      change: "0.64%",
      volume: `${Math.random() * 100000000000}`,
      circulatingMarketCap: `${Math.random() * 1000000000000}`,
      onchainMarketCap: `${Math.random() * 100000000000}`,
      holders: {
        count: Math.floor(Math.random() * 10000000),
        percentage: `${Math.random() * 100}%`,
      },
    },
    {
      id: 5,
      token: {
        name: "stVPC",
        acronym: "stVPC",
      },
      price: {
        usd: "5.44",
        vpc: "0.001724",
      },
      change: "3.17%",
      volume: `${Math.random() * 100000000000}`,
      circulatingMarketCap: `${Math.random() * 1000000000000}`,
      onchainMarketCap: `${Math.random() * 100000000000}`,
      holders: {
        count: Math.floor(Math.random() * 10000000),
        percentage: `${Math.random() * 100}%`,
      },
    },
    {
      id: 6,
      token: {
        name: "Wrapped TON Coin",
        acronym: "TONCOIN",
      },
      price: {
        usd: "0.00",
        vpc: "0.000000",
      },
      change: "3.86%",
      volume: `${Math.random() * 100000000000}`,
      circulatingMarketCap: `${Math.random() * 1000000000000}`,
      onchainMarketCap: `${Math.random() * 100000000000}`,
      holders: {
        count: Math.floor(Math.random() * 10000000),
        percentage: `${Math.random() * 100}%`,
      },
    },
    {
      id: 7,
      token: {
        name: "TRON",
        acronym: "TRX",
      },
      price: {
        usd: "0.118",
        vpc: "0.000037",
      },
      change: "2.86%",
      volume: `${Math.random() * 100000000000}`,
      circulatingMarketCap: `${Math.random() * 1000000000000}`,
      onchainMarketCap: `${Math.random() * 100000000000}`,
      holders: {
        count: Math.floor(Math.random() * 10000000),
        percentage: `${Math.random() * 100}%`,
      },
    },
    {
      id: 1,
      token: {
        name: "Tether USD",
        acronym: "USDC",
      },
      price: {
        usd: "1.00",
        vpc: "0.000317",
      },
      change: "-0.01%",
      volume: `${Math.random() * 100000000000}`,
      circulatingMarketCap: `${Math.random() * 1000000000000}`,
      onchainMarketCap: `${Math.random() * 100000000000}`,
      holders: {
        count: Math.floor(Math.random() * 10000000),
        percentage: `${Math.random() * 100}%`,
      },
    },
    {
      id: 1,
      token: {
        name: "Tether USD",
        acronym: "USDC",
      },
      price: {
        usd: "1.00",
        vpc: "0.000317",
      },
      change: "-0.01%",
      volume: `${Math.random() * 100000000000}`,
      circulatingMarketCap: `${Math.random() * 1000000000000}`,
      onchainMarketCap: `${Math.random() * 100000000000}`,
      holders: {
        count: Math.floor(Math.random() * 10000000),
        percentage: `${Math.random() * 100}%`,
      },
    },
    {
      id: 1,
      token: {
        name: "Tether USD",
        acronym: "USDC",
      },
      price: {
        usd: "1.00",
        vpc: "0.000317",
      },
      change: "-0.01%",
      volume: `${Math.random() * 100000000000}`,
      circulatingMarketCap: `${Math.random() * 1000000000000}`,
      onchainMarketCap: `${Math.random() * 100000000000}`,
      holders: {
        count: Math.floor(Math.random() * 10000000),
        percentage: `${Math.random() * 100}%`,
      },
    },
    {
      id: 1,
      token: {
        name: "Tether USD",
        acronym: "USDC",
      },
      price: {
        usd: "1.00",
        vpc: "0.000317",
      },
      change: "-0.01%",
      volume: `${Math.random() * 100000000000}`,
      circulatingMarketCap: `${Math.random() * 1000000000000}`,
      onchainMarketCap: `${Math.random() * 100000000000}`,
      holders: {
        count: Math.floor(Math.random() * 10000000),
        percentage: `${Math.random() * 100}%`,
      },
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
    columnHelper.accessor((row) => row.token, {
      id: "token",
      header: () => <HeaderTable text={t("topTokens.token")} />,
      cell: ({ getValue }) => {
        return (
          <CellText
            text={
              <span className="text-[#6c757d] dark:text-[#bbb]">
                <Link
                  href={"/coming-soon"}
                  className="text-[#081d35] dark:text-[#F5F5F5] text-[14.5px] hover:text-[#066a9c]"
                >
                  {getValue().name}
                </Link>
                &nbsp;({getValue().acronym})
              </span>
            }
          />
        );
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.price, {
      id: "price",
      cell: ({ getValue }) => (
        <CellText
          text={
            <div className="flex flex-col text-[14.5px] text-dark900 dark:text-[#F5F5F5]">
              <TooltipCustom content={`$${getValue().usd}`}>
                <span>${getValue().usd}</span>
              </TooltipCustom>
              <span className="text-[12.6px] text-[#6c757d] dark:text-[#bbb]">
                {getValue().vpc} VPC
              </span>
            </div>
          }
        />
      ),
      header: () => (
        <HeaderTable text={t("topTokens.price")} textStyle="link-color" />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.change, {
      id: "change",
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          leftIcon={<CaretDownIcon color="#dc3545" />}
          className="text-[#dc3545] text-[14.5px]"
          containerStyle="flex items-center gap-1"
        />
      ),
      header: () => (
        <HeaderTable
          text={`${t("topTokens.change")} (%)`}
          textStyle="link-color"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.volume, {
      id: "volume",
      cell: ({ getValue }) => (
        <CellText
          text={`$${getValue()}`}
          className="text-[14.5px] text-dark900 dark:text-[#FAFAFA]"
        />
      ),
      header: () => (
        <HeaderTable
          text={`${t("topTokens.volume")} (24H)`}
          textStyle="link-color"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.circulatingMarketCap, {
      id: "circulatingMarketCap",
      header: () => (
        <HeaderTable
          text={t("topTokens.circulatingMarketCap")}
          textStyle="link-color"
          icon={<HelpIcon />}
          leftIcon={
            <ArrowDownWideShort width={12.4} height={11.5} color="#adb5bd" />
          }
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={`$${getValue()}`}
          className="text-[14.5px] text-dark900 dark:text-[#FAFAFA]"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.onchainMarketCap, {
      id: "onchainMarketCap",
      header: () => (
        <HeaderTable
          text={t("topTokens.onchainMarketCap")}
          icon={<HelpIcon />}
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={`$${getValue()}`}
          className="text-[14.5px] text-dark900 dark:text-[#FAFAFA]"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.holders, {
      id: "holders",
      header: () => (
        <HeaderTable text={t("topTokens.holders")} textStyle="link-color" />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={
            <div className="flex flex-col text-[14.5px] text-dark900 dark:text-[#F5F5F5]">
              <span>{getValue().count}</span>
              <span className="text-[12.6px]">{`${getValue().percentage.slice(
                0,
                6
              )}%`}</span>
            </div>
          }
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
        defaultHeaderTable={false}
        infoMore={
          <div className="flex justify-between items-center p-4">
            <span className="text-[14.5px] text-black dark:text-[#FAFAFA]">
              {t("topTokens.aTotalOf")}&nbsp;
              <span className="font-bold">1,280</span>&nbsp;
              {t("topTokens.tokenContractsFound")}
            </span>
            <button className="w-fit py-[6px] px-2 rounded-md bg-[#e9ecef] dark:bg-gray700 hover:bg-[#dee2e6]">
              <SearchIcon width={12.6} height={13.5} />
            </button>
          </div>
        }
      />
    </div>
  );
};
