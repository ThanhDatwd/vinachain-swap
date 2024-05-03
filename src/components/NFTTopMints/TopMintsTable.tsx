import { useTheme } from "@/hooks/useTheme";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { CellText } from "../tables/CellText";
import { DataTable } from "../tables/DataTable";
import { HeaderTable } from "../tables/HeaderTable";

export const TopMintsTable = ({ defaultData }: { defaultData: any[] }) => {
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
      header: () => <HeaderTable text={t("topMints.collection")} />,
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
      header: () => <HeaderTable text={t("topMints.type")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.mints, {
      id: "mints",
      cell: ({ getValue }) => (
        <CellText
          text={
            <div className="flex items-center gap-2 text-[14.5px] text-dark900 dark:text-[#F5F5F5]">
              <span>
                {getValue().total}{" "}
                <span className="text-gray550 dark:text-[#bbb]">
                  {getValue().percentage.slice(0, 5)}%
                </span>
              </span>
              <div className="h-1 w-16 rounded-lg bg-gray200">
                <div
                  className={`h-full bg-[#0784c3] rounded-lg`}
                  style={{ width: `${getValue().percentage}%` }}
                />
              </div>
            </div>
          }
        />
      ),
      header: () => <HeaderTable text={t("topMints.mints")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.uniqueMinters, {
      id: "uniqueMinters",
      cell: ({ getValue }) => (
        <CellText
          text={
            <div className="flex items-center gap-2 text-[14.5px] text-dark900 dark:text-[#F5F5F5]">
              <span>
                {getValue().total}{" "}
                <span className="text-gray550 dark:text-[#bbb]">
                  {getValue().percentage}%
                </span>
              </span>
              <div className="h-1 w-16 rounded-lg bg-gray200">
                <div
                  className={`h-full bg-[#0784c3] rounded-lg`}
                  style={{ width: `${getValue().percentage}%` }}
                />
              </div>
            </div>
          }
        />
      ),
      header: () => <HeaderTable text={t("topMints.uniqueMinters")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.totalOwners, {
      id: "totalOwners",
      cell: ({ getValue }) => <CellText text={getValue()} />,
      header: () => <HeaderTable text={t("topMints.totalOwners")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.totalAssets, {
      id: "totalAssets",
      cell: ({ getValue }) => <CellText text={getValue()} />,
      header: () => <HeaderTable text={t("topMints.totalAssets")} />,
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
      />
    </div>
  );
};
