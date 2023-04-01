import styled from "@emotion/styled";

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
