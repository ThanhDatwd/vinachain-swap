"use client";

import { ExpendMoreIcon } from "@/assets/icons/ExpendMoreIcon";
import { useTheme } from "@/hooks/useTheme";
import { THEME, getStaticURL } from "@/utils/constants";
import { CSSProperties, useEffect, useRef, useState } from "react";

export interface IOptions {
  label: string;
  value: string;
  imgName: string;
}

interface Props {
  valueSelected: IOptions;
  options: IOptions[];
  onchangeValue: (value: IOptions) => void;
  className?: string;
  containerStyle?: CSSProperties;
  classNameMore?: string;
  classNameMoreItem?: string;
}

export const StakingDropdown = (props: Props) => {
  const {
    valueSelected,
    options,
    onchangeValue,
    className,
    containerStyle,
    classNameMore,
    classNameMoreItem,
  } = props;
  const { theme } = useTheme();
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  ClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <div
      className={`relative z-0 inline-block text-right`}
      style={containerStyle}
      ref={ref}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={`flex justify-between items-center gap-2 w-full h-9 text-base text-blue950 dark:text-gray100 font-bold rounded-full bg-white900 dark:bg-[#2c2a28] pr-2 whitespace-nowrap ${className}`}
      >
        <img
          src={`${getStaticURL()}/assets/images/icons/${valueSelected?.imgName}_${theme}.svg`}
          alt="metamask"
          className="h-8"
        />
        <span className="hidden lg:inline">{valueSelected?.label}</span>
        <div className="px-[6px]">
          <ExpendMoreIcon
            color={theme === THEME.DARK ? "#fafafa" : "#0C0C4E"}
          />
        </div>
      </button>
      <div
        className={`absolute ${
          isOpen ? "" : "hidden"
        } z-20 right-0 top-12 rounded-2xl bg-white dark:bg-gray900 border border-b-[#DCDCDC] dark:border-b-dark800  overflow-hidden ${classNameMore}`}
      >
        {options?.map((option, i) => (
          <div
            key={i}
            onClick={() => {
              setIsOpen(false);
              onchangeValue(option);
            }}
            className={`relative flex items-center gap-2 min-w-[148px] px-5 py-3 text-base text-blue950 dark:text-gray100 hover:text-blue950 hover:dark:text-gray100 hover:bg-white900 dark:hover:bg-[#2c2a28] rounded-none font-bold cursor-pointer whitespace-nowrap ${classNameMoreItem}`}
          >
            {option.imgName && (
              <img
                src={`${getStaticURL()}/assets/images/icons/${valueSelected?.imgName}_${theme}.svg`}
                alt="metamask"
                className="h-8"
              />
            )}
            {option.label}
          </div>
        ))}
      </div>
    </div>
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
