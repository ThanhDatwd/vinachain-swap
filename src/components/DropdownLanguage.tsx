"use client";

import { LanguageIcon } from "@/assets/icons/LanguageIcon";
import { useTheme } from "@/hooks/useTheme";
import { isDarkTheme } from "@/utils/theme";
import { FC, useEffect, useRef, useState } from "react";

interface Props {
  title?: string;
  defaultValue?: { label: string; value: string };
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  className?: string;
  overlayBgStyle?: string;
  modalLanguageStyle?: string;
  languageItemStyle?: string;
}

export const DropdownLanguage: FC<Props> = ({
  defaultValue,
  title,
  options,
  onChange,
  className,
  overlayBgStyle = "bg-opacity-0",
  modalLanguageStyle,
  languageItemStyle = "py-2",
}) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme } = useTheme();
  const [chosen, setChosen] = useState<{
    label: string;
    value: string;
  }>();
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
    <div
      className="flex justify-center md:inline-block text-left w-full md:relative group"
      ref={ref}
    >
      <div className="">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`inline-flex w-full  gap-x-1.5 rounded-lg px-1.5 py-1 text-sm whitespace-nowrap ${className}`}
        >
          <div className="group-hover:rotate-12 transition-all duration-300">
            <LanguageIcon color={isDarkTheme(theme) ? "#ffffff" : "#000000"} />
          </div>
          {defaultVal?.label}
        </button>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed inset-0 ${overlayBgStyle} bg-white transition-opacity`}
        />
      )}
      <div
        className={`absolute py-1 shadow-lg top-0 md:top-10 right-0 bg-white dark:bg-[#222327] transition-all duration-300 focus:outline-none ${
          isOpen
            ? "translate-x-0 shadow-soft-xl"
            : "-translate-x-[-100%] md:-translate-x-0 hidden"
        } ${modalLanguageStyle}`}
      >
        {options.map((options, i) => (
          <div
            key={i}
            onClick={() => {
              if (chosen?.label !== options.label) {
                onChange(options.value);
                setChosen(options);
                setIsOpen(false);
                setDefaultVal({ value: "", label: "" });
              }
            }}
            className={`block px-4 text-sm ${
              chosen?.label !== options.label
                ? "cursor-pointer hover:bg-primary dark:hover:bg-secondaryDark text-dark dark:text-[#FAFAFA]"
                : "dark:text-[#FAFAFA] bg-primary dark:bg-secondaryDark "
            } ${languageItemStyle} `}
          >
            {options.label}
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
