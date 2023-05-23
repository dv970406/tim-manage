import styled from "@emotion/styled";
import { faBars, faDoorOpen, faUser } from "@fortawesome/pro-solid-svg-icons";
import { breakpoints } from "../../../css/media-query/media-query";
import { useLogout } from "../../../utils/hooks/shared/logout.hook";
import { IconButton } from "../../molecules/buttons/IconButton";
import NavIconButton from "../../organisms/header/NavIconButton";
import Notification from "../../organisms/header/Notification";
import { theme } from "../../../css/theme";

const HeaderSection = styled.header`
  @media (min-width: ${breakpoints.pc}) {
    .hamburger_menu {
      display: none;
    }
  }
  @media (max-width: ${breakpoints.pc}) {
    .hamburger_menu {
      display: none;
    }
    .open_menu {
      display: block;
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
interface IHeader {
  unreadNotificationCount?: number;
}
const Header = ({ unreadNotificationCount }: IHeader) => {
  const { handleLogout } = useLogout();

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
            <IconButton onClick={handleMenuClick} icon={faBars} size="lg" />
          </div>
        </div>
        <div style={{ display: "flex", gap: theme.spacing.xl }}>
          <NavIconButton icon={faUser} path={`/user/my`} />
          <Notification unreadNotificationCount={unreadNotificationCount} />
          <IconButton icon={faDoorOpen} onClick={handleLogout} size="lg" />
        </div>
      </nav>
    </HeaderSection>
  );
};

export default Header;
