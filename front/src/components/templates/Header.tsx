import { faBars, faDoorOpen, faUser } from "@fortawesome/pro-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { TOKEN } from "../../client/client";
import { theme } from "../../css/theme";
import { HeaderSection } from "../atomics/sections/sections";
import { IconButton } from "../molecules/buttons/IconButton";
import NavIconButton from "../organisms/header/NavIconButton";
import Notification from "../organisms/header/Notification";

interface IHeader {
  unreadNotificationCount?: number;
}
const Header = ({ unreadNotificationCount }: IHeader) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem(TOKEN);
    navigate("/login");
    // 로그아웃 시 cache(store) 초기화 목적의 새로고침
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
