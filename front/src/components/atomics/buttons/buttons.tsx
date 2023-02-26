import styled from "@emotion/styled";

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

export const HoverButton = styled("button")`
  display: flex;
  align-items: center;

  ${({ theme }) => ({
    gap: theme.spacing.sm,
    // "&:hover": {
    //   "svg, p": {
    //     color: theme.hoverColors.purple,
    //   },
    // },
  })}
`;
