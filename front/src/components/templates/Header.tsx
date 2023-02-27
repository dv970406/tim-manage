import {
  faBars,
  faBell,
  faDoorOpen,
  faGear,
  faHamburger,
  faOutdent,
  faUser,
} from "@fortawesome/pro-solid-svg-icons";
import { useEffect, useState } from "react";
import { TOKEN } from "../../client/client";
import { subscriptionConfirmVacation } from "../../client/vacation/SubscriptionConfirmVacation.client";
import { theme } from "../../css/theme";
import { ColumnBox, GapBox, GapList, RowBox } from "../atomics/boxes/Boxes";
import { HeaderSection } from "../atomics/sections/sections";
import { ButtonIcon } from "../molecules/buttons/Buttons";
import NavIconButton from "../organisms/header/NavIconButton";
import Notification from "../organisms/header/Notification";

interface IHeader {
  unreadNotificationCount?: number;
}
const Header = ({ unreadNotificationCount }: IHeader) => {
  const handleLogout = () => {
    localStorage.removeItem(TOKEN);
    window.location.reload();
  };

  const handleMenuClick = () => {
    const sideBar = document.querySelector(".sidebar");
    sideBar?.classList.toggle("open");
    const hamburgerMenu = document.querySelector(".hamburger_menu");
    hamburgerMenu?.classList.remove("open");
  };

  return (
    <HeaderSection>
      <nav
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* 햄버거 메뉴 - media query로 show/hidden */}
        <div>
          <div className="hamburger_menu open_menu">
            <ButtonIcon onClick={handleMenuClick} icon={faBars} size="lg" />
          </div>
        </div>
        <div style={{ display: "flex", gap: theme.spacing.xl }}>
          <NavIconButton icon={faUser} path={`/user/my`} />
          <Notification unreadNotificationCount={unreadNotificationCount} />
          <ButtonIcon icon={faDoorOpen} onClick={handleLogout} size="lg" />
        </div>
      </nav>
    </HeaderSection>
  );
};

export default Header;
