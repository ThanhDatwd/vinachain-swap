import React from "react";

export const HotContractIcon = (props: any) => {
  return (

    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_665_10801)">
        <path
          d="M28.01 0H3.99A3.99 3.99 0 000 3.99v24.02A3.99 3.99 0 003.99 32h24.02A3.99 3.99 0 0032 28.01V3.99A3.99 3.99 0 0028.01 0z"
          fill={props.bg || "#F6F6F6"}
        />
        <path
          d="M21.23 13.393a.61.61 0 01.157.42v8.002c0 .652-.532 1.185-1.184 1.185h-8.018A1.188 1.188 0 0111 21.815V9.185C11 8.533 11.533 8 12.185 8h4.02c.18 0 .353.075.473.217l4.552 5.175z"
          stroke= {props.color || "#333"}
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <path
          d="M21.387 14.015H17.3a1.188 1.188 0 01-1.185-1.185V8.075"
          stroke= {props.color || "#333"}
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />
        <path
          d="M18.813 17h-5.625c-.104 0-.188.112-.188.25s.084.25.188.25h5.624c.104 0 .188-.112.188-.25s-.084-.25-.188-.25zM18.813 18.72h-5.625c-.104 0-.188.112-.188.25s.084.25.188.25h5.624c.104 0 .188-.112.188-.25s-.084-.25-.188-.25zM18.813 20.43h-5.625c-.104 0-.188.112-.188.25s.084.25.188.25h5.624c.104 0 .188-.112.188-.25s-.084-.25-.188-.25z"
          fill= {props.color || "#333"}
        />
      </g>
      <defs>
        <clipPath id="clip0_665_10801">
          <path fill={props.bg || "#F6F6F6"} d="M0 0H32V32H0z" />
        </clipPath>
      </defs>
    </svg>

  );
};
