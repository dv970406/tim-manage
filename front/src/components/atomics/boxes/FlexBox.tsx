import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

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

export const CenterBox = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing.sm,
}));
