"use client";
import { ArrowTurnDownLeftIcon } from "@/assets/icons/ArrowTurnDownLeftIcon";
import { useTheme } from "@/hooks/useTheme";
import { debounce, optionFilterScan } from "@/utils/constants";
import { isDarkTheme } from "@/utils/theme";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { DropdownScan } from "../DropdownScan";

export default function SearchSection({ isHeader }: { isHeader?: boolean }) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const searchHandle = async (value: string) => {
    if (!value) return;

    // if (isTransactionHash(value)) {
    //   const transaction = await web3.eth.getTransaction(value);
    // }

    // if (isNumber(value)) {
    //   const latestBlockNumber = await web3.eth.getTransactionFromBlock(
    //     value,
    //     0
    //   );
    // }
  };

  const debounceSearchHandle = debounce(searchHandle, 900);

  return (
    <div className="relative w-full">
      {isHeader ? (
        <div className="flex relative items-center pr-2 w-full bg-light bg-light-focus border border-[#DCDCDC] dark:bg-[#111] rounded-lg ">
          <button className="flex items-center justify-center p-2 rounded-md">
            <FontAwesomeIcon icon={faMagnifyingGlass} color="#bbb" />
          </button>
          <div className=" w-full flex items-center">
            <input
              ref={inputRef}
              id="blockchain-search"
              className="w-[25vw] pr-16 bg-transparent outline-none p-1 rounded-md"
              placeholder="Search by Address/ TXN Hash/ Block/ Token/ Domain Name"
              onChange={(event) => {
                setSearchValue(event.target.value);
                debounceSearchHandle(event.target.value);
              }}
              value={searchValue}
            />
          </div>
          {searchValue && (
            <button className=" absolute right-10 px-2">
              <FontAwesomeIcon
                icon={faXmark}
                color="#bbb"
                size="lg"
                onClick={() => {
                  setSearchValue("");
                  const ref = inputRef.current!;
                  if (ref) {
                    ref?.focus();
                  }
                }}
              />
            </button>
          )}
          {searchValue && (
            <button className=" border absolute right-2 rounded-md bg-theme-hover px-1">
              <ArrowTurnDownLeftIcon className="!w-6 !h-6" />
              {/* <FontAwesomeIcon icon={faTentArrowTurnLeft} color="#bbb" size="lg" /> */}
            </button>
          )}
          {!searchValue && (
            <kbd className="border absolute right-2 flex justify-center text-white items-center rounded-md bg-gray300 dark:bg-gray900 h-6 w-6 pt-2 ">
              /
            </kbd>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-6 w-full  bg-[#FAFAFA] border border-[#DCDCDC] dark:bg-[#111] rounded-lg p-1">
          <div className="w-[160px] md:block hidden">
            <DropdownScan
              bg={isDarkTheme(theme) ? "bg-[#111]" : "bg-[#FAFAFA]"}
              fit
              defaultValue={optionFilterScan[0]}
              options={optionFilterScan}
              onChange={() => {}}
              classNameOption="w-full w-32"
            />
          </div>
          <div className=" w-full flex items-center gap-8">
            <input
              className="text-[#111] dark:text-[#FAFAFA] w-full outline-none bg-[transparent] border-2 focus:border-gray-300 border-transparent p-1 rounded-md"
              placeholder="Search by Address/ TXN Hash/ Block/ Token/ Domain Name"
              onChange={(event) => {
                debounceSearchHandle(event.target.value);
              }}
            />
            <button className="flex items-center justify-center p-2 bg-[#0784c3] hover:bg-[#066a9c] dark:bg-secondaryDark rounded-md">
              <FontAwesomeIcon icon={faMagnifyingGlass} color="white" />
            </button>
          </div>
        </div>
      )}
      <div className="auto-results-wrapper auto-is-active shadow-md ">

      </div>
    </div>
  );
}
