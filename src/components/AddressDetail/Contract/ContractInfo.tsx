import { CopyIcon } from "@/assets/CopyIcon";
import { ArrowBottomIcon } from "@/assets/icons/ArrowDownIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { LinkIcon } from "@/assets/icons/LinkIcon";
import { TooltipCustom } from "@/components/Tooltip";
import { ReactNode, useState } from "react";

export const ContractInfo = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [showMoreContent, setShowMoreContent] = useState(false);

  return (
    <div>
      <div
        className={`flex items-center justify-between bg-[#f8f9fa] dark:bg-gray900 border border-[#e9ecef] py-[6.5px] px-2 text-xs text-[#081d35] dark:text-[#fafafa] transition duration-700 ease-in-out ${
          showMoreContent ? "rounded-t-lg" : "rounded-lg"
        }`}
        onClick={() => setShowMoreContent(!showMoreContent)}
      >
        <span>{title}</span>
        <div className="flex items-center gap-1">
          <TooltipCustom content="Copy Method Name">
            <div className="px-[6.5px] py-1">
              <CopyIcon width={9} height={10.5} color="#081d35" />
            </div>
          </TooltipCustom>
          <TooltipCustom content="Copy Permalink">
            <div className="px-[6.5px] py-1">
              <LinkIcon width={13} height={10.5} color="#081d35" />
            </div>
          </TooltipCustom>
          <div
            className="px-[6.5px] py-1"
          >
            {showMoreContent ? (
              <ArrowRightIcon width={16} height={10} color="#081d35" />
            ) : (
              <ArrowBottomIcon />
            )}
          </div>
        </div>
      </div>
      {showMoreContent && (
        <div className="bg-theme p-[10px] pb-[23px] rounded-b-lg border-l border-b border-r border-[#e9ecef] text-xs text-dark900 transition duration-700 ease-in-out">
          {children}
        </div>
      )}
    </div>
  );
};
