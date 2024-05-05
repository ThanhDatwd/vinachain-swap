"use client";

import { DropdownCheckIcon } from "@/assets/icons/DropdownCheckIcon";
import { CSSProperties, FC, useEffect, useRef, useState } from "react";

interface Props {
  title?: string;
  defaultValue?: { label: string; value: string };
  reverse?: boolean;
  options: { label: string; value: string }[] | undefined;
  onChange: (value: string) => void;
  className?: string;
  containerStyle?: CSSProperties;
  classNameMore?: string;
  classNameMoreItem?: string;
}

export const Dropdown: FC<Props> = ({
  defaultValue,
  title,
  reverse = false,
  options,
  onChange,
  className,
  containerStyle,
  classNameMore= "right-0",
  classNameMoreItem,
}) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [chosen, setChosen] = useState<string>("");
  const [defaultVal, setDefaultVal] = useState<{
    label: string;
    value: string;
  }>();
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (defaultValue) {
      !reverse && onChange(defaultValue?.value as string);
      setDefaultVal(defaultValue);
    }
  }, [defaultValue]);

  MouseOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <div
      className={`relative z-0 inline-block text-right`}
      style={containerStyle}
      ref={ref}
    >
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`inline-flex w-full text-xs justify-between items-center gap-x-1.5 bg-theme border-2 border-purple300 dark:border-purple700 text-secondary dark:text-secondaryDark rounded-[4px] px-2 py-1  whitespace-nowrap ${className}`}
        >
          {(defaultVal?.label as string) || chosen || title || "Options"}

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
        className={`absolute ${isOpen ? "" : "hidden"} ${
          reverse ? "bottom-[120%] w-full" : "w-80"
        }  z-20 mt-2 origin-top-right rounded-md focus:outline-none border  border-[#bdc5d133] px-1 shadow-inner bg-[#e9ecef] ${classNameMore}`}
      >
        <div className="py-1">
          {options?.map((options, i) => (
            <div
              key={i}
              onClick={() => {
                onChange(options.value);
                setChosen(options.label);
                setIsOpen(false);
                setDefaultVal({ value: "", label: "" });
              }}
              className={`relative px-4 text-xs flex  items-center justify-center gap-1 text-left  cursor-pointer text-dark900 hover:text-[#F5F5F5] hover:bg-[#589beb] rounded-md ${classNameMoreItem}`}
              onMouseMove={() =>
                options.value === defaultValue?.value && setIsHover(true)
              }
              onMouseLeave={() =>
                options.value === defaultValue?.value && setIsHover(false)
              }
            >
              {options.value === defaultValue?.value && (
                <div className="absolute left-1 top-1/2 -translate-y-1/2 text-[#ffff]">
                  <DropdownCheckIcon
                    width={16}
                    height={16}
                    color={isHover ? "#FAFAFA" : "#212529"}
                  />
                </div>
              )}
              {options.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MouseOutside = (ref: any, onClickOutside: () => void) => {
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

const ClickOutside = (ref: any, onClickOutside: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};
