import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { faGear } from "@fortawesome/pro-solid-svg-icons";
import { MouseEventHandler, useState } from "react";
import { theme } from "../../../css/theme";
import { SubmitButton } from "../../atomics/buttons/buttons";
import { Icon, IIcon } from "../../atomics/icons/icons";
import { MainText } from "../../atomics/typographys/texts";

interface IButtonIcon extends IIcon {
  onClick: MouseEventHandler<HTMLButtonElement>;
}
export const ButtonIcon = ({ color, icon, size, onClick }: IButtonIcon) => {
  return (
    <button onClick={onClick} type="button">
      <Icon icon={icon} color={color} size={size} />\
    </button>
  );
};

interface ITextIcon extends IIcon {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const TextIcon = ({ icon, text, onClick }: ITextIcon) => {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        display: "flex",
        alignItems: "center",
        gap: theme.spacing.md,
      }}
    >
      <Icon icon={icon} />
      <MainText>{text}</MainText>
    </button>
  );
};

interface IManagerButton {
  onClick: () => void;
}
export const ManagerButton = ({ onClick }: IManagerButton) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <button
      onClick={onClick}
      style={{
        padding: theme.spacing.lg,
        backgroundColor: isHovering
          ? theme.hoverColors.purple
          : theme.bgColors.purple,
        borderRadius: "50%",
        transition: "all 0.2s",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Icon icon={faGear} size="xl" />
    </button>
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
