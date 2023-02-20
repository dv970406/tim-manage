import styled from "@emotion/styled";

export const MainText = styled.p(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fonts.text,
  fontWeight: theme.bold.text,
}));
