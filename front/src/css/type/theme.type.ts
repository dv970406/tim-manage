export interface IBgColors {
  section: string;
  sectionGradient: string;
  listGradient: string;
  backdropFilter: string;
  silver: string;
  translucent: string;
  white: string;
  green: string;
  red: string;
  darkgray: string;
  gray: string;
  lightgray: string;
  purple: string;
  yellow: string;
  blue: string;
}
export interface IHoverColors {
  purple: string;
}
export interface IColors {
  white: string;
  green: string;
  red: string;
  darkgray: string;
  gray: string;
  lightgray: string;
  purple: string;
  yellow: string;
  blue: string;
}

export interface IDisabled extends IColors {
  opacity: number;
}
export interface IFonts {
  xl: string;
  lg: string;
  md: string;
  sm: string;
  xs: string;
}
export interface IBolds {
  xl: number;
  lg: number;
  md: number;
  sm: number;
}
export interface ISpacing {
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
}
export interface IBorderRadius {
  lg: number;
  md: number;
  sm: number;
}

export interface IBreakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}
