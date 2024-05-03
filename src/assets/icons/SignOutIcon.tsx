import React from 'react'

const SignOutIcon = () => {
  return (
    <svg
      width={16}
      height={16}
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
          d="M12.743 2.286H6a2 2 0 00-2 2v15.428a2 2 0 002 2h6.743"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M18.678 12.607H10.92a.607.607 0 110-1.214h7.757L15.71 8.425a.606.606 0 01.858-.858l3.725 3.726a1 1 0 010 1.414l-3.725 3.725a.606.606 0 01-.858-.858l2.968-2.967z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}

export default SignOutIcon