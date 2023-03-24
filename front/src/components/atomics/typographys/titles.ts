import styled from "@emotion/styled";

export const MainTitle = styled.h1(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.lg,
  fontWeight: theme.bold.lg,
}));

export const SubTitle = styled.h2(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.md,
  fontWeight: theme.bold.md,
}));

export const SectionTitle = styled.h3(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.md,
  fontWeight: theme.bold.md,
}));
