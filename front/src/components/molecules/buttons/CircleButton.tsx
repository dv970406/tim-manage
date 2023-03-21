import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../../css/theme";
import { HoverButton } from "../../atomics/buttons/buttons";
import { Icon } from "../../atomics/icons/icons";
import { IIconButton } from "./IconButton";

interface ICircleButton extends IIconButton {
  bgColor: string;
}

interface ISCircleButton {
  theme?: Theme;
  bgColor: string;
}
const SCircleButton = styled(HoverButton)(
  ({ theme, bgColor }: ISCircleButton) => ({
    backgroundColor: bgColor,
    padding: theme?.spacing.lg,
    borderRadius: "50%",
  })
);
export const CircleButton = ({
  onClick,
  icon,
  bgColor,
  color,
  size,
}: ICircleButton) => {
  return (
    <SCircleButton onClick={onClick} type="button" bgColor={bgColor}>
      <Icon icon={icon} color={color} size={size} />
    </SCircleButton>
  );
};
