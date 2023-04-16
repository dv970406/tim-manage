import styled from "@emotion/styled";

export const ErrorText = styled.span(({ theme }) => ({
  color: theme.colors.red,
  fontSize: theme.fonts.md,
  fontWeight: theme.bold.md,
}));

export const DateText = styled.span(({ theme }) => ({
  color: theme.colors.blue,
  fontSize: theme.fonts.sm,
  fontWeight: theme.bold.md,
}));
export const AccentText = styled.span(({ theme }) => ({
  color: theme.colors.green,
  fontSize: theme.fonts.sm,
  fontWeight: theme.bold.lg,
}));

export const SectionTitle = styled.h3(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.md,
  fontWeight: theme.bold.md,
}));
