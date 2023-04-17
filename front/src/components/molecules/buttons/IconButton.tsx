import { MouseEventHandler } from "react";
import { Icon, IIcon } from "../../atomics/icons/Icon";

export interface IIconButton extends IIcon {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
export const IconButton = ({
  color,
  icon,
  size,
  onClick,
  disabled,
}: IIconButton) => {
  return (
    <button onClick={onClick} type="button" disabled={disabled}>
      <Icon icon={icon} color={color} size={size} />
    </button>
  );
};
