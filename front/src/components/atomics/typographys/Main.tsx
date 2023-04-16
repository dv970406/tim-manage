import styled from "@emotion/styled";

export const MainText = styled.p(({ theme, color }) => ({
  color: color ?? theme.colors.white,
  fontSize: theme.fonts.md,
  fontWeight: theme.bold.sm,
}));

export const MainTitle = styled.h1(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.lg,
  fontWeight: theme.bold.lg,
}));
