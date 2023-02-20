import styled from "@emotion/styled";

export const Title = styled.h1(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.title,
  fontWeight: theme.bold.title,
}));

export const SubTitle = styled.h2(({ theme }) => ({
  color: theme.colors.gray,
  fontSize: theme.fonts.subTitle,
  fontWeight: theme.bold.subTitle,
}));

export const SectionTitle = styled.h3(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.sectionTitle,
  fontWeight: theme.bold.sectionTitle,
}));
