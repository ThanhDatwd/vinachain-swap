import { ArrowUpRightIcon } from "@/assets/icons/ArrowUpRightIcon";
import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/utils/constants";
import Link from "next/link";

export const BlockAnalyticCard = ({
  title,
  percentage,
}: {
  title: string;
  percentage: string;
}) => {
  const { theme } = useTheme();
  return (
    <Link
      href={"/coming-soon"}
      className="p-4 rounded-xl  bg-[#fff] dark:bg-[#111111] border border-[#bdc5d133] cursor-pointer group"
    >
      <div className="mb-1 flex items-center justify-between">
        <h6 className=" text-[12px] text-gray550 dark:text-gray400 uppercase">
          {title}
        </h6>
        <div className=" opacity-0 group-hover:opacity-80 scale-90 duration-100 ease-linear ">
          <ArrowUpRightIcon
            color={theme === THEME.DARK ? "#BBBBBB" : "#6C757D"}
          />
        </div>
      </div>
      <div className="text-[18.75px] text-[#081D35] dark:text-gray200 group-hover:text-[#086a9c] dark:group-hover:text-[#6AB5DB]">
        {percentage}
      </div>
    </Link>
  );
};
