import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

interface IFlexBox {
  theme?: Theme;
  gap?: number;
}
export const ColumnBox = styled.div(({ theme, gap }: IFlexBox) => ({
  display: "flex",
  flexDirection: "column",
  // 0값도 들어갈 수 있으므로 || 대신 ??
  gap: gap ?? theme?.spacing.xl,
}));

export const RowBox = styled.div(({ theme, gap }: IFlexBox) => ({
  display: "flex",
  gap: gap ?? theme?.spacing.md,
}));

export const CenterBox = styled.div(({ theme, gap }: IFlexBox) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: gap ?? theme?.spacing.sm,
}));
