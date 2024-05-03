import React, { useState } from "react";
import { DataTable } from "../tables/DataTable";
import { CellText } from "../tables/CellText";
import { EyeIcon } from "@/assets/icons/EyeIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { HeaderTable } from "../tables/HeaderTable";
import { createColumnHelper } from "@tanstack/react-table";
import { THEME, vinachainAddress } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";
import { CopyIcon } from "@/assets/CopyIcon";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { DownloadIcon } from "@/assets/icons/DownloadIcon";
import { DropdownAddress } from "../DropdownAddress";
import { FilterIcon } from "@/assets/icons/FilterIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { TooltipCustom } from "../Tooltip";
import { handleCopy } from "@/utils";
const defaultData = [
  {
    block: 19623482,
    age: "7 second ago",
    txn: 105,
    feeRecipient: {
      name: "beaverbuild",
      address: "0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21",
    },
    gasUsed: {
      value: "12,690,825",
      currentPercent: 25.6,
      olderPercent: 52.21,
    },
    gasLimit: "30,000,000",
    baseFee: 16.01,
    reward: 0.05042,
    burntFees: {
      value: 0.480286,
      percent: 82.11,
    },
  },
  {
    block: 12273782,
    age: "18 second ago",
    txn: 214,
    feeRecipient: {
      name: "rsync-builder.vpc",
      address: "0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21",
    },
    gasUsed: {
      value: "29,993,584",
      currentPercent: 55.61,
      olderPercent: 32.36,
    },
    gasLimit: "39,000,000",
    baseFee: 16.35,
    reward: 0.02343,
    burntFees: {
      value: 0.097783,
      percent: 90.14,
    },
  },
  {
    block: 44473782,
    age: "45 second ago",
    txn: 137,
    feeRecipient: {
      name: "beaverbuild",
      address: "0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21",
    },
    gasUsed: {
      value: "12,455,800",
      currentPercent: 82.6,
      olderPercent: 72.4,
    },
    gasLimit: "30,000,000",
    baseFee: 17.69,
    reward: 0.01911,
    burntFees: {
      value: 0.199658,
      percent: 84.18,
    },
  },
  {
    block: 13473782,
    age: "55 second ago",
    txn: 152,
    feeRecipient: {
      name: "rsync-builder.vpc",
      address: "0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21",
    },
    gasUsed: {
      value: "10,096,254",
      currentPercent: 31.1,
      olderPercent: 18.34,
    },
    gasLimit: "30,000,000",
    baseFee: 17.05,
    reward: 0.05555,
    burntFees: {
      value: 0.17221,
      percent: 93.18,
    },
  },
  {
    block: 16573782,
    age: "1 minute ago",
    txn: 119,
    feeRecipient: {
      name: "rsync-builder.vpc",
      address: "0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21",
    },
    gasUsed: {
      value: "10,690,825",
      currentPercent: 72.54,
      olderPercent: 98.23,
    },
    gasLimit: "30,000,000",
    baseFee: 18.31,
    reward: 0.01041,
    burntFees: {
      value: 0.203775,
      percent: 84.32,
    },
  },
];

export const BlockTable = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const columnHelper = createColumnHelper<any>();
  const [isHovered, setIsHovered] = useState(false);

  const columns = [
    columnHelper.accessor((row) => row.block, {
      id: "block",
      header: () => (
        <HeaderTable
          textStyle=" dark:text-gray200"
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
          text="Block"
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
        <HeaderTable text="Age" textStyle="link-color" />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.txn, {
      id: "txn",
      header: () => <HeaderTable textStyle=" dark:text-gray200" text="Txn" />,
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),

    columnHelper.accessor((row) => row.feeRecipient, {
      id: "feeRecipient",
      header: () => (
        <HeaderTable text="Fee Recipient" textStyle=" dark:text-gray200" />
      ),
      cell: ({ getValue }) => {
        return (
          <CellText
            text={
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center cursor-pointer">
                  <TooltipCustom content={getValue()?.address}>
                    <Link
                      href={`/address/${getValue()?.address}`}
                      className="link-color border-cell-value px-2 dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
                    >
                      {getValue()?.name}
                    </Link>
                  </TooltipCustom>
                  <TooltipCustom content={t("copyAddress")}>
                    <button onClick={() => handleCopy(getValue())}>
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
    columnHelper.accessor((row) => row.gasUsed, {
      id: "gasUsed",
      header: () => (
        <HeaderTable text="Gas Used" textStyle=" dark:text-gray200" />
      ),

      cell: ({ getValue }) => (
        <CellText
          text={
            <div className="flex flex-col gap-1 cursor-pointer">
              <div className="text-[14.5px]">
                {getValue()?.value}{" "}
                <span className="text-[12.6px] text-[#65757D]">
                  {" "}
                  ({" "}
                  <TooltipCustom content="Gas used %">
                    {" "}
                    {getValue()?.currentPercent}%
                  </TooltipCustom>{" "}
                  |{" "}
                  <TooltipCustom content="% of Gas Target">
                    {" "}
                    {getValue()?.olderPercent}%{" "}
                  </TooltipCustom>
                  )
                </span>
              </div>
              <div className={` relative w-full h-[2px] bg-[#e9ecef] `}>
                <div
                  className={`absolute h-full  top-0 left-0 bg-blue dark:bg-scanDark`}
                  style={{
                    width: `${getValue()?.currentPercent}%`,
                  }}
                ></div>
              </div>
            </div>
          }
          containerStyle="gap-[10px]"
          // className="text-secondary dark:text-secondaryDark"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.gasLimit, {
      id: "gasLimit",
      header: () => (
        <HeaderTable text="Gas limit" textStyle=" dark:text-gray200" />
      ),

      cell: ({ getValue }) => (
        <CellText
          text={
            <span className="text-[14.5px] text-dark900 dark:text-gray200 ">
              {getValue()}
            </span>
          }
          containerStyle="gap-[10px]"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.baseFee, {
      id: "baseFee",
      header: () => (
        <HeaderTable text="Base fee" textStyle=" dark:text-gray200" />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={<span>{getValue()} Gwei</span>}
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.reward, {
      id: "Reward",
      header: () => (
        <HeaderTable text="Reward" textStyle="dark:text-gray200 " />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={<span>{getValue()} VPC</span>}
          className="text-dark900 dark:text-gray200 text-[14.5px]"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.burntFees, {
      id: "burntFees",
      header: () => (
        <HeaderTable text="Burnt fees" textStyle="dark:text-gray200" />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={
            <div className="text-[14.5px]">
              27,501,261{" "}
              <span className="text-[12.6px] text-[#65757D]">
                {" "}
                ({getValue()?.percent})
              </span>
            </div>
          }
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
              {" "}
              Total of 19,673,783 blocks &nbsp;
            </div>
            <span className="text-[12.5px] text-dark900 dark:text-gray400">
              (Showing blocks between #19673758 to #19673782)
            </span>
          </div>
        }
        viewMore={
          <Link
            href={"/coming-soon"}
            className="group flex items-center justify-center bg-[#f8f9fa] rounded-b-2xl  border-t border-[#e9ecef] gap-2 text-dark900 hover:text-[#066a9c] uppercase text-[14.5px] p-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            View All Transaction
            <ArrowRightIcon color={isHovered ? "#066a9c" : "#6c757d"} />
          </Link>
        }
      />
    </div>
  );
};

