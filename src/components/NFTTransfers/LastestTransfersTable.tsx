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
import { MARKETPLACES_DATA, THEME } from "@/utils/constants";
import { InfoMore } from "../AddressDetail/InfoMore";
import { DropdownAddress } from "../DropdownAddress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { Dropdown } from "../Dropdown";
import { useState } from "react";
const defaultData = [
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Assert Ownership",
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "NFT: Gnars HD#3545",
      accountName: "NFT: Gnars HD",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Mint With Sig",
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "NFT: PalioAI Gen0#11022",
      accountName: "NFT: PalioAI Gen0",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Mint With Sig",
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "NFT: PalioAI Gen0#125564",
      accountName: "NFT: PalioAI Gen0",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Mint With Sig",
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "NFT: PalioAI Gen0#141517",
      accountName: "NFT: Gnars HD",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Unstake",
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    type: "ERC-1155",
    item: {
      username: "Staked ALT#568410405686318743940487286198766186786980243511",
      accountName: "Staked ALT",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Assert Ownership",
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "NFT: Gnars HD#3545",
      accountName: "NFT: Gnars HD",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Mint With Sig",
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "NFT: PalioAI Gen0#31226",
      accountName: "NFT: PalioAI Gen0",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Stake",
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    type: "ERC-1155",
    item: {
      username: "Staked ALT#568410405686318743940487286198766186786980243511",
      accountName: "Staked ALT",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Match Advanced O...",
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "Cryptoon Goon #1547",
      accountName: "CryptoonGoonz",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    method: "Mint With Sig",
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "NFT: PalioAI Gen0#358429",
      accountName: "NFT: PalioAI Gen0",
    },
  },
];

export const LastestTransfersTable = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [marketplaces, setMarketplaces] = useState(MARKETPLACES_DATA[0].label);

  const columnHelper = createColumnHelper<any>();

  const handleChange = (value: string) => {
    setMarketplaces(value);
  };

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
      header: () => <HeaderTable text={t("lastestTrades.transactionHash")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.method, {
      id: "method",
      cell: ({ getValue }) => (
        <CellText
          text={<TooltipCustom content={getValue()}>{getValue()}</TooltipCustom>}
          containerStyle="block-custom hover-yellow"
        />
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
      header: () => <HeaderTable text={t("lastestTrades.block")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.age, {
      id: "age",
      cell: ({ getValue }) => (
        <CellText text={getValue()} className="text-dark900 text-[15px]" />
      ),
      header: () => (
        <HeaderTable text={t("lastestTrades.age")} textStyle="link-color" />
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
    columnHelper.accessor((row) => row.type, {
      id: "type",
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-[11px] text-black dark:text-[#F5F5F5]"
          containerStyle="border border-gray550 dark:border-gray700 py-1 px-2 text-center text-[10.9px] rounded-full"
        />
      ),
      header: () => <HeaderTable text={t("lastestTrades.type")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.item, {
      id: "item",
      cell: ({ getValue }) => (
        <CellText
          text={
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#bb3648] text-[#F5F5F5]">
                {getValue().accountName.slice(0, 1)}
              </div>
              <div className="flex flex-col text-[14.5px] text-[#081d35] dark:text-gray200 hover:text-[#066a9c]">
                <TooltipCustom
                  content={getValue().username}
                  classNameChildren="w-[200px] truncate"
                >
                  {" "}
                  <Link href={"/coming-soon"}>{getValue().username}</Link>
                </TooltipCustom>
                <TooltipCustom content={getValue().accountName}>
                  <Link
                    href={"/coming-soon"}
                    className="text-[12.6px] text-gray500 dark:text-[#bbb]"
                  >
                    {getValue().accountName}
                  </Link>
                </TooltipCustom>
              </div>
            </div>
          }
          className="text-dark900 dark:text-[#FAFAFA] text-[15px]"
        />
      ),
      header: () => <HeaderTable text={t("lastestTrades.item")} />,
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
              {`${t("lastestTransfers.moreThan")} 100,000 ${t(
                "lastestTransfers.recordsFound"
              )}`}
            </div>
            <span className="text-[12.5px] text-dark900 dark:text-gray400">
              {`(${t("lastestTransfers.showingLastRecords")})`}
            </span>
          </div>
        }
      />
    </div>
  );
};
