import Link from "next/link";
import { ReactNode, useRef, useState } from "react";
// import { LogoScan } from "../LogoScan";
import { EarthIcon } from "@/assets/icons/EarthIcon";
import { MoonNightIcon } from "@/assets/icons/MoonNightIcon";
import { useTheme } from "@/hooks/useTheme";
import {
  SMART_CHAIN_OPTIONS,
  StakingHeader,
  THEME,
  WALLET_INFO_OPTIONS,
  getStaticURL,
} from "@/utils/constants";
import { useTranslation } from "react-i18next";
import { IOptions, StakingDropdown } from "../StakingDropdown";

export const HeaderStaking = () => {
  const { theme, changeTheme } = useTheme();
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState<{ [key: number]: boolean }>();
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

  return (
    <div>
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
                  {StakingHeader.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => setSelected(index)}
                      onMouseEnter={() => setIsHovered({ [index]: true })}
                      onMouseLeave={() => setIsHovered(undefined)}
                      className={`link-header relative ${
                        selected === index &&
                        "text-blue900 dark:text-orange400 font-bold hover:text-blue900"
                      } cursor-pointer`}
                    >
                      <Link href={item.link}>
                        {t(`staking.header.${item.label}`)}
                      </Link>
                      <span className="absolute -bottom-2 left-0 h-2 w-full" />
                      {isHovered?.[index] && item.itemList.length > 0 && (
                        <div
                          className={`absolute left-0 top-12 w-[240px] py-1 rounded-2xl bg-white dark:bg-gray900 border border-b-[#DCDCDC] dark:border-b-dark800`}
                          onMouseEnter={() => setIsHovered({ [index]: true })}
                          onMouseLeave={() => setIsHovered(undefined)}
                        >
                          <ul className="flex flex-col">
                            {item.itemList.map((item, index) => (
                              <Link
                                href={item.link}
                                key={index}
                                className="link-header px-4 py-3 rounded-none"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </>
              </ul>
            </div>
            <div className="flex gap-4 items-center text-base text-blue950 dark:text-orange-400 font-bold">
              <div className="hidden lg:flex items-center gap-2 min-w-fit px-2 py-1 rounded-full bg-white900 dark:bg-[#2c2a28]">
                <span className="font-normal">Balance:</span>
                $0.01 VPC
              </div>
              <button>
                <EarthIcon
                  color={theme === THEME.DARK ? "#FF964A" : "#2B2B87"}
                />
              </button>
              <button
                onClick={() =>
                  changeTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK)
                }
              >
                <MoonNightIcon
                  color={theme === THEME.DARK ? "#FF964A" : "#2B2B87"}
                />
              </button>
              <button
                className={`flex justify-between items-center gap-2 w-full h-9 text-base text-blue950 dark:text-gray100 font-bold rounded-full bg-white900 dark:bg-[#2c2a28] lg:pr-2 whitespace-nowrap`}
              >
                <img
                  src={`${getStaticURL()}/assets/images/icons/logo_${theme}.svg`}
                  alt="metamask"
                  className="h-8"
                />
                <span className="hidden lg:inline">Vinachain</span>
              </button>
              <button
                className={`flex justify-between items-center gap-2 w-full h-9 text-base text-blue950 dark:text-gray100 font-bold rounded-full bg-white900 dark:bg-[#2c2a28] lg:pr-2 whitespace-nowrap`}
              >
                <img
                  src={`${getStaticURL()}/assets/images/icons/wallet.svg`}
                  alt="metamask"
                  className="h-8"
                />
                <span className="hidden lg:inline">0x...87C&</span>
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
      {StakingHeader[selected] && (
        <div className="bg-white dark:bg-gray900">
          <div className=" relative container-xxl w-full flex flex-wrap items-center lg:pl-[316px]">
            <ul className="flex items-center gap-2 w-full">
              {StakingHeader[selected].itemList.map((item, index) => (
                <li
                  onClick={() => setSelectedCurrency(index)}
                  key={index}
                  className={`relative h-10 flex-1 lg:flex-none w-[143px] flex items-center justify-center text-base ${
                    selectedCurrency === index
                      ? "text-blue500 font-bold after:absolute after:w-full after:h-1 after:rounded-full after:bg-blue500 after:bottom-0 after:left-0 after:right-0"
                      : "text-blue800 hover:text-blue500"
                  }`}
                >
                  <Link href={item.link} className="hover:text-blue500">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
