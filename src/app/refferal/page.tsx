"use client";

import { CopyIcon } from "@/assets/CopyIcon";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { CellText } from "@/components/tables/CellText";
import { DataTableSwap } from "@/components/tables/DataTableSwap";
import { HeaderTable } from "@/components/tables/HeaderTable";
import { useTheme } from "@/hooks/useTheme";
import { onToast } from "@/hooks/useToast";
import { THEME } from "@/utils/constants";
import {
  formatTrxIdSwap,
  formatVPC,
  generateRandomEthereumAddress,
} from "@/utils/formatTrxId";
import { createColumnHelper } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";

const enum TYPE_IMAGE_UPLOAD {
  LIKE_FANPAGE = "like_fanpage",
  FOLLOW_TELEGRAM = "follow_telegram",
}
const enum TAB {
  VERIFY = "verify",
  TRANSACTION = "transaction",
}

declare const window: any;

export default function SwapPage() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const columnHelper = createColumnHelper<any>();

  const defaultData = [
    {
      id: 1,
      email: "nguyenvana@gmail.com",
      walletAddress: generateRandomEthereumAddress(),
      vpcStakingAmount: `${Math.random() * 1}`,
      vpcStakingValue: `${Math.random() * 1}`,
      time: Math.floor(Math.random() * 60),
      profits: 15,
    },
    {
      id: 2,
      email: "nguyenvanb@gmail.com",
      walletAddress: generateRandomEthereumAddress(),
      vpcStakingAmount: `${Math.random() * 1}`,
      vpcStakingValue: `${Math.random() * 1}`,
      time: Math.floor(Math.random() * 60),
      profits: 15,
    },
    {
      id: 3,
      email: "nguyenvanc@gmail.com",
      walletAddress: generateRandomEthereumAddress(),
      vpcStakingAmount: `${Math.random() * 1}`,
      vpcStakingValue: `${Math.random() * 1}`,
      time: Math.floor(Math.random() * 60),
      profits: 15,
    },
    {
      id: 4,
      email: "nguyenvand@gmail.com",
      walletAddress: generateRandomEthereumAddress(),
      vpcStakingAmount: `${Math.random() * 1}`,
      vpcStakingValue: `${Math.random() * 1}`,
      time: Math.floor(Math.random() * 60),
      profits: 15,
    },
    {
      id: 5,
      email: "nguyenvane@gmail.com",
      walletAddress: generateRandomEthereumAddress(),
      vpcStakingAmount: `${Math.random() * 1}`,
      vpcStakingValue: `${Math.random() * 1}`,
      time: Math.floor(Math.random() * 60),
      profits: 15,
    },
    {
      id: 6,
      email: "nguyenvanf@gmail.com",
      walletAddress: generateRandomEthereumAddress(),
      vpcStakingAmount: `${Math.random() * 1}`,
      vpcStakingValue: `${Math.random() * 1}`,
      time: Math.floor(Math.random() * 60),
      profits: 15,
    },
    {
      id: 7,
      email: "nguyenvang@gmail.com",
      walletAddress: generateRandomEthereumAddress(),
      vpcStakingAmount: `${Math.random() * 1}`,
      vpcStakingValue: `${Math.random() * 1}`,
      time: Math.floor(Math.random() * 60),
      profits: 15,
    },
    {
      id: 8,
      email: "nguyenvanh@gmail.com",
      walletAddress: generateRandomEthereumAddress(),
      vpcStakingAmount: `${Math.random() * 1}`,
      vpcStakingValue: `${Math.random() * 1}`,
      time: Math.floor(Math.random() * 60),
      profits: 15,
    },
    {
      id: 9,
      email: "nguyenvani@gmail.com",
      walletAddress: generateRandomEthereumAddress(),
      vpcStakingAmount: `${Math.random() * 1}`,
      vpcStakingValue: `${Math.random() * 1}`,
      time: Math.floor(Math.random() * 60),
      profits: 15,
    },
    {
      id: 10,
      email: "nguyenvank@gmail.com",
      walletAddress: generateRandomEthereumAddress(),
      vpcStakingAmount: `${Math.random() * 1}`,
      vpcStakingValue: `${Math.random() * 1}`,
      time: Math.floor(Math.random() * 60),
      profits: 15,
    },
  ];

  const handleCopy = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => onToast("You successfully copied", "success"));
  };

  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => <HeaderTable text="#" />,
      cell: ({ getValue }) => <CellText text={getValue()} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.email, {
      id: "email",
      cell: ({ getValue }) => <CellText text={getValue()} />,
      header: () => <HeaderTable text={t("refferal.email")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.walletAddress, {
      id: "walletAddress",
      cell: ({ getValue }) => (
        <CellText
          text={
            <div className="flex items-center justify-between w-40">
              {formatTrxIdSwap(getValue())}
              <button onClick={() => handleCopy(getValue())}>
                <CopyIcon />
              </button>
            </div>
          }
        />
      ),
      header: () => <HeaderTable text={t("refferal.walletAddress")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.vpcStakingAmount, {
      id: "vpcStakingAmount",
      cell: ({ getValue }) => (
        <CellText text={`${formatVPC(getValue())} VPC`} />
      ),
      header: () => <HeaderTable text={t("refferal.vpcStakingAmount")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.profits, {
      id: "profits",
      cell: ({ getValue }) => <CellText text={`${getValue()}%`} />,
      header: () => <HeaderTable text={t("refferal.profits")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.vpcStakingValue, {
      id: "vpcStakingValue",
      cell: ({ getValue }) => (
        <CellText text={`${formatVPC(getValue())} VPC`} />
      ),
      header: () => <HeaderTable text={t("refferal.vpcStakingValue")} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.time, {
      id: "time",
      cell: ({ getValue }) => <CellText text={`${getValue()} seconds ago`} />,
      header: () => <HeaderTable text={t("refferal.time")} />,
      footer: (props) => props.column.id,
    }),
  ];

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark font-sans-serif relative">
      <div className="text-base text-blue950 dark:text-purple600">
        <div className="flex flex-col gap-6 py-14 px-4 lg:px-[169px]">
          <h2 className="text-5xl font-bold text-blue900 dark:text-purple500">
            {t("refferal.title")}
          </h2>
          <span>{t("refferal.content")}</span>
        </div>
        <div className="flex flex-col items-center gap-6 w-full px-4 lg:px-0">
          <div className="boxShadowStaking flex flex-col gap-[35px] lg:gap-0 lg:flex-row lg:justify-between w-full lg:w-3/5 py-6 px-4 rounded-3xl bg-white dark:bg-gray900 text-base text-black800 dark:text-purple400 font-bold">
            <div className="flex items-center gap-2">
              <span className="min-w-[148px]">
                {t("refferal.yourReferralCode")}
              </span>
              <div className="flex justify-between items-center ref-block font-normal">
                abc123
                <button onClick={() => handleCopy("abc123")}>
                  <CopyIcon
                    color={theme === THEME.DARK ? "#E8DEFD" : "#1D0F3A"}
                  />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="min-w-[148px]">
                {t("refferal.enteredReferralCode")}
              </span>
              <div className="ref-block font-normal">efg789</div>
            </div>
          </div>
          <DataTableSwap
            // fetchData={getListFeedbacks}
            columns={columns}
            data={defaultData}
            className="hidden lg:flex w-full lg:w-3/5"
          />
          {defaultData.map((item, index) => (
            <table
              key={index}
              className="lg:hidden w-full boxShadowStaking rounded-3xl"
            >
              <tr className="row-between">
                <th className="text-header-table">#</th>
                <td className="text-content-table">{item.id}</td>
              </tr>
              <tr className="row-between">
                <th className="text-header-table">{t("refferal.email")}</th>
                <td className="text-content-table">{item.email}</td>
              </tr>
              <tr className="row-between">
                <th className="text-header-table">
                  {t("refferal.walletAddress")}
                </th>
                <td className="flex gap-1 items-center text-content-table">
                  {formatTrxIdSwap(item.walletAddress)}
                  <button onClick={() => handleCopy(item.walletAddress)}>
                    <CopyIcon />
                  </button>
                </td>
              </tr>
              <tr className="row-between">
                <th className="text-header-table">
                  {t("refferal.vpcStakingAmount")}
                </th>
                <td className="text-content-table">{`${formatVPC(
                  item.vpcStakingAmount
                )} VPC`}</td>
              </tr>
              <tr className="row-between">
                <th className="text-header-table">{t("refferal.profits")}</th>
                <td className="text-content-table">{`${item.profits}%`}</td>
              </tr>
              <tr className="row-between">
                <th className="text-header-table">
                  {t("refferal.vpcStakingValue")}
                </th>
                <td className="text-content-table">{`${formatVPC(
                  item.vpcStakingValue
                )} VPC`}</td>
              </tr>
              <tr className="row-between">
                <th className="text-header-table">{t("refferal.time")}</th>
                <td className="text-content-table">{`${item.time} seconds ago`}</td>
              </tr>
            </table>
          ))}
        </div>
      </div>
    </ScanLayout>
  );
}
