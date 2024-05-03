import { createColumnHelper } from "@tanstack/react-table";
import { CellText } from "../tables/CellText";
import { DataTable } from "../tables/DataTable";
import { HeaderTable } from "../tables/HeaderTable";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/hooks/useTheme";
import { IdentIcon } from "@/assets/icons/IdentIcon";
import { generateRandomEthereumAddress } from "@/utils/formatTrxId";
import { FilterIcon } from "@/assets/icons/FilterIcon";
import { EyeIcon } from "@/assets/icons/EyeIcon";
import { ArrowUpRightIcon } from "@/assets/icons/ArrowUpRightIcon";
import { ChevronRightIcon } from "@/assets/icons/ChevronRightIcon";
import Link from "next/link";
import { DropdownAddress } from "../DropdownAddress";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { useState } from "react";
import { ChevronDownIcon } from "@/assets/icons/ChevronDownIcon";
import { DownloadFile } from "./DownloadFile";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { TooltipCustom } from "../Tooltip";
import { THEME, TRANSFER_DATA } from "@/utils/constants";
import { Dropdown } from "../Dropdown";

export const Event = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const columnHelper = createColumnHelper<any>();
  const [openTransferMore, setOpenTransferMore] = useState(false);
  const [transferType, setTransferType] = useState(TRANSFER_DATA[0].value);

  const handleChange = (value: string) => {
    setTransferType(value);
  };

  const data = [
    {
      transactionHash: `${generateRandomEthereumAddress()?.slice(0, 12)}...`,
      block: "19688503",
      age: "9 mins ago",
      method: `${generateRandomEthereumAddress()?.slice(0, 10)}...`,
      logs: generateRandomEthereumAddress(),
    },
    {
      transactionHash: `${generateRandomEthereumAddress()?.slice(0, 12)}...`,
      block: "19688503",
      age: "9 mins ago",
      method: `${generateRandomEthereumAddress()?.slice(0, 10)}...`,
      logs: generateRandomEthereumAddress(),
    },
    {
      transactionHash: `${generateRandomEthereumAddress()?.slice(0, 12)}...`,
      block: "19688503",
      age: "9 mins ago",
      method: `${generateRandomEthereumAddress()?.slice(0, 10)}...`,
      logs: generateRandomEthereumAddress(),
    },
    {
      transactionHash: `${generateRandomEthereumAddress()?.slice(0, 12)}...`,
      block: "19688503",
      age: "9 mins ago",
      method: `${generateRandomEthereumAddress()?.slice(0, 10)}...`,
      logs: generateRandomEthereumAddress(),
    },
    {
      transactionHash: `${generateRandomEthereumAddress()?.slice(0, 12)}...`,
      block: "19688503",
      age: "9 mins ago",
      method: `${generateRandomEthereumAddress()?.slice(0, 10)}...`,
      logs: generateRandomEthereumAddress(),
    },
    {
      transactionHash: `${generateRandomEthereumAddress()?.slice(0, 12)}...`,
      block: "19688503",
      age: "9 mins ago",
      method: `${generateRandomEthereumAddress()?.slice(0, 10)}...`,
      logs: generateRandomEthereumAddress(),
    },
  ];

  const columns = [
    columnHelper.accessor((row) => row.transactionHash, {
      id: "transactionHash",
      cell: ({ getValue }) => (
        <CellText
          icon={
            <TooltipCustom content="Transaction Hash">
              <Link
                href={"/coming-soon"}
                className="text-[14.5px] link-color dark:hover:text-scanDark hover:text-[#9ccee7]"
              >
                {getValue()}
              </Link>
            </TooltipCustom>
          }
        />
      ),
      header: () => <HeaderTable text={"Transaction Hash"} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.block, {
      id: "block",
      cell: ({ getValue }) => (
        <CellText
          icon={
            <div className="flex items-center gap-1 tex-[14.5px] link-color dark:hover:text-scanDark hover:text-[#9ccee7]">
              <TooltipCustom content="BlockNo">
                <Link href={`/blocks/${getValue()}`} className="link-color dark:hover:text-scanDark hover:text-[#9ccee7]">{getValue()}</Link>
              </TooltipCustom>
              <TooltipCustom content={`Apply filter bt BlockNo=${getValue()}`}>
                <FilterIcon />
              </TooltipCustom>
            </div>
          }
          containerStyle="flex items-center gap-1 "
          className="flex-none "
        />
      ),
      header: () => <HeaderTable text="Block" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.age, {
      id: "age",
      cell: ({ getValue }) => (
        <CellText
          className="text-[14.5px] text-dark900 dark:text-[#FAFAFA]"
          text={getValue()}
        />
      ),
      header: () => <HeaderTable text="Age" textStyle="link-color" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.method, {
      id: "method",
      cell: ({ getValue }) => (
        <CellText
          icon={
            <div className="flex flex-col gap-6">
              <TooltipCustom content="MethodID">
                <div className="py-[6px] px-2 mt-1 text-[10.8px] text-dark900 dark:text-[#FAFAFA] text-center bg-[#f8f9fa] dark:bg-gray900 border border-[#0000001a] dark:!border-gray600 rounded-md">
                  {getValue()}
                </div>
              </TooltipCustom>
              <div className="flex gap-1 items-center text-[14.5px] text-dark900 dark:text-[#FAFAFA]">
                <div className="py-2 px-2 rounded-md border border-[#e9ecef]">
                  <EyeIcon
                    color={theme === THEME.DARK ? "#FAFAFA" : "#3f4346"}
                  />
                </div>
                <span>transfer(address,uint256)</span>
              </div>
            </div>
          }
        />
      ),
      header: () => <HeaderTable text="Method" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.logs, {
      id: "logs",
      cell: ({ getValue }) => (
        <CellText
          icon={
            <div className="flex flex-col text-[14.5px] text-dark900 dark:text-[#FAFAFA]">
              <div className="mb-1">
                <div className="flex flex-col text-[14.5px] text-dark900 dark:text-[#FAFAFA]">
                  <button
                    className="flex gap-1 items-center link-color"
                    onClick={() => setOpenTransferMore(!openTransferMore)}
                  >
                    {openTransferMore ? (
                      <ChevronDownIcon color="#adb5bd" />
                    ) : (
                      <ChevronRightIcon color="#adb5bd" />
                    )}
                    <TooltipCustom content="Click to View ABI Decoded View">
                      Transfer
                    </TooltipCustom>
                  </button>
                  <div>
                    (index_topic_1&nbsp;
                    <span className="text-[#00a186]">address</span>&nbsp;
                    <span className="text-[#dc3545]">from</span>,
                    index_topic_2&nbsp;
                    <span className="text-[#00a186]">address</span>&nbsp;
                    <span className="text-[#dc3545]">to</span>,&nbsp;
                    <span className="text-[#00a186]">uint256</span>&nbsp;
                    <span className="text-[#dc3545]">value</span>)
                  </div>
                  {openTransferMore && (
                    <div className="flex flex-col gap-1 py-1 px-3 text-[14.5px] text-dark900 dark:text-[#FAFAFA]">
                      <span>
                        <span className="text-[#adb5bd]">address</span> from
                      </span>
                      <Link
                        href={"/coming-soon"}
                        className="text-[#6ab5db] dark:hover:text-scanDark hover:text-[#9ccee7]"
                      >
                        {getValue()}
                      </Link>
                      <span>
                        <span className="text-[#adb5bd]">address</span> to
                      </span>
                      <Link
                        href={"/coming-soon"}
                        className="text-[#6ab5db] dark:hover:text-scanDark hover:text-[#9ccee7]"
                      >
                        {getValue()}
                      </Link>
                      <span>
                        <span className="text-[#adb5bd]">address</span> to
                      </span>
                      <span>572824400000000000000</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1 text-[14.5px] text-[#6c757d]">
                [topic0] {getValue()}
                <FilterIcon />
              </div>
              <span>[topic1] {getValue()}</span>
              <span>[topic2] {getValue()}</span>
              <div className="flex items-center gap-2 mt-3">
                <Dropdown
                  title={transferType}
                  options={TRANSFER_DATA}
                  onChange={handleChange}
                  className="capitalize"
                  classNameMore="w-[160px] !bg-white dark:!bg-gray900 text-dark900 dark:text-[#FAFAFA]"
                  classNameMoreItem="!justify-start text-theme py-[6px] px-3 rounded-md hover:!bg-[#e9ecef] dark:hover:!bg-gray600"
                />
                <ArrowRightIcon />
                <span>{getValue()}</span>
              </div>
            </div>
          }
        />
      ),
      header: () => (
        <HeaderTable text="Logs" textStyle="" leftIcon={<IdentIcon />} />
      ),
      footer: (props) => props.column.id,
    }),
  ];

  return (
    <div className="flex flex-col gap-3">
      <DataTable
        // fetchData={getListFeedbacks}
        columns={columns}
        data={data}
        showPagination={false}
        childrenHeaderTable={
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-[14.5px] text-dark900 dark:text-[#FAFAFA] dark:text-[#FAFAFA]">
              <FilterIcon />
              Latest 25 Contract Events
            </div>
            <div className="text-[12.5px] text-[#6c757d]">
              Tip: <span className="link-color">Logs</span> are used by
              developers/external UI providers for keeping track of contract
              actions and for auditing
            </div>
          </div>
        }
        childrenHeaderTableRight={
          <div className="py-2 px-[10px] rounded-md bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600">
            <SearchIcon
              width={12.6}
              height={13.5}
              color={theme === THEME.DARK ? "#FAFAFA" : "#7f7f7f"}
            />
          </div>
        }
      />
      <DownloadFile />
    </div>
  );
};
