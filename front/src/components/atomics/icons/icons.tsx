import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { theme } from "../../../css/theme";
import { CSSProperties } from "react";

export interface IIcon {
  color?: string;
  icon: IconProp;
  size?: SizeProp;
  animation?: CSSProperties;
}

export const Icon = ({ color, icon, size, animation }: IIcon) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      color={color || theme.colors.white}
      size={size || "sm"}
      style={{
        ...animation,
        transition: "color 0.3s",
      }}
    />
  );
};
