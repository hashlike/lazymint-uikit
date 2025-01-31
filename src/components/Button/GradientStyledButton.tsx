import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { ButtonProps, ButtonThemeVariant, variants } from "./types";

type ThemedProps = {
  theme: DefaultTheme;
} & ButtonProps;

const getDisabledStyles = ({ theme }: ThemedProps) => {
  // if (isLoading === true) {
  //   return `
  //     &:disabled,
  //     &.button--disabled {
  //       cursor: not-allowed;
  //     }
  //   `;
  // }

  return `
    &:disabled,
    &.button--disabled {
      background-color: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
  `;
};

const removePointerEvents = ({ disabled, as }: ThemedProps) => {
  if (disabled && as && as !== "button") {
    return `
      pointer-events: none;
    `;
  }

  return "";
};

const getButtonVariantProp = (prop: keyof ButtonThemeVariant) => ({
  theme,
  variant = variants.PRIMARY,
}: ThemedProps) => {
  return theme.button[variant][prop];
};

const GradientStyledButton = styled.button<ButtonProps>`
  align-items: center;
  background: linear-gradient(to left, #00b1c9, #2bfbfb);
  border: ${getButtonVariantProp("border")};
  border-radius: 16px;
  box-shadow: ${getButtonVariantProp("boxShadow")};
  color: ${getButtonVariantProp("color")};
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  /* max-content instead of auto for Safari fix */
  width: 100%;
  height: ${({ size }) => (size === "sm" ? "32px" : "48px")};
  line-height: 1;
  letter-spacing: 0.03em;
  justify-content: center;
  outline: 0;
  padding: ${({ size }) => (size === "sm" ? "0 16px" : "0 24px")};
  transition: background-color 0.2s;

  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    opacity: 0.8;
  }

  &:active:not(:disabled):not(.button--disabled) {
    opacity: 0.85;
  }

  ${getDisabledStyles}
  ${removePointerEvents}
  ${space}
`;

GradientStyledButton.defaultProps = {
  // fullWidth: false,
  type: "button",
};

export default GradientStyledButton;
