import { CopyIcon } from "@/assets/CopyIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { EyeIcon } from "@/assets/icons/EyeIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { useTheme } from "@/hooks/useTheme";
import { handleCopy } from "@/utils";
import {
  formatTrxHash,
  formatTrxId,
  generateRandomEthereumAddress,
} from "@/utils/formatTrxId";
import { createColumnHelper } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { CellText } from "../tables/CellText";
import { DataTable } from "../tables/DataTable";
import { HeaderTable } from "../tables/HeaderTable";
import { TooltipCustom } from "../Tooltip";
import { FileLineIcon } from "@/assets/icons/FileLineIcon";
import Link from "next/link";
import { THEME } from "@/utils/constants";
import { InfoMore } from "../AddressDetail/InfoMore";
const defaultData = [
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Transfer",
    block: Math.floor(Math.random() * 100000000),
    age: Math.floor(Math.random() * 60),
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random() * 100000}`,
    token: {
      name: "Smog",
      acronym: "SMOG",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Transfer",
    block: Math.floor(Math.random() * 100000000),
    age: Math.floor(Math.random() * 60),
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random() * 100000}`,
    token: {
      name: "Smog",
      acronym: "SMOG",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Transfer",
    block: Math.floor(Math.random() * 100000000),
    age: Math.floor(Math.random() * 60),
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random() * 100000}`,
    token: {
      name: "Wrapper Vinachain",
      acronym: "WVPC",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Transfer",
    block: Math.floor(Math.random() * 100000000),
    age: Math.floor(Math.random() * 60),
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random() * 100000}`,
    token: {
      name: "Smog",
      acronym: "SMOG",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Transfer",
    block: Math.floor(Math.random() * 100000000),
    age: Math.floor(Math.random() * 60),
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random() * 100000}`,
    token: {
      name: "PAAL AI",
      acronym: "$PAAL",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Transfer",
    block: Math.floor(Math.random() * 100000000),
    age: Math.floor(Math.random() * 60),
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random() * 100000}`,
    token: {
      name: "PAAL AI",
      acronym: "$PAAL",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Transfer",
    block: Math.floor(Math.random() * 100000000),
    age: Math.floor(Math.random() * 60),
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random() * 100000}`,
    token: {
      name: "Wrapper Vinachain",
      acronym: "WVPC",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Transfer",
    block: Math.floor(Math.random() * 100000000),
    age: Math.floor(Math.random() * 60),
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random() * 100000}`,
    token: {
      name: "Tether USD",
      acronym: "USDC",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Transfer",
    block: Math.floor(Math.random() * 100000000),
    age: Math.floor(Math.random() * 60),
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random() * 100000}`,
    token: {
      name: "Zeta",
      acronym: "ZETA",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Transfer",
    block: Math.floor(Math.random() * 100000000),
    age: Math.floor(Math.random() * 60),
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    value: `${Math.random() * 100000}`,
    token: {
      name: "Zeta",
      acronym: "ZETA",
    },
  },
];

export const TokenTransfersTable = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => (
        <HeaderTable
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          icon={<EyeIcon color={theme === THEME.DARK ? "#FAFAFA" : "#333"} />}
          containerStyle="py-2 px-2 rounded-md border border-[#e9ecef]"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.txnHash, {
      id: "txnHash",
      cell: ({ getValue }) => (
        <CellText
          containerStyle=""
          className="text-[14.9px] link-color italic text-left"
          text={formatTrxHash(getValue())}
        />
      ),
      header: () => <HeaderTable text={t("tokenTransfers.transactionHash")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.method, {
      id: "method",
      cell: ({ getValue }) => (
        <CellText text={getValue()} containerStyle="block-custom" />
      ),
      header: () => (
        <HeaderTable
          text={t("tokenTransfers.method")}
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.block, {
      id: "block",
      cell: ({ getValue }) => (
        <CellText text={getValue()} className="link-color text-[15px]" />
      ),
      header: () => <HeaderTable text={t("tokenTransfers.method")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.age, {
      id: "age",
      cell: ({ getValue }) => (
        <CellText text={getValue()} className="text-dark900 text-[15px]" />
      ),
      header: () => (
        <HeaderTable text={t("tokenTransfers.age")} textStyle="link-color" />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.from, {
      id: "from",
      cell: ({ getValue }) => (
        <CellText
          icon={
            <div className="flex items-center justify-between">
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
              </div>
              <div className="flex items-center justify-center w-6 h-6 !border !border-[#00a18640] bg-[#00a1861a] rounded-full">
                <ArrowRightIcon width={10.15} height={10.5} color="#00a186" />
              </div>
            </div>
          }
          containerStyle="gap-1"
          className="text-secondary dark:text-secondaryDark"
        />
      ),
      header: () => <HeaderTable text={t("tokenTransfers.from")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.to, {
      id: "to",
      cell: ({ getValue }) => (
        <CellText
          icon={
            <div className="flex gap-2 cursor-pointer">
              <TooltipCustom content={getValue()}>
                <Link
                  href={"/coming-soon"}
                  className="link-color italic border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc] rounded-md duration-150 ease-in-out"
                >
                  {formatTrxId(getValue())}
                </Link>
              </TooltipCustom>
              <TooltipCustom content={t("copyAddress")}>
                <button onClick={() => handleCopy(getValue())}>
                  <CopyIcon />
                </button>
              </TooltipCustom>
            </div>
          }
          containerStyle="gap-[10px]"
          className="text-secondary dark:text-secondaryDark"
        />
      ),
      header: () => <HeaderTable text={t("tokenTransfers.to")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.value, {
      id: "value",
      cell: ({ getValue }) => (
        <CellText
          text={getValue().slice(0, 13)}
          className="text-dark900 dark:text-[#FAFAFA] text-[15px]"
        />
      ),
      header: () => <HeaderTable text={t("tokenTransfers.value")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.token, {
      id: "token",
      cell: ({ getValue }) => (
        <CellText
          text={
            <span className="text-[14.5px] text-theme border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc] rounded-md duration-150 ease-in-out">
              {getValue().name}&nbsp;
              <span className="text-[#6c757d] dark:text-[#bbb]">
                ({getValue().acronym})
              </span>
            </span>
          }
          className="text-dark900 text-[15px]"
        />
      ),
      header: () => <HeaderTable text={t("tokenTransfers.token")} />,
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
              {`${t("tokenTransfers.moreThan")} 10,000,000 ${t(
                "tokenTransfers.transactionsFound"
              )}`}
            </div>
            <span className="text-[12.5px] text-dark900 dark:text-gray400">
              {`(${t("tokenTransfers.showingTheLastRecordsOnly")})`}
            </span>
          </div>
        }
        infoMore={
          <div className="p-4">
            <InfoMore content={t("tokenTransfers.infoMoreContent")} />
          </div>
        }
      />
    </div>
  );
};
