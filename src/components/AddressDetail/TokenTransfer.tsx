import { ArrowDownWideShort } from "@/assets/icons/ArrowDownWideShortIcon";
import { DataTable } from "../tables/DataTable";
import Link from "next/link";
import { ViewMoreButton } from "../ViewMoreButton";
import { HeaderTable } from "../tables/HeaderTable";
import { CellText } from "../tables/CellText";
import { createColumnHelper } from "@tanstack/react-table";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { EyeIcon } from "@/assets/icons/EyeIcon";
import { CopyIcon } from "@/assets/CopyIcon";
import { useTranslation } from "react-i18next";
import { FileLineIcon } from "@/assets/icons/FileLineIcon";
import { InfoMore } from "./InfoMore";
import { DownloadFile } from "./DownloadFile";
import { TooltipCustom } from "../Tooltip";
import { THEME } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";

export const TokenTransfer = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const columnHelper = createColumnHelper<any>();

  const handleCopy = (value: string) => {};

  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => (
        <HeaderTable
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
        />
      ),
      cell: () => (
        <CellText
          containerStyle="py-2 px-2 rounded-md border border-[#e9ecef]"
          icon={<EyeIcon color={theme === THEME.DARK ? "#fafafa" : "#333"} />}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.txnHash, {
      id: "transactionHash",
      cell: ({ getValue }) => (
        <CellText
          containerStyle=""
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
      header: () => (
        <HeaderTable text={t("vinaScan.address.transactionHash")} />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.method, {
      id: "method",
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          containerStyle="block-custom hover-yellow"
        />
      ),
      header: () => (
        <HeaderTable
          text="Method"
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.block, {
      id: "block",
      cell: ({ getValue }) => (
        <CellText icon={<Link href={`/blocks/${getValue()}`} className="link-color dark:hover:text-scanDark hover:text-[#9ccee7] text-[15px]">{getValue()}</Link>}/>
      ),
      header: () => <HeaderTable text="Block" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.age, {
      id: "age",
      cell: ({ getValue }) => (
        <CellText text={getValue()} className="text-dark900 dark:text-[#FAFAFA] text-[14.5px]" />
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
                <div className="flex items-center gap-1 hover-yellow rounded-md px-2">
                  <TooltipCustom content="Contract">
                    <FileLineIcon />
                  </TooltipCustom>
                  <TooltipCustom
                    content={`Loot: Adventure Gold (${`${getValue().slice(
                      0,
                      8
                    )}...${getValue().slice(
                      getValue().length - 8,
                      getValue().length
                    )}`})`}
                  >
                    <span className="text-[14.5px] text-dark900 dark:text-[#FAFAFA]">{`${getValue().slice(
                      0,
                      8
                    )}...${getValue().slice(
                      getValue().length - 8,
                      getValue().length
                    )}`}</span>
                  </TooltipCustom>
                </div>
                <button onClick={() => handleCopy(getValue())}>
                  <CopyIcon />
                </button>
              </div>
              <div className="block-custom border-[#ffc10740] text-[#cc9a06] text-[10.2px] bg-[#ffc10726] dark:border-[#ffc10740] dark:text-[#cc9a06] dark:bg-[#ffc10726] uppercase not-italic">
                out
              </div>
            </div>
          }
          containerStyle="gap-1"
          className="text-secondary dark:text-secondaryDark"
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
              <TooltipCustom content={getValue()}>
                <span className="link-color dark:hover:text-scanDark hover:text-[#9ccee7] italic hover-yellow px-1 rounded-md hover-yellow">
                  {getValue()}
                </span>
              </TooltipCustom>
              <button onClick={() => handleCopy(getValue())}>
                <CopyIcon />
              </button>
            </div>
          }
          containerStyle="gap-[10px]"
          className="text-secondary dark:text-secondaryDark"
        />
      ),
      header: () => <HeaderTable text="To" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.value, {
      id: "value",
      cell: ({ getValue }) => (
        <CellText text={getValue()} className="text-[14.5px] dark:text-[#FAFAFA] text-dark900" />
      ),
      header: () => <HeaderTable text="Value" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.txnFee, {
      id: "token",
      cell: ({ getValue }) => (
        <CellText text={getValue()} className="text-dark900 dark:text-[#FAFAFA] hover:link-color dark:hover:link-color text-[14.5px] hover-yellow w-fit px-1 rounded-md" />
      ),
      header: () => <HeaderTable text="Token" textStyle="text-dark900 dark:text-[#FAFAFA]" />,
      footer: (props) => props.column.id,
    }),
  ];

  return (
    <div className="flex flex-col gap-3">
      <DataTable
        // fetchData={getListFeedbacks}
        columns={columns}
        showPagination={false}
        isDownloadData={true}
        childrenHeaderTable={
          <div className="flex items-center gap-2 text-[15px] text-dark900 dark:text-[#FAFAFA]">
            <ArrowDownWideShort />
            <div>
              Latest 25 ERC-20 Token Transfer Events (
              <Link href={"/coming-soon"} className="text-[15px] link-color">
                106,714
              </Link>
              )
            </div>
          </div>
        }
        viewMore={
          <ViewMoreButton
            label="View All ERC-20 Transactions"
            link="/coming-soon"
          />
        }
        infoMore={
          <div className="flex flex-col gap-2 p-4">
            <InfoMore content="Transactions involving tokens marked as suspicious, unsafe, spam or brand infringement are currently hidden. To show them, go to" />
            <InfoMore content="Transactions with zero token value are currently hidden. To show them, go to" />
          </div>
        }
      />
      <DownloadFile download={true} />
    </div>
  );
};
