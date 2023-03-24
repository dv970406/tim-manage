import { css } from "@emotion/react";
import {
  IBgColors,
  IBolds,
  IBorderRadius,
  IColors,
  IFonts,
  ISpacing,
} from "./type/theme.type";

export interface ITheme {
  bgColors: IBgColors;
  colors: IColors;
  fonts: IFonts;
  bold: IBolds;
  spacing: ISpacing;
  borderRadius: IBorderRadius;
}
export const theme: ITheme = {
  bgColors: {
    main: "#19182F",
    section: "#070A27",
    gradient:
      "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
    gray: "#1A2036",
    purple: "#582BFF",
  },
  colors: {
    white: "#FFFFFF",
    green: "#48BB78",
    red: "#BA353D",
    gray: "#A0AEC0",
    purple: "#582BFF",
  },
  fonts: {
    title: "30px",
    sectionTitle: "18px",
    subTitle: "12px",
    text: "14px",
  },
  bold: {
    title: 700,
    sectionTitle: 700,
    subTitle: 500,
    text: 500,
  },

  spacing: {
    sm: 6,
    md: 10,
    lg: 14,
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
    font-family: NanumSquare, sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    color: ${theme.colors.white};
  }
  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
  }
`;

export interface StylePropTypes {
  theme: {
    colors: Record<keyof typeof theme.colors, string>;
  };
  isClicked?: boolean;
}
