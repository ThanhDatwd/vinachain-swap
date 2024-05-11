"use client";

import { changeLanguage } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { CloseIcon } from "@/assets/icons/CloseIcon";
import { LanguageIcon } from "@/assets/icons/LanguageIcon";
import { MenuIcon } from "@/assets/icons/MenuIcon";
import { VinachainHeader, OptionsLanguage, debounce, getStaticURL } from "@/utils/constants";
import { isDarkTheme } from "@/utils/theme";
import { Tooltip } from "../Tootlip";
import { DropdownLanguage } from "../DropdownLanguage";
import { Logo } from "../Logo";
import { SearchInput } from "../SearchInput";
import { ToggleThemeButton } from "../ToggleThemeButton";
import { useTheme } from "@/hooks/useTheme";
import { MenuDropdown } from "../MenuDropdown";
import { SearchInBrowser } from "../SearchInBrowser";

const Header = ({
  tootlipStyle,
  headerStyle,
}: {
  tootlipStyle?: string;
  headerStyle?: string;
}) => {
  const { t } = useTranslation();
  const [isShow, setIsShow] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { i18n } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="w-full fixed top-0 z-30">
      <nav
        className={`bg-white dark:bg-[#222327] max-w-[1504px] mx-auto flex flex-wrap items-center pl-4 md:py-6 transition-all shadow-none duration-250 ease-soft-in border-b lg:flex-nowrap lg:justify-start ${headerStyle}`}
        navbar-scroll="true"
      >
        <div className="flex items-center justify-between w-full ">
          <div
            className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto relative"
            id="navbar"
          >
            <img
              className="w-7 h-7"
              src={`${getStaticURL()}/assets/images/logo_${theme}.svg`}
              alt=""
            />
            <div className="lg:flex items-center hidden ">
              {VinachainHeader.map((item, index) => (
                <Tooltip
                  key={index}
                  title={`vinaChain.header.${item.footerItemKey}`}
                  options={item.footerList}
                  onChange={(value) => {}}
                  tooltipStyle={tootlipStyle}
                />
              ))}
            </div>
          </div>
          <div className="lg:flex justify-end w-full hidden items-center z-20 pr-3">
            <SearchInBrowser
              handleBlur={() => {
                setIsShow(true);
              }}
              handleFocus={() => {
                setIsShow(false);
              }}
            />

            <div
              className={`ease-out duration-300 ${
                isShow ? "w-fit" : "w-[0px]"
              } xl:w-fit flex items-center `}
            >
              <div className="mr-2">
                <ToggleThemeButton />
              </div>
              <div className="flex items-center  w-[56px]">
                <div className="max-w-fit">
                  {/* <DropdownLanguage
                    defaultValue={{
                      label: `${i18n.language.toUpperCase()}`,
                      value: "language",
                    }}
                    className="px-0  justify-end"
                    options={OptionsLanguage}
                    onChange={(value) => changeLanguage(value)}
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden p-2" onClick={toggleMenu}>
            <MenuIcon color={isDarkTheme(theme) ? "#fff" : "#000"} />
          </div>
        </div>
      </nav>
      <div className="relative w-full md:w-[38%] lg:w-[28%] xl:w-auto h-full">
        <div
          className={`z-20 max-w-auto lg:hidden fixed inset-y-0 top-0 px-2 left-0 flex-wrap items-center justify-between overflow-y-auto border-0 p-0 shadow-none transition-all duration-300 w-full bg-white dark:bg-black ${
            isMenuOpen
              ? "translate-x-0 shadow-soft-xl"
              : "-translate-x-[-100%] md:-translate-x-[-200%]"
          } `}
        >
          <div className="flex justify-between mt-4">
            <ToggleThemeButton />
            <div className="p-4" onClick={toggleMenu}>
              <CloseIcon color={isDarkTheme(theme) ? "#fff" : "#000"} />
            </div>
          </div>
          <div className="px-3 mt-3">
            <SearchInBrowser />
          </div>
          <div className="p-4 md:p-8 my-10 flex flex-col gap-6 md:gap-6">
            {VinachainHeader.map((item, index) => (
              <MenuDropdown
                key={index}
                title={`vinaChain.header.${item.footerItemKey}`}
                options={item.footerList}
              />
            ))}
          </div>

          <div className="flex flex-col gap-1 items-center mt-[120px]">
            <LanguageIcon color={isDarkTheme(theme) ? "#ffffff" : "#000000"} />
            {/* <DropdownLanguage
              defaultValue={{
                label: `Language ${i18n.language.toUpperCase()}`,
                value: "language",
              }}
              className="px-0"
              options={OptionsLanguage}
              onChange={(value) => changeLanguage(value)}
              overlayBgStyle="bg-opacity-75"
              modalLanguageStyle="absolute top-0 w-4/5 z-50 h-screen right-0 z-50 bg-white dark:bg-primaryDark"
              languageItemStyle="py-6"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
