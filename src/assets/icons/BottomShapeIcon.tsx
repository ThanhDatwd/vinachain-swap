import * as React from "react"

function BottomShapeIcon(props: any) {
  return (
    <svg
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1920 100.1"
      height={32}
      fill="fill-white dark:fill-[#0a0a0a]"
      {...props}
    >
      <path fill={props.color} d="M0 0s934.4 93.4 1920 0v100.1H0V0z" />
    </svg>
  )
}

export default BottomShapeIcon
