import { useTheme } from "@/hooks/useTheme";
import { generateRandomString } from "@/utils";
import { THEME } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import { PlacesType, Tooltip } from "react-tooltip";

interface IProps {
  position?: PlacesType;
  styleTooltip?: React.CSSProperties;
  content: string | React.ReactNode;
  children: React.ReactNode;
  classNameChildren?: String;
}

export const TooltipCustom = ({
  position = "top",
  content,
  children,
  styleTooltip,
  classNameChildren,
}: IProps) => {
  const { theme } = useTheme();

  const randomClassName = generateRandomString(16);
  return (
    <>
      <Tooltip
        opacity={0.95}
        anchorSelect={"." + randomClassName}
        place={position}
        style={{
          backgroundColor: theme === THEME.DARK ? "#313131" : "#13293f",
          color: theme === THEME.DARK ? "#F5F5F5" : "#fff",
          zIndex: 100,
          borderRadius: "8px",
          padding: "6px 8px",
          ...styleTooltip,
        }}
        render={() => (
          <div className="max-w-xs text-center text-xs">{content}</div>
        )}
      />
      <div className={`${randomClassName} inline-block ${classNameChildren} cursor-pointer`}>
        {children}
      </div>
    </>
  );
};
