import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { minMq } from "../../../utils/css/media-query";

export const ColumnBox = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.xl,
  width: "100%",
  height: "100%",
}));

export const RowBox = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing.md,
  width: "100%",
}));

export const GapBox = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.sm,
  width: "100%",
}));
interface IScrollBox {
  theme?: Theme;
  height?: string;
  gap?: string;
}
export const ScrollBox = styled.ul(({ theme, height, gap }: IScrollBox) => ({
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  gap: gap || theme?.spacing.md,
  width: "100%",
  height: height ? height : "90%",
  paddingBlock: theme?.spacing.lg,
}));

export const GapList = styled.ul(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.md,
}));

export const ListBox = styled.ul`
  display: grid;
  width: 100%;

  ${minMq[0]} {
    grid-template-columns: 1fr 1fr;
  }
  ${minMq[2]} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${minMq[4]} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
