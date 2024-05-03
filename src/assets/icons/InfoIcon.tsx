import React from "react";

export const InfoIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "12"}
      height={props.height || "12"}
      viewBox="0 0 24 24"
    >
      <path fill={props.color} d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
      <path fill={props.color} d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
    </svg>
  );
};
