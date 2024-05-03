import { CopyIcon } from "@/assets/CopyIcon";
import { FileLineIcon } from "@/assets/icons/FileLineIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { handleCopy } from "@/utils";
import {
  formatTrxId,
  generateRandomEthereumAddress,
} from "@/utils/formatTrxId";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { TooltipCustom } from "../Tooltip";
import { CellText } from "../tables/CellText";
import { DataTable } from "../tables/DataTable";
import { HeaderTable } from "../tables/HeaderTable";
import { ArrowUpRightSquareIcon } from "@/assets/icons/ArrowUpRightSquareIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { FILTER_VERIFIED_CONTRACT_DATA, THEME } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";
import { TriangleExclamationIcon } from "@/assets/icons/TriangleExclamationIcon";
import { WrenchIcon } from "@/assets/icons/WrenchIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { DropdownAddress } from "../DropdownAddress";

const defaultData = [
  {
    address: generateRandomEthereumAddress(),
    contractName: "MSN",
    complier: "Solidity",
    version: "0.8.0",
    balance: 0,
    txn: `${Math.floor(Math.random() * 100)}`,
    setting: "",
    verified: "4/26/2024",
    audit: "-",
    license: "GNU GPLv3",
    similarContract: "",
  },
  {
    address: generateRandomEthereumAddress(),
    contractName: "SSRAT",
    complier: "Solidity",
    version: "0.8.23",
    balance: 0,
    txn: `${Math.floor(Math.random() * 100)}`,
    setting: "",
    verified: "4/26/2024",
    audit: "-",
    license: "None",
    similarContract: "",
  },
  {
    address: generateRandomEthereumAddress(),
    contractName: "GamblorV4",
    complier: "Solidity(Json)",
    version: "0.8.22",
    balance: 0,
    txn: `${Math.floor(Math.random() * 100)}`,
    setting: "",
    verified: "4/26/2024",
    audit: "-",
    license: "-",
    similarContract: "",
  },
  {
    address: generateRandomEthereumAddress(),
    contractName: "CurveUniV3Adapter",
    complier: "Solidity",
    version: "0.8.18",
    balance: 0,
    txn: `${Math.floor(Math.random() * 100)}`,
    setting: "",
    verified: "4/26/2024",
    audit: "-",
    license: "MIT",
    similarContract: "",
  },
  {
    address: generateRandomEthereumAddress(),
    contractName: "EstateX",
    complier: "Solidity",
    version: "0.8.21",
    balance: 0,
    txn: `${Math.floor(Math.random() * 100)}`,
    setting: "",
    verified: "4/26/2024",
    audit: "-",
    license: "None",
    similarContract: "",
  },
  {
    address: generateRandomEthereumAddress(),
    contractName: "DoegeKoin",
    complier: "Solidity",
    version: "0.8.24",
    balance: 0,
    txn: `${Math.floor(Math.random() * 100)}`,
    setting: "",
    verified: "4/26/2024",
    audit: "-",
    license: "MIT",
    similarContract: "",
  },
  {
    address: generateRandomEthereumAddress(),
    contractName: "Wojak",
    complier: "Solidity",
    version: "0.8.23",
    balance: 0,
    txn: `${Math.floor(Math.random() * 100)}`,
    setting: "",
    verified: "4/26/2024",
    audit: "-",
    license: "MIT",
    similarContract: "",
  },
  {
    address: generateRandomEthereumAddress(),
    contractName: "UpgradeableBeacon",
    complier: "Solidity",
    version: "0.8.21",
    balance: 0,
    txn: `${Math.floor(Math.random() * 100)}`,
    setting: "",
    verified: "4/26/2024",
    audit: "-",
    license: "-",
    similarContract: "",
  },
  {
    address: generateRandomEthereumAddress(),
    contractName: "Auction",
    complier: "Solidity",
    version: "0.8.16",
    balance: 0,
    txn: `${Math.floor(Math.random() * 100)}`,
    setting: "",
    verified: "4/26/2024",
    audit: "-",
    license: "-",
    similarContract: "",
  },
  {
    address: generateRandomEthereumAddress(),
    contractName: "Maye",
    complier: "Solidity",
    version: "0.8.20",
    balance: 0,
    txn: `${Math.floor(Math.random() * 100)}`,
    setting: "",
    verified: "4/26/2024",
    audit: "-",
    license: "MIT",
    similarContract: "",
  },
];

