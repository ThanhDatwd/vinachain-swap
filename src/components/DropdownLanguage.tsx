"use client";

import { CheckIcon } from "@/assets/icons/CheckIcon";
import { DropdownCheckIcon } from "@/assets/icons/DropdownCheckIcon";
import { EarthIcon } from "@/assets/icons/EarthIcon";
import { LanguageIcon } from "@/assets/icons/LanguageIcon";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { OptionsLanguage, THEME } from "@/utils/constants";
import { isDarkTheme } from "@/utils/theme";
import i18next, { changeLanguage } from "i18next";
import { FC, useEffect, useRef, useState } from "react";

interface Props {
  title?: string;
  defaultValue?: { label: string; value: string };
  className?: string;
  overlayBgStyle?: string;
  modalLanguageStyle?: string;
  languageItemStyle?: string;
}

export const DropdownLanguage: FC<Props> = ({
  defaultValue,
  title,
  className,
  overlayBgStyle = "bg-opacity-0",
  modalLanguageStyle,
  languageItemStyle = "py-2",
}) => {
  const ref = useRef(null);
  const [currentLang, setLangCurrentLang] = useState(i18next.language);
  const { currentUser } = useAuth();
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
    <button className="relative" ref={ref}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <EarthIcon color={theme === THEME.DARK ? "#B5A1DC" : "#6b5695"} />
      </div>
      <div
        className={` ${isOpen ? "block" : "hidden"} absolute ${
          currentUser ? "right-1/2 translate-x-1/2" : "right-0"
        } top-12 w-[240px]  after:absolute after:w-full  after:h-7 after:-top-7 after:right-0`}
      >
        <div className=" flex flex-col relative overflow-hidden h-full w-full py-1 rounded-2xl bg-white dark:bg-gray900 border border-b-[#DCDCDC] dark:border-b-dark800 ">
          {OptionsLanguage.map((lang, index) => {
            return (
              <div
                key={index}
                className={`px-4 py-3 rounded-none flex items-center justify-between text-[#1D0F3A] dark:text-[#E8DEFD]  ${
                  currentLang === lang.value
                    ? "bg-[#F9F6FF] dark:bg-[#3C3548] "
                    : "hover:bg-[#F3EEFF] hover:dark:bg-[#2D2738]"
                }`}
                onClick={() => {
                  changeLanguage(lang.value);
                  setLangCurrentLang(lang.value);
                  localStorage.setItem("locale", lang.value);
                }}
              >
                <span>{lang.label}</span>
                {currentLang === lang.value && <DropdownCheckIcon />}
              </div>
            );
          })}
        </div>
      </div>
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
