import React from "react";
import { faUser, faGear, faBell } from "@fortawesome/pro-solid-svg-icons";
import { theme } from "../../../css/theme";
import { NavLink, useNavigate } from "react-router-dom";
import { Icon } from "../../atomics/icons/icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BoxIcon } from "../../molecules/icons/Icons";

interface INavIconButton {
  path: string;
  icon: IconProp;
}
const NavIconButton = ({ path, icon }: INavIconButton) => {
  return (
    <li>
      <NavLink to={path} end>
        {({ isActive }) => (
          <BoxIcon
            icon={icon}
            bgColor={isActive ? theme.bgColors.purple : undefined}
          />
        )}
      </NavLink>
    </li>
  );
};

export default NavIconButton;
