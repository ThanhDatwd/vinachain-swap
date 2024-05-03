import { CopyIcon } from "@/assets/CopyIcon";
import { ChevronDownIcon } from "@/assets/icons/ChevronDownIcon";
import { CircleCheckIcon } from "@/assets/icons/CircleCheckIcon";
import { FileCodeIcon } from "@/assets/icons/FileCodeIcon";
import { FullScreenIcon } from "@/assets/icons/FullScreenIcon";
import { LinkIcon } from "@/assets/icons/LinkIcon";
import { TriangleExclamationIcon } from "@/assets/icons/TriangleExclamationIcon";
import { DropdownAddress } from "@/components/DropdownAddress";
import { TooltipCustom } from "@/components/Tooltip";
import { useTheme } from "@/hooks/useTheme";
import { IDE_DATA, MORE_OPTIONS_DATA, OUTLINE_DATA, THEME } from "@/utils/constants";

export const Code = () => {
  const { theme } = useTheme();
  
  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-1 items-center">
          <CircleCheckIcon />
          <TooltipCustom content="The contract's source code has been verified to match its on-chain Bytecode. Source code verification does not imply the contract is safe to interact with.">
            <span className="text-black dark:text-[#F5F5F5] font-bold">
              Contract Source Code Verified{" "}
              <span className="text-[14.5px] text-[#6c757d] dark:text-[#bbb] font-normal">
                (Exact Match)
              </span>
            </span>
          </TooltipCustom>
        </div>
        <TooltipCustom content="Solifity Complier Bugs, click for more info">
          <TriangleExclamationIcon className="hidden lg:block" />
        </TooltipCustom>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-[14.5px] dark:text-[#F5F5F5]">
        <div>
          <div className="grid grid-cols-2">
            <span>Contract Name</span>
            <span className="font-bold">AdventureGold</span>
          </div>
          <hr className="line my-4" />
          <div className="grid grid-cols-2">
            <span>Compiler Version</span>
            <span className="font-bold">v0.8.7+commit.e28d00a7</span>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2">
            <span>Optimization Enabled:</span>
            <span>
              <span className="font-bold">Yes&nbsp;</span>with&nbsp;
              <span className="font-bold">200</span>&nbsp;runs
            </span>
          </div>
          <hr className="line my-4" />
          <div className="grid grid-cols-2">
            <span>Other Settings:</span>
            <span className="break-words">
              <span className="font-bold">default</span>&nbsp;evmVersion,&nbsp;
              <span className="font-bold">None</span>&nbsp;
              <TooltipCustom content="Click to learn more, open source license">
                <span className="link-color">license</span>
              </TooltipCustom>
            </span>
            &nbsp;
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between text-[15px] text-[#6c757d] dark:text-[#bbb] py-2">
        <div className="flex items-center gap-1">
          <FileCodeIcon />
          <span className="font-bold text-dark900 dark:text-[#F5F5F5]">Contract Source Code</span>
          &nbsp; (Solidity)
        </div>
        <div className="flex gap-1">
          <DropdownAddress
            options={IDE_DATA}
            defaultValue={
              <div className="font-normal">
                {/* icon */}
                <span>IDE</span>
              </div>
            }
            className="p-2 bg-[#e9ecef] dark:bg-gray700 hover:bg-[#dee2e6] dark:text-[#FAFAFA]"
            classNameDetail="p-2"
          />
          <DropdownAddress
            options={OUTLINE_DATA}
            defaultValue={<span className="font-normal">Outline</span>}
            className="p-2 bg-[#e9ecef] dark:bg-gray700 hover:bg-[#dee2e6] dark:text-[#FAFAFA]"
            classNameDetail="p-2"
          />
          <DropdownAddress
            options={MORE_OPTIONS_DATA}
            defaultValue={<span className="font-normal">More Options</span>}
            className="p-2 bg-[#e9ecef] dark:bg-gray700 hover:bg-[#dee2e6] dark:text-[#FAFAFA]"
            classNameDetail="p-2"
          />
        </div>
      </div>
      <div className="flex items-center lg:justify-end gap-1">
        <TooltipCustom content="Copy source code to clipboard">
          <div className="py-[6px] px-2 bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 rounded-md">
            <CopyIcon width={11} height={13.5} color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
          </div>
        </TooltipCustom>
        <TooltipCustom content="Copy Permalink">
          <div className="py-[6px] px-2 bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 rounded-md">
            <LinkIcon color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
          </div>
        </TooltipCustom>
        <TooltipCustom content="Toggle Fullscreen">
          <div className="py-[6px] px-2 bg-[#e9ecef] dark:bg-gray700 dark:border dark:border-gray600 rounded-md">
            <FullScreenIcon color={theme === THEME.DARK ? "#FAFAFA" : "#081D35"} />
          </div>
        </TooltipCustom>
      </div>
    </div>
  );
};
