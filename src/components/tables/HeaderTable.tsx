"use client";

import { FC, ReactNode } from "react";

export const HeaderTable: FC<{
  text?: string;
  leftIcon?: ReactNode;
  icon?: ReactNode;
  textStyle?: string;
  containerStyle?: string;
}> = ({ text, leftIcon, icon, textStyle = "text-base text-purple550 dark:text-orange200", containerStyle }) => {
  return (
    <div className={`flex items-center gap-1 ${containerStyle}`}>
      {leftIcon && leftIcon}
      <div className={`font-bold items-center whitespace-nowrap text-[12.5px] ${textStyle}`}>
        {text}
      </div>
      {icon && icon}
    </div>
  );
};
