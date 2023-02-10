import styled from "@emotion/styled";

export const Text = styled.p(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.sm,
  fontWeight: theme.bold.sm,
}));

export const SummaryText = styled.span(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.sm,
  fontWeight: theme.bold.md,
}));

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