export const ContractVerifiedTable = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor((row) => row.address, {
      id: "address",
      header: () => <HeaderTable text={t("verifiedContract.address")} />,
      cell: ({ getValue }) => {
        return (
          <CellText
            icon={
              <div className="flex gap-2 items-center cursor-pointer">
                <TooltipCustom content={getValue()}>
                  <Link
                    href={`/address/${getValue()}`}
                    className="flex items-center gap-1 link-color"
                  >
                    <TooltipCustom content={t("internalTransaction.contract")}>
                      <FileLineIcon />
                    </TooltipCustom>
                    {formatTrxId(getValue())}
                  </Link>
                </TooltipCustom>
                <button
                  className="flex items-center justify-center"
                  onClick={() => handleCopy(getValue())}
                >
                  <TooltipCustom content={t("copyAddress")}>
                    <CopyIcon />
                  </TooltipCustom>
                </button>
              </div>
            }
          />
        );
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.contractName, {
      id: "contractName",
      header: () => <HeaderTable text={t("verifiedContract.contractName")} />,
      cell: ({ getValue }) => <CellText text={getValue()} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.complier, {
      id: "complier",
      header: () => (
        <HeaderTable
          text={t("verifiedContract.compiler")}
          textStyle="link-color"
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.version, {
      id: "version",
      header: () => <HeaderTable text={t("verifiedContract.version")} />,
      cell: ({ getValue }) => (
        <CellText
          text={
            <TooltipCustom content={t("verifiedContract.versionTooltip")}>
              <div className="flex items-center gap-1">
                <TriangleExclamationIcon width={14.5} height={15} />
                {getValue()}
              </div>
            </TooltipCustom>
          }
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.balance, {
      id: "balance",
      header: () => <HeaderTable text={t("verifiedContract.balance")} />,
      cell: ({ getValue }) => <CellText text={`${getValue()} VPC`} />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.txn, {
      id: "txn",
      header: () => <HeaderTable text={t("verifiedContract.txns")} />,
      cell: ({ getValue }) => (
        <CellText className=" dark:text-gray200" text={getValue()} />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.setting, {
      id: "setting",
      header: () => <HeaderTable text={t("verifiedContract.setting")} />,
      cell: ({ getValue }) => {
        return (
          <CellText
            icon={
              <TooltipCustom content={t("verifiedContract.settingTooltip")}>
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-[#e9ecef] dark:border-gray700 bg-[#f8f9fa] dark:bg-[#151515]">
                  <WrenchIcon />
                </div>
              </TooltipCustom>
            }
          />
        );
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.verified, {
      id: "verified",
      header: () => <HeaderTable text={t("verifiedContract.verified")} />,
      cell: ({ getValue }) => {
        return <CellText text={getValue()} />;
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.audit, {
      id: "audit",
      header: () => <HeaderTable text={t("verifiedContract.audit")} />,
      cell: ({ getValue }) => {
        return <CellText text={getValue()} />;
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.license, {
      id: "license",
      header: () => <HeaderTable text={t("verifiedContract.license")} />,
      cell: ({ getValue }) => {
        return <CellText text={getValue()} />;
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.similarContract, {
      id: "similarContract",
      header: () => (
        <HeaderTable text={t("verifiedContract.similarContract")} />
      ),
      cell: ({ getValue }) => {
        return (
          <CellText
            text={
              <Link
                href={"/coming-soon"}
                className="flex items-center gap-1 w-fit text-theme bg-grey200 dark:bg-gray600 hover:bg-[#dee2e6] rounded-md py-1 px-2"
              >
                <SearchIcon
                  width={12.6}
                  height={13.5}
                  color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"}
                />
                {t("verifiedContract.search")}
              </Link>
            }
          />
        );
      },
      footer: (props) => props.column.id,
    }),
  ];

  return (
    <div className="flex flex-col gap-4">
      <DataTable
        data={defaultData}
        // fetchData={getListFeedbacks}
        columns={columns}
        showPagination={true}
        childrenHeaderTable={
          <div className="text-[14.5px] text-dark900 dark:text-gray400">
            {t("verifiedContract.showingTheLast500VerifiedContractsSourceCode")}
          </div>
        }
        infoMore={
          <>
            <div className="flex lg:justify-between p-4">
              <DropdownAddress
                defaultValue={
                  <div className="flex items-center gap-1 text-dark900 dark:text-[#FAFAFA] font-normal text-[12.5px]">
                    <span>{t("verifiedContract.filterBy")}</span>
                    <FontAwesomeIcon icon={faBorderAll} color={theme === THEME.DARK ? "#FAFAFA" : "#212529"}/>
                    <span>{`${t("verifiedContract.latest")} 500 ${t("verifiedContract.verifiedContracts")}`}</span>
                  </div>
                }
                options={FILTER_VERIFIED_CONTRACT_DATA}
                classNameDetail="p-2"
              />
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
      <span className="text-right">
        {t("verifiedContract.sourceCode")}&nbsp;
        <Link href={"/coming-soon"} className="link-color">
          {t("verifiedContract.termsOfUsage")}
        </Link>
      </span>
    </div>
  );
};
