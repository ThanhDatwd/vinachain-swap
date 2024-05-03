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
import { formatTrxHash, formatTrxId } from "@/utils/formatTrxId";
import { handleCopy } from "@/utils";
import { AdditionalInfoModal } from "./AdditionalInfoModal";
import { CheckIcon } from "@/assets/icons/CheckIcon";
import { ArrowUpRightIcon } from "@/assets/icons/ArrowUpRightIcon";
const defaultData = [
  {
    block: 19715255,
    age: "7 second ago",
    method: "Transfer",
    txHash: "0xf54773cda89db75736320cc3342668d4731edd08d1a4",
    from: {
      publicTag: "Kraken 4",
      address: "0xE551E0A0Be44635451140DA3655200c8733cAe08",
    },
    iconMethod: "",
    to: {
      publicTag: "",
      address: "0x388C818CA8B9251b393131C08a736A67ccB19297",
    },
    gasUsed: {
      value: "12,690,825",
      currentPercent: 25.6,
      olderPercent: 52.21,
    },
    baseFee: 16.01,
    value: 0.07543411,
    fee: 0.00012288,
  },
  {
    block: 19623482,
    age: "8 second ago",
    method: "Lock",
    txHash:
      "0xc18ec6e58aae5dc439c1c5183dc0f619b75736320cc3342668d4731edd08d1a4",
    from: {
      publicTag: "Coincheck",
      address: "0xb7344F4adEacaf97f29d8C5E6D8ee700a5C15352",
    },
    iconMethod: "",
    to: {
      publicTag: "",
      address: "0x267be1C1D684F78cb4F6a176C4911b741E4Ffdc0",
    },
    gasUsed: {
      value: "12,690,825",
      currentPercent: 25.6,
      olderPercent: 52.21,
    },
    baseFee: 16.01,
    value: 1.16187072,
    fee: 0.00015871,
  },
  {
    block: 13473721,
    age: "10 second ago",
    method: "Transfer",
    txHash: "0xc183dc0f619b75736320cc33426675736320cc3342668d4731edd08d1a4",
    from: {
      publicTag: "",
      address: "0xd7b81853E9bcA37B22dD4eeBF00702741B1A9B13",
    },
    iconMethod: "",
    to: {
      publicTag: "roadrun.vpc",
      address: "0x2733217f6CF573bfa92a8b9dE538E776e5EFd0E3",
    },
    gasUsed: {
      value: "12,690,825",
      currentPercent: 25.6,
      olderPercent: 52.21,
    },
    baseFee: 16.01,
    value: 0.01,
    fee: 0.00011673,
  },
  {
    block: 15663414,
    age: "13 second ago",
    method: "Approve",
    txHash: "0xc95222290DD7278Aa3Dd5183dc0f619b75736320cc3342668d4731edd08d1a4",
    from: {
      publicTag: "Coinbase: Deposit",
      address: "0x210A41Cf21542D191e0CE669D9f6e99A25239F37",
    },
    iconMethod: "",
    to: {
      publicTag: "",
      address: "0xbaEbb41cfE34701A697824776d1CD60C3Ed742f1",
    },
    gasUsed: {
      value: "12,690,825",
      currentPercent: 25.6,
      olderPercent: 52.21,
    },
    baseFee: 16.01,
    value: 0.02129,
    fee: 0.00011881,
  },
  {
    block: 14623416,
    age: "16 second ago",
    method: "Execute",
    txHash: "0xc00C2E81635De5666320cc3342668d4731edd08d1a4",
    from: {
      publicTag: "Uphold",
      address: "0x20Ee9e3Df30ac851AD199dA917223e33faA8a1af",
    },
    iconMethod: "",
    to: {
      publicTag: "",
      address: "0x31E203262928230ae1fc7a963B0010197E5E3F88",
    },
    gasUsed: {
      value: "12,690,825",
      currentPercent: 25.6,
      olderPercent: 52.21,
    },
    baseFee: 16.01,
    value: 0,
    fee: 0.00065017,
  },
  {
    block: 19323425,
    age: "16 second ago",
    method: "Transfer",
    txHash:
      "0xc18ec6e58aae5dc439c1c5183dc0f619b75736320cc3342668d4731edd08d1a4",
    from: {
      publicTag: "Cobo: Gas Supplier",
      address: "0xF36f0af86D1C3A727e51Cfe6A2d2af6869cb314c",
    },
    iconMethod: "",
    to: {
      publicTag: "Coinbase 1",
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    },
    gasUsed: {
      value: "12,690,825",
      currentPercent: 25.6,
      olderPercent: 52.21,
    },
    baseFee: 16.01,
    value: 0.05042,
    fee: 0.480286,
  },
  {
    block: 112623462,
    age: "17 second ago",
    method: "Transfer",
    txHash: "0xc90DD7278Aa3Ddd389C19b75736320cc3342668d4731edd08d1a4",
    from: {
      publicTag: "Coinbase 14",
      address: "0x7830c87C02e56AFf27FA8Ab1241711331FA86F43",
    },
    iconMethod: "",
    to: {
      publicTag: "Coinbase 1",
      address: "0xA9D1e08C7793af67e9d92fe308d5697FB81d3E43",
    },
    gasUsed: {
      value: "12,690,825",
      currentPercent: 25.6,
      olderPercent: 52.21,
    },
    baseFee: 16.01,
    value: 4.57556422,
    fee: 0.006896,
  },
  {
    block: 18823433,
    age: "18 second ago",
    method: "Swap",
    txHash: "0xc2E81635De566644B0c5183dc0f619b75736320cc3342668d4731edd08d1a4",
    from: {
      publicTag: "",
      address: "0xF1300cc9c2Cf347f7902742fEC4dF9dbA952fD7b",
    },
    iconMethod: "",
    to: {
      publicTag: "",
      address: "Uphold",
    },
    gasUsed: {
      value: "12,690,825",
      currentPercent: 25.6,
      olderPercent: 52.21,
    },
    baseFee: 16.01,
    value: 0.05042,
    fee: 0.480286,
  },
];

