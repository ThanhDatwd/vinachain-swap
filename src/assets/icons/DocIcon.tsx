import React from "react";
export const DocIcon = ({ bg, color }: { bg?: string; color?: string }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_669_9228)">
      <mask
        id="mask0_669_9228"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="32"
      >
        <path d="M32 0H0V32H32V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_669_9228)">
        <path
          d="M28 0H4C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V4C32 1.79086 30.2091 0 28 0Z"
          fill={bg || "#F6F6F6"}
        />
        <rect x="13" y="17" width="6" height="0.5" rx="0.25" fill={color || "#333"} />
        <rect x="13" y="18.5" width="6" height="0.5" rx="0.25" fill={color || "#333"} />
        <rect x="13" y="20" width="4" height="0.5" rx="0.25" fill={color || "#333"} />
      </g>
      <rect
        x="11"
        y="9"
        width="10.39"
        height="15"
        rx="1.5"
        stroke={color || "#333"}
        stroke-width="0.5"
      />
    </g>
    <defs>
      <clipPath id="clip0_669_9228">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
