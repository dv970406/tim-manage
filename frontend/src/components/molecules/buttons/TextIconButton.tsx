import { Icon, IIcon } from "components/atomics/icons/icons";
import { MainText } from "components/atomics/typographys/texts";
import { theme } from "css/theme";

interface ITextIconButton extends IIcon {
  text: string;
}

export const TextIconButton = ({ icon, text }: ITextIconButton) => {
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
