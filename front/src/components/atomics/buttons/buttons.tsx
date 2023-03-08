import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { CSSProperties } from "react";

export const TabButton = styled("button")(({ theme, isClicked }: any) => ({
  padding: theme.spacing.lg,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing.md,
  backgroundColor: isClicked && theme.bgColors.gray,
  borderRadius: theme.borderRadius.md,
  width: "100%",
  transition: "all 0.2s",
}));

export const SubmitButton = styled("button")(({ theme }) => ({
  padding: theme.spacing.lg,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.bgColors.purple,
  borderRadius: theme.borderRadius.md,
  width: "100%",
  transition: "all 0.2s",
  color: theme.colors.white,
  "&:hover": {
    backgroundColor: theme.hoverColors.purple,
  },
  ":disabled": {
    opacity: theme.disabled.opacity,
  },
}));

interface IHoverButton {
  theme?: Theme;
  hover?: CSSProperties;
}
export const HoverButton = styled("button")(
  ({ theme, hover }: IHoverButton) => ({
    display: "flex",
    alignItems: "center",
    gap: theme?.spacing.sm,
    "&:hover": {
      ...hover,
    },
  })
);
