import { theme } from "../../../css/theme";
import { Icon, IIcon } from "../../atomics/icons/icons";

interface IBoxIcon extends IIcon {
  bgColor?: string;
}
export const BoxIcon = ({ color, icon, bgColor, size }: IBoxIcon) => {
  return (
    <div
      style={{
        backgroundColor: bgColor ? bgColor : theme.bgColors.gray,
        padding: theme.spacing.sm,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: theme.borderRadius.sm,
        transition: "all 0.2s",
      }}
    >
      <Icon icon={icon} color={color} size={size} />
    </div>
  );
};
