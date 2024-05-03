"use client";

import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  title?: string;
  defaultValue?: { label: string; value: string };
  reverse?: boolean;
  options: { label: string; value: string }[];
  onChange: (value: {label: string, value:string}) => void;
  className?: string;
  containerStyle?: CSSProperties;
}

export const DropdownContact: FC<Props> = ({
  defaultValue,
  title,
  reverse = false,
  options,
  onChange,
  className,
  containerStyle,
}) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [defaultVal, setDefaultVal] = useState<{
    label: string;
    value: string;
  }>();

  useEffect(() => {
    if (defaultValue) {
      !reverse && onChange(defaultValue);
      setDefaultVal(defaultValue);
    }
  }, [defaultValue]);

  ClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <div
      className={`relative inline-block text-right`}
      style={containerStyle}
      ref={ref}
    >
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`inline-flex w-full justify-between gap-x-1.5 rounded-[4px] bg-white dark:bg-[#111] border border-[#DCDCDC] dark:border-[#222] px-3 py-2 text-sm shadow-sm whitespace-nowrap ${className}`}
        >
          {t(`vinaScan.contactUs.${(defaultVal?.label as string) || title}`)}
          <svg
            className="-mr-1 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`absolute ${isOpen ? "" : "hidden"} right-0 ${
          reverse ? "bottom-[120%] w-full" : "w-40"
        }  z-10 mt-2 origin-top-right rounded-md bg-gray-50 dark:bg-[#111111] shadow-lg focus:outline-none`}
      >
        <div className="py-1">
          {options.map((options, i) => (
            <div
              key={i}
              onClick={() => {
                onChange(options);
                setIsOpen(false);
                setDefaultVal({ value: "", label: "" });
              }}
              className="block px-4 py-2 text-left text-sm cursor-pointer hover:bg-primary dark:hover:bg-secondaryDark hover:text-white"
            >
              {t(`vinaScan.contactUs.${options.label}`)}
            </div>
          ))}
        </div>
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
