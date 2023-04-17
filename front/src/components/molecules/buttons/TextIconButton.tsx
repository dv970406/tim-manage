import { MouseEventHandler } from "react";
import { HoverButton } from "./HoverButton";
import { Icon, IIcon } from "../../atomics/icons/Icon";
import { MainText } from "../../atomics/typographys/Main";

interface ITextIconButton extends IIcon {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const TextIconButton = ({ icon, text, onClick }: ITextIconButton) => {
  return (
    <HoverButton onClick={onClick} type="button">
      <Icon icon={icon} />
      <MainText>{text}</MainText>
    </HoverButton>
  );
};
