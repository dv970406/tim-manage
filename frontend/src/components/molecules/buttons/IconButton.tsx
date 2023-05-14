import { Icon, IIcon } from "components/atomics/icons/icons";

interface IIconButton extends IIcon {
  onClick: () => void;
  text: string;
}
export const IconButton = ({ color, icon, onClick }: IIconButton) => {
  return (
    <button onClick={onClick}>
      <Icon icon={icon} color={color} />;
    </button>
  );
};
