import * as React from "react"

function LightIcon(props: any) {
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 0 229 177"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M82.04 68.943c.005-23.148 12.552-37.11 36.565-37.11"
        stroke={props.color}
        strokeWidth={8}
        strokeLinecap="round"
      />
      <path
        d="M91.319 134.978c0-24.558-30.562-34.382-30.562-71.492 0-24.013 22.375-54.029 53.482-54.029s53.483 30.016 53.483 54.029c0 37.11-30.562 46.934-30.562 71.492"
        stroke={props.color}
        strokeWidth={8}
      />
      <mask id="a" fill={props.color}>
        <path d="M140.8 146.984c2.209 0 4.027 1.799 3.734 3.988a30.033 30.033 0 01-8.525 17.237 30.016 30.016 0 01-50.974-17.237c-.294-2.189 1.524-3.988 3.734-3.988H140.8z" />
      </mask>
      <path
        d="M140.8 146.984c2.209 0 4.027 1.799 3.734 3.988a30.033 30.033 0 01-8.525 17.237 30.016 30.016 0 01-50.974-17.237c-.294-2.189 1.524-3.988 3.734-3.988H140.8z"
        stroke={props.color}
        strokeWidth={16}
        mask={props.color}
      />
      <path
        d="M4 72.763h30.562m189.916-3.274h-30.561M40.891 28.885L19.28 7.275M187.369 25.61L208.979 4M19.281 138.033l21.61-21.61m168.088 18.336l-21.61-21.611"
        stroke={props.color}
        strokeWidth={8}
        strokeLinecap="round"
      />
    </svg>
  )
}

export default LightIcon
