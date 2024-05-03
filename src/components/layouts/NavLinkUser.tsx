"use client";

import SignOutIcon from "@/assets/icons/SignOutIcon";
import { UserIcon } from "@/assets/icons/UserIcon";
import { useAuth } from "@/hooks/useAuth";
import classNames from "classnames";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const NavLinkUser = ({
  title,
  options,
  className,
}: {
  title: string;
  options: { label: any; value: string; children?: any }[];
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { logout } = useAuth();
  const path = usePathname();

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`inline-flex h-12 items-center px-3 py-2 text-base font-medium hover:text-sky-600 dark:hover:text-scanDark ${
          options.map((item) => item.value).includes(path) ? "text-sky-600 dark:hover:text-scanDark" : ""
        } focus:outline-none`}
      >
        <div className="flex items-center gap-2 cursor-pointer whitespace-nowrap uppercase">
          <UserIcon className="!w-5 !h-5" /> {title}{" "}
        </div>
        <svg
          className="-mr-1 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={classNames("absolute w-56 z-20", className)}>
        <div
          className={`navbar-list ${
            isHovered ? "show" : ""
          } origin-top-right absolute py-2 right-12  border-t-[4px] border-sky-600 dark:border-scanDark rounded-b-md box-shadow bg-theme ring-1 ring-black ring-opacity-5 `}
        >
          {options.map(
            (
              option: { label: any; value: string; children?: any },
              index: number
            ) => (
              <div key={index} className=" px-2 w-full">
                {option.children ?? option.label}
              </div>
            )
          )}
          <div className=" px-2 w-full pt-2 mt-2 border-t ">
            <button
              className="w-full flex items-center justify-center hover:bg-scanDark hover:bg-opacity-10 gap-2 py-2 px-4 leading-[1] border-theme text-blue dark:text-scanDark rounded-lg text-[12.5px] cursor-pointer"
              onClick={logout}
            >
              <SignOutIcon/> Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLinkUser;
