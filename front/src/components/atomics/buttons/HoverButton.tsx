import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { CSSProperties } from "react";

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
