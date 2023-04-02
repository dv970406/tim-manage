import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { HoverButton } from "../../atomics/buttons/HoverButton";
import { Icon } from "../../atomics/icons/icon";
import { IIconButton } from "./IconButton";

interface ICircleIconButton extends IIconButton {
  bgColor: string;
}

interface ISCircleIconButton {
  theme?: Theme;
  bgColor: string;
}
const SCircleIconButton = styled(HoverButton)(
  ({ theme, bgColor }: ISCircleIconButton) => ({
    backgroundColor: bgColor,
    padding: theme?.spacing.lg,
    borderRadius: "50%",
  })
);
export const CircleIconButton = ({
  onClick,
  icon,
  bgColor,
  color,
  size,
}: ICircleIconButton) => {
  return (
    <SCircleIconButton onClick={onClick} type="button" bgColor={bgColor}>
      <Icon icon={icon} color={color} size={size} />
    </SCircleIconButton>
  );
};
