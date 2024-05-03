import { EyeIcon } from "@/assets/icons/EyeIcon";
import { useTheme } from "@/hooks/useTheme";
import { generateRandomString } from "@/utils";
import { THEME } from "@/utils/constants";
import React, { useEffect, useRef } from "react";
import { Tooltip, TooltipRefProps, TooltipWrapper } from "react-tooltip";

interface IProps {
  style?: React.CSSProperties;
  content: string | React.ReactNode;
}
export const AdditionalInfoModal = ({ content }: IProps) => {
  const randomClassName = generateRandomString(16);
  const { theme } = useTheme();

  const contentRef = useRef<TooltipRefProps>(null);
  const parentRef = useRef<any>(null);
  ClickOutside(parentRef, () => {
    contentRef.current?.close();
  });

  return (
    <>
      <div className="relative z-50" ref={parentRef}>
        <div
          onClick={() => {
            contentRef.current?.open({
              anchorSelect: "." + randomClassName,
            });
          }}
          className={`border relative rounded p-2 w-fit cursor-pointer hover:bg-gray200 z-[1] dark:hover:bg-gray700`}
        >
          <EyeIcon color={theme === THEME.DARK ? "#F5F5F5" : "#3f4346"} />
        </div>

        <div
          className={` ${randomClassName} absolute rounded top-0 left-0 w-full h-full`}
        ></div>
      </div>
      <Tooltip
        ref={contentRef}
        place="right"
        opacity={1}
        style={{
          backgroundColor: theme === THEME.DARK ? "#111111" : "#fff",
          boxShadow: theme === THEME.DARK ? "0px 0px 1px 0.5px #5b595994" : "0px 0px 1px 0px #0000007d",
          border: "1px solid red !important",
          borderRadius: "12px",
          pointerEvents: "auto",
          zIndex: 10000,
          
        }}
        render={() => (
          <div className="max-w-96 text-center text-xs">{content}</div>
        )}
      />
    </>
  );
};

const ClickOutside = (ref: any, onClickOutside: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};
