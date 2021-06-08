import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 10 10" {...props}>
      <defs>
        <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#b721ff" />
          <stop offset="1" stop-color="#21d4fd" />
        </linearGradient>
      </defs>
      <path
        id="check"
        d="M3.736,12.619.161,9.044a.55.55,0,0,1,0-.778l.778-.778a.55.55,0,0,1,.778,0L4.125,9.9,9.283,4.738a.55.55,0,0,1,.778,0l.778.778a.55.55,0,0,1,0,.778L4.514,12.619a.55.55,0,0,1-.778,0Z"
        transform="translate(0 -4.577)"
        fill="url(#linear-gradient)"
      />
    </Svg>
  );
};

export default Icon;
