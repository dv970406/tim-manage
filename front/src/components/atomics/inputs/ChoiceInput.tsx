import styled from "@emotion/styled";

export const ChoiceInput = styled.input(({ theme }) => ({
  boxSizing: "border-box",
  width: "100px",
  transition: "border 0.2s ease-in-out",
  textAlign: "center",
  gap: theme.spacing.md,
  border: `2px solid ${theme.colors.gray}`,
  borderRadius: theme.borderRadius.md,
  padding: theme.spacing.sm,
  "&:hover": {
    border: `2px solid ${theme.hoverColors.purple}`,
    cursor: "pointer",
  },
  ":focus": {
    border: `1px solid ${theme.colors.purple}`,
  },
}));
