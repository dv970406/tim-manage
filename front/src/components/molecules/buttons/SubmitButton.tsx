import styled from "@emotion/styled";
import { CSSProperties, MouseEventHandler } from "react";

export const SSubmitButton = styled("button")(({ theme }) => ({
  padding: theme.spacing.lg,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.bgColors.purple,
  borderRadius: theme.borderRadius.md,
  transition: "all 0.2s",
  color: theme.colors.white,
  "&:hover": {
    backgroundColor: theme.hoverColors.purple,
  },
  ":disabled": {
    opacity: theme.disabled.opacity,
  },
}));

interface ISubmitButton {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: CSSProperties;
  text?: string;
}
export const SubmitButton = ({
  onClick,
  disabled = false,
  children,
  style,
  text,
}: ISubmitButton) => {
  return (
    <SSubmitButton onClick={onClick} disabled={disabled} style={style}>
      {children ?? text}
    </SSubmitButton>
  );
};
