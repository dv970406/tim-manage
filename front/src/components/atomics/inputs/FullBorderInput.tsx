import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

interface IFullBorderInput {
  theme?: Theme;
  isFocusing?: boolean;
}
export const FullBorderInput = styled.div(
  ({ theme, isFocusing }: IFullBorderInput) => ({
    display: "flex",
    alignItems: "center",
    gap: theme?.spacing.sm,
    border: isFocusing
      ? `2px solid ${theme?.colors.purple}`
      : `2px solid ${theme?.colors.gray}`,
    borderRadius: theme?.borderRadius.sm,
    transition: "border 0.2s",
    padding: theme?.spacing.md,
  })
);