export const TransactionsTable = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const columnHelper = createColumnHelper<any>();
  const [isHovered, setIsHovered] = useState(false);

  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => (
        <HeaderTable
          textStyle="dark:text-gray200"
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
          text=""
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          icon={
            <>
              <AdditionalInfoModal
                content={
                  <div className=" relative z-[10000] flex flex-col text-left py-2">
                    <h5 className="text-[#212529] dark:text-[#F5F5F5] text-[15px] font-bold mb-4">
                      Additional Info
                    </h5>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center mb-2 md:mb-0 w-full  gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
                      <p className="text-[12.5px] text-[#212529] dark:text-[#F5F5F5] font-semibold ">
                          Status:
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="mb-[2px]">
                          <CheckIcon width={13} height={13} />
                        </div>
                        <span className="text-[#65757D]">
                          (156 Block Confirmations)
                        </span>
                      </div>
                    </div>

                    <div className="w-full my-4 h-[1px] bg-[#DCDCDC] "></div>

                    <div className="flex flex-col gap-1  ">
                      <div className="flex items-center  md:mb-0 w-full  gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
                        <p className="text-[12.5px] text-[#212529] dark:text-[#F5F5F5] font-semibold ">
                          Transaction Action:
                        </p>
                      </div>
                      <div className="text-[12.5px] ">
                        <span className="text-[#65757D] dark:text-gray400">
                          Transfer <span className="text-[#212529] dark:text-[#F5F5F5]">7 VPC</span>{" "}
                          To{" "}
                        </span>

                        <Link
                          href={`/address/${"0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21"}`}
                          className="link-color border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
                        >
                          {formatTrxId(
                            "0x95222290DD7278Aa388888389Cc1EA6sCC2BAf21"
                          )}
                        </Link>
                      </div>
                    </div>
                    <div className="w-full my-4 h-[1px] bg-[#DCDCDC] "></div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center  md:mb-0 w-full  text-[#111111]  md:text-gray550  dark:text-gray400  ">
                        <p className="text-[12.5px] text-[#212529] dark:text-[#F5F5F5] font-semibold ">
                          {/* {t("vinaScan.tabs.overview.blockReward")} */}
                          Transaction Fee:
                        </p>
                      </div>
                      <div>
                        <div className="text-[12.5px] text-[#212529] dark:text-[#F5F5F5]">
                          0.00013571021395681 VPC
                          <span className="text-[12.5px] text-[#65757D] dark:text-gray400">
                            {" "}
                            ($0.43)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full my-4 h-[1px] bg-[#DCDCDC] "></div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center  md:mb-0 w-full  text-[#111111]  md:text-gray550  dark:text-gray400  ">
                        <p className="text-[12.5px] text-[#212529] dark:text-[#F5F5F5] font-semibold ">
                          {/* {t("vinaScan.tabs.overview.blockReward")} */}
                          Gas info:
                        </p>
                      </div>
                      <div>
                        <div className="text-[12.5px] text-[#212529] dark:text-[#F5F5F5] break-words">
                          <div>64,994 gas used from 98,752 limit </div>
                          <span className="text-[10.8px] text-[#65757D] dark:text-gray400">
                            {" "}
                            @ 0.00000001351094761 VPC (13.51094761 Gwei)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full my-4 h-[1px] bg-[#DCDCDC] "></div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center  md:mb-0 w-full  text-[#111111]  md:text-gray550  dark:text-gray400  ">
                        <p className="text-[12.5px] text-[#212529] dark:text-[#F5F5F5] font-semibold ">
                          {/* {t("vinaScan.tabs.overview.blockReward")} */}
                          Nonce:
                        </p>
                      </div>
                      <div>
                        <div className="text-[12.5px] text-[#212529] dark:text-[#F5F5F5]">
                          218
                          <span className="text-[12.5px] text-[#65757D] dark:text-gray400">
                            {" "}
                            in the position 190
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full my-4 h-[1px] bg-[#DCDCDC] "></div>
                    <Link
                      className="text-[#0784c3] flex items-center gap-1"
                      href={`/txs/0xf54773cda89db75736320cc3342668d4731edd08d1a4`}
                    >
                      See view details{" "}
                      {/* <ArrowUpRightIcon
                        width={14}
                        height={15}
                        color={theme === THEME.DARK ? "#BBBBBB" : "#6C757D"}
                      /> */}
                    </Link>
                  </div>
                }
              />
            </>
          }
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.txHash, {
      id: "txHash",
      header: () => (
        <HeaderTable
          textStyle="dark:text-gray200"
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
          text="Transaction hash"
        />
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
          textStyle=" dark:text-gray200"
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
          text="Method"
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          icon={
            <Link
              href={`/address/${getValue()?.address}`}
              className="border-cell-value border-method px-4 py-1 text-[10.8px] bg-white_98 dark:bg-gray700 dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
            >
              {getValue()}
            </Link>
          }
        />
      ),
      footer: (props) => props.column.id,
    }),
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

    columnHelper.accessor((row) => row.from, {
      id: "from",
      header: () => <HeaderTable text="From" textStyle=" dark:text-gray200" />,
      cell: ({ getValue }) => {
        return (
          <CellText
            icon={
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center cursor-pointer">
                  <TooltipCustom content={getValue()?.address}>
                    <Link
                      href={`/address/${getValue()?.address}`}
                      className="link-color border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
                    >
                      {getValue()?.publicTag !== ""
                        ? getValue()?.publicTag
                        : formatTrxId(getValue()?.address)}
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
    columnHelper.accessor((row) => row.iconMethod, {
      id: "iconMethod",
      header: () => (
        <HeaderTable text="" textStyle="link-color" />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={
            <div className="w-6 h-6 rounded-full text-[#00a186] !border !border-[#00a18640] bg-[#00a1861a] flex items-center justify-center">
              <ArrowRightIcon width={10.15} height={10.5} color="#00a186" />
            </div>
          }
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
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
                  <TooltipCustom content={getValue()?.address}>
                    <Link
                      href={`/address/${getValue()?.address}`}
                      className="link-color border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
                    >
                      {getValue()?.publicTag !== ""
                        ? getValue()?.publicTag
                        : formatTrxId(getValue()?.address)}
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
      id: "Value",
      header: () => <HeaderTable text="Value" textStyle="dark:text-gray200 " />,
      cell: ({ getValue }) => (
        <CellText
          text={<span>{getValue()} VPC</span>}
          className="text-dark900 dark:text-gray200 text-[14.5px]"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.fee, {
      id: "fee",
      header: () => (
        <HeaderTable text="Txn Fee" textStyle="dark:text-gray200" />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={
            <span>{getValue()} </span>
          }
          className="text-gray550 dark:text-gray200 text-[12.5px]"
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
      />
    </div>
  );
};
