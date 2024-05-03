import React from "react";

export const UploadIcon = (props: any) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
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
        width={32}
        height={32}
      >
        <path fill="#D9D9D9" d="M0 0H32V32H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="M14.667 21.333V10.467l-3.466 3.466L9.334 12l6.667-6.667L22.667 12l-1.866 1.933-3.467-3.466v10.866h-2.667zm-6.666 5.334a2.568 2.568 0 01-1.884-.784A2.568 2.568 0 015.334 24v-4h2.667v4h16v-4h2.666v4c0 .733-.26 1.361-.783 1.883a2.568 2.568 0 01-1.883.784H8z"
          fill="#3B3BFC"
        />
      </g>
    </svg>
  );
};
