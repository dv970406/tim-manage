import { MouseEventHandler, useState } from "react";
import { theme } from "../../../css/theme";
import { HoverButton, SubmitButton } from "../../atomics/buttons/buttons";
import { Icon, IIcon } from "../../atomics/icons/icons";
import { MainText } from "../../atomics/typographys/texts";

interface IButtonIcon extends IIcon {
  onClick: MouseEventHandler<HTMLButtonElement>;
}
export const ButtonIcon = ({ color, icon, size, onClick }: IButtonIcon) => {
  return (
    <button onClick={onClick} type="button">
      <Icon icon={icon} color={color} size={size} />
    </button>
  );
};

interface IButtonTextIcon extends IIcon {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const ButtonTextIcon = ({ icon, text, onClick }: IButtonTextIcon) => {
  return (
    <HoverButton onClick={onClick} type="button">
      <Icon icon={icon} />
      <MainText>{text}</MainText>
    </HoverButton>
  );
};

interface ISubmitButton {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  text: string;
}
export const EndSubmitButton = ({ onClick, disabled, text }: ISubmitButton) => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "auto",
      }}
    >
      <SubmitButton onClick={onClick} disabled={disabled}>
        {text}
      </SubmitButton>
    </div>
  );
};

interface ICircleButton extends IButtonIcon {
  bgColor: string;
}
export const CircleButton = ({
  onClick,
  icon,
  bgColor,
  color,
  size,
}: ICircleButton) => {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        backgroundColor: bgColor,
        padding: theme.spacing.lg,
        borderRadius: "50%",
      }}
    >
      <Icon icon={icon} color={color} size={size} />
    </button>
  );
};
