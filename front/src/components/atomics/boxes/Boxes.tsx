import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints } from "../../../css/media-query/media-query";

interface IColumnBox {
  theme?: Theme;
  gap?: number;
}
export const ColumnBox = styled.div(({ theme, gap }: IColumnBox) => ({
  display: "flex",
  flexDirection: "column",
  // 0값도 들어갈 수 있으므로 || 대신 ??
  gap: gap ?? theme?.spacing.xl,
  width: "100%",
  height: "100%",
}));

export const RowBox = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing.md,
  width: "100%",
}));

export const ScrollBox = styled.ul(({ theme }) => ({
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  gap: theme?.spacing.lg,
}));

export const GapList = styled.ul(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.md,
}));

export const ListBox = styled.ul`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
  }

  ${({ theme }) => ({
    gap: theme.spacing.lg,
  })}
`;

export const ItemBox = styled.li(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing.xl,
  gap: theme.spacing.md,
  borderRadius: theme.borderRadius.md,
  background: theme.bgColors.listGradient,
  backdropFilter: theme.bgColors.backdropFilter,
  "&:hover": {
    transform: "translateY(-8px)",
  },

  transition: "all 0.3s",
  cursor: "pointer",
}));

export const HorizontalDivider = styled.div(({ theme }) => ({
  height: "1px",
  width: "100%",
  background: theme.bgColors.silver,
}));
export const VerticalDivider = styled.div(({ theme }) => ({
  width: "1px",
  height: "100%",
  background: theme.bgColors.silver,
}));
