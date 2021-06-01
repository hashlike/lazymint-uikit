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
    <SParent>
      <Svg viewBox="0 0 174 26" {...props}>
        <image
          href="data:image/png;base64,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"
          width="172"
        ></image>
      </Svg>
    </SParent>
  );
};

export default Logo;
