import React from "react";

export const ArrowRightIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height || 12.5}
    width={props.width || 13}
    fill={props.colo||"currentColor"}
    viewBox="0 0 16 12"
  >
    <path
      d="M10 12l-1.4-1.45L12.15 7H0V5h12.15L8.6 1.45 10 0l6 6-6 6z"
      fill={props.colo||"currentColor"}
    />
  </svg>
);

