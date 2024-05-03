import { CheckIcon } from "@/assets/icons/CheckIcon";
import { CopyIcon } from "@/assets/icons/CopyIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { MinusIcon } from "@/assets/icons/MinusIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
import { TimerIcon } from "@/assets/icons/TimerIcon";
import { useTheme } from "@/hooks/useTheme";
import { handleCopy } from "@/utils";
import { THEME } from "@/utils/constants";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TooltipCustom } from "../Tooltip";
import { formatTrxId } from "@/utils/formatTrxId";

export const OverviewTab = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [isShowmore, setIsShowmore] = useState(false);

  return (
    <div className="flex flex-col gap-5 text-[14.5px]">
      <div className="flex flex-col bg-white dark:bg-[#111111] border border-[#bdc5d133] p-5 rounded-xl">
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {/* {t("vinaScan.tabs.overview.timestamp")} */}
              Transaction Hash:
            </p>
          </div>
          <div>
            <p className="text-[14.5px] break-words ">
              0xab0b4a85fb89aecb1dd9fcf83dd05a3d55a197a1c8b8f2d34063e056f50b080e
            </p>
          </div>
        </div>

        <div className="flex  md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0  w-1/3 md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {/* {t("vinaScan.tabs.overview.status")} */}
              Status
            </p>
          </div>
          <TooltipCustom content="A Status code indicating if the top-level call succeeded or failed (applicable for Post BYZANTIUM blocks only)">
            <div className="flex items-center gap-[4px] bg-[#00a1861a] border-success border border-opacity-25  py-[6px] px-2 rounded-[8px]">
              <div className="mb-[1px]">
                <CheckIcon />
              </div>
              <p className="text-[10.8px] text-[#00A186] font-bold leading-[0]">
                Success
              </p>
            </div>
          </TooltipCustom>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {/* {t("vinaScan.tabs.overview.timestamp")} */}
              Block
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="mb-[2px]">
              <CheckIcon width={13} height={13} />
            </div>
            <Link
              className="text-[#0784c3] dark:text-[#6AB5DB]"
              href="/blocks/14524895"
            >
              14524895
            </Link>
            <TooltipCustom content="Number of block produced since">
              <div className="flex items-center gap-[4px] bg-[#adb5bd1a] border-[#DCDCDC] border border-opacity-25  py-[6px] px-2 rounded-[4px]">
                <p className="text-[10.8px] font-bold leading-[1]">
                  162 Block Confirmations
                </p>
              </div>
            </TooltipCustom>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {/* {t("vinaScan.tabs.overview.timestamp")} */}
              Timestamp
            </p>
          </div>
          <div className="flex items-center gap-1">
            <TimerIcon color={theme === THEME.DARK ? "#FAFAFA" : "#333"} />
            <p className="text-[14.5px] ">
              7 mins ago (Dec 7, 2023 at 8:24 am UTC)
            </p>
          </div>
        </div>
        <div className="w-full my-5 h-[1px] bg-[#DCDCDC] dark:bg-gray700 dark:bg-gray700 "></div>
        <div className="flex flex-col md:flex-row ">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {/* {t("vinaScan.tabs.overview.proposeOne")} */}
              Transaction Action:
            </p>
          </div>
          <div className="text-[14.5px]">
            <span className="text-[#65757D]">
              Transfer <span className="text-[#212529]">7 VPC</span> To{" "}
            </span>
            <TooltipCustom
              content={"0x95222290DD7278Aa3Dd99999Cc1EA6sCC2BAf21"}
            >
              <Link
                href={`/address/${"0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21"}`}
                className="link-color dark:text-[#6AB5DB] border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
              >
                {formatTrxId("0x95222290DD7278Aa388888389Cc1EA6sCC2BAf21")}
              </Link>
            </TooltipCustom>
          </div>
        </div>
        <div className="w-full my-5 h-[1px] bg-[#DCDCDC] dark:bg-gray700 "></div>
        <div className="flex flex-col md:flex-row ">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {/* {t("vinaScan.tabs.overview.proposeOne")} */}
              Sponsored
            </p>
          </div>
          {/* <div className="text-[14.5px]">
           
          </div> */}
        </div>
        <div className="w-full my-5 h-[1px] bg-[#DCDCDC] dark:bg-gray700 "></div>

        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {/* {t("vinaScan.tabs.overview.transactions")} */}
              From
            </p>
          </div>
          <div>
            <div className="flex gap-2 items-center cursor-pointer">
              <TooltipCustom
                content={"0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21"}
              >
                <Link
                  href={`/address/${"0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21"}`}
                  className="link-color dark:text-[#6AB5DB] border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
                >
                  {"rsync-builder.vpc"}
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
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {/* {t("vinaScan.tabs.overview.withdrawals")} */}
              To
            </p>
          </div>
          <div>
            <div className="flex gap-2 items-center cursor-pointer">
              <TooltipCustom
                content={"0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21"}
              >
                <Link
                  href={`/address/${"0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21"}`}
                  className="link-color dark:text-[#6AB5DB] border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
                >
                  {"0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21"}
                </Link>
              </TooltipCustom>
              <span>(Lido: Execution Layer Rewards Vault)</span>
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
        <div className="w-full my-5 h-[1px] bg-[#DCDCDC] dark:bg-gray700 "></div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {/* {t("vinaScan.tabs.overview.freeRecipient")} */}
              Value
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div className="text-[14.5px]">
              0.011416521144415577 VPC
              <span className="text-[12.6px] text-[#65757D]"> ($35.96)</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {/* {t("vinaScan.tabs.overview.blockReward")} */}
              Transaction Fee:
            </p>
          </div>
          <div>
            <div className="text-[14.5px]">
              0.00013571021395681 VPC
              <span className="text-[12.6px] text-[#65757D]"> ($0.43)</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
            <HelpIcon />
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {/* {t("vinaScan.tabs.overview.totalDifficulty")} */}
              Gas Price
            </p>
          </div>
          <div>
            <div className="text-[14.5px]">
              6.13767871 Gwei
              <span className="text-[12.6px] text-[#65757D]">
                {" "}
                (0.00000000613767871 VPC)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative overflow-hidden flex flex-col bg-white dark:bg-[#111111] border border-[#bdc5d133] p-5 rounded-2xl">
        <div
          className={` overflow-y-hidden duration-300 ease-linear flex flex-col ${
            isShowmore ? "" : "h-0"
          }`}
        >
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
              <HelpIcon />
              <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
                {/* {t("vinaScan.tabs.overview.hash")} */}
                Gas Limit & Usage by Txn:
              </p>
            </div>
            <div>
              <p className="text-[14.5px] break-words ">
                22,111 | 22,111 (100%)
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
              <HelpIcon />
              <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
                {/* {t("vinaScan.tabs.overview.parentHash")} */}
                Gas Fees:
              </p>
            </div>
            <div className="text-[#65757D]">
              <TooltipCustom content="Number of block produced since">
                Base:{" "}
                <span className="text-[#212529] dark:text-[#F5F5F5]">
                  6.13767871 Gwei
                </span>
              </TooltipCustom>
              &nbsp;|&nbsp;
              <TooltipCustom content="Number of block produced since">
                Max:{" "}
                <span className="text-[#212529] dark:text-[#F5F5F5]">
                  6.13767871 Gwei
                </span>
              </TooltipCustom>
              &nbsp;|&nbsp;
              <TooltipCustom content="Number of block produced since">
                Max{" "}
                <span className="text-[#212529] dark:text-[#F5F5F5]">
                  Priority: 0 VPC
                </span>
              </TooltipCustom>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
              <HelpIcon />
              <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
                {/* {t("vinaScan.tabs.overview.stateRoot")} */}
                Burnt & Txn Savings Fees:
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-[4px] bg-[#adb5bd1a] border-[#DCDCDC] border border-opacity-25  py-[6px] px-2 rounded-[4px]">
                <p className="text-[10.8px] font-bold leading-[1]">
                  🔥 <span className="text-[#65757D]">Burnt </span>&nbsp;
                  0.00013571021395681 VPC ($0.43)
                </p>
              </div>
              <div className="flex items-center gap-[4px] bg-[#adb5bd1a] border-[#DCDCDC] border border-opacity-25  py-[6px] px-2 rounded-[4px]">
                <p className="text-[10.8px] font-bold leading-[1]">
                  💸 <span className="text-[#65757D]">xn Savings:</span>&nbsp;
                  0.00013571021395681 VPC ($0.43)
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
              <HelpIcon />
              <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
                {/* {t("vinaScan.tabs.overview.withdrawalsRoots")} */}
                Other Attributes:
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-[4px] bg-[#adb5bd1a] border-[#DCDCDC] border border-opacity-25  py-[6px] px-2 rounded-[4px]">
                <p className="text-[10.8px] font-bold leading-[1]">
                  <span className="text-[#65757D]">Txn Type: &nbsp;</span>2
                  (EIP-1559)
                </p>
              </div>
              <div className="flex items-center gap-[4px] bg-[#adb5bd1a] border-[#DCDCDC] border border-opacity-25  py-[6px] px-2 rounded-[4px]">
                <p className="text-[10.8px] font-bold leading-[1]">
                  <span className="text-[#65757D]">Nonce:&nbsp;</span>
                  579713
                </p>
              </div>
              <div className="flex items-center gap-[4px] bg-[#adb5bd1a] border-[#DCDCDC] border border-opacity-25  py-[6px] px-2 rounded-[4px]">
                <p className="text-[10.8px] font-bold leading-[1]">
                  <span className="text-[#65757D]">
                    Position In Block:&nbsp;
                  </span>
                  104
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="flex items-center mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400  ">
              <HelpIcon />
              <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
                {/* {t("vinaScan.tabs.overview.nonce")} */}
                Input Data:
              </p>
            </div>
            <div className="w-full md:w-3/4">
              <TooltipCustom
                content="The binary data that formed the input to the transaction, either the input data if it was a message call or the contract 0/9/ initialisation if it was a contract creation"
                classNameChildren={"w-full"}
              >
                <textarea
                  placeholder="0x"
                  className=" w-full bg-[#f8f9fa outline-none border focus:border-2 border-[#eaecef] py-[4.8px] px-[9.6px] rounded-lg"
                ></textarea>
              </TooltipCustom>
              {/* <input className=" w-full bg-[#f8f9fa outline-none border focus:border-2 border-[#eaecef] py-[4.8px] px-[9.6px] rounded-lg" placeholder="0x" /> */}
            </div>
          </div>
          <div className="w-full my-5 h-[1px] bg-[#DCDCDC] dark:bg-gray700 "></div>
        </div>
        <div className="flex">
          <div className="flex items-center mb-2 md:mb-0 w-1/2 md:w-1/4 gap-1 ">
            <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400">
              {t("vinaScan.tabs.moreDetail")}
            </p>
          </div>
          <div
            className="flex gap-1 items-center cursor-pointer"
            onClick={() => setIsShowmore(!isShowmore)}
          >
            {isShowmore ? (
              <MinusIcon color={theme === THEME.DARK ? "#6AB5DB" : "#0784c3"} />
            ) : (
              <PlusIcon color={theme === THEME.DARK ? "#6AB5DB" : "#0784c3"} />
            )}

            <span className="text-[#0784c3] dark:text-[#6AB5DB] whitespace-nowrap">
              Click to show {isShowmore ? "less" : "more"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
