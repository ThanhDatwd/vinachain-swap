import { THEME, VPC_EXCHANGE_RATE_USD, getStaticURL } from "@/utils/constants";
import Link from "next/link";
import { DropdownScan } from "../DropdownScan";
import { isDarkTheme } from "@/utils/theme";
import { useTheme } from "@/hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMoon } from "@fortawesome/free-solid-svg-icons";
import { SunIcon } from "@/assets/icons/SunIcon";
import { useTranslation } from "react-i18next";
import { MoonIcon } from "@/assets/icons/MoonIcon";
import { SettingIcon } from "@/assets/icons/SettingIcon";
import SearchSection from "../Scan/SearchSection";
import { usePathname } from "next/navigation";

export const FixedHeader = () => {
  const { theme, changeTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const pathname = usePathname();

  const THEME_CONFIG_OPTIONS = [
    {
      label: (
        <div className="w-7 h-7 flex items-center justify-center">
          <SunIcon color={theme === THEME.DARK ? "#DA6C1D" : "#0784c3"} className="w-4 h-4"/>
        </div>
      ),
      value: "light",
      children: (
        <div className="flex items-center text-xs gap-3  bg-theme-hover px-4 py-2 my-1 rounded-md">
          <SunIcon className="!w-3 !h-3" /> {t("scan.header.light")}
        </div>
      ),
    },
    {
      label: (
        <div className="w-7 h-7 flex items-center justify-center">
          <MoonIcon color={theme === THEME.DARK ? "#DA6C1D" : "#0784c3"} className="w-4 h-4"/>
        </div>
      ),
      value: "dark",
      children: (
        <div className="flex items-center text-xs gap-3  bg-theme-hover px-4 py-2 my-1 rounded-md">
          <MoonIcon className="!w-3 !h-3" /> {t("scan.header.dark")}
        </div>
      ),
    },
    {
      label: (
        <div className="w-7 h-7 flex text-xs items-center justify-center "></div>
      ),
      value: "settings",
      children: (
        <div className="text-xs pb-1">
          <hr className="mb-1" />
          <Link
            href={"/settings"}
            className="flex items-center gap-3  whitespace-nowrap bg-theme-hover px-4 py-2 my-1 rounded-md"
          >
            <div className="flex gap-2 items-center">
              <SettingIcon className="!w-4 !h-4" /> {t("scan.header.settings")}
            </div>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      ),
    },
  ];

  const NETWORK_OPTIONS = [
    {
      label: (
        <div className="w-full h-7 flex items-center justify-center">
          <img
            className="w-7 h-7"
            src={`${getStaticURL()}/assets/images/logo_${theme}.svg`}
            alt=""
          />
        </div>
      ),
      value: "",
      children: (
        <Link
          href={"/coming-soon"}
          className="flex whitespace-nowrap items-center text-xs gap-3 text-dark900 dark:text-[#FAFAFA] hover:bg-gray-200 dark:hover:bg-gray600 px-4 py-2 my-1 rounded-md"
        >
          Vinachain mainet
        </Link>
      ),
    },
    {
      label: (
        <div className="w-full h-7 flex text-xs items-center justify-center ">
          <FontAwesomeIcon icon={faMoon} />
        </div>
      ),
      value: "settings",
      children: (
        <div className="text-xs pb-1">
          <hr className="mb-1" />
          <Link
            href={"/coming-soon"}
            className="flex items-center gap-3 text-dark900 dark:text-[#FAFAFA] whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray600 px-4 py-2 my-1 rounded-md"
          >
            Vinachain Testnet
          </Link>
        </div>
      ),
    },
  ];
  return (
    <div className="hidden items-center md:flex h-12 fixed w-full bg-white dark:bg-gray900 top-0 z-50 border-b border-[#DCDCDC] dark:border-[#dcdcdc5b] border-[./1] ">
      <div className="flex items-center justify-between w-full py-2 container-xxl">
        <div className="flex gap-4 text-[12px]">
          <div className="text-[12px] flex items-center gap-1">
            <div className="text-muted">VPC Price :</div>
            <Link
              className="text-[#0784C3] dark:text-scanDark hover:text-[#066A9C] "
              href="/coming-soon"
            >
              ${VPC_EXCHANGE_RATE_USD}
            </Link>{" "}
            <Link
              href="/coming-soon"
              className="hover:underline text-[#DA1C1C]"
            >
              {`(-0.34%)`}
            </Link>
          </div>
          <div className="text-[12px] flex gap-1 items-center">
            <img src={getStaticURL() + "/assets/images/icons/gas-pump.svg"} alt=""  className="w-4 h-4"/>
            Gas:
            <Link
              className="text-[#0784C3] dark:text-scanDark hover:text-[#066A9C]"
              href="/coming-soon"
            >
              65 Gwei
            </Link>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          {pathname !== "/" && (
            <div className="w-fit h-fit">
              <SearchSection isHeader />
            </div>
          )}
          <div className="flex gap-2">
            <DropdownScan
              bg={isDarkTheme(theme) ? "bg-[#111]" : "bg-[#FAFAFA]"}
              fit
              defaultValue={THEME_CONFIG_OPTIONS.filter((item) => item.value === theme)[0] || THEME_CONFIG_OPTIONS[0]}
              options={THEME_CONFIG_OPTIONS}
              onChange={(theme) => {
                if (theme !== "settings") {
                  changeTheme(theme as THEME);
                }
              }}
              className=" bg-theme-hover !border-gray-200 !border dark:!border-gray600"
              hideArrow
            />
            <DropdownScan
              bg={isDarkTheme(theme) ? "bg-[#111]" : "bg-[#FAFAFA]"}
              fit
              defaultValue={NETWORK_OPTIONS[0]}
              options={NETWORK_OPTIONS}
              onChange={() => {}}
              className=" bg-theme-hover !border-gray-200 !border dark:!border-gray600"
              hideArrow
            />
          </div>
        </div>
      </div>
    </div>
  );
};
