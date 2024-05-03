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
    height: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} hr ago`,
    txn: Math.floor(Math.random() * 1000),
    uncles: 0,
    feeRecipient: generateRandomEthereumAddress(),
    gasLimit: Math.floor(Math.random() * 100000000),
    difficulty: `${Math.random()}`,
    reward: `${Math.random()}`,
    reorgDepth: 1,
  },
  {
    height: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} hr ago`,
    txn: Math.floor(Math.random() * 1000),
    uncles: 0,
    feeRecipient: generateRandomEthereumAddress(),
    gasLimit: Math.floor(Math.random() * 100000000),
    difficulty: `${Math.random()}`,
    reward: `${Math.random()}`,
    reorgDepth: 1,
  },
  {
    height: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} hr ago`,
    txn: Math.floor(Math.random() * 1000),
    uncles: 0,
    feeRecipient: generateRandomEthereumAddress(),
    gasLimit: Math.floor(Math.random() * 100000000),
    difficulty: `${Math.random()}`,
    reward: `${Math.random()}`,
    reorgDepth: 1,
  },
  {
    height: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} hr ago`,
    txn: Math.floor(Math.random() * 1000),
    uncles: 0,
    feeRecipient: generateRandomEthereumAddress(),
    gasLimit: Math.floor(Math.random() * 100000000),
    difficulty: `${Math.random()}`,
    reward: `${Math.random()}`,
    reorgDepth: 1,
  },
  {
    height: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} hr ago`,
    txn: Math.floor(Math.random() * 1000),
    uncles: 0,
    feeRecipient: generateRandomEthereumAddress(),
    gasLimit: Math.floor(Math.random() * 100000000),
    difficulty: `${Math.random()}`,
    reward: `${Math.random()}`,
    reorgDepth: 1,
  },
  {
    height: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} hr ago`,
    txn: Math.floor(Math.random() * 1000),
    uncles: 0,
    feeRecipient: generateRandomEthereumAddress(),
    gasLimit: Math.floor(Math.random() * 100000000),
    difficulty: `${Math.random()}`,
    reward: `${Math.random()}`,
    reorgDepth: 1,
  },
  {
    height: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} hr ago`,
    txn: Math.floor(Math.random() * 1000),
    uncles: 0,
    feeRecipient: generateRandomEthereumAddress(),
    gasLimit: Math.floor(Math.random() * 100000000),
    difficulty: `${Math.random()}`,
    reward: `${Math.random()}`,
    reorgDepth: 1,
  },
  {
    height: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} hr ago`,
    txn: Math.floor(Math.random() * 1000),
    uncles: 0,
    feeRecipient: generateRandomEthereumAddress(),
    gasLimit: Math.floor(Math.random() * 100000000),
    difficulty: `${Math.random()}`,
    reward: `${Math.random()}`,
    reorgDepth: 1,
  },
  {
    height: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} hr ago`,
    txn: Math.floor(Math.random() * 1000),
    uncles: 0,
    feeRecipient: generateRandomEthereumAddress(),
    gasLimit: Math.floor(Math.random() * 100000000),
    difficulty: `${Math.random()}`,
    reward: `${Math.random()}`,
    reorgDepth: 1,
  },
  {
    height: Math.floor(Math.random() * 10000000),
    age: `${Math.floor(Math.random() * 60)} hr ago`,
    txn: Math.floor(Math.random() * 1000),
    uncles: 0,
    feeRecipient: generateRandomEthereumAddress(),
    gasLimit: Math.floor(Math.random() * 100000000),
    difficulty: `${Math.random()}`,
    reward: `${Math.random()}`,
    reorgDepth: 1,
  },
];

export const BlocksForkedTable = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor((row) => row.height, {
      id: "height",
      header: () => <HeaderTable text={t("blocksForked.height")} />,
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
        <HeaderTable text={t("blocksForked.age")} textStyle="link-color" />
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
    columnHelper.accessor((row) => row.txn, {
      id: "txn",
      header: () => <HeaderTable text={t("blocksForked.txn")} />,
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.uncles, {
      id: "uncles",
      header: () => <HeaderTable text={t("blocksForked.uncles")} />,
      cell: ({ getValue }) => (
        <CellText className=" dark:text-gray200" text={getValue()} />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.feeRecipient, {
      id: "feeRecipient",
      header: () => (
        <HeaderTable
          textStyle="dark:text-gray200"
          text={t("blocksForked.feeRecipient")}
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
    columnHelper.accessor((row) => row.gasLimit, {
      id: "gasLimit",
      header: () => (
        <HeaderTable
          text={t("blocksForked.gasLimit")}
          textStyle=" dark:text-gray200"
        />
      ),
      cell: ({ getValue }) => {
        return <CellText text={getValue()} />;
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.difficulty, {
      id: "difficulty",
      header: () => (
        <HeaderTable
          text={t("blocksForked.difficulty")}
          textStyle=" dark:text-gray200"
        />
      ),
      cell: ({ getValue }) => {
        return <CellText text={`${getValue().slice(0, 5)} TH`} />;
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.reward, {
      id: "reward",
      header: () => (
        <HeaderTable
          text={t("blocksForked.gasLimit")}
          textStyle=" dark:text-gray200"
        />
      ),
      cell: ({ getValue }) => {
        return <CellText text={`${getValue().slice(0, 7)} VPC`} />;
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.reorgDepth, {
      id: "reorgDepth",
      header: () => (
        <HeaderTable
          text={t("blocksForked.gasLimit")}
          textStyle=" dark:text-gray200"
        />
      ),
      cell: ({ getValue }) => {
        return <CellText text={getValue()} />;
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
          <div className="text-[14.5px] text-dark900 dark:text-gray200">
            {`${t("blocksForked.aTotalOf")} 43,227,883 ${t(
              "blocksForked.forkedBlocksFound"
            )}`}
          </div>
        }
      />
    </div>
  );
};
