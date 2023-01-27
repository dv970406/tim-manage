export interface IBgColors {
  section: string;
  gradient: string;
  translucent: string;
  white: string;
  green: string;
  red: string;
  gray: string;
  purple: string;
}
export interface IHoverColors {
  purple: string;
}
export interface IColors {
  white: string;
  green: string;
  red: string;
  gray: string;
  purple: string;
}

export interface IDisabled extends IColors {
  opacity: number;
}
export interface IFonts {
  xl: string;
  lg: string;
  md: string;
  sm: string;
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
}
export interface IBorderRadius {
  lg: number;
  md: number;
  sm: number;
}
