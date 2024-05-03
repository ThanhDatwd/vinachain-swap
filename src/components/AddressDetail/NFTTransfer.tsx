import { CopyIcon } from "@/assets/CopyIcon";
import { EyeIcon } from "@/assets/icons/EyeIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { createColumnHelper } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { CellText } from "../tables/CellText";
import { DataTable } from "../tables/DataTable";
import { HeaderTable } from "../tables/HeaderTable";
import { InfoMore } from "./InfoMore";
import { DownloadFile } from "./DownloadFile";

export const NFTTransfer = () => {
  const { t } = useTranslation();
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
          icon={<EyeIcon color={"#333"} />}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.txnHash, {
      id: "transactionHash",
      cell: ({ getValue }) => (
        <CellText
          containerStyle=""
          className="text-[14.9px] link-color italic text-left"
          text={getValue()}
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
        <CellText text={getValue()} containerStyle="block-custom" />
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
        <CellText text={getValue()} className="link-color text-[15px]" />
      ),
      header: () => <HeaderTable text="Block" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.age, {
      id: "age",
      cell: ({ getValue }) => (
        <CellText text={getValue()} className="text-dark900 text-[15px]" />
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
                <div className="link-color italic">{`${getValue().slice(
                  0,
                  8
                )}...${getValue().slice(
                  getValue().length - 8,
                  getValue().length
                )}`}</div>
                <button onClick={() => handleCopy(getValue())}>
                  <CopyIcon />
                </button>
              </div>
              <div className="block-custom border-[#00a18640] text-[#00a186] bg-[#00a1861a]">
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
              <span className="link-color italic">{getValue()}</span>
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
    columnHelper.accessor((row) => row.type, {
      id: "type",
      cell: ({ getValue }) => (
        <CellText text={getValue()} className="text-[15px] text-dark900" />
      ),
      header: () => <HeaderTable text="Type" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.txnFee, {
      id: "item",
      cell: ({ getValue }) => (
        <CellText text={getValue()} className="text-gray550 text-xs" />
      ),
      header: () => <HeaderTable text="Item" textStyle="text-dark900 dark:text-[#FAFAFA]" />,
      footer: (props) => props.column.id,
    }),
  ];

  return (
    <div className="flex flex-col gap-3">
      <DataTable
        columns={columns}
        data={[]}
        infoMore={
          <div className="p-4">
            <InfoMore content="Transactions involving tokens marked as suspicious, unsafe, spam or brand infringement are currently hidden. To show them, go to" />
          </div>
        }
        showPagination={false}
        defaultHeaderTable={false}
      />
      <DownloadFile download={true}/>
    </div>
  );
};
