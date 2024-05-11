"use client";

import { BnbIcon } from "@/assets/icons/BnbIcon";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { VINACHAIN_NETWORK, getStaticURL } from "@/utils/constants";
import { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  title?: string;
  defaultValue?: { label: string; value: string };
  className?: string;
  overlayBgStyle?: string;
  modalLanguageStyle?: string;
  languageItemStyle?: string;
}

export const DropdownNetwork: FC<Props> = ({
  defaultValue,

}) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme } = useTheme();

  const {
    currentUser,
    swapPackageBalanceSwapped,
  } = useAuth();
  const { t } = useTranslation();
  const {} = useAuth();
  const [defaultVal, setDefaultVal] = useState<{
    label: string;
    value: string;
  }>();

  useEffect(() => {
    if (defaultValue) {
      setDefaultVal(defaultValue);
    }
  }, [defaultValue]);

  ClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <button ref={ref} className={` relative z-30 `}>
      <div >
        <div
          className={` group relative z-30 flex justify-between items-center gap-2 w-full px-4 md:pl-10 h-8 text-base text-[#6B5695] dark:text-[#B5A1DC] font-bold rounded-full md:bg-[#F9F6FF] md:dark:bg-[#3C3548] whitespace-nowrap`}
        >
          {swapPackageBalanceSwapped > 0 ? (
            <img
              src={`${getStaticURL()}/assets/images/icons/logo_${theme}.svg`}
              alt="metamask"
              className="h-8 mt-1 md:mt-0 absolute top-1/2 -translate-y-1/2 left-0"
            />
          ) : (
            <div className="h-8 mt-1 md:mt-0 absolute flex items-center justify-center top-1/2 -translate-y-1/2 left-0">
              <BnbIcon />
            </div>
          )}
          <div className="hidden md:block">
            {swapPackageBalanceSwapped > 0
              ? VINACHAIN_NETWORK.name
              : "BNB Chain"}
          </div>
          <div
            className={` ${isOpen ? "block" : "hidden"} absolute ${
              currentUser ? "right-1/2 translate-x-1/2" : "right-0"
            } top-12 w-[240px]  after:absolute after:w-full  after:h-7 after:-top-7 after:right-0`}
          >
            <div className=" flex flex-col relative overflow-hidden h-full w-full py-1 rounded-2xl bg-white dark:bg-gray900 border border-b-[#DCDCDC] dark:border-b-dark800 ">
              {/* {OptionsNetwork.map((lang, index) => {
                  return (
                    <div
                      key={index}
                      className={`link-header px-4 py-3 rounded-non `}
                      onClick={() => {
                        handleSwitchNetwork();
                      }}
                    >
                      {lang.label}
                    </div>
                  );
                })} */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="fixed z-20 w-screen h-screen top-0 left-0  bg-[#00000028]"></div> */}
    </button>
  );
};

const ClickOutside = (ref: any, onClickOutside: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};
