import * as React from "react"

function PlusIcon(props:any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 24}
      height={props.height || 24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" fill={props.color} />
    </svg>
  )
}

export default PlusIcon
