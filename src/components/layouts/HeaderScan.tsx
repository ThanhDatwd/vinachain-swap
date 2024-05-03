import { MenuIcon } from "@/assets/icons/MenuIcon";
import { UserIcon } from "@/assets/icons/UserIcon";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { UserNavLink, VinaScanHeader } from "@/utils/constants";
import { isDarkTheme } from "@/utils/theme";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LogoScan } from "../LogoScan";
import { MenuDropdownMobile } from "../MenuDropdownMobile";
import { FixedHeader } from "./FixedHeader";
import NavLink from "./NavLink";
import NavLinkMore from "./NavLinkMore";
import NavLinkUser from "./NavLinkUser";
import SignOutIcon from "@/assets/icons/SignOutIcon";

export default function HeaderScan() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<number | null>(null);
  const path = usePathname();
  const { currentUser, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative bg-white dark:bg-gray900">
      <FixedHeader />
      <nav
        className="relative py-3 md:py-0 md:pt-12  z-40   container-xxl flex flex-wrap items-center transition-all shadow-none duration-250 ease-soft-in lg:flex-nowrap lg:justify-start"
        navbar-scroll="true"
      >
        <div
          className="flex items-center px-2 justify-between  grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto relative"
          id="navbar"
        >
          <Link href="/scan" className="flex items-center gap-2">
            <LogoScan />
          </Link>
          <div className="flex items-center">
            <div className="lg:flex items-center hidden ">
              <Link
                href={"/"}
                className={`inline-flex h-10 items-center px-3 py-2 text-base font-medium hover:text-sky-600 dark:hover:text-scanDark ${
                  path === "/" ? "text-sky-600 dark:text-scanDark" : ""
                } focus:outline-none`}
              >
                {t("home")}
              </Link>
              {currentUser && (
                <Link
                  href={"/swap"}
                  className={`inline-flex h-10 items-center px-3 py-2 text-base font-medium hover:text-sky-600 dark:hover:text-scanDark ${
                    path === "/swap" ? "text-sky-600" : ""
                  } focus:outline-none`}
                >
                  {t("swap")}
                </Link>
              )}
              {VinaScanHeader.map((item, index) => (
                <NavLink
                  key={index}
                  title={t(`vinaScan.header.${item.footerItemKey}.title`)}
                  className="w-56 left-0 top-8"
                  options={item.footerList.map((option) => {
                    return {
                      label: t(option.label),
                      children: (
                        <div>
                          {option.label ? (
                            <Link
                              href={option.link}
                              className="group block min-w-[200px] px-4 py-1.5 text-sm bg-theme bg-theme-hover rounded-md  w-full text-left"
                            >
                              <div className="rounded-md w-full group-hover:text-blue dark:group-hover:text-scanDark">
                                {t(
                                  `vinaScan.header.${item.footerItemKey}.${option.label}`
                                )}
                              </div>
                            </Link>
                          ) : (
                            <hr className="my-2" />
                          )}
                        </div>
                      ),
                      value: option.link,
                    };
                  })}
                />
              ))}
              <NavLinkMore />
              <div className="border h-3 mx-1 w-[1px] border-gray-400 " />
              <div className="flex items-center gap-4  text-base font-medium">
                {currentUser ? (
                  <NavLinkUser
                    title={currentUser?.username}
                    options={UserNavLink.map((option) => {
                      return {
                        label: t(option.label),
                        children: (
                          <div>
                            {option.label ? (
                              <Link
                                href={option.link}
                                className="block px-4 min-w-[200px] py-1.5 text-sm bg-theme bg-theme-hover rounded-md  w-full text-left text-theme"
                              >
                                <div className=" rounded-md w-full">
                                  {t(`vinaScan.header.user.${option.label}`)}
                                </div>
                              </Link>
                            ) : (
                              <hr className="my-2" />
                            )}
                          </div>
                        ),
                        value: option.link,
                      };
                    })}
                  />
                ) : (
                  <div className="px-2">
                    <Link
                      href="/login"
                      className={`flex items-center hover:text-sky-600 dark:hover:text-scanDark gap-2 cursor-pointer whitespace-nowrap ${
                        path === "/login"
                          ? "text-sky-600 dark:text-scanDark"
                          : ""
                      }`}
                    >
                      <UserIcon className="!w-5 !h-5" />{" "}
                      {t("vinaScan.login.title")}
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="lg:hidden block">
              <div className="flex items-center gap-4  text-base font-medium  hover:text-sky-600 dark:hover:text-scanDark">
                {!currentUser && (
                  <Link
                    href="/login"
                    className="flex items-center gap-2 cursor-pointer whitespace-nowrap "
                  >
                    <UserIcon className="!w-5 !h-5" />{" "}
                    {t("vinaScan.login.title")}
                  </Link>
                )}
                <div
                  className=" border rounded-md p-2 "
                  onClick={toggleMenu}
                >
                  <MenuIcon color={isDarkTheme(theme) ? "#fff" : "#000"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-screen overflow-hidden">
        <div
          className={`transition-all duration-500 overflow-hidden ease-in-out ${
            !isMenuOpen ? "max-h-0" : "max-h-screen"
          }`}
        >
          <div className={`h-fit`}>
            <Link
              href={"/"}
              className="inline-flex w-full h-10 items-center px-3 py-2 text-base font-medium hover:text-sky-600 dark:hover:text-scanDark focus:outline-none"
            >
              {t("home")}
            </Link>
            {currentUser && (
              <Link
                href={"/swap"}
                className={`inline-flex h-10 w-full items-center px-3 py-2 text-base font-medium hover:text-sky-600 dark:hover:text-scanDark ${
                  path === "/swap" ? "text-sky-600" : ""
                } focus:outline-none`}
              >
                {t("swap")}
              </Link>
            )}
            {VinaScanHeader.map((item, index) => (
              <MenuDropdownMobile
                key={index}
                isActive={currentOption === index}
                onClickOpen={() => setCurrentOption(index)}
                onClickClose={() => setCurrentOption(null)}
                title={t(`vinaScan.header.${item.footerItemKey}.title`)}
                options={item.footerList.map((option) => {
                  return {
                    label: t(option.label),
                    children: (
                      <div>
                        {option.label ? (
                          <Link
                            href={option.link}
                            className="block px-4 py-1.5 text-sm bg-theme bg-theme-hover rounded-md  w-full text-left"
                          >
                            <div className=" rounded-md w-full">
                              {t(
                                `vinaScan.header.${item.footerItemKey}.${option.label}`
                              )}
                            </div>
                          </Link>
                        ) : (
                          <hr className="my-2" />
                        )}
                      </div>
                    ),
                    value: option.link,
                  };
                })}
              />
            ))}
            {currentUser && (
              <MenuDropdownMobile
                isActive={currentOption == 99}
                onClickOpen={() => setCurrentOption(99)}
                onClickClose={() => setCurrentOption(null)}
                // <UserIcon className="!w-5 !h-5" />
                title={
                  <div className="flex gap-2 items-center">
                    <UserIcon className="!w-5 !h-5" />
                    {currentUser?.username}
                  </div>
                }
                options={UserNavLink.map((option) => {
                  return {
                    label: t(option.label),
                    children: (
                      <div>
                        {option.label ? (
                          <Link
                            href={option.link}
                            className="block px-4 py-1.5 text-sm bg-theme bg-theme-hover rounded-md  w-full text-left"
                          >
                            <div className=" rounded-md w-full">
                              {t(`vinaScan.header.user.${option.label}`)}
                            </div>
                          </Link>
                        ) : (
                          <hr className="my-2" />
                        )}
                        {option.link === "/logout" && (
                          <button
                            className="w-full flex items-center justify-center hover:bg-scanDark hover:bg-opacity-10 gap-2 py-2 px-4 leading-[1] border-theme text-blue dark:text-scanDark rounded-lg text-[12.5px] cursor-pointer"
                            onClick={logout}
                          >
                            <SignOutIcon /> Sign out
                          </button>
                        )}
                      </div>
                    ),
                    value: option.link,
                  };
                })}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
