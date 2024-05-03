import { CopyIcon } from "@/assets/CopyIcon";
import { EyeIcon } from "@/assets/icons/EyeIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ViewMoreButton } from "../ViewMoreButton";
import { CellText } from "../tables/CellText";
import { DataTable } from "../tables/DataTable";
import { HeaderTable } from "../tables/HeaderTable";
import { DownloadFile } from "./DownloadFile";
import { TooltipCustom } from "../Tooltip";
import { FileLineIcon } from "@/assets/icons/FileLineIcon";
import { generateRandomEthereumAddress } from "@/utils/formatTrxId";
import { THEME } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";

export const Transactions = () => {
  const { t } = useTranslation();
  const columnHelper = createColumnHelper<any>();
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  const handleCopy = (value: string) => {};

  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => (
        <HeaderTable
          icon={
            <HelpIcon
              color={theme === THEME.DARK ? "#fafafa" : "#727b83"}
              width={16}
              height={16}
            />
          }
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
          icon={
            <TooltipCustom content={getValue()}>{getValue()}</TooltipCustom>
          }
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
          icon={
            <TooltipCustom content="2024-04-22 7:29:47">
              <span className="text-dark900 dark:text-[#FAFAFA] text-[15px]">
                {getValue()}
              </span>
            </TooltipCustom>
          }
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
              <div className="flex gap-2 items-center cursor-pointer">
                <TooltipCustom content={getValue()}>
                  <div className="link-color italic rounded-md px-1 hover-yellow">{`${getValue()?.slice(
                    0,
                    8
                  )}...${getValue()?.slice(
                    getValue().length - 8,
                    getValue().length
                  )}`}</div>
                </TooltipCustom>
                <button onClick={() => handleCopy(getValue())}>
                  <CopyIcon />
                </button>
              </div>
              <div className="block-custom !border-[#00a18640] dark:!border-[#00a18640] text-[#00a186] dark:text-[#00a186] bg-[#00a1861a] dark:bg-[#00a1861a]">
                IN
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
              <div className="flex items-center gap-1 hover-yellow rounded-md px-2 hover-yellow">
                <TooltipCustom content="Contract">
                  <FileLineIcon />
                </TooltipCustom>
                <TooltipCustom
                  content={`Loot: Adventure Gold (${generateRandomEthereumAddress()})`}
                >
                  <span className="link-color italic">{getValue()}</span>
                </TooltipCustom>
              </div>
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
        <CellText
          text={getValue()}
          className="text-[15px] text-dark900 dark:text-[#FAFAFA]"
        />
      ),
      header: () => <HeaderTable text="Value" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.txnFee, {
      id: "txnFee",
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-gray550 dark:text-[#bbb] text-xs"
        />
      ),
      header: () => <HeaderTable text="Txn Fee" textStyle="link-color" />,
      footer: (props) => props.column.id,
    }),
  ];

  return (
    <div className="flex flex-col gap-3">
      <DataTable
        // fetchData={getListFeedbacks}
        columns={columns}
        showPagination={false}
        childrenHeaderTable={
          <div className="text-[15px] text-dark900 dark:text-[#F5F5F5]">
            Latest 25 from a total of&nbsp;
            <TooltipCustom content="Click to view full list">
              <Link href={"/coming-soon"} className="text-[15px] link-color">
                106,714
              </Link>
            </TooltipCustom>
            &nbsp; transactions (+{" "}
            <TooltipCustom content="1 Pending">
              <Link href={"/coming-soon"} className="text-[15px] link-color">
                1 Pending
              </Link>
            </TooltipCustom>
            )
          </div>
        }
        isDownloadData={true}
        isFilter={true}
        viewMore={
          <ViewMoreButton label="View All Transactions" link="/coming-soon" />
        }
      />
      <DownloadFile download={true} />
    </div>
  );
};
