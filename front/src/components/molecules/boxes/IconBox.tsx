import { theme } from "../../../css/theme";
import { CenterBox } from "../../atomics/boxes/FlexBox";
import { Icon, IIcon } from "../../atomics/icons/Icon";

interface IIconBox extends IIcon {
  bgColor?: string;
}
export const IconBox = ({ color, icon, bgColor, size }: IIconBox) => {
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
