import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const ChoiceInput = styled.input(({ theme }) => ({
  boxSizing: "border-box",
  width: "100px",
  transition: "border 0.2s ease-in-out",
  textAlign: "center",
  gap: theme.spacing.md,
  border: `1px solid ${theme.colors.gray}`,
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

interface IInputBox {
  theme?: Theme;
  isFocusing?: boolean;
}
export const FullBorderInputBox = styled.div(
  ({ theme, isFocusing }: IInputBox) => ({
    display: "flex",
    alignItems: "center",
    gap: theme?.spacing.sm,
    border: isFocusing
      ? `2px solid ${theme?.colors.purple}`
      : `2px solid ${theme?.colors.gray}`,
    borderRadius: theme?.borderRadius.sm,
    transition: "border 0.2s",
    padding: theme?.spacing.lg,
  })
);
export const BottomBorderInputBox = styled.div(
  ({ theme, isFocusing }: IInputBox) => ({
    display: "flex",
    alignItems: "center",
    gap: theme?.spacing.sm,
    borderBottom: isFocusing
      ? `2px solid ${theme?.colors.purple}`
      : `2px solid ${theme?.colors.gray}`,

    transition: "border 0.2s",
    padding: theme?.spacing.sm,
    width: "100%",
  })
);
