import React from "react";

export const CheckIcon = (props: any) => {
  return (
    <svg
      width={props.width || 12}
      height={props.height || 12}
      viewBox="0 0 173 173"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={86.5}
        cy={86.5}
        r={86.5}
        fill={props.currentColor ? "currentColor" : "#246BEE"}
      />
      <path
        d="M42.485 93.284c-4.686-4.686-4.686-12.284 0-16.97 4.687-4.687 12.285-4.687 16.97 0l33.235 33.234-16.97 16.97-33.235-33.234z"
        fill="#fff"
      />
      <path
        d="M131.407 71.456c4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.971 0L59 109.921l16.97 16.97 55.437-55.436z"
        fill="#fff"
      />
    </svg>
  );
};
