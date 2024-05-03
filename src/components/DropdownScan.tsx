"use client";

import React, { FC, useEffect, useRef, useState } from "react";

interface Props {
  title?: string;
  defaultValue?: {
    label: React.ReactNode;
    value: string;
    children?: React.ReactNode;
  };
  reverse?: boolean;
  fit?: boolean;
  options: {
    label: React.ReactNode;
    value: string;
    children?: React.ReactNode;
  }[];
  onChange: (value: string) => void;
  className?: string;
  classNameOption?: string;
  bg?: string;
  hideArrow?: boolean;
}

export const DropdownScan: FC<Props> = ({
  defaultValue,
  title,
  reverse = false,
  fit = false,
  options,
  onChange,
  className,
  bg = "bg-gray-200",
  classNameOption,
  hideArrow = false,
}) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [chosen, setChosen] = useState<any>();
  const [defaultVal, setDefaultVal] = useState<{
    label: React.ReactNode;
    value: string;
    children?: React.ReactNode;
  } | null>(null);

  useEffect(() => {
    if (defaultValue) {
      setDefaultVal(defaultValue);
    }
  }, [defaultValue]);

  ClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <div className="relative z-20 inline-block w-full" ref={ref}>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`flex w-full ${
            fit ? "justify-between" : "justify-center"
          }  gap-x-1.5 rounded-lg ${bg} p-1 text-md border-2 focus:border-gray-300 ${
            isOpen ? "bg-gray-200 dark:bg-gray700" : "border-transparent"
          } border-transparent whitespace-nowrap ${className}`}
        >
          {options.find((item) => item.value === chosen)?.label ||
            defaultVal?.label ||
            title ||
            "Options"}

          {!hideArrow && (
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
          )}
        </button>
      </div>
      <div
        className={
          `absolute dropdown-list ${isOpen ? "show" : ""} right-0 ${
            reverse ? "bottom-[120%] w-full" : ""
          }  z-40 mt-2 origin-top-right rounded-md ${bg} shadow-gray-600 px-2 py-1 shadow-sm focus:outline-none ` +
            classNameOption ?? ""
        }
      >
        <div className="">
          {options.map((options, i) => (
            <div
              key={i}
              onClick={() => {
                onChange(options.value);
                setChosen(options.value);
                setIsOpen(false);
                setDefaultVal(null);
              }}
              className={`text-left block text-sm cursor-pointer  ${
                chosen === options.value ? "text-[#448ae6]" : ""
              }`}
            >
              {options.children || options.label}
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
