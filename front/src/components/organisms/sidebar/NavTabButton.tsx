import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";
import { Text } from "../../atomics/typographys/texts";
import styled from "@emotion/styled";
import { Icon, IIcon } from "../../atomics/icons/icons";
import { CSSProperties, useState } from "react";
import { theme } from "../../../css/theme";
import { BoxIcon } from "../../molecules/icons/Icons";
import { TabButton } from "../../atomics/buttons/buttons";
import { NavLink } from "react-router-dom";

interface INavTabButton extends IIcon {
  text: string;
  path: string;
}

// Chevron 버튼 애니메이션
const chevronAnimation: CSSProperties = {
  transition: "all 0.2s",
  transform: "rotate(180deg)",
};
const defaultAnimation: CSSProperties = {
  transition: "all 0.2s",
  transform: "rotate(360deg)",
};

const NavTabButton = ({ icon, text, path }: INavTabButton) => {
  return (
    <li>
      <NavLink to={path} end>
        {({ isActive }) => (
          <div
            style={{
              padding: theme.spacing.lg,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: theme.spacing.md,
              backgroundColor: isActive ? theme.bgColors.gray : undefined,
              borderRadius: theme.borderRadius.md,
              width: "100%",
              transition: "all 0.2s",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: theme.spacing.md,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BoxIcon
                icon={icon}
                color={isActive ? theme.colors.white : theme.colors.purple}
                bgColor={isActive ? theme.bgColors.purple : theme.bgColors.gray}
              />
              <Text>{text}</Text>
            </div>

            <Icon
              icon={faChevronDown}
              animation={isActive ? chevronAnimation : defaultAnimation}
            />
          </div>
        )}
      </NavLink>
    </li>
  );
};

export default NavTabButton;
