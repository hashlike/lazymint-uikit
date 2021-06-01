import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import { Heading } from "../../../components/Heading";
import styled from "styled-components";
interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  // const textColor = isDark ? "#FFFFFF" : "#000000";
  const SParent = styled.div`
    display: flex;
    align: center;
  `;

  return (
    <Svg viewBox="0 0 174 26" {...props}>
      <image
        href="data:image/png;base64,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"
        width="250"
      ></image>
    </Svg>
  );
};

export default Logo;
