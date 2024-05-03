"use client"
import React from "react";

const Icon = (props: any) => (
  <svg
    viewBox={props.viewBox || "0 0 640 512"}
    width={props.width || 32}
    height={props.height || 32}
  >
    <g>
      {props.d.map((value: any, index: number) => (
        <path key={index} d={value.d} fill={value.fill}></path>
      ))}
    </g>
  </svg>
);

export default Icon;
