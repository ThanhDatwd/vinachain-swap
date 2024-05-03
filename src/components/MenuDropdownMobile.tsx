"use client";

import classNames from "classnames";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  title: any;
  options: { label: any; value: string; children?: any }[];
  className?: string;
  isActive: boolean;
  onClickClose: () => void;
  onClickOpen: () => void;
};

export const MenuDropdownMobile: FC<Props> = ({
  title,
  options,
  isActive,
  onClickOpen,
  onClickClose
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative inline-block w-full"
      onClick={() => {
        if (!isActive){
          onClickOpen();
        }else{
          onClickClose();
        }
      }}
      ref={ref}
    >
      <button className="inline-flex h-10 w-full justify-between items-center px-3 py-2 text-base font-medium hover:text-sky-600 dark:hover:text-scanDark focus:outline-none">
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
      <div className={classNames(" min-w-56 z-20")}>
        <div
          className={`navbar-list ${
            isActive ? "show" : ""
          } origin-top-left left-0 border rounded-md bg-theme ring-1 ring-black ring-opacity-5 `}
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
