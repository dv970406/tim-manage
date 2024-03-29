import {
  IBgColors,
  IBolds,
  IBorderRadius,
  IBreakpoints,
  IColors,
  IDisabled,
  IFonts,
  IHoverColors,
  ISpacing,
} from "./type/theme.type";

export interface ITheme {
  bgColors: IBgColors;
  hoverColors: IHoverColors;
  disabled: IDisabled;
  colors: IColors;
  fonts: IFonts;
  bold: IBolds;
  spacing: ISpacing;
  borderRadius: IBorderRadius;
  breakpoints: IBreakpoints;
}
export const theme: ITheme = {
  bgColors: {
    section: "rgb(7, 10, 39)",
    sectionGradient:
      "linear-gradient(127.09deg,rgba(6,11,40,.94) 19.41%,rgba(10,14,35,.49) 76.65%)",
    listGradient:
      "linear-gradient(127.09deg,rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
    backdropFilter: "blur(120px)",
    silver:
      "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, rgb(224, 225, 226) 49.52%, rgba(224, 225, 226, 0) 100%)",
    translucent: "rgba(0, 0, 0, 0.8)",
    white: "rgb(255, 255, 255)",
    green: "rgb(104,211,145)",
    red: "rgb(186, 53, 61)",
    darkgray: "rgb(42, 46, 93)",
    gray: "rgb(26, 32, 54)",
    lightgray: "rgb(79,86,110)",
    purple: "rgb(88,43,255)",
    yellow: "rgb(246,173,84)",
    blue: "rgb(12,197,234)",
  },
  disabled: {
    white: "rgba(255, 255, 255,0.3)",
    green: "rgba(104,211,145,0.3)",
    red: "rgba(186, 53, 61,0.3)",
    darkgray: "rgb(26, 32, 54,0.3)",
    gray: "rgb(79,86,110,0.3)",
    lightgray: "rgba(42, 46, 93,0.3)",
    purple: "rgba(88,43,255,0.3)",
    yellow: "rgba(246,173,84,0.3)",
    blue: "rgba(12,197,234,0.3)",
    opacity: 0.5,
  },
  hoverColors: {
    purple: "rgb(42, 29, 163)",
  },
  colors: {
    white: "rgb(255, 255, 255)",
    green: "rgb(104,211,145)",
    red: "rgb(186, 53, 61)",
    darkgray: "rgb(26, 32, 54)",
    gray: "rgb(79,86,110)",
    lightgray: "rgb(42, 46, 93)",
    purple: "rgb(88,43,255)",
    yellow: "rgb(246,173,84)",
    blue: "rgb(12,197,234)",
  },
  fonts: {
    xl: "26px",
    lg: "19px",
    md: "14px",
    sm: "12px",
    xs: "10px",
  },
  bold: {
    xl: 800,
    lg: 700,
    md: 600,
    sm: 500,
  },

  spacing: {
    xs: 4,
    sm: 6,
    md: 10,
    lg: 14,
    xl: 20,
  },

  borderRadius: {
    sm: 12,
    md: 15,
    lg: 20,
  },

  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
  },
};
