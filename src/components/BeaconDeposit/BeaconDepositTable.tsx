import { CopyIcon } from "@/assets/CopyIcon";
import { ChartAreaIcon } from "@/assets/icons/ChartAreaIcon";
import { FilterIcon } from "@/assets/icons/FilterIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { useTheme } from "@/hooks/useTheme";
import { handleCopy } from "@/utils";
import { THEME } from "@/utils/constants";
import {
  formatTrxHash,
  formatTrxId,
  generateRandomEthereumAddress,
} from "@/utils/formatTrxId";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TooltipCustom } from "../Tooltip";
import { CellText } from "../tables/CellText";
import { DataTable } from "../tables/DataTable";
import { HeaderTable } from "../tables/HeaderTable";

export const BeaconDepositTable = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const defaultData = [
    {
      txHash: generateRandomEthereumAddress(),
      block: Math.floor(Math.random() * 10000000),
      age: `${Math.floor(Math.random() * 60)} mins ago`,
      value: `${Math.floor(Math.random() * 100)} VPC`,
      from: generateRandomEthereumAddress(),
      pubKey: generateRandomEthereumAddress(),
      signature: generateRandomEthereumAddress(),
      valid: "Yes",
    },
    {
      txHash: generateRandomEthereumAddress(),
      block: Math.floor(Math.random() * 10000000),
      age: `${Math.floor(Math.random() * 60)} mins ago`,
      value: `${Math.floor(Math.random() * 100)} VPC`,
      from: generateRandomEthereumAddress(),
      pubKey: generateRandomEthereumAddress(),
      signature: generateRandomEthereumAddress(),
      valid: "Yes",
    },
    {
      txHash: generateRandomEthereumAddress(),
      block: Math.floor(Math.random() * 10000000),
      age: `${Math.floor(Math.random() * 60)} mins ago`,
      value: `${Math.floor(Math.random() * 100)} VPC`,
      from: generateRandomEthereumAddress(),
      pubKey: generateRandomEthereumAddress(),
      signature: generateRandomEthereumAddress(),
      valid: "Yes",
    },
    {
      txHash: generateRandomEthereumAddress(),
      block: Math.floor(Math.random() * 10000000),
      age: `${Math.floor(Math.random() * 60)} mins ago`,
      value: `${Math.floor(Math.random() * 100)} VPC`,
      from: generateRandomEthereumAddress(),
      pubKey: generateRandomEthereumAddress(),
      signature: generateRandomEthereumAddress(),
      valid: "Yes",
    },
    {
      txHash: generateRandomEthereumAddress(),
      block: Math.floor(Math.random() * 10000000),
      age: `${Math.floor(Math.random() * 60)} mins ago`,
      value: `${Math.floor(Math.random() * 100)} VPC`,
      from: generateRandomEthereumAddress(),
      pubKey: generateRandomEthereumAddress(),
      signature: generateRandomEthereumAddress(),
      valid: "Yes",
    },
    {
      txHash: generateRandomEthereumAddress(),
      block: Math.floor(Math.random() * 10000000),
      age: `${Math.floor(Math.random() * 60)} mins ago`,
      value: `${Math.floor(Math.random() * 100)} VPC`,
      from: generateRandomEthereumAddress(),
      pubKey: generateRandomEthereumAddress(),
      signature: generateRandomEthereumAddress(),
      valid: "Yes",
    },
    {
      txHash: generateRandomEthereumAddress(),
      block: Math.floor(Math.random() * 10000000),
      age: `${Math.floor(Math.random() * 60)} mins ago`,
      value: `${Math.floor(Math.random() * 100)} VPC`,
      from: generateRandomEthereumAddress(),
      pubKey: generateRandomEthereumAddress(),
      signature: generateRandomEthereumAddress(),
      valid: "Yes",
    },
    {
      txHash: generateRandomEthereumAddress(),
      block: Math.floor(Math.random() * 10000000),
      age: `${Math.floor(Math.random() * 60)} mins ago`,
      value: `${Math.floor(Math.random() * 100)} VPC`,
      from: generateRandomEthereumAddress(),
      pubKey: generateRandomEthereumAddress(),
      signature: generateRandomEthereumAddress(),
      valid: "Yes",
    },
    {
      txHash: generateRandomEthereumAddress(),
      block: Math.floor(Math.random() * 10000000),
      age: `${Math.floor(Math.random() * 60)} mins ago`,
      value: `${Math.floor(Math.random() * 100)} VPC`,
      from: generateRandomEthereumAddress(),
      pubKey: generateRandomEthereumAddress(),
      signature: generateRandomEthereumAddress(),
      valid: "Yes",
    },
    {
      txHash: generateRandomEthereumAddress(),
      block: Math.floor(Math.random() * 10000000),
      age: `${Math.floor(Math.random() * 60)} mins ago`,
      value: `${Math.floor(Math.random() * 100)} VPC`,
      from: generateRandomEthereumAddress(),
      pubKey: generateRandomEthereumAddress(),
      signature: generateRandomEthereumAddress(),
      valid: "Yes",
    },
  ];

  const columnHelper = createColumnHelper<any>();
  const [isHovered, setIsHovered] = useState(false);

  const columns = [
    columnHelper.accessor((row) => row.txHash, {
      id: "txHash",
      header: () => (
        <HeaderTable
          textStyle="dark:text-gray200"
          text={t("beaconDeposit.transactionHash")}
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={
            <Link
              href={`txs/${getValue()}`}
              className="link-color text-[14.5px]"
            >
              {formatTrxHash(getValue())}
            </Link>
          }
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
      header: () => <HeaderTable text={t("beaconDeposit.block")} />,
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
      header: () => (
        <HeaderTable text={t("beaconDeposit.age")} textStyle="link-color" />
      ),
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
      header: () => <HeaderTable text={t("beaconDeposit.value")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.from, {
      id: "from",
      header: () => (
        <HeaderTable
          text={t("beaconDeposit.from")}
          textStyle=" dark:text-gray200"
        />
      ),
      cell: ({ getValue }) => {
        return (
          <CellText
            icon={
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center cursor-pointer">
                  <TooltipCustom content={getValue()}>
                    <Link
                      href={`/address/${getValue()}`}
                      className="link-color border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
                    >
                      {formatTrxId(getValue())}
                    </Link>
                  </TooltipCustom>
                  <TooltipCustom content={t("copyAddress")}>
                    <button
                      className="flex items-center justify-center"
                      onClick={() => handleCopy(getValue())}
                    >
                      <CopyIcon />
                    </button>
                  </TooltipCustom>
                </div>
              </div>
            }
            containerStyle="gap-1"
            // className="text-secondary dark:text-secondaryDark"
          />
        );
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.pubKey, {
      id: "pubKey",
      header: () => (
        <HeaderTable
          text={t("beaconDeposit.usdcPubkey")}
          textStyle="dark:text-gray200 "
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={
            <div className="flex gap-2 items-center cursor-pointer">
              <TooltipCustom content={getValue()}>
                <Link href={`/coming-soon`} className="link-color">
                  {`${getValue().slice(0, 18)}...`}
                </Link>
              </TooltipCustom>
              <TooltipCustom content={t("copyAddress")}>
                <button
                  className="flex items-center justify-center"
                  onClick={() => handleCopy(getValue())}
                >
                  <CopyIcon />
                </button>
              </TooltipCustom>
            </div>
          }
          className="text-dark900 dark:text-gray200 text-[14.5px]"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.signature, {
      id: "signature",
      header: () => (
        <HeaderTable
          text={t("beaconDeposit.signature")}
          textStyle="dark:text-gray200 "
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={`${getValue().slice(0, 18)}...`}
          className="text-dark900 dark:text-gray200 text-[14.5px]"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.valid, {
      id: "valid",
      header: () => (
        <HeaderTable
          text={t("beaconDeposit.valid")}
          textStyle="dark:text-gray200 "
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-[#00a186] text-[14.5px]"
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
        showPagination={true}
        childrenHeaderTable={
          <div className="flex flex-col text-[14.5px] text-black dark:text-[#FAFAFA]">
            {`${t("beaconDeposit.aTotalOf")} 1,455,604 ${t(
              "beaconDeposit.depositsFound"
            )}`}
            <span className="text-[12.5px] text-gray550 dark:text-gray400">
              {`(${t("pendingTransaction.showingTheLast10000Records")})`}
            </span>
          </div>
        }
        infoMore={
          <>
            <div className="w-full flex lg:justify-end p-4">
              <div className="w-fit py-[6px] px-2 bg-[#e9ecef] dark:bg-gray600 rounded-md">
                <SearchIcon
                  color={theme === THEME.LIGHT ? "#081D35" : "#fafafa"}
                  width={12.6}
                  height={13.5}
                />
              </div>
            </div>
            <hr className="line my-0" />
          </>
        }
      />
    </div>
  );
};
