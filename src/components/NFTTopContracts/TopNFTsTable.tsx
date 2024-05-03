import { HelpIcon } from "@/assets/icons/HelpIcon";
import { useTheme } from "@/hooks/useTheme";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { CellText } from "../tables/CellText";
import { DataTable } from "../tables/DataTable";
import { HeaderTable } from "../tables/HeaderTable";

export const TopNFTsTable = ({ defaultData }: { defaultData: any[] }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => <HeaderTable text="#" />,
      cell: ({ getValue }) => <CellText text={getValue()} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.collection, {
      id: "collection",
      cell: ({ getValue }) => (
        <CellText
          containerStyle=""
          className="text-[14.9px] link-color italic text-left"
          text={
            <Link
              href={"/coming-soon"}
              className="flex gap-2 items-center text-[#081d35] dark:text-[#F5F5F5] text-[14.5px] hover:text-blue"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#bb3648] text-[14.5px] text-[#F5F5F5] font-bold">
                {getValue().slice(0, 1)}
              </div>
              {getValue()}
            </Link>
          }
        />
      ),
      header: () => <HeaderTable text={t("topNFTs.collection")} />,
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
      header: () => <HeaderTable text={t("topNFTs.type")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.volume, {
      id: "volume",
      cell: ({ getValue }) => (
        <CellText text={`${getValue().slice(0, 6)} VPC`} />
      ),
      header: () => (
        <HeaderTable
          text={t("topNFTs.volume")}
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.change, {
      id: "change",
      cell: ({ getValue }) => (
        <CellText
          text={`${getValue().slice(0, 5)}%`}
          className="text-[#00a186] text-[14.5px]"
        />
      ),
      header: () => (
        <HeaderTable
          text={`${t("topNFTs.change")} (%)`}
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.sales, {
      id: "sales",
      cell: ({ getValue }) => <CellText text={getValue()} />,
      header: () => (
        <HeaderTable
          text={t("topNFTs.sales")}
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.minPrice, {
      id: "minPrice",
      cell: ({ getValue }) => (
        <CellText text={`${getValue().slice(0, 7)} VPC`} />
      ),
      header: () => (
        <HeaderTable
          text={`${t("topNFTs.minPrice")} (24H)`}
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.maxPrice, {
      id: "maxPrice",
      cell: ({ getValue }) => (
        <CellText text={`${getValue().slice(0, 7)} VPC`} />
      ),
      header: () => (
        <HeaderTable
          text={`${t("topNFTs.maxPrice")} (24H)`}
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.transfer, {
      id: "transfer",
      cell: ({ getValue }) => <CellText text={getValue().slice(0, 8)} />,
      header: () => (
        <HeaderTable
          text={t("topNFTs.transfers")}
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.owners, {
      id: "owners",
      cell: ({ getValue }) => <CellText text={getValue()} />,
      header: () => (
        <HeaderTable
          text={t("topNFTs.owners")}
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.totalAssets, {
      id: "totalAssets",
      cell: ({ getValue }) => <CellText text={getValue()} />,
      header: () => (
        <HeaderTable
          text={t("topNFTs.totalAssets")}
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
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
        isDownloadData
        childrenHeaderTable={
          <div className="text-[14.5px] text-dark900 dark:text-gray200">
            {`${t("topNFTs.showingTheTop")} 100 ${t("topNFTs.nfts")}`}
          </div>
        }
      />
    </div>
  );
};
