import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.card,
  backgroundPanel: lightColors.card,
  hover: "#EEEAF4",
};

export const dark: NavTheme = {
  background: darkColors.card,
  backgroundPanel: darkColors.backgroudPanel,
  hover: "#473d5d",
};
