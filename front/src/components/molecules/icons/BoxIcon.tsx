import { theme } from "../../../css/theme";
import { CenterBox } from "../../atomics/boxes/Boxes";
import { Icon, IIcon } from "../../atomics/icons/icons";

interface IBoxIcon extends IIcon {
  bgColor?: string;
}
export const BoxIcon = ({ color, icon, bgColor, size }: IBoxIcon) => {
  return (
    <CenterBox
      className="avatar_bg"
      style={{
        backgroundColor: bgColor ? bgColor : theme.bgColors.gray,
        padding: theme.spacing.sm,
        borderRadius: theme.borderRadius.sm,
        transition: "all 0.2s",
      }}
    >
      <Icon icon={icon} color={color} size={size} />
    </CenterBox>
  );
};
