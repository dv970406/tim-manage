import { Icon, IIcon } from "components/atomics/icons/icons";
import { theme } from "css/theme";

interface IIconBox extends IIcon {
  bgColor?: string;
}
export const IconBox = ({ color, icon, bgColor, size }: IIconBox) => {
  return (
    <div
      style={{
        backgroundColor: bgColor ? bgColor : theme.bgColors.gray,
        padding: theme.spacing.sm,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: theme.borderRadius.sm,
      }}
    >
      {/* 감싸주는 박스 없으면 아이콘 공간이 정사각형이 안됨 */}
      <div>
        <Icon icon={icon} color={color} size={size} />
      </div>
    </div>
  );
};
