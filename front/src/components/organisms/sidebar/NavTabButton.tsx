import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";
import { Icon, IIcon } from "../../atomics/icons/Icon";
import { theme } from "../../../css/theme";
import { NavLink } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  chevronTurnOffAnimation,
  chevronTurnOnAnimation,
} from "../../../css/animations";
import { RowBox } from "../../atomics/boxes/FlexBox";
import { IconBox } from "../../molecules/boxes/IconBox";
import { useClickedTab } from "../../../utils/hooks/clickedTab.hook";
import { MainText } from "../../atomics/typographys/Main";
import { SubText } from "../../atomics/typographys/Sub";

interface INavTabButton extends IIcon {
  icon: IconProp;
  tabName: string;
  lists: {
    name: string;
    path: string;
  }[];
}

const NavTabButton = ({ icon, tabName, lists }: INavTabButton) => {
  const { isTabClicked, controlClickedTab } = useClickedTab(tabName);
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <button
        style={{
          display: "flex",
          borderRadius: theme.borderRadius.md,
          backgroundColor: isTabClicked ? theme.bgColors.gray : undefined,
          padding: theme.spacing.lg,
          transition: "all 0.2s",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
        onClick={controlClickedTab}
      >
        <RowBox
          style={{
            alignItems: "center",
          }}
        >
          <IconBox
            icon={icon}
            color={isTabClicked ? theme.colors.white : theme.colors.purple}
            bgColor={isTabClicked ? theme.bgColors.purple : theme.bgColors.gray}
          />
          <MainText>{tabName}</MainText>
        </RowBox>
        <Icon
          icon={faChevronDown}
          animation={
            isTabClicked ? chevronTurnOnAnimation : chevronTurnOffAnimation
          }
        />
      </button>

      <ul
        style={{
          display: isTabClicked ? "block" : "none",
          width: "100%",
          padding: theme.spacing.md,
        }}
      >
        {lists.map((list) => (
          <NavLink key={list.path} to={list.path} end>
            {({ isActive }) => (
              <li
                style={{
                  padding: theme.spacing.md,
                  backgroundColor: isActive ? theme.bgColors.gray : undefined,
                  borderRadius: theme.borderRadius.sm,
                  display: "flex",
                  gap: theme.spacing.lg,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    transition: "all 0.2s",
                    backgroundColor: theme.bgColors.purple,
                    width: isActive ? 10 : 7,
                    height: isActive ? 10 : 7,
                    borderRadius: theme.borderRadius.lg,
                  }}
                />
                <SubText>{list.name}</SubText>
              </li>
            )}
          </NavLink>
        ))}
      </ul>
    </li>
  );
};

export default NavTabButton;
