import { css } from "@emotion/react";
import {
  IBgColors,
  IBolds,
  IBorderRadius,
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
}
export const theme: ITheme = {
  bgColors: {
    section: "rgb(7, 10, 39)",
    gradient:
      "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
    translucent: "rgba(0, 0, 0, 0.8)",
    white: "rgb(255, 255, 255)",
    green: "rgb(72, 187, 120)",
    red: "rgb(186, 53, 61)",
    gray: "rgb(26, 32, 54)",
    purple: "rgb(88,43,255)",
  },
  disabled: {
    white: "rgba(255, 255, 255,0.3)",
    green: "rgba(72, 187, 120,0.3)",
    red: "rgba(186, 53, 61,0.3)",
    gray: "rgba(160, 174, 192,0.3)",
    purple: "rgba(88,43,255,0.3)",
    opacity: 0.5,
  },
  hoverColors: {
    purple: "rgb(77, 57, 216)",
  },
  colors: {
    white: "rgb(255, 255, 255)",
    green: "rgb(72, 187, 120)",
    red: "rgb(186, 53, 61)",
    gray: "rgb(160, 174, 192)",
    purple: "rgb(88,43,255)",
  },
  fonts: {
    xl: "30px",
    lg: "18px",
    md: "14px",
    sm: "12px",
  },
  bold: {
    xl: 800,
    lg: 700,
    md: 600,
    sm: 500,
    // title: 700,
    // sectionTitle: 700,
    // subTitle: 500,
    // text: 500,
  },

  spacing: {
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
};

export const globalStyles = css`
  input {
    all: unset;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    color: ${theme.colors.white};
    //font-family: ;
  }
  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
  }
  p {
    margin: 0;
  }
  li {
    list-style: none;
  }
`;
