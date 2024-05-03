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
    blobHash: generateRandomEthereumAddress(),
    txHash: generateRandomEthereumAddress(),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    block: Math.floor(Math.random() * 10000000),
    blobSender: generateRandomEthereumAddress(),
    gasPrice: `${Math.random()}`,
    size: Math.floor(Math.random() * 1000),
  },
  {
    blobHash: generateRandomEthereumAddress(),
    txHash: generateRandomEthereumAddress(),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    block: Math.floor(Math.random() * 10000000),
    blobSender: generateRandomEthereumAddress(),
    gasPrice: `${Math.random()}`,
    size: Math.floor(Math.random() * 1000),
  },
  {
    blobHash: generateRandomEthereumAddress(),
    txHash: generateRandomEthereumAddress(),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    block: Math.floor(Math.random() * 10000000),
    blobSender: generateRandomEthereumAddress(),
    gasPrice: `${Math.random()}`,
    size: Math.floor(Math.random() * 1000),
  },
  {
    blobHash: generateRandomEthereumAddress(),
    txHash: generateRandomEthereumAddress(),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    block: Math.floor(Math.random() * 10000000),
    blobSender: generateRandomEthereumAddress(),
    gasPrice: `${Math.random()}`,
    size: Math.floor(Math.random() * 1000),
  },
  {
    blobHash: generateRandomEthereumAddress(),
    txHash: generateRandomEthereumAddress(),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    block: Math.floor(Math.random() * 10000000),
    blobSender: generateRandomEthereumAddress(),
    gasPrice: `${Math.random()}`,
    size: Math.floor(Math.random() * 1000),
  },
  {
    blobHash: generateRandomEthereumAddress(),
    txHash: generateRandomEthereumAddress(),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    block: Math.floor(Math.random() * 10000000),
    blobSender: generateRandomEthereumAddress(),
    gasPrice: `${Math.random()}`,
    size: Math.floor(Math.random() * 1000),
  },
  {
    blobHash: generateRandomEthereumAddress(),
    txHash: generateRandomEthereumAddress(),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    block: Math.floor(Math.random() * 10000000),
    blobSender: generateRandomEthereumAddress(),
    gasPrice: `${Math.random()}`,
    size: Math.floor(Math.random() * 1000),
  },
  {
    blobHash: generateRandomEthereumAddress(),
    txHash: generateRandomEthereumAddress(),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    block: Math.floor(Math.random() * 10000000),
    blobSender: generateRandomEthereumAddress(),
    gasPrice: `${Math.random()}`,
    size: Math.floor(Math.random() * 1000),
  },
  {
    blobHash: generateRandomEthereumAddress(),
    txHash: generateRandomEthereumAddress(),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    block: Math.floor(Math.random() * 10000000),
    blobSender: generateRandomEthereumAddress(),
    gasPrice: `${Math.random()}`,
    size: Math.floor(Math.random() * 1000),
  },
  {
    blobHash: generateRandomEthereumAddress(),
    txHash: generateRandomEthereumAddress(),
    age: `${Math.floor(Math.random() * 60)} secs ago`,
    block: Math.floor(Math.random() * 10000000),
    blobSender: generateRandomEthereumAddress(),
    gasPrice: `${Math.random()}`,
    size: Math.floor(Math.random() * 1000),
  },
];

export const ViewBlobsTable = () => {
  const { t } = useTranslation();

  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor((row) => row.blobHash, {
      id: "blobHash",
      header: () => (
        <HeaderTable
          textStyle="dark:text-gray200"
          text={t("blobs.blobVersionedHash")}
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={
            <div className="flex items-center gap-1">
              <Link href={`/coming-soon`} className="link-color text-[14.5px]">
                {`${getValue().slice(0, 18)}...`}
              </Link>
            </div>
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
          text={t("blobs.transactionHash")}
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={
            <div className="flex items-center gap-1">
              <Link
                href={`/txs/${getValue()}`}
                className="link-color text-[14.5px]"
              >
                {`${getValue().slice(0, 18)}...`}
              </Link>
            </div>
          }
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.age, {
      id: "age",
      header: () => (
        <HeaderTable text={t("blobs.age")} textStyle="link-color" />
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
    columnHelper.accessor((row) => row.block, {
      id: "block",
      header: () => (
        <HeaderTable textStyle=" dark:text-gray200" text={t("blobs.block")} />
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
    columnHelper.accessor((row) => row.blobSender, {
      id: "blobSender",
      header: () => (
        <HeaderTable
          textStyle=" dark:text-gray200"
          text={t("blobs.blobSender")}
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          icon={
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
          containerStyle="gap-1"
          // className="text-secondary dark:text-secondaryDark"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.gasPrice, {
      id: "gasPrice",
      header: () => (
        <HeaderTable
          text={t("blobs.gasPrice")}
          textStyle=" dark:text-gray200"
        />
      ),
      cell: ({ getValue }) => {
        return <CellText text={`${getValue().slice(0, 11)} Gwei`} />;
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.size, {
      id: "size",
      header: () => (
        <HeaderTable text={t("blobs.size")} textStyle="dark:text-gray200 " />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={`${getValue()} KiB`}
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
              {`${t("blobs.aTotalOf")} 499,366 ${t("blobs.blobsFound")}`}
            </div>
            <span className="text-[12.5px] text-dark900 dark:text-gray400">
              {`(${t("blobs.showingTheLast10000Records")})`}
            </span>
          </div>
        }
      />
    </div>
  );
};
