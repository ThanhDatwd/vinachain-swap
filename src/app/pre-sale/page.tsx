"use client";

import useMediaQuery from "@bedrock-layout/use-media-query";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { PreSaleSectionForDesktop } from "@/components/PresaleSectionForDesktop";
import { PreSaleSectionForMobile } from "@/components/PresaleSectionForMobile";
import { Modal } from "@/components/controls/Modal";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import {
  connectWallet,
  disconnectWallet,
  useConnectorByName,
} from "@/pkgs/wallet-connector/connector";
import { useWalletContext } from "@/pkgs/wallet-connector/context";
import {
  E_CONNECTOR_NAMES,
  E_NETWORK_ID,
} from "@/pkgs/wallet-connector/types";
import { getStaticURL, vinachainAddress } from "@/utils/constants";
import { IntroduceCard } from "@/components/Introducecard";
import { CommunityCard } from "@/components/CommunityCard";
import { ExploreVinachainCard } from "@/components/ExploreVinachainCard";
import { ContributeSection } from "@/components/Home/ContributeSection";
import { THEME, exploreVinachainUrl } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";
import { VinaChainTodaySection } from "@/components/Home/VinaChainTodaySection";
import { ChangeEventHandler } from "@/utils/type";
import { chooseTheme } from "@/utils/theme";
import { CopyIcon } from "@/assets/icons/CopyIcon";
import { onToast } from "@/hooks/useToast";

