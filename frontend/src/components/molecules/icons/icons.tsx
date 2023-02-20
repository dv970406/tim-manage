import { theme } from "../../../css/theme";
import { Icon, IIcon } from "../../atomics/icons/icons";
import { MainText } from "../../atomics/typographys/texts";

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
      }}
    >
      {/* 감싸주는 박스 없으면 아이콘 공간이 정사각형이 안됨 */}
      <div>
        <Icon icon={icon} color={color} size={size} />
      </div>
    </div>
  );
};
export const ButtonIcon = ({ color, icon }: IIcon) => {
  return (
    <button>
      <Icon icon={icon} color={color} />;
    </button>
  );
};

interface ITextIcon extends IIcon {
  text: string;
}

export const TextIcon = ({ icon, text }: ITextIcon) => {
  return (
    <button
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
