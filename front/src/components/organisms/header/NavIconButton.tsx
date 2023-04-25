import { theme } from "../../../css/theme";
import { NavLink } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconBox } from "../../molecules/boxes/IconBox";

interface INavIconButton {
  path: string;
  icon: IconProp;
}
const NavIconButton = ({ path, icon }: INavIconButton) => {
  return (
    <li>
      <NavLink to={path} end>
        {({ isActive }) => (
          <IconBox
            icon={icon}
            bgColor={isActive ? theme.bgColors.purple : undefined}
          />
        )}
      </NavLink>
    </li>
  );
};

export default NavIconButton;
