import { ArrowDownWideShort } from "@/assets/icons/ArrowDownWideShortIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import Link from "next/link";
import { ViewMoreButton } from "../ViewMoreButton";
import { DataTable } from "../tables/DataTable";
import { useTranslation } from "react-i18next";
import { createColumnHelper } from "@tanstack/react-table";
import { HeaderTable } from "../tables/HeaderTable";
import { EyeIcon } from "@/assets/icons/EyeIcon";
import { CellText } from "../tables/CellText";
import { FileLineIcon } from "@/assets/icons/FileLineIcon";
import { CopyIcon } from "@/assets/CopyIcon";
import { NoteStickyIcon } from "@/assets/icons/NoteStickyIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { LightBulbIcon } from "@/assets/icons/LightBulbIcon";
import { DownloadIcon } from "@/assets/icons/DownloadIcon";
import { DownloadFile } from "./DownloadFile";
import { InfoIcon } from "@/assets/icons/InfoIcon";
import { SwitchButton } from "../SwitchButton";

export const InternalTransaction = ({
  isToggle,
  onClickAdvancedMode,
}: {
  isToggle: boolean;
  onClickAdvancedMode: () => void;
}) => {
  const { t } = useTranslation();
  const columnHelper = createColumnHelper<any>();

  const handleCopy = (value: string) => {};

  const columns = [
    columnHelper.accessor((row) => row.txnHash, {
      id: "parentTransactionHash",
      cell: ({ getValue }) => (
        <CellText
          icon={
            <Link
              className="text-[14.9px] link-color dark:hover:text-scanDark hover:text-[#9ccee7] italic text-left"
              href={`/txs/${getValue()}`}
            >
              {getValue()}
            </Link>
          }
        />
      ),
      header: () => <HeaderTable text="Parent Transaction Hash" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.block, {
      id: "block",
      cell: ({ getValue }) => (
        <CellText
          icon={
            <Link
              href={`/blocks/${getValue()}`}
              className="link-color dark:hover:text-scanDark hover:text-[#9ccee7] text-[15px]"
            >
              {getValue()}
            </Link>
          }
        />
      ),
      header: () => <HeaderTable text="Block" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.age, {
      id: "age",
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-dark900 dark:text-[#FAFAFA] text-[14.5px]"
        />
      ),
      header: () => <HeaderTable text="Age" textStyle="link-color" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.from, {
      id: "from",
      cell: ({ getValue }) => (
        <CellText
          icon={
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <Link
                  href={`/address/${getValue()}`}
                  className="flex gap-2 items-center text-[14.5px] px-1 rounded-md link-color hover-yellow"
                >
                  <FileLineIcon />
                  {`${getValue().slice(0, 8)}...${getValue().slice(
                    getValue().length - 8,
                    getValue().length
                  )}`}
                </Link>
                <button onClick={() => handleCopy(getValue())}>
                  <CopyIcon />
                </button>
              </div>
              <div className="flex items-center justify-center w-6 h-6 border border-[#00a18640] bg-[#00a1861a] rounded-full">
                <ArrowRightIcon width={10.15} height={10.5} color="#00a186" />
              </div>
            </div>
          }
          containerStyle="gap-1"
        />
      ),
      header: () => <HeaderTable text="From" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.to, {
      id: "to",
      cell: ({ getValue }) => (
        <CellText
          icon={
            <div className="flex gap-2 cursor-pointer">
              <span className="text-[14.5px] text-dark900 dark:text-[#FAFAFA] italic px-1 rounded-md hover-yellow">
                {getValue()}
              </span>
              <button onClick={() => handleCopy(getValue())}>
                <CopyIcon />
              </button>
            </div>
          }
          containerStyle="gap-[10px]"
        />
      ),
      header: () => <HeaderTable text="To" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.value, {
      id: "value",
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-[14.5px] text-dark900 dark:text-[#FAFAFA]"
        />
      ),
      header: () => <HeaderTable text="Value" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.id, {
      id: "id",
      cell: ({ getValue }) => (
        <CellText
          icon={
            <button className="py-[6px] px-2 rounded-md border border-[#e9ecef] hover:bg-[#e9ecef]">
              <NoteStickyIcon />
            </button>
          }
        />
      ),
      header: () => <HeaderTable icon={<HelpIcon width={16} height={16} />} />,
      footer: (props) => props.column.id,
    }),
  ];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col bg-theme border border-[#e9ecef] dark:border-[#333] rounded-xl">
        <div className="flex flex-col lg:flex-row justify-between gap-3 p-4">
          <div className="text-[14.5px] text-dark900 dark:text-[#f5f5f5]">
            View more zero value Internal Transactions in&nbsp;
            <Link
              href={`/address/id/advanced`}
              className="text-[14.5px] link-color font-bold"
            >
              Advanced View mode
            </Link>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray550 dark:text-[#bbb]">
            <HelpIcon color={"#727b83"} width={16} height={16} />
            <span>ADVANCED MODE:</span>
            <SwitchButton
              onClickSwitch={onClickAdvancedMode}
              toggle={isToggle}
            />
          </div>
        </div>
        {isToggle && (
          <div>
            <DataTable
              // fetchData={getListFeedbacks}
              columns={columns}
              defaultHeaderTable={false}
              showPagination={false}
              childrenHeaderTable={
                <div className="flex items-center gap-2 text-[15px] text-dark900 dark:text-[#FAFAFA] p-4">
                  <ArrowDownWideShort />
                  <div>
                    Latest 25 internal transactions (
                    <Link
                      href={"/coming-soon"}
                      className="text-[15px] link-color"
                    >
                      106,714
                    </Link>
                    )
                  </div>
                </div>
              }
              viewMore={
                <ViewMoreButton
                  label="View All Internal Transactions"
                  link="/coming-soon"
                />
              }
              className="border-none"
            />
          </div>
        )}
      </div>
      <DownloadFile />
    </div>
  );
};
