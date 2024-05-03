import { CopyIcon } from "@/assets/CopyIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { useTheme } from "@/hooks/useTheme";
import { handleCopy } from "@/utils";
import { formatTrxHash, formatTrxId } from "@/utils/formatTrxId";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TooltipCustom } from "../Tooltip";
import { CellText } from "../tables/CellText";
import { DataTable } from "../tables/DataTable";
import { HeaderTable } from "../tables/HeaderTable";
import { before } from "node:test";
const defaultData = [
  {
    state: {
      address: "0x388c999ca8b9251b8888c08a736a67ccb19297",
      publicTag: "(Lido: Execution Layer Rewards Vault)",
    },
    before: {
      value: "119.051830095278365605",
      nonce: 0,
    },
    after: {
      value: "119.736766643800210782",
      nonce: 0,
    },
    stateDifferent: 0.684936548521845177,
  },
  {
    state: {
      address: "0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21",
      publicTag: "Titan Builder",
    },
    before: {
      value: "6.799756462339498066",
      nonce: 284523,
    },
    after: {
      value: "6.114598675165838606",
      nonce: 284524,
    },
    stateDifferent: 0.68515778717365,
  },
  
];

export const StateTab = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const columnHelper = createColumnHelper<any>();
  const [isHovered, setIsHovered] = useState(false);

  const columns = [
    columnHelper.accessor((row) => row.state, {
      id: "state",
      header: () => (
        <HeaderTable
          textStyle="dark:text-gray200"
          text="Address"
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          icon={
            <>
              <div className="flex items-end gap-6 md:gap-20  ">
                <TooltipCustom content={getValue()?.address}>
                  <Link
                    href={`/address/${getValue()?.address}`}
                    className="link-color dark:text-[#6AB5DB] border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
                  >
                    <span className="text-[14.5px]">
                      {formatTrxId(getValue()?.address)}
                    </span>
                  </Link>
                </TooltipCustom>
                <span>{getValue()?.publicTag}</span>
              </div>
            </>
          }
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.before, {
      id: "before",
      header: () => (
        <HeaderTable
          textStyle="dark:text-gray200"
          text="Before"
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={
            <div className="flex flex-col gap-1">
              <span>{getValue()?.value} Vpc </span>
              {getValue()?.nonce > 0 && (
                <div className="flex w-fit items-center gap-1 bg-[#adb5bd1a] border-[#DCDCDC] border border-opacity-25  py-[6px] px-2 rounded-[4px]">
                  <div className="text-[10.8px] font-medium leading-[1] mt">
                    Nonce
                    <span> {getValue()?.nonce}</span>
                  </div>
                </div>
              )}
            </div>
          }
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.after, {
      id: "after",
      header: () => (
        <HeaderTable
          textStyle="dark:text-gray200"
          text="After"
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={
            <div className="flex flex-col gap-1">
              <span>{getValue()?.value} Vpc</span>
              {getValue()?.nonce > 0 && (
                <div className="flex w-fit items-center gap-1 bg-[#adb5bd1a] border-[#DCDCDC] border border-opacity-25  py-[6px] px-2 rounded-[4px]">
                  <div className="text-[10.8px] font-medium leading-[1] mt">
                    Nonce
                    <span> {getValue()?.nonce}</span>
                  </div>
                </div>
              )}
            </div>
          }
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.stateDifferent, {
      id: "stateDifferent",
      header: () => (
        <HeaderTable
          textStyle="dark:text-gray200"
          text="State Difference"
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={
            <div className="flex flex-col gap-1">
              <span>{getValue()}</span>
            </div>
          }
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
        showPagination={false}
        childrenHeaderTable={
          <div>
            <div className="text-[14.5px] text-dark900 dark:text-gray200">
              {" "}
              A set of information that represents the current state is updated
              when a transaction takes place on the network. The below is a
              summary of those changes :
            </div>
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
