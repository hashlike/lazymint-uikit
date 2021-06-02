import React from "react";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import GradientStyledButton from "./GradientStyledButton";
import { ButtonProps, variants, sizes } from "./types";

const GradientButton: React.FC<ButtonProps> = ({ startIcon, endIcon, children, external, isLoading, disabled, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isLoading || disabled;

  return (
    <GradientStyledButton {...internalProps} {...props} isLoading={isLoading} disabled={isDisabled}>
      {React.isValidElement(startIcon) &&
        React.cloneElement(startIcon, {
          mr: "0.5rem",
        })}
      {children}
      {React.isValidElement(endIcon) &&
        React.cloneElement(endIcon, {
          ml: "0.5rem",
        })}
    </GradientStyledButton>
  );
};

GradientButton.defaultProps = {
  variant: variants.PRIMARY,
  size: sizes.MD,
  external: false,
  isLoading: false,
  disabled: false,
};

export default GradientButton;
