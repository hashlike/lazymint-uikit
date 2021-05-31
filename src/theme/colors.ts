import { Colors } from "./types";

export const baseColors = {
  failure: "#FF0000",
  primary: "#FF0000",
  primaryBright: "#FF0000",
  primaryDark: "#FF0000",
  secondary: "#FF0000",
  success: "#FF0000",
  warning: "#FF0000",
};
// export const baseColors = {
//   failure: "#F72B50",
//   primary: "#FF720D",
//   primaryBright: "#e66000",
//   primaryDark: "#d95b00",
//   secondary: "#7645D9",
//   success: "#68CF29",
//   warning: "#FFAB2D",
// };


export const brandColors = {
  binance: "#FF0000",
};
// export const brandColors = {
//   binance: "#F0B90B",
// };

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FF0000",
  backgroundDisabled: "#FF0000",
  contrast: "#FF0000",
  invertedContrast: "#FF0000",
  input: "#FF0000",
  inputBorder: "#FF0000",
  tertiary: "#FF0000",
  text: "#FF0000",
  textDisabled: "#FF0000",
  textSubtle: "#FF0000",
  borderColor: "#FF0000",
  card: "#FF0000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};
// export const lightColors: Colors = {
//   ...baseColors,
//   ...brandColors,
//   background: "#FAF9FA",
//   backgroundDisabled: "#E9EAEB",
//   contrast: "#191326",
//   invertedContrast: "#FFFFFF",
//   input: "#eeeaf4",
//   inputBorder: "#cccccc",
//   tertiary: "#EFF4F5",
//   text: "#452A7A",
//   textDisabled: "#BDC2C4",
//   textSubtle: "#FF720D",
//   borderColor: "#E9EAEB",
//   card: "#FFFFFF",
//   gradients: {
//     bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
//   },
// };

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#FF0000",
  background: "#FF0000",
  backgroundDisabled: "#FF0000",
  contrast: "#FF0000",
  invertedContrast: "#FF0000",
  input: "#FF0000",
  inputBorder: "#FF0000",
  primaryDark: "#FF0000",
  tertiary: "#FF0000",
  text: "#FF0000",
  textDisabled: "#FF0000",
  textSubtle: "#FF0000",
  borderColor: "#FF0000",
  card: "#FF0000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};
// export const darkColors: Colors = {
//   ...baseColors,
//   ...brandColors,
//   secondary: "#e9f1fd",
//   background: "#1f2b46",
//   backgroundDisabled: "#3c3742",
//   contrast: "#FFFFFF",
//   invertedContrast: "#0a0e17",
//   input: "#483f3b",
//   inputBorder: "#cccccc",
//   primaryDark: "#d95b00",
//   tertiary: "#2d2f37",
//   text: "#FFFFFF",
//   textDisabled: "#666171",
//   textSubtle: "#FF720D",
//   borderColor: "#524B63",
//   card: "#121827",
//   gradients: {
//     bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
//   },
// };
