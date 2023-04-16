import styled from "@emotion/styled";

export const ScrollBox = styled.ul(({ theme }) => ({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: theme?.spacing.xl,

  // scrollbar와 간격을 두기 위한 목적의 paddingRight
  paddingRight: 40,
}));

export const ListItem = styled.li(({ theme }) => ({
  background: theme.bgColors.sectionGradient,
  padding: theme.spacing.lg,
  width: "100%",
  borderRadius: theme.borderRadius.lg,
}));
