"use client";

import classNames from "classnames";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const NavLink = ({
  title,
  options,
  className,
}: {
  title: string;
  options: { label: any; value: string; children?: any }[];
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const path = usePathname();

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`inline-flex h-12 items-center px-3 py-2 text-base font-medium hover:text-sky-600 dark:hover:text-scanDark ${
           options.map((item) => item.value).includes(path) ? "text-sky-600 dark:text-scanDark" : ""
        } focus:outline-none`}
      >
        {title}{" "}
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
      <div className={classNames("absolute min-w-56 z-20 whitespace-nowrap", className)}>
        <div
          className={`navbar-list ${
            isHovered ? "show" : ""
          } origin-top-left absolute py-2 left-0 mt-4  border-t-[4px] border-sky-600 dark:border-scanDark rounded-b-md box-shadow bg-theme ring-1 ring-black ring-opacity-5 `}
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
        </div>
      </div>
    </div>
  );
};

export default NavLink;
