import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";
import { SectionText, MainText } from "../../atomics/typographys/texts";
import { Icon, IIcon } from "../../atomics/icons/icons";
import { useContext } from "react";
import { theme } from "../../../css/theme";
import { BoxIcon } from "../../molecules/icons/BoxIcon";
import { NavLink } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  chevronTurnOffAnimation,
  chevronTurnOnAnimation,
} from "../../../css/animations";
import { SideBarContext } from "../../../utils/contexts/sidebar.context";
import { RowBox } from "../../atomics/boxes/Boxes";

interface INavTabButton extends IIcon {
  icon: IconProp;
  tabName: string;
  lists: {
    name: string;
    path: string;
  }[];
}

const NavTabButton = ({ icon, tabName, lists }: INavTabButton) => {
  const { clickedTabs, setClickedTabs } = useContext(SideBarContext);

  const isTabClicked = clickedTabs.includes(tabName);

  const controlClickedTab = () => {
    if (isTabClicked) {
      setClickedTabs((prev) => {
        const copiedClickedTabs = [...prev];
        const tabIndex = copiedClickedTabs.findIndex(
          (clickedTabName) => clickedTabName === tabName
        );
        copiedClickedTabs.splice(tabIndex, 1);
        return copiedClickedTabs;
      });
    } else {
      setClickedTabs((prev) => [...prev, tabName]);
    }
  };
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
          <BoxIcon
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
                <SectionText>{list.name}</SectionText>
              </li>
            )}
          </NavLink>
        ))}
      </ul>
    </li>
  );
};

export default NavTabButton;
