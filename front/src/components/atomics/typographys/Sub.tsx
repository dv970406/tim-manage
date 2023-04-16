import styled from "@emotion/styled";

export const SubText = styled.span(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.sm,
  fontWeight: theme.bold.sm,
}));
export const SubTitle = styled.h2(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.md,
  fontWeight: theme.bold.md,
}));
