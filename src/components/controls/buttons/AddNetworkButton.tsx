import { Logo } from "@/components/Logo";
import { VPC_CHAIN_ID, VPC_PRC_URL, getStaticURL } from "@/utils/constants";
import { t } from "i18next";
import Image from "next/image";
import React from "react";

interface Props {
  networkName?: string;
  rpcUrl?: string;
  chainId?: number;
}

const AddNetworkButton: React.FC<Props> = ({
  networkName = "Vinachain",
  rpcUrl = VPC_PRC_URL,
  chainId = VPC_CHAIN_ID,
}) => {
  const handleClick = async () => {
    if ((window as any).ethereum && (window as any).ethereum.isMetaMask) {
      (window as any).ethereum
        .request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
              chainName: networkName,
              nativeCurrency: {
                name: "VPC",
                symbol: "VPC",
                decimals: 18,
              },
              rpcUrls: [rpcUrl],
            },
          ],
        })
        .then(() => {
          console.log(`${networkName} network added to MetaMask`);
        })
        .catch((error: any) => {
          console.error("Error adding network to MetaMask:", error);
        });
    } else {
      console.error("MetaMask extension not detected");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center bg-button-theme p-1 rounded-md text-xs gap-2"
    >
      <Image
        src={`${getStaticURL()}/assets/images/metamask-no-bg.svg`}
        alt="metamask"
        height={20}
        width={20}
      />
      {t("addNetwork", { value: networkName })}
    </button>
  );
};

export default AddNetworkButton;
