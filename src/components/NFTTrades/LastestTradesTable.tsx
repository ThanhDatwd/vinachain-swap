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
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    action: "Bought",
    price: {
      value: `${Math.random() * 1}`,
      currency: "WVPC",
      usd: Math.floor(Math.random() * 100000),
    },
    market: "Seaport",
    buyer: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "ALTS by adidas #1460",
      accountName: "ALTS by adidas",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    action: "Bought",
    price: {
      value: `${Math.random() * 1}`,
      currency: "VPC",
      usd: Math.floor(Math.random() * 100000),
    },
    market: "Seaport",
    buyer: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "w3strategist.vpc",
      accountName: "Vinachain Name Service",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    action: "Bought",
    price: {
      value: `${Math.random() * 1}`,
      currency: "WVPC",
      usd: Math.floor(Math.random() * 100000),
    },
    market: "Seaport",
    buyer: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "Pudgy Milady #2802",
      accountName: "Pudgy Milady",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    action: "Bought",
    price: {
      value: `${Math.random() * 1}`,
      currency: "VPC",
      usd: Math.floor(Math.random() * 100000),
    },
    market: "Seaport",
    buyer: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "green♻.vpc",
      accountName: "Vinachain Name Service",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    action: "Bought",
    price: {
      value: `${Math.random() * 1}`,
      currency: "VPC",
      usd: Math.floor(Math.random() * 100000),
    },
    market: "Seaport",
    buyer: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "CryptoSkull #948",
      accountName: "CryptoSkulls",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    action: "Bought",
    price: {
      value: `${Math.random() * 1}`,
      currency: "VPC",
      usd: Math.floor(Math.random() * 100000),
    },
    market: "OpenSea",
    buyer: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "web3incubator.vpc",
      accountName: "Vinachain Name Service",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    action: "Bought",
    price: {
      value: `${Math.random() * 1}`,
      currency: "VPC",
      usd: Math.floor(Math.random() * 100000),
    },
    market: "Seaport",
    buyer: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "birthchart.vpc",
      accountName: "Vinachain Name Service",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    action: "Bought",
    price: {
      value: `${Math.random() * 1}`,
      currency: "VPC",
      usd: Math.floor(Math.random() * 100000),
    },
    market: "Seaport",
    buyer: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "3danimator.vpc",
      accountName: "Vinachain Name Service",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    action: "Bought",
    price: {
      value: `${Math.random() * 1}`,
      currency: "WVPC",
      usd: Math.floor(Math.random() * 100000),
    },
    market: "Seaport",
    buyer: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "Fat Cat #3447",
      accountName: "FatCats",
    },
  },
  {
    id: "",
    txnHash: generateRandomEthereumAddress(),
    block: Math.floor(Math.random() * 100000000),
    age: `${Math.floor(Math.random() * 60)} mins ago`,
    action: "Bought",
    price: {
      value: `${Math.random() * 1}`,
      currency: "VPC",
      usd: Math.floor(Math.random() * 100000),
    },
    market: "OpenSea",
    buyer: generateRandomEthereumAddress(),
    type: "ERC-721",
    item: {
      username: "Fat Cat #3447",
      accountName: "FatCats",
    },
  },
];

export const LastestTradesTable = () => {
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
    columnHelper.accessor((row) => row.action, {
      id: "action",
      cell: ({ getValue }) => (
        <CellText text={getValue()} className="text-dark900 text-[15px]" />
      ),
      header: () => (
        <HeaderTable text={t("lastestTrades.action")} textStyle="link-color" />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.price, {
      id: "price",
      cell: ({ getValue }) => (
        <CellText
          text={
            <span className="text-[14.5px] text-dark900 dark:text-gray200">
              {getValue().value.slice(0, 6)}{" "}
              <Link
                href={"/coming-soon"}
                className="text-blue hover:text-[#066a9c]"
              >
                {getValue().currency}
              </Link>
              &nbsp; (${getValue().usd})
            </span>
          }
          className="text-dark900 text-[15px]"
        />
      ),
      header: () => (
        <HeaderTable text={t("lastestTrades.price")} textStyle="link-color" />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.market, {
      id: "market",
      cell: ({ getValue }) => (
        <CellText text={getValue()} className="text-dark900 text-[15px]" />
      ),
      header: () => (
        <HeaderTable text={t("lastestTrades.market")} textStyle="link-color" />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.buyer, {
      id: "buyer",
      cell: ({ getValue }) => (
        <CellText
          icon={
            <div className="flex gap-2 cursor-pointer">
              <TooltipCustom content={getValue()}>
                <Link
                  href={`/address/${getValue()}`}
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
      header: () => <HeaderTable text={t("lastestTrades.buyer")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.type, {
      id: "type",
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-[11px] text-black dark:text-[#F5F5F5]"
          containerStyle="block-custom"
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
                <TooltipCustom content={getValue().username}>
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
              {`${t("lastestTrades.moreThan")} 100,000 ${t(
                "lastestTrades.recordsFound"
              )}`}
            </div>
            <span className="text-[12.5px] text-dark900 dark:text-gray400">
              {`(${t("lastestTrades.showingLastRecords")})`}
            </span>
          </div>
        }
        infoMore={
          <div className="flex flex-col lg:flex-row gap-2 justify-between lg:items-center p-4 border-b border-gray200 dark:border-gray700">
            <Dropdown
              title={marketplaces}
              options={MARKETPLACES_DATA}
              onChange={handleChange}
              containerStyle={{width: "fit-content"}}
              className="capitalize"
              classNameMore="w-[160px] !bg-white dark:!bg-gray900 text-dark900 dark:text-[#FAFAFA]"
              classNameMoreItem="!left-0 right-auto !justify-start text-theme py-[6px] px-3 rounded-md hover:!bg-[#e9ecef] dark:hover:!bg-gray600"
            />
            <div className="flex items-center gap-1 py-1 px-2 bg-white98 dark:bg-gray600 rounded-md border border-gray200 dark:border-gray700 w-fit">
              <SearchIcon width={12.6} height={13.5} color={"#6c757d"} />
              <input
                type="text"
                className="border-none outline-none text-[12.6px] text-dark900 dark:text-gray-200 w-[186px]"
                placeholder={t("lastestTrades.searchByTokenAddress")}
              />
            </div>
          </div>
        }
      />
    </div>
  );
};
