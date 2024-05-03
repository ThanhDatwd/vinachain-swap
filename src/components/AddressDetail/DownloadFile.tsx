import { DownloadIcon } from "@/assets/icons/DownloadIcon";
import { LightBulbIcon } from "@/assets/icons/LightBulbIcon";
import Link from "next/link";
import { TooltipCustom } from "../Tooltip";

export const DownloadFile = ({ download = false }: { download?: boolean }) => {
  return (
    <div className="flex flex-col gap-4">
      {download && (
        <div className="flex justify-center items-center gap-1 self-end text-xs text-[#6c757d] dark:text-[#bbb]">
          [ Download:{" "}
          <TooltipCustom content="Export records in CSV format">
            <Link href={"/coming-soon"} className="link-color font-medium">
              CSV Export
            </Link>
          </TooltipCustom>
          <DownloadIcon />]
        </div>
      )}
      <div className="flex items-start lg:items-center gap-[2px] text-xs text-[#6c757d] dark:text-[#bbb]">
        <div className="pt-[2px] lg:pt-0">
          <LightBulbIcon />
        </div>
        <span>
          A contract address hosts a smart contract, which is a set of code
          stored on the blockchain that runs when predetermined conditions are
          met. Learn more about addresses in our&nbsp;
          <Link href="/coming-soon" className="link-color">
            Knowledge Base.
          </Link>
        </span>
      </div>
    </div>
  );
};
