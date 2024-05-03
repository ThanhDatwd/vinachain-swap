import { CopyIcon } from "@/assets/CopyIcon";
import { FileLineIcon } from "@/assets/icons/FileLineIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { handleCopy } from "@/utils";
import {
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
import { ArrowUpRightSquareIcon } from "@/assets/icons/ArrowUpRightSquareIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { THEME } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";
const defaultData = [
  {
    index: Math.floor(Math.random() * 10000000),
    block: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    validatorIndex: Math.floor(Math.random() * 10000),
    recipient: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    index: Math.floor(Math.random() * 10000000),
    block: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    validatorIndex: Math.floor(Math.random() * 10000),
    recipient: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    index: Math.floor(Math.random() * 10000000),
    block: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    validatorIndex: Math.floor(Math.random() * 10000),
    recipient: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    index: Math.floor(Math.random() * 10000000),
    block: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    validatorIndex: Math.floor(Math.random() * 10000),
    recipient: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    index: Math.floor(Math.random() * 10000000),
    block: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    validatorIndex: Math.floor(Math.random() * 10000),
    recipient: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    index: Math.floor(Math.random() * 10000000),
    block: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    validatorIndex: Math.floor(Math.random() * 10000),
    recipient: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    index: Math.floor(Math.random() * 10000000),
    block: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    validatorIndex: Math.floor(Math.random() * 10000),
    recipient: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    index: Math.floor(Math.random() * 10000000),
    block: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    validatorIndex: Math.floor(Math.random() * 10000),
    recipient: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    index: Math.floor(Math.random() * 10000000),
    block: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    validatorIndex: Math.floor(Math.random() * 10000),
    recipient: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
  {
    index: Math.floor(Math.random() * 10000000),
    block: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    validatorIndex: Math.floor(Math.random() * 10000),
    recipient: generateRandomEthereumAddress(),
    value: `${Math.random()}`,
  },
];

export const BeaconWithdrawalTable = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor((row) => row.index, {
      id: "index",
      header: () => <HeaderTable text={t("beaconWithdrawal.index")} />,
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.block, {
      id: "block",
      header: () => (
        <HeaderTable
          textStyle=" dark:text-gray200"
          text={t("beaconWithdrawal.block")}
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
        <HeaderTable text={t("beaconWithdrawal.age")} textStyle="link-color" />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.validatorIndex, {
      id: "validatorIndex",
      header: () => <HeaderTable text={t("beaconWithdrawal.validatorIndex")} />,
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={
            <div className="flex items-center gap-2">
              <Link href={"/coming-soon"}>{getValue()}</Link>
              <ArrowUpRightSquareIcon />
            </div>
          }
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.recipient, {
      id: "recipient",
      header: () => (
        <HeaderTable
          textStyle="dark:text-gray200"
          text={t("beaconWithdrawal.recipient")}
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={
            <div className="flex gap-2 items-center cursor-pointer">
              <TooltipCustom content={getValue()}>
                <Link
                  href={`/address/${getValue()}`}
                  className="flex items-center gap-1 link-color border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc] rounded-md duration-150 ease-in-out"
                >
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
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.value, {
      id: "value",
      header: () => (
        <HeaderTable
          text={t("beaconWithdrawal.value")}
          textStyle=" dark:text-gray200"
        />
      ),
      cell: ({ getValue }) => {
        return <CellText text={`${getValue().slice(0, 11)} VPC`} />;
      },
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
          <div>
            <div className="text-[14.5px] text-dark900 dark:text-gray200">
              {`${t("beaconWithdrawal.aTotalOf")} 43,227,883 ${t(
                "beaconWithdrawal.withdrawalsFoundTotal"
              )} 13,551,230.5692916 ${t("beaconWithdrawal.vpcWithdrawn")}`}
            </div>
            <span className="text-[12.5px] text-dark900 dark:text-gray400">
              {`(${t("beaconWithdrawal.showingTheLast10000Records")})`}
            </span>
          </div>
        }
        infoMore={
          <>
            <div className="flex lg:justify-end p-4">
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
