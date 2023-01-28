import styled from "@emotion/styled";

export const Text = styled.p(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.md,
  fontWeight: theme.bold.md,
}));

export const SummaryText = styled.p(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.lg,
  fontWeight: theme.bold.lg,
}));

export const ErrorText = styled.p(({ theme }) => ({
  color: theme.colors.red,
  fontSize: theme.fonts.md,
  fontWeight: theme.bold.md,
}));
