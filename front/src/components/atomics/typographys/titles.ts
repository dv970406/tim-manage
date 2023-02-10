import styled from "@emotion/styled";

export const PageTitle = styled.h1(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.xl,
  fontWeight: theme.bold.lg,
}));

export const SubTitle = styled.h2(({ theme }) => ({
  color: theme.colors.gray,
  fontSize: theme.fonts.sm,
  fontWeight: theme.bold.md,
}));

export const SectionTitle = styled.h3(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.md,
  fontWeight: theme.bold.md,
}));

export const LabelTitle = styled.h4(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.sm,
  fontWeight: theme.bold.sm,
}));
