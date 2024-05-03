import { HelpIcon } from "@/assets/icons/HelpIcon";
import React from "react";
import { THEME } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { TooltipCustom } from "../Tooltip";
import { handleCopy } from "@/utils";
import { CopyIcon } from "@/assets/CopyIcon";

export const LogTabs = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="flex flex-col bg-white dark:bg-[#111111] border border-[#bdc5d133] p-5 rounded-xl text-[14.5px] ">
      <h6 className="text-[14.5] text-[#212529] mb-4">
        Transaction Receipt Event Logs
      </h6>
      <div className="flex gap-3 ">
        <div>
          <div className="w-11 h-11 rounded-full bg-[#00a1861a] text-[#00a186] text-[10px] flex items-center justify-center mt-1  ">
            210
          </div>
        </div>
        <div className=" w-[calc(100%_-_56px)] flex flex-col ">
          <div className="flex  flex-col  md:flex-row md:items-center mb-3 md:mb-4 md:gap-5 ">
            <h6 className="text-[14.5] text-[#212529] font-bold w-16 md:text-right ">
              Address
            </h6>
            <div className=" flex items-center cursor-pointer">
              <TooltipCustom
                content={"0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21"}
              >
                <Link
                  href={`/address/${"0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21"}`}
                  className="link-color dark:text-[#6AB5DB] border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
                >
                  {"Lido: Execution Layer Rewards Vault"}
                </Link>
              </TooltipCustom>
              <button
                className="flex items-center justify-center"
                onClick={() =>
                  handleCopy("0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21")
                }
              >
                <TooltipCustom content={t("copyAddress")}>
                  <CopyIcon />
                </TooltipCustom>
              </button>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col  md:flex-row md:items-center mb-3 md:mb-4 md:gap-5 ">
            <h6 className="text-[14.5] text-[#6C757D] font-bold w-16 md:text-right ">
              Name
            </h6>
            <div className=" cursor-pointer">
              VPCReceived (<span className="text-[#00A186]">uint256</span>{" "}
              <span className="text-[#DC3545]">amount</span>)
              &nbsp;
              <TooltipCustom content={"View source code"}>
                <Link
                  href={`/address/${"0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21"}/#contract`}
                  className="link-color dark:text-[#6AB5DB]"
                >
                  View Source
                </Link>
              </TooltipCustom>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col md:flex-row md:items-center mb-3 md:mb-4 md:gap-5 ">
            <h6 className="text-[14.5] text-[#6C757D] font-bold w-16 md:text-right ">
              Topics
            </h6>

            <div>
              <p className="text-[14.5px] break-words ">
                0xab0b4a85fb89aecb1dd9fcf83dd05a3d55a197a1c8b8f2d34063e056f50b080e
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col  md:flex-row md:items-center mb-3 md:mb-4 md:gap-5 ">
            <h6 className="text-[14.5] text-[#6C757D] font-bold w-16 md:text-right ">
              Data
            </h6>
            <div className="flex gap-2 items-center cursor-pointer">
              <TooltipCustom
                content={"0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21"}
              >
                <Link
                  href={`/address/${"0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21"}`}
                  className="link-color dark:text-[#6AB5DB] border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
                >
                  {"Lido: Execution Layer Rewards Vault"}
                </Link>
              </TooltipCustom>
              <button
                className="flex items-center justify-center"
                onClick={() =>
                  handleCopy("0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21")
                }
              >
                <TooltipCustom content={t("copyAddress")}>
                  <CopyIcon />
                </TooltipCustom>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
