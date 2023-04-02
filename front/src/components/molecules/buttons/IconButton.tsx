import { MouseEventHandler, useState } from "react";
import { Icon, IIcon } from "../../atomics/icons/icon";

export interface IIconButton extends IIcon {
  onClick: MouseEventHandler<HTMLButtonElement>;
}
export const IconButton = ({ color, icon, size, onClick }: IIconButton) => {
  return (
    <button onClick={onClick} type="button">
      <Icon icon={icon} color={color} size={size} />
    </button>
  );
};
