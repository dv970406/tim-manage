import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

interface ITabButton {
  theme?: Theme;
  isClicked?: boolean;
}
export const TabButton = styled("button")(
  ({ theme, isClicked }: ITabButton) => ({
    padding: theme?.spacing.lg,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme?.spacing.md,
    ...(isClicked && { backgroundColor: theme?.bgColors.gray }),
    borderRadius: theme?.borderRadius.md,
    width: "100%",
    transition: "all 0.2s",
  })
);
