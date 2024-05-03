"use client";

import { useTheme } from "@/hooks/useTheme";
import { connectWallet } from "@/pkgs/wallet-connector/connector";
import { useWalletContext } from "@/pkgs/wallet-connector/context";
import { E_CONNECTOR_NAMES, E_NETWORK_ID } from "@/pkgs/wallet-connector/types";
import { getStaticURL } from "@/utils/constants";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { TopModal } from "./TopModal";

interface IProps {
  onConnectSuccess: () => void;
}
export const ModalConnectWallet = ({onConnectSuccess}: IProps) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const {
    setConnectorName,
    walletNetwork,
    setWalletNetwork,
    openModalConnectWallet,
    setOpenModalConnectWallet,
  } = useWalletContext();
  const toggleOpenModalConnectWallet = () => {
    setOpenModalConnectWallet(!openModalConnectWallet);
  };

  const connectWalletHandler = async (connectorName: E_CONNECTOR_NAMES) => {
    try {
      await connectWallet(connectorName, walletNetwork);
      setConnectorName(connectorName);
      setOpenModalConnectWallet(false);
      onConnectSuccess();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <TopModal
        isOpen={openModalConnectWallet}
        titleModal={t("connectWallet")}
        toggleOpenModal={toggleOpenModalConnectWallet}
      >
        <div className="flex flex-col gap-2 ">
          <div className="">
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className={`inline-flex rounded-lg p-3 text-sm font-semibold shadow-sm items-center bg-gray-200 dark:bg-gray600 justify-between border `}
                onClick={() => {
                  setWalletNetwork(
                    process.env.NEXT_PUBLIC_DEV
                      ? E_NETWORK_ID.BSC_TESTNET
                      : E_NETWORK_ID.BSC_MAINNET
                  );
                }}
              >
                <span className="self-center text-left font-thin">
                  {t("binance")}
                </span>
                <Image
                  src={`${getStaticURL()}/assets/images/logo-binance.svg`}
                  alt="wallet"
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px]"
                />
              </button>
            </div>
          </div>
          <hr className="my-2"/>
          <div className="flex flex-col gap-2 mb-4">
            <button
              type="button"
              className={`inline-flex rounded-lg p-3 text-sm font-semibold shadow-sm items-center bg-theme-hover justify-between border `}
              onClick={() => connectWalletHandler(E_CONNECTOR_NAMES.INJECTED)}
            >
              <span className="self-center text-left font-thin">
                {t("metaMask")}
              </span>
              <Image
                src={`${getStaticURL()}/assets/images/metamask-no-bg.svg`}
                alt="wallet"
                width={22}
                height={22}
                className="h-[22px] w-[22px]"
              />
            </button>
            <button
              type="button"
              className={`inline-flex mb-2 rounded-lg p-3 text-sm font-semibold shadow-sm items-center bg-theme-hover justify-between border`}
              onClick={() =>
                connectWalletHandler(E_CONNECTOR_NAMES.WALLET_CONNECT)
              }
            >
              <span className="self-center text-left font-thin ">
                {t("walletConnect")}
              </span>
              <Image
                src={`${getStaticURL()}/assets/images/walletconnect.svg`}
                alt="walletConnect"
                width={22}
                height={22}
                className="h-[22px] w-[22px]"
              />
            </button>
          </div>
        </div>
      </TopModal>
    </>
  );
};
