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
import { DownloadFile } from "../AddressDetail/DownloadFile";

export const UnclesTable = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const defaultData = [
    {
      blockHeight: Math.floor(Math.random() * 100000000),
      uncleNumber: Math.floor(Math.random() * 100000000),
      age: `${Math.floor(Math.random() * 600)} day ago`,
      miner: generateRandomEthereumAddress(),
      reward: `${Math.random()}`,
    },
    {
      blockHeight: Math.floor(Math.random() * 100000000),
      uncleNumber: Math.floor(Math.random() * 100000000),
      age: `${Math.floor(Math.random() * 600)} day ago`,
      miner: generateRandomEthereumAddress(),
      reward: `${Math.random()}`,
    },
    {
      blockHeight: Math.floor(Math.random() * 100000000),
      uncleNumber: Math.floor(Math.random() * 100000000),
      age: `${Math.floor(Math.random() * 600)} day ago`,
      miner: generateRandomEthereumAddress(),
      reward: `${Math.random()}`,
    },
    {
      blockHeight: Math.floor(Math.random() * 100000000),
      uncleNumber: Math.floor(Math.random() * 100000000),
      age: `${Math.floor(Math.random() * 600)} day ago`,
      miner: generateRandomEthereumAddress(),
      reward: `${Math.random()}`,
    },
    {
      blockHeight: Math.floor(Math.random() * 100000000),
      uncleNumber: Math.floor(Math.random() * 100000000),
      age: `${Math.floor(Math.random() * 600)} day ago`,
      miner: generateRandomEthereumAddress(),
      reward: `${Math.random()}`,
    },
    {
      blockHeight: Math.floor(Math.random() * 100000000),
      uncleNumber: Math.floor(Math.random() * 100000000),
      age: `${Math.floor(Math.random() * 600)} day ago`,
      miner: generateRandomEthereumAddress(),
      reward: `${Math.random()}`,
    },
    {
      blockHeight: Math.floor(Math.random() * 100000000),
      uncleNumber: Math.floor(Math.random() * 100000000),
      age: `${Math.floor(Math.random() * 600)} day ago`,
      miner: generateRandomEthereumAddress(),
      reward: `${Math.random()}`,
    },
    {
      blockHeight: Math.floor(Math.random() * 100000000),
      uncleNumber: Math.floor(Math.random() * 100000000),
      age: `${Math.floor(Math.random() * 600)} day ago`,
      miner: generateRandomEthereumAddress(),
      reward: `${Math.random()}`,
    },
    {
      blockHeight: Math.floor(Math.random() * 100000000),
      uncleNumber: Math.floor(Math.random() * 100000000),
      age: `${Math.floor(Math.random() * 600)} day ago`,
      miner: generateRandomEthereumAddress(),
      reward: `${Math.random()}`,
    },
    {
      blockHeight: Math.floor(Math.random() * 100000000),
      uncleNumber: Math.floor(Math.random() * 100000000),
      age: `${Math.floor(Math.random() * 600)} day ago`,
      miner: generateRandomEthereumAddress(),
      reward: `${Math.random()}`,
    },
    {
      blockHeight: Math.floor(Math.random() * 100000000),
      uncleNumber: Math.floor(Math.random() * 100000000),
      age: `${Math.floor(Math.random() * 600)} day ago`,
      miner: generateRandomEthereumAddress(),
      reward: `${Math.random()}`,
    },
  ];

  const columnHelper = createColumnHelper<any>();
  const [isHovered, setIsHovered] = useState(false);

  const columns = [
    columnHelper.accessor((row) => row.blockHeight, {
      id: "blockHeight",
      header: () => (
        <HeaderTable
          textStyle=" dark:text-gray200"
          text={t("uncles.blockHeight")}
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
    columnHelper.accessor((row) => row.uncleNumber, {
      id: "uncleNumber",
      header: () => (
        <HeaderTable
          textStyle=" dark:text-gray200"
          text={t("uncles.uncleNumber")}
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={
            <Link href={`/coming-soon`} className="link-color text-[14.5px]">
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
        <HeaderTable text={t("uncles.age")} textStyle="link-color" />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={
            <TooltipCustom content="2024-24-06 2:37:23">
              {getValue()}
            </TooltipCustom>
          }
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.miner, {
      id: "miner",
      header: () => (
        <HeaderTable text={t("uncles.miner")} textStyle=" dark:text-gray200" />
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
    columnHelper.accessor((row) => row.reward, {
      id: "reward",
      header: () => (
        <HeaderTable text={t("uncles.reward")} textStyle="dark:text-gray200 " />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={`${getValue().slice(0, 4)} VPC`}
          className="text-dark900 dark:text-gray200 text-[14.5px]"
        />
      ),
      footer: (props) => props.column.id,
    }),
  ];

  return (
    <div className="flex flex-col gap-3">
      <DataTable
        data={defaultData}
        // fetchData={getListFeedbacks}
        columns={columns}
        showPagination={true}
        childrenHeaderTable={
          <div className="flex flex-col text-[14.5px] text-black dark:text-[#FAFAFA]">
            {`${t("uncles.showingUncle")} 1,306,719 ${t("uncles.totalUncles")}`}
          </div>
        }
      />
      <DownloadFile />
    </div>
  );
};
