import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

interface IBottomBorderInput {
  width?: string | number;
  theme?: Theme;
  isFocusing?: boolean;
}
export const BottomBorderInput = styled.div(
  ({ theme, isFocusing, width = "100%" }: IBottomBorderInput) => ({
    display: "flex",
    alignItems: "center",
    gap: theme?.spacing.sm,
    borderBottom: isFocusing
      ? `2px solid ${theme?.colors.purple}`
      : `2px solid ${theme?.colors.gray}`,

    transition: "border 0.2s",
    padding: theme?.spacing.sm,
    ...(width && { width }),
  })
);
