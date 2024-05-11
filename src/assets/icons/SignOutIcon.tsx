import React from 'react'

const SignOutIcon = () => {
  return (
    <svg
      width={24}
      height={24}
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
          d="M20.15 13H8v-2h12.15L18.6 9.45 20 8l4 4-4 4-1.4-1.45L20.15 13zM15 9V5H5v14h10v-4h2v4c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0115 21H5c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 013 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 015 3h10c.55 0 1.02.196 1.413.587C16.803 3.98 17 4.45 17 5v4h-2z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}

export default SignOutIcon