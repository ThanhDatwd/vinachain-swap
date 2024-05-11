import { ChevronDownIcon } from "@/assets/icons/ChevronDownIcon";
import { LogoMobile } from "@/assets/icons/LogoMobile";
import { MoonNightIcon } from "@/assets/icons/MoonNightIcon";
import SignOutIcon from "@/assets/icons/SignOutIcon";
import { SunIcon } from "@/assets/icons/SunIcon";
import { UserIcon } from "@/assets/icons/UserIcon";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { useConnectorByName } from "@/pkgs/wallet-connector/connector";
import { useWalletContext } from "@/pkgs/wallet-connector/context";
import { LIST_MENU, THEME, getStaticURL } from "@/utils/constants";
import { formatTrxIdSwap } from "@/utils/formatTrxId";
import { isDarkTheme } from "@/utils/theme";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MutableRefObject } from "react";
import { useTranslation } from "react-i18next";
import { DropdownLanguage } from "../DropdownLanguage";
import { DropdownNetwork } from "../DropdownNetwork";
import { ModalConnectWalet } from "../ModalConnectWalet";

export const HeaderStaking = ({
  menuBarRef,
}: {
  menuBarRef: MutableRefObject<any>;
}) => {
  const { theme, changeTheme } = useTheme();
  const { logout, currentUser } = useAuth();
  const { t } = useTranslation();
  const { availableAmount, isUserBuyPlan } = useAuth();
  const pathname = usePathname();
  const { setOpenModalConnectWallet, connectorName } = useWalletContext();
  const {
    hook,
    connector: { provider },
  } = useConnectorByName(connectorName);
  const account = hook.useAccount();
  const onVerifySuccess = (account: string) => {
    // verifyFormik.setFieldValue("accountAddress", account);
  };

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
              <Link href="/" className="items-center gap-2 flex">
                <img
                  src={`${getStaticURL()}/assets/images/logo_scan_${theme}.svg`}
                  alt="metamask"
                  className="h-9 hidden md:block"
                />
                <div className=" block md:hidden text-[#3B3BFC] dark:text-[#FF8911]">
                  <LogoMobile />
                </div>
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
                          "text-blue900 dark:text-[#FF8911] font-bold hover:text-blue900 whitespace-nowrap"
                        }`}
                      >
                        {`${t(`staking.header.${item.label}`)}`}
                      </Link>
                      <span className="absolute -bottom-2 left-0 h-2 w-full" />
                      <div
                        className={`${
                          item.itemList.length <= 0
                            ? "hidden"
                            : "hidden group-hover:block"
                        }  absolute left-0 top-12 w-[240px] after:absolute after:w-full after:h-6 after:-top-6`}
                      >
                        <div className="flex flex-col relative overflow-hidden h-full w-full py-1 rounded-2xl bg-white dark:bg-gray900 border border-b-[#DCDCDC] dark:border-b-dark800 ">
                          {item.itemList.length !== 0 &&
                            item.itemList.map((item: any, index) => (
                              <Link
                                href={item.link}
                                key={index}
                                className="link-header px-4 py-3 rounded-none hover:text-secondary dark:hover:text-[#ff8911]"
                              >
                                {item?.value
                                  ? item?.value
                                  : t(`staking.header.${item.label}`)}
                              </Link>
                            ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              </ul>
            </div>
            <div className="flex gap-2 lg:gap-4 items-center text-base text-[#6B5695] dark:text-[#B5A1DC] font-bold">
              {currentUser && currentUser.walletAddress && (
                <div className="hidden lg:flex items-center gap-2 min-w-fit px-2 py-1 rounded-full bg-[#F9F6FF] dark:bg-[#3C3548]">
                  <span className="font-normal">
                    {t("verifiedContract.balance")}:
                  </span>
                  {availableAmount.toLocaleString("en-US")}&nbsp; VPC
                </div>
              )}
              <DropdownLanguage />
              <div>
                <button
                  className="w-6 flex items-center justify-center"
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
              </div>
              <div className="">
                {" "}
                {currentUser && currentUser.walletAddress && (
                  <DropdownNetwork />
                )}
              </div>
              {currentUser && (
                <>
                  {!currentUser?.walletAddress && (
                    <button
                      className={`relative group flex justify-between items-center gap-2 w-full px-4 py-2 h-8 text-base text-[#fff] font-semibold rounded-full bg-[#3B3BFC] dark:bg-[#FF964A]  whitespace-nowrap`}
                      onClick={() => {
                        setOpenModalConnectWallet(true);
                      }}
                    >
                      {t("connectWalletBtn")}
                    </button>
                  )}
                  <button
                    className={`relative group flex justify-between items-center gap-2 w-full px-2 lg:px-4  pl-8 lg:pl-10 h-8 text-base text-[#6B5695] dark:text-[#B5A1DC] font-bold rounded-full bg-[#F9F6FF] dark:bg-[#3C3548]  whitespace-nowrap`}
                  >
                    <div className=" absolute  top-1/2 -translate-y-1/2 left-2 text-[#3B3BFC] dark:text-[#FF8911]">
                      <UserIcon />
                    </div>
                    <span className="hidden md:block uppercase w-[20vw] md:w-fit max-w-[100px] truncate">
                      {" "}
                      {currentUser.username}
                    </span>
                    <div className="">
                      {" "}
                      <ChevronDownIcon />
                    </div>
                    <div
                      className={` hidden group-hover:block box-shadow absolute right-[10px] top-12 w-fit rounded-3xl after:absolute after:w-full after:h-6 after:-top-6`}
                    >
                      <div className="wallet-address-modal  !relative !z-[10000] ">
                        <div className="flex flex-col text-header-table">
                          <div className="flex w-full  wallet-address-border hover:bg-[#F9F6FF] hover:dark:bg-[#3C3548]">
                            <Link
                              href={"/profile"}
                              className="wallet-address-row font-normal text-left hover:text-purple550 hover:dark:text-purple600"
                            >
                              {t("profile.myProfile")}
                            </Link>
                          </div>
                          <div className="flex w-full  wallet-address-border md:hidden  ">
                            <span className="wallet-address-row font-normal text-left ">
                              {t("vinaScan.login.username")}
                            </span>
                            <span className="wallet-address-row font-normal text-right uppercase truncate">
                              {currentUser.username}
                            </span>
                          </div>
                          <div className="flex w-full  wallet-address-border  ">
                            <span className="wallet-address-row font-normal text-left ">
                              {t("referral.walletAddress")}
                            </span>
                            <span className="wallet-address-row font-normal text-right">
                              {currentUser?.walletAddress
                                ? formatTrxIdSwap(currentUser?.walletAddress)
                                : t("referral.noWalletAddress")}
                            </span>
                          </div>
                          <div className="flex w-full">
                            {/* <div
                              onClick={logout}
                              className="link-header px-4 rounded-none text-center "
                            >
                              {t("logout")}
                            </div> */}
                            <div
                              onClick={logout}
                              className="flex w-full hover:bg-[#F9F6FF] hover:dark:bg-[#3C3548]"
                            >
                              <span className="wallet-address-row font-normal text-left ">
                                {t("logout")}
                              </span>
                              <div className=" flex justify-end wallet-address-row font-normal text-left">
                                <SignOutIcon />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
      {LIST_MENU.find((menuItem) => menuItem.links.includes(pathname)) && (
        <div className="bg-white dark:bg-gray900">
          <div className=" relative container-xxl w-full flex flex-wrap items-center justify-center ">
            <ul className="flex items-center justify-center gap-2 w-full">
              {LIST_MENU.find((item) =>
                item.links.includes(pathname)
              )?.itemList.map((item: any, index: number) => (
                <Link
                  href={item.link}
                  className={`flex-1 lg:flex-none hover:text-[#7E4DE0]`}
                  key={index}
                >
                  <li
                    className={`relative h-10 flex-1 lg:flex-none lg:w-[143px] flex items-center justify-center text-base ${
                      pathname === item.link
                        ? "text-[#7E4DE0] dark:text-[#9F70FD] font-bold after:absolute after:w-full after:h-1 after:rounded-full after:bg-[#7E4DE0] after:bottom-0 after:left-0 after:right-0"
                        : "text-[#6B5695] dark:text-[#9E84D3] hover:text-[#7E4DE0]"
                    }`}
                  >
                    {item?.value
                      ? item?.value
                      : t(`staking.header.${item.label}`)}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
      {currentUser && (
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
                  item.links.includes(pathname)
                    ? "text-[#3B3BFC] dark:text-[#FF8911] font-semibold"
                    : "text-[#8989E5] dark:text-[#FFAA6CB2] font-normal"
                } group cursor-pointer font-bold  `}
              >
                <Link
                  key={index}
                  href={item.linkDefault}
                  className="flex flex-col items-center gap-1 group-hover:text-inherit"
                >
                  {t(`staking.header.${item.label}`)}
                  <svg
                    width={item.label === "swap" ? "21.1" : "20"}
                    height={item.label === "swap" ? "21" : "20"}
                    viewBox={item.label === "swap" ? "0 0 22 22" : "0 0 20 20"}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {item?.path?.map((path, index) => (
                      <path
                        fill-rule="evenodd"
                        clipRule="evenodd"
                        key={index}
                        d={path.d}
                        fill={
                          theme === THEME.LIGHT
                            ? item.links.includes(pathname)
                              ? "#3B3BFC"
                              : "#8989E5"
                            : item.links.includes(pathname)
                              ? "#FF8911"
                              : "#FFAA6CB2"
                        }
                      />
                    ))}
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      <ModalConnectWalet
        onVerifySuccess={() => {
          if (account) {
            onVerifySuccess(account);
          }
        }}
      />
    </>
  );
};
