import React from 'react'

export const DropdownCheckIcon = (props:any) => {
  return (
    <svg
    width={props.width||24}
    height={props.height||24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="a"
      style={{
        maskType: "alpha"
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path fill="#D9D9D9" d="M0 0H24V24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M10.25 17.138a1 1 0 01-1.485.077l-4.203-4.203a1.008 1.008 0 011.425-1.425L9.55 15.15l6.484-8.292a.992.992 0 111.552 1.236l-7.337 9.044z"
        fill={props?.color||"currentColor"}
      />
    </g>
  </svg>
  )
}
