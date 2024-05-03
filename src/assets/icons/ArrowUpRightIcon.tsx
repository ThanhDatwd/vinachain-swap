import React from "react";

export const ArrowUpRightIcon = (props: any) => (
  <svg
    width={props.width | 25}
    height={props.height | 25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={25}
      height={25}
    >
      <path
        fill="#D9D9D9"
        d="M0.399292 0.174561H24.399292V24.174561H0.399292z"
      />
    </mask>
    <g mask="url(#a)">
      <path
        d="M6.932 17.12a.487.487 0 01-.69-.69l9.568-9.585a.1.1 0 00-.071-.17H7.188a.5.5 0 010-1h10a.5.5 0 01.5.5v10a.5.5 0 11-1 0V7.622a.1.1 0 00-.17-.07l-9.586 9.566z"
        fill={props?.color || "currentColor"}
      />
    </g>
  </svg>
);
