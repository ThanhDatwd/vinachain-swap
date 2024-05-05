import Link from "next/link";
import { MutableRefObject, useEffect, useState } from "react";
// import { LogoScan } from "../LogoScan";
import { EarthIcon } from "@/assets/icons/EarthIcon";
import { MoonNightIcon } from "@/assets/icons/MoonNightIcon";
import { useTheme } from "@/hooks/useTheme";
import {
  LIST_MENU,
  SMART_CHAIN_OPTIONS,
  THEME,
  WALLET_INFO_OPTIONS,
  getStaticURL,
} from "@/utils/constants";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { IOptions } from "../StakingDropdown";
import { WalletIcon } from "@/assets/icons/WalletIcon";
import { SunIcon } from "@/assets/icons/SunIcon";
import { isDarkTheme } from "@/utils/theme";

export const HeaderStaking = ({
  menuBarRef,
}: {
  menuBarRef: MutableRefObject<any>;
}) => {
  const { theme, changeTheme } = useTheme();
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);
  const [valueSmartChain, setValueSmartChain] = useState<IOptions>(
    SMART_CHAIN_OPTIONS[0]
  );
  const [selectedCurrency, setSelectedCurrency] = useState(0);
  const [walletInfo, setWalletInfo] = useState<IOptions>(
    WALLET_INFO_OPTIONS[0]
  );

  const handleChange = (value: IOptions) => {
    setValueSmartChain(value);
  };

  const handleChangeWallet = (value: IOptions) => {
    setWalletInfo(value);
  };

  const [childrenMenu, setChildrenMenu] = useState<any>([]);

  const pathname = usePathname();
  useEffect(() => {
    if (pathname) {
      const menu = LIST_MENU.find((item) => item.links.includes(pathname));
      setChildrenMenu(menu?.itemList);
    }
  }, [pathname]);

  return (
    <>
      <div className="py-4 border-b border-b-[#DCDCDC] dark:border-b-dark800 bg-white dark:bg-gray900 shadow-2xl">
        <nav
          className="w-full relative z-40 px-4 container-xxl flex flex-wrap items-center"
          navbar-scroll="true"
        >
          <div className="flex items-center justify-between w-full">
            <div
              className="flex items-center gap-8 relative"
              //   id="navbar"
            >
              <Link href="/scan" className="flex items-center gap-2">
                <img
                  src={`${getStaticURL()}/assets/images/logo_scan_${theme}.svg`}
                  alt="metamask"
                  className="h-9"
                />
              </Link>
              <ul className="hidden lg:flex items-center gap-6 relative">
                <>
                  {LIST_MENU.map((item, index) => (
                    <li
                      key={index}
                      className={` relative group  cursor-pointer`}
                    >
                      <Link
                        href={item.linkDefault}
                        className={`link-header ${
                          item.links.includes(pathname) &&
                          "text-blue900 dark:text-orange400 font-bold hover:text-blue900"
                        }`}
                      >
                        {t(`staking.header.${item.label}`)}
                      </Link>
                      <span className="absolute -bottom-2 left-0 h-2 w-full" />
                      <div
                        className={`${
                          item.itemList.length <= 0
                            ? "hidden"
                            : "hidden group-hover:block"
                        }  absolute left-0 top-12 w-[240px]  after:absolute after:w-full after:h-6 after:-top-6`}
                      >
                        <div className="flex flex-col relative overflow-hidden h-full w-full py-1 rounded-2xl bg-white dark:bg-gray900 border border-b-[#DCDCDC] dark:border-b-dark800 ">
                          {item.itemList.map((item, index) => (
                            <Link
                              href={item.link}
                              key={index}
                              className="link-header px-4 py-3 rounded-none "
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              </ul>
            </div>
            <div className="flex gap-4 items-center text-base text-[#6B5695] dark:text-[#B5A1DC] font-bold">
              <div className="hidden lg:flex items-center gap-2 min-w-fit px-2 py-1 rounded-full bg-[#F9F6FF] dark:bg-[#3C3548]">
                <span className="font-normal">Balance:</span>
                $0.01 VPC
              </div>
              <button>
                <EarthIcon
                  color={theme === THEME.DARK ? "#B5A1DC" : "#B5A1DC"}
                />
              </button>
              <button
                onClick={() =>
                  changeTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK)
                }
              >
                {isDarkTheme(theme) ? (
                  <SunIcon
                    color={theme === THEME.DARK ? "#DA6C1D" : "#0784c3"}
                    className="w-4 h-4"
                  />
                ) : (
                  <MoonNightIcon
                    color={theme === THEME.DARK ? "#6B5695" : "#6B5695"}
                  />
                )}
              </button>
              <button
                className={` relative hidden lg:flex justify-between items-center gap-2 w-full px-4 lg:pl-10 h-9 text-base text-[#6B5695] dark:text-[#B5A1DC] font-bold rounded-full bg-[#F9F6FF] dark:bg-[#3C3548] whitespace-nowrap`}
              >
                <img
                  src={`${getStaticURL()}/assets/images/icons/logo_${theme}.svg`}
                  alt="metamask"
                  className="h-8 absolute top-1/2 -translate-y-1/2 left-0"
                />
                <span> Vinachain</span>
              </button>
              <button
                className={`relative flex justify-between items-center gap-2 w-full px-4 pl-10 h-9 text-base text-[#6B5695] dark:text-[#B5A1DC] font-bold rounded-full bg-[#F9F6FF] dark:bg-[#3C3548]  whitespace-nowrap`}
              >
                <div className=" absolute  top-1/2 -translate-y-1/2 left-0 text-[#3B3BFC] dark:text-[#FF8911]">
                  <WalletIcon />
                </div>
                0x...87C&
              </button>
              {/* <StakingDropdown
                valueSelected={valueSmartChain}
                options={SMART_CHAIN_OPTIONS}
                onchangeValue={handleChange}
              />
              <StakingDropdown
                valueSelected={walletInfo}
                options={WALLET_INFO_OPTIONS}
                onchangeValue={handleChangeWallet}
              /> */}
            </div>
          </div>
        </nav>
      </div>
      {LIST_MENU.find((item) => item.links.includes(pathname)) && (
        <div className="bg-white dark:bg-gray900">
          <div className=" relative container-xxl w-full flex flex-wrap items-center lg:pl-[316px]">
            <ul className="flex items-center gap-2 w-full">
              {LIST_MENU.find((item) =>
                item.links.includes(pathname)
              )?.itemList.map((item: any, index: number) => (
                <Link
                  href={item.link}
                  className={`hover:text-[#7E4DE0]`}
                  key={index}
                >
                  <li
                    className={`relative h-10 flex-1 lg:flex-none w-[143px] flex items-center justify-center text-base ${
                      pathname === item.link
                        ? "text-[#7E4DE0] font-bold after:absolute after:w-full after:h-1 after:rounded-full after:bg-[#7E4DE0] after:bottom-0 after:left-0 after:right-0"
                        : "text-[#6B5695] hover:text-[#7E4DE0]"
                    }`}
                  >
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div
        id="menu-bar"
        ref={menuBarRef}
        className="fixed bottom-0 left-0 right-0 lg:hidden bg-white dark:bg-black z-50 px-4 border-t !border-t-[#DCDCDC] dark:!border-t-dark800"
      >
        <div className="flex justify-between items-center">
          {LIST_MENU.map((item, index) => (
            <div
              key={index}
              className={`flex-1 py-2 relative ${
                item.links.includes(pathname) ?
                "hover:text-blue900 opacity-100":"opacity-50"
              } cursor-pointer text-blue900 dark:text-orange400 font-bold  `}
            >
              <Link
                key={index}
                href={item.linkDefault}
                className="flex flex-col items-center gap-1"
              >
                {t(`staking.header.${item.label}`)}
                <img
                  src={`${getStaticURL()}/assets/images/icons/${
                    item.iconName
                  }_${theme}.svg`}
                  alt="metamask"
                  className="h-6"
                  // color="red"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
