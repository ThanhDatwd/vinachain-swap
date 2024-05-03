import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { ArrowUpRightIcon } from "@/assets/icons/ArrowUpRightIcon";
import { ArrowUpRightSquareIcon } from "@/assets/icons/ArrowUpRightSquareIcon";
import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/utils/constants";
import Link from "next/link";
import React from "react";

export const TransactionsAnalytic = () => {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      <Link
        href={"/coming-soon"}
        className="p-4 rounded-xl  bg-[#fff] dark:bg-[#111111] border border-[#bdc5d133] cursor-pointer group"
      >
        <div className="mb-1 flex items-center justify-between">
          <h6 className=" text-[12px] text-gray550 dark:text-gray400 uppercase">
            Transactions (24H)
          </h6>
          <div className=" opacity-0 group-hover:opacity-80 scale-90 duration-100 ease-linear ">
            <ArrowUpRightIcon
              color={theme === THEME.DARK ? "#BBBBBB" : "#6C757D"}
            />
          </div>
        </div>
        <div className="text-[18.75px] text-[#081D35] dark:text-gray200 group-hover:text-[#086a9c] dark:group-hover:text-scanDark">
          1.178,253 <span className="text-[#00A186] text-[12.6px]">(3.24%)</span>
        </div>
      </Link>
      <Link
        href={`/coming-son`}
        className="p-4 rounded-xl  bg-[#fff] dark:bg-[#111111] border border-[#bdc5d133] cursor-pointer group"
      >
        <div className="mb-1 flex items-center justify-between">
          <h6 className=" text-[12px] text-gray550 dark:text-gray400 uppercase">
            Pending Transactions
          </h6>
          <div className=" opacity-0 group-hover:opacity-80 scale-90 duration-100 ease-linear">
            <ArrowUpRightIcon
              color={theme === THEME.DARK ? "#BBBBBB" : "#6C757D"}
            />
          </div>
        </div>
        <div className="text-[18.75px] text-[#081D35] dark:text-gray200 group-hover:text-[#086a9c] dark:group-hover:text-scanDark">
          157,700 <span className="text-[12.6px]">(Average)</span>
        </div>
      </Link>
      <Link
        href={"/coming-soon"}
        className="p-4 rounded-xl  bg-[#fff] dark:bg-[#111111] border border-[#bdc5d133] cursor-pointer group"
      >
        <div className="mb-1 flex items-center justify-between">
          <h6 className=" text-[12px] text-gray550 dark:text-gray400 uppercase">
            NETWORK TRANSACTION FEE (24H)
          </h6>
          <div className=" opacity-0 group-hover:opacity-80 scale-90 duration-100 ease-linear">
            <ArrowUpRightIcon
              color={theme === THEME.DARK ? "#BBBBBB" : "#6C757D"}
            />
          </div>
        </div>
        <div className="text-[18.75px] text-[#081D35] dark:text-gray200 group-hover:text-[#086a9c] dark:group-hover:text-scanDark">
          406.35 (VPC) <span  className="text-[#00A186] text-[12.6px]">50,18%</span>
        </div>
      </Link>
      <Link
        href={"/coming-soon"}
        className="p-4 rounded-xl  bg-[#fff] dark:bg-[#111111] border border-[#bdc5d133] cursor-pointer group"
      >
        <div className="mb-1 flex items-center justify-between">
          <h6 className=" text-[12px] text-gray550 dark:text-gray400 uppercase">
            AVG. TRANSACTION FEE (24H)
          </h6>
          <div className=" opacity-0 group-hover:opacity-80 scale-90 duration-100 ease-linear">
            <ArrowUpRightIcon
              color={theme === THEME.DARK ? "#BBBBBB" : "#6C757D"}
            />
          </div>
        </div>
        <div className="text-[18.75px] text-[#081D35] dark:text-gray200 group-hover:text-[#086a9c] dark:group-hover:text-scanDark">
          4.09 USD
        </div>
      </Link>
    </div>
  );
};
