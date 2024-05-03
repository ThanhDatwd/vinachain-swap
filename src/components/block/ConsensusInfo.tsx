import { HelpIcon } from "@/assets/icons/HelpIcon";
import React from "react";
import { THEME } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export const ConsensusInfo = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="flex flex-col bg-white dark:bg-[#111111] border border-[#bdc5d133] p-5 rounded-xl text-[14.5px]">
      <div className="flex flex-col md:flex-row items-start mb-4">
        <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400 ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
            {t("vinaScan.tabs.consensusInfo.slot")}
          </p>
        </div>
        <div>
          <Link
            href="/coming-soon"
            className=" text-[14.5px] link-color"
          >
            7926119
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start mb-4">
        <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400 ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400 ">
            {t("vinaScan.tabs.consensusInfo.ePoch")}
          </p>
        </div>
        <div>
          <Link
            href="/coming-soon"
            className=" text-[14.5px] link-color"
          >
            7926119
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start">
        <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400 ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
            {t("vinaScan.tabs.consensusInfo.proposerIndex")}
          </p>
        </div>
        <div>
          <Link
            href="/coming-soon"
            className=" text-[14.5px] link-color"
          >
            7926119
          </Link>
        </div>
      </div>
      <div className="w-full my-5 h-[1px] bg-[#DCDCDC] dark:bg-gray700"></div>
      <div className="flex flex-col md:flex-row items-start mb-4">
        <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400 ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
            {t("vinaScan.tabs.consensusInfo.slotRootHash")}
          </p>
        </div>
        <div className="md:mb-0 w-full md:w-3/4">
          <p className="text-[14.5px] break-words text-[#212529] dark:text-gray200">
            0xdd9387b2d22aa0452a45df1c41493d1d594aa99875455b644990244ead370d7c
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start mb-4">
        <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400 ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
            {t("vinaScan.tabs.consensusInfo.beaconChainDepositCount")}
          </p>
        </div>
        <div>
          <p className="text-[14.5px] text-[#212529] dark:text-gray200">
            1102995
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start mb-4">
        <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400 ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
            {t("vinaScan.tabs.consensusInfo.slotGraffiti")}
          </p>
        </div>
        <div className="md:mb-0 w-full md:w-3/4 text-[#212529] dark:text-gray200">
          <p className="text-[14.5px]">bitcoinsuisse.com</p>
          <p className="text-[14.5px] break-words ">
            (Hex:0x626974636f696e7375697373652e636f6d000000000000000000000000000000)
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start mb-4">
        <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400 ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400 ">
            {t("vinaScan.tabs.consensusInfo.blockRandomness")}
          </p>
        </div>
        <div className="md:mb-0 w-full md:w-3/4">
          <p className="text-[14.5px] break-words text-[#212529] dark:text-gray200">
            0x796a57a8e13c5322e821978822fa5bdd0a6c3d6b270792889344fadfce689a72
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start ">
        <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400 ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400 ">
            {t("vinaScan.tabs.consensusInfo.randaoReveal")}
          </p>
        </div>
        <div className="md:mb-0 w-full md:w-3/4">
          <p className="break-words text-[14.5px] text-[#212529] dark:text-gray200">
            0xb01efae33c4319728bb71e04ae319e74b58062f2abdeca397406db7ee021a7f0dbc76f88330e5108b29bda4d8dc25ce50e3a9e52b553bc3fa93dbaa33fc4fe1d11a50a869f515797168c366642d4ff0f0073cec52b284805f9700b6f3b7afbc1
          </p>
        </div>
      </div>
    </div>
  );
};