export default function Home() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const handleCopyAddress = () => {
    navigator.clipboard
      .writeText(vinachainAddress ?? "")
      .then(() => onToast("You successfully copied", "success"));
  };

  const [openModalConnectWallet, setOpenModalConnectWallet] =
    useState<boolean>(false);
  const { connectorName, setConnectorName, walletNetwork, setWalletNetwork } =
    useWalletContext();
  const { hook, connector } = useConnectorByName(connectorName);
  const account = hook.useAccount();

  const connectWalletHandler = async (connectorName: E_CONNECTOR_NAMES) => {
    try {
      await connectWallet(connectorName, walletNetwork);
      setConnectorName(connectorName);
      setOpenModalConnectWallet(false);
    } catch (e) {
      console.log(e);
    }
  };

  const toggleOpenModalConnectWallet = () => {
    setOpenModalConnectWallet(!openModalConnectWallet);
  };

  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-white dark:bg-[#222327]"
    >
      <div
        id="wallet-connect"
        onClick={() => {
          setOpenModalConnectWallet(!openModalConnectWallet);
        }}
      />
      <div className="flex flex-col md:py-20">
        <h2 className="text-2xl lg:text-5xl text-center font-bold text-[#333] dark:text-[#FAFAFA] pb-2 md:pb-8">
          {t("preSale")}
        </h2>
        {isMobile ? <PreSaleSectionForMobile /> : <PreSaleSectionForDesktop />}
      </div>
      <div className="flex flex-col items-center gap-8 py-20">
        <h2 className="text-2xl lg:text-5xl font-bold text-[#333] dark:text-[#FAFAFA]">
          {t("welcomeTitle")}
        </h2>
        <p className="text-xs lg:text-xl px-4 md:px-0 w-full md:w-2/5 text-center text-[#333] dark:text-[#FAFAFA]">
          {t("welcomeSubTitle")}
        </p>
        <div className="hover:bg-white hover:opacity-[0.92] hover:scale-[1.02] hover:transform duration-300 rounded">
          <Link
            href="/scan"
            className="border-none bg-secondary dark:bg-secondaryDark w-fit text-base rounded px-4 py-2 text-[#FAFAFA]"
            target="_blank"
          >
            {t("exploreBtn")}
          </Link>
        </div>
      </div>
      <IntroduceCard
        imgUrl={`${getStaticURL()}/assets/images/get-start.svg`}
        title={t("startedTitle")}
        subTitle={t("startedSubTitle")}
        containerStyle="flex flex-col lg:flex-row-reverse items-center gap-6 lg:py-20 py-8 px-4 lg:px-[120px] bg-[#FAFAFA] dark:bg-[#222327]"
        contentStyle="flex flex-col gap-8"
        titleStyle="lg:text-5xl"
      />
      <div className="grid-cols-1 md:grid-cols-2 grid gap-4 bg-[#FAFAFA] dark:bg-[#1E1E22] px-4 py-8 md:px-[120px] md:py-20">
        <Link
          href="/coming-soon"
          className="flex flex-col border border-[#333] group hover:scale-[1.02] transition-all duration-300 dark:border-[#FAFAFA] bg-[#FAFAFA] dark:bg-[#222327] shadow-[4px_4px_0px_0px_#B69FD3] dark:shadow-[4px_4px_4px_0px_#F6AF86]"
        >
          <IntroduceCard
            imgUrl={
              theme === THEME.DARK
                ? `${getStaticURL()}/assets/images/pick-a-wallet-dark.svg`
                : `${getStaticURL()}/assets/images/pick-a-wallet.svg`
            }
            title={t("pickAWalletTitle")}
            subTitle={t("pickAWalletSubTitle")}
            contentStyle="flex flex-col gap-6 py-6 px-4"
            titleStyle="group-hover:text-secondary dark:group-hover:text-secondaryDark"
          />
        </Link>
        <Link
          href="/coming-soon"
          className="flex flex-col border border-[#333] group hover:scale-[1.02] transition-all duration-300 dark:border-[#FAFAFA] bg-[#FAFAFA] dark:bg-[#222327] shadow-[4px_4px_0px_0px_#B69FD3] dark:shadow-[4px_4px_4px_0px_#F6AF86]"
        >
          <IntroduceCard
            imgUrl={
              theme === THEME.DARK
                ? `${getStaticURL()}/assets/images/get-vina-dark.svg`
                : `${getStaticURL()}/assets/images/get-vina.svg`
            }
            title={t("getVinaTitle")}
            subTitle={t("getVinaSubTitle")}
            contentStyle="flex flex-col gap-6 py-6 px-4"
            titleStyle="group-hover:text-secondary dark:group-hover:text-secondaryDark"
          />
        </Link>
        <Link
          href="/coming-soon"
          className="flex flex-col border border-[#333] group hover:scale-[1.02] transition-all duration-300 dark:border-[#FAFAFA] bg-[#FAFAFA] dark:bg-[#222327] shadow-[4px_4px_0px_0px_#B69FD3] dark:shadow-[4px_4px_4px_0px_#F6AF86]"
        >
          <IntroduceCard
            imgUrl={
              theme === THEME.DARK
                ? `${getStaticURL()}/assets/images/use-a-dapp-dark.svg`
                : `${getStaticURL()}/assets/images/use-a-dapp.svg`
            }
            title={t("useADappTitle")}
            subTitle={t("useADappSubTitle")}
            contentStyle="flex flex-col gap-6 py-6 px-4"
            titleStyle="group-hover:text-secondary dark:group-hover:text-secondaryDark"
          />
        </Link>
        <Link
          href="/coming-soon"
          className="flex flex-col border border-[#333] group hover:scale-[1.02] transition-all duration-300 dark:border-[#FAFAFA] bg-[#FAFAFA] dark:bg-[#222327] shadow-[4px_4px_0px_0px_#B69FD3] dark:shadow-[4px_4px_4px_0px_#F6AF86]"
        >
          <IntroduceCard
            imgUrl={
              theme === THEME.DARK
                ? `${getStaticURL()}/assets/images/start-building.svg`
                : `${getStaticURL()}/assets/images/start-building.svg`
            }
            title={t("startBuildingTitle")}
            subTitle={t("useADappSubTitle")}
            contentStyle="flex flex-col gap-6 py-6 px-4"
            titleStyle="group-hover:text-secondary dark:group-hover:text-secondaryDark"
          />
        </Link>
      </div>
      <IntroduceCard
        primaryBtnUrl="/coming-soon"
        secondaryBtnUrl="/coming-soon"
        imgUrl={`${getStaticURL()}/assets/images/what-is-vinachain.svg`}
        title={t("whatIsVianChainTitle")}
        subTitle={t("whatIsVianChainSubTitle")}
        containerStyle="flex flex-col lg:flex-row items-center gap-6 lg:py-20 py-8 px-4 lg:px-[120px] bg-[#A6FBF5] dark:bg-[#293233]"
        contentStyle="flex flex-col gap-8"
        primaryBtn={t("whatIsVianChainPrimaryBtn")}
        secondaryBtn={t("whatIsVianChainSecondaryBtn")}
        titleStyle="lg:text-5xl"
      />
      <IntroduceCard
        primaryBtnUrl="/coming-soon"
        imgUrl={`${getStaticURL()}/assets/images/a-fairer-financial-system.svg`}
        title={t("aFairerFinancialSystemTitle")}
        subTitle={t("aFairerFinancialSystemSubTitle")}
        containerStyle="flex flex-col lg:flex-row-reverse items-center gap-6 lg:py-20 py-8 px-4 lg:px-[120px] bg-[#FFE3D3] dark:bg-[#332821]"
        contentStyle="flex flex-col gap-8"
        primaryBtn={t("aFairerFinancialSystemTitlePrimaryBtn")}
        titleStyle="lg:text-5xl"
      />
      <IntroduceCard
        primaryBtnUrl="/coming-soon"
        imgUrl={`${getStaticURL()}/assets/images/the-internet-of-assets.svg`}
        title={t("theInternetOfAssetsTitle")}
        subTitle={t("theInternetOfAssetsSubTitle")}
        containerStyle="flex flex-col lg:flex-row items-center gap-6 lg:py-20 py-8 px-4 lg:px-[120px] bg-[#E1FEFA] dark:bg-[#141E1E]"
        contentStyle="flex flex-col gap-8"
        primaryBtn={t("theInternetOfAssetsTitlePrimaryBtn")}
        titleStyle="lg:text-5xl"
      />
      <IntroduceCard
        primaryBtnUrl="/coming-soon"
        secondaryBtnUrl="/coming-soon"
        imgUrl={`${getStaticURL()}/assets/images/an-open-internet.svg`}
        title={t("anOpenInternetTitle")}
        subTitle={t("anOpenInternetSubTitle")}
        containerStyle="flex flex-col lg:flex-row-reverse items-center gap-6 lg:py-20 py-8 px-4 lg:px-[120px] bg-[#FFE5F9] dark:bg-[#332027]"
        contentStyle="flex flex-col gap-8"
        primaryBtn={t("anOpenInternetTitlePrimaryBtn")}
        secondaryBtn={t("anOpenInternetTitleSecondaryBtn")}
        titleStyle="lg:text-5xl"
      />
      <IntroduceCard
        primaryBtnUrl="/coming-soon"
        imgUrl={`${getStaticURL()}/assets/images/a-frontier-for-developers.svg`}
        title={t("aFrontierForDevelopersTitle")}
        subTitle={t("aFrontierForDevelopersSubTitle")}
        containerStyle="flex flex-col lg:flex-row items-center gap-6 lg:py-20 py-8 px-4 lg:px-[120px] bg-[#E8EBFF] dark:bg-[#212131]"
        contentStyle="flex flex-col gap-8"
        primaryBtn={t("aFrontierForDevelopersPrimaryBtn")}
        titleStyle="lg:text-5xl"
        boardCodeEx={true}
      />
      <div className=" p-3 md:p-10 lg:py-20 lg:px-8 ">
        <VinaChainTodaySection />
      </div>
      <CommunityCard discordUrl="/" />
      <ExploreVinachainCard />
      <div className=" p-3 md:p-10 lg:py-20 lg:px-[120px] bg-gradient-to-r from-purple-100 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <ContributeSection />
      </div>

      <Modal
        isOpen={openModalConnectWallet}
        titleModal={t("connectWallet") || ""}
        toggleOpenModal={toggleOpenModalConnectWallet}
      >
        <div className="mb-7">
          <div className="text-left mb-3 text-xl">{t("chooseNetwork")}</div>
          <div className="flex flex-col gap-3">
            {/* <button
              type="button"
              className={`btn-connect-wallet ${chooseTheme(
                theme,
                "text-secondary border-secondary hover:text-secondary",
                "text-secondaryDark border-secondaryDark hover:text-secondaryDark",
              )} ${
                walletNetwork === E_NETWORK_ID.ETH_TESTNET ||
                walletNetwork === E_NETWORK_ID.ETH_MAINNET
                  ? chooseTheme(theme, "bg-indigo-200", "bg-grey_organ200")
                  : chooseTheme(theme, "bg-white ", "bg-grey_organ300")
              }`}
              onClick={() => {
                setWalletNetwork(
                  process.env.NEXT_PUBLIC_DEV
                    ? E_NETWORK_ID.ETH_TESTNET
                    : E_NETWORK_ID.ETH_MAINNET,
                );
              }}
            >
              <p className="self-center">{t("ethereum")}</p>
              <Image
                src={`${getStaticURL()}/assets/images/logo-ethereum.svg`}
                alt="metamask"
                width={44}
                height={44}
              />
            </button> */}
            <button
              type="button"
              className={`btn-connect-wallet ${chooseTheme(
                theme,
                "text-secondary border-secondary hover:text-secondary",
                "text-secondaryDark border-secondaryDark hover:text-secondaryDark",
              )} ${
                walletNetwork === E_NETWORK_ID.BSC_TESTNET ||
                walletNetwork === E_NETWORK_ID.BSC_MAINNET
                  ? chooseTheme(theme, "bg-indigo-200", "bg-grey_organ200")
                  : chooseTheme(theme, "bg-white", "bg-grey_organ300")
              }`}
              onClick={() => {
                setWalletNetwork(
                  process.env.NEXT_PUBLIC_DEV
                    ? E_NETWORK_ID.BSC_TESTNET
                    : E_NETWORK_ID.BSC_MAINNET,
                );
              }}
            >
              <p className="self-center">{t("binance")}</p>
              <Image
                src={`${getStaticURL()}/assets/images/logo-binance.svg`}
                alt="walletConnect"
                width={44}
                height={44}
              />
            </button>
          </div>
        </div>
        <div className="text-left  mb-3 font-bold">{t("chooseWallet")}</div>
        <div className="flex flex-col gap-3">
          <button
            type="button"
            className={`btn-connect-wallet ${chooseTheme(
              theme,
              "text-secondary border-secondary hover:text-secondary bg-white",
              "text-secondaryDark border-secondaryDark hover:text-secondaryDark bg-grey_organ300",
            )} `}
            onClick={() => connectWalletHandler(E_CONNECTOR_NAMES.INJECTED)}
          >
            <div className="">
              <p className="text-left text-[16px] font-normal">
                {t("metaMask")}
              </p>
              <p className="text-[8px] text-left">{t("walletSupport")}</p>
            </div>
            <Image
              src={`${getStaticURL()}/assets/images/metamask.svg`}
              alt="wallet"
              width={44}
              height={44}
              className="w-[44px] h-[44px]"
            />
          </button>
          <button
            type="button"
            className={`btn-connect-wallet  ${chooseTheme(
              theme,
              "text-secondary border-secondary hover:text-secondary bg-white",
              "text-secondaryDark border-secondaryDark hover:text-secondaryDark bg-grey_organ300",
            )}`}
            onClick={() =>
              connectWalletHandler(E_CONNECTOR_NAMES.WALLET_CONNECT)
            }
          >
            <p className="self-center">{t("walletConnect")}</p>
            <Image
              src={`${getStaticURL()}/assets/images/walletconnect.svg`}
              alt="walletConnect"
              width={44}
              height={44}
            />
          </button>
        </div>
      </Modal>
    </DefaultLayout>
  );
}
