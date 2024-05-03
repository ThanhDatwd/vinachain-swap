import { SearchIcon } from "@/assets/icons/SearchIcon";
import { useAuth } from "@/hooks/useAuth";
import { TableType } from "@/utils/constants";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import { TooltipCustom } from "../Tooltip";
import { AdvanceFilterModal } from "../controls/AdvanceFilterModal";
import { ModalCard } from "../controls/ModalCard";
import { HotContract } from "./HotContract";
import { LatestBlock } from "./LatestBlock";
import { LatestTransaction } from "./LatestTransaction";
import { TopGuzzlers } from "./TopGuzzlers";

interface Props {
  defaultType: TableType;
  tableKey: string;
}

export const TableCustom: FC<Props> = ({ defaultType, tableKey }) => {
  const { currentUser } = useAuth();
  const { t } = useTranslation();
  const [tableType, setTableType] = useState<TableType>(defaultType);
  const [selectedOption, setSelectedOption] = useState<TableType>(defaultType);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenAdvancedFiler, setIsOpenAdvancedFilter] =
    useState<boolean>(false);

  const renderTitle = () => {
    switch (tableType) {
      case TableType.LATEST_BLOCKS:
        return "vinaScan.history.block.title";

      case TableType.LATEST_TRANSACTIONS:
        return "vinaScan.history.transaction.title";

      case TableType.HOT_CONTRACTS:
        return "vinaScan.history.hotContract.title";

      case TableType.TOP_GUZZLERS:
        return "vinaScan.history.topGuzzlers.title";

      default:
        return "vinaScan.history.block.title";
    }
  };

  const renderTableData = () => {
    switch (tableType) {
      case TableType.LATEST_BLOCKS:
        return <LatestBlock />;

      case TableType.LATEST_TRANSACTIONS:
        return <LatestTransaction />;

      case TableType.HOT_CONTRACTS:
        return <HotContract />;

      case TableType.TOP_GUZZLERS:
        return <TopGuzzlers />;

      default:
        return <LatestBlock />;
    }
  };

  const toggleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const changeTableType = (type: TableType) => {
    if (type != tableType) {
      setTableType(type);
      toggleOpenModal();
      window?.localStorage.setItem(tableKey, type);
    }
  };

  useEffect(() => {
    const TABLE_TYPE = window?.localStorage.getItem(tableKey);
    if (TABLE_TYPE) {
      setTableType(TABLE_TYPE as TableType);
      setSelectedOption(TABLE_TYPE as TableType);
    }
  }, []);

  return (
    <>
      <div
        className="flex justify-between items-center border-b border-[#e9ecef "
        key={tableKey}
      >
        <div className="p-4 whitespace-nowrap">{t(renderTitle())}</div>
        <div className="p-4">
          <div
            onClick={toggleOpenModal}
            className="bg-theme text-black dark:text-[#FAFAFA] flex gap-1.5 items-center border border-[#e9ecef] px-1.5 py-1 rounded text-[12.7px] cursor-pointer hover:bg-[#E9ECEF] dark:hover:bg-gray600 duration-200"
          >
            <FontAwesomeIcon icon={faBorderAll} />
            {t("customize")}
          </div>
        </div>
      </div>
      <ModalCard
        isOpen={isOpen}
        toggleOpenModal={toggleOpenModal}
        titleModal={t("modalCard.customCard")}
      >
        <div>
          <div className="p-4">
            <div className="text-left mb-4">
              {t("modalCard.customizeThisCard")}
            </div>
            <div className="text-left text-xs text-[#bbb] mb-2">
              {t("modalCard.advancedFilter")}
            </div>
            <div className="flex justify-start mb-4">
              <TooltipCustom
                styleTooltip={{ display: currentUser ? "none" : "block" }}
                position="top"
                content="To use this feature, please login to your Vinascan account "
              >
                <div
                  className={`flex items-center gap-1 border w-fit px-2 py-1 rounded-lg   ${
                    currentUser
                      ? "cursor-pointer"
                      : "cursor-not-allowed opacity-50"
                  }`}
                  onClick={() => {
                    {
                      if (currentUser) {
                        toggleOpenModal();
                        setIsOpenAdvancedFilter(true);
                      }
                    }
                  }}
                >
                  <div
                    className={`w-4 h-4 rounded-full border ${
                      isOpenAdvancedFiler &&
                      " border-[4px] !border-[#0784c3] dark:!border-[#A55115]"
                    }`}
                  ></div>
                  <label className="cursor-pointer text-[14.5px]">
                    {t("modalCard.savedFilters")}
                  </label>
                </div>
              </TooltipCustom>
            </div>

            <div>
              <div className="text-xs text-[#bbb] text-left mb-2">
                {t("modalCard.preset")}
              </div>
              <div className=" flex flex-wrap gap-3">
                <div
                  className={`flex items-center gap-1 border w-fit px-2 py-1 rounded-lg cursor-pointer `}
                  onClick={() => setSelectedOption(TableType.LATEST_BLOCKS)}
                >
                  <div
                    className={`w-4 h-4 rounded-full border ${
                      selectedOption === TableType.LATEST_BLOCKS
                        ? " border-[4px] !border-[#0784c3] dark:!border-[#A55115]"
                        : ""
                    }`}
                  ></div>
                  <label className="cursor-pointer text-[14.5px]">
                    {t("modalCard.latestBlocks")}
                  </label>
                </div>
                {/*  */}
                <div
                  className={`flex items-center gap-1 border w-fit px-2 py-1 rounded-lg cursor-pointer `}
                  onClick={() =>
                    setSelectedOption(TableType.LATEST_TRANSACTIONS)
                  }
                >
                  <div
                    className={`w-4 h-4 rounded-full border ${
                      selectedOption === TableType.LATEST_TRANSACTIONS
                        ? " border-[4px] !border-[#0784c3] dark:!border-[#A55115]"
                        : ""
                    }`}
                  ></div>
                  <label className="cursor-pointer text-[14.5px]">
                    {t("modalCard.latestTransactions")}
                  </label>
                </div>
                {/*  */}
                <div
                  className={`flex items-center gap-1 border w-fit px-2 py-1 rounded-lg cursor-pointer `}
                  onClick={() => setSelectedOption(TableType.HOT_CONTRACTS)}
                >
                  <div
                    className={`w-4 h-4 rounded-full border ${
                      selectedOption === TableType.HOT_CONTRACTS
                        ? " border-[4px] !border-[#0784c3] dark:!border-[#A55115]"
                        : ""
                    }`}
                  ></div>
                  <label className="cursor-pointer text-[14.5px]">
                    {t("modalCard.hotContract")}
                  </label>
                </div>
                {/*  */}
                <div
                  className={`flex items-center gap-1 border w-fit px-2 py-1 rounded-lg cursor-pointer `}
                  onClick={() => setSelectedOption(TableType.TOP_GUZZLERS)}
                >
                  <div
                    className={`w-4 h-4 rounded-full border ${
                      selectedOption === TableType.TOP_GUZZLERS
                        ? " border-[4px] !border-[#0784c3] dark:!border-[#A55115]"
                        : ""
                    }`}
                  ></div>
                  <label className="cursor-pointer text-[14.5px]">
                    {t("modalCard.topGuzzlers")}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray900 border-t">
            <div className="flex justify-end items-center gap-3 p-4">
              <button
                className="hover:bg-gray-300 dark:hover:bg-[#252525] px-3 py-1.5 duration-300 rounded-md"
                onClick={toggleOpenModal}
              >
                {t("modalCard.close")}
              </button>
              <button
                onClick={() => {
                  changeTableType(selectedOption);
                }}
                className="bg-[#0784C3] px-3 py-1.5 text-white rounded-md hover:bg-[#0870A6] duration-300"
              >
                {t("modalCard.saveChange")}
              </button>
            </div>
          </div>
        </div>
      </ModalCard>
      <AdvanceFilterModal
        isOpen={isOpenAdvancedFiler}
        toggleOpenModal={() => setIsOpenAdvancedFilter(!isOpenAdvancedFiler)}
        titleModal={t("modalCard.chooseAdvancedFilter")}
      >
        <div>
          <div className="p-4">
            <div className=" relative border border-gray-300 rounded-lg py-1 mb-4">
              <div className="absolute left-1 top-0  h-full aspect-square px-1 ">
                <div className="flex items-center justify-center w-full h-full  bg-white dark:bg-[#111111] cursor-pointer rounded ">
                  <SearchIcon />
                </div>
              </div>
              <input
                className=" ml-10 text-[16px] leading-[28px] px-3 py-1 w-full bg-transparent focus:outline-0"
                placeholder="Search"
              />
            </div>
            <div className="text-left text-xs text-[#bbb] mb-4 uppercase">
              {t("modalCard.advancedFilter")}
            </div>
            <div className="px-[10.4px]">
              <div className="text-left p-[10.4px] bg-[#fff3cd] !border !border-[#ffe69c] text-[#997404] dark:text-[#ffda6a] dark:bg-[#332701] dark:!border-[#664d03] rounded-lg">
                {t("modalCard.thereAreNoMatchingEntries")}
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray900 border-t">
            <div className="flex justify-end items-center gap-3 p-4">
              <button
                className="hover:bg-gray-300 dark:hover:bg-[#252525] px-3 py-1.5 duration-300 rounded-md"
                onClick={() => setIsOpenAdvancedFilter(false)}
              >
                {t("modalCard.close")}
              </button>
              <button className="bg-[#0784C3] px-3 py-1.5 text-white rounded-md hover:bg-[#0870A6] duration-300">
                {t("modalCard.saveChange")}
              </button>
            </div>
          </div>
        </div>
      </AdvanceFilterModal>
      <table className="w-full min-h-[500px]">{renderTableData()}</table>
    </>
  );
};
