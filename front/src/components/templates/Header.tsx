import {
  faBars,
  faBell,
  faGear,
  faHamburger,
  faOutdent,
  faUser,
} from "@fortawesome/pro-solid-svg-icons";
import { useEffect, useState } from "react";
import { TOKEN } from "../../client/client";
import { useGetMyInfo } from "../../client/user/GetMyInfo.client";
import { subscriptionConfirmVacation } from "../../client/vacation/SubscriptionConfirmVacation.client";
import { theme } from "../../css/theme";
import { GapList } from "../atomics/boxes/Boxes";
import { HeaderSection } from "../atomics/sections/sections";
import { ButtonIcon } from "../molecules/buttons/Buttons";
import NavIconButton from "../organisms/header/NavIconButton";
import SideBar from "./SideBar";

const Header = () => {
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

  const { myInfo } = useGetMyInfo();
  const [data, setData] = useState({});

  useEffect(() => {
    const { dispose } = subscriptionConfirmVacation({
      userId: myInfo?.id!,
      setData,
    });
    return () => {
      dispose();
    };
  }, []);

  console.log("new Data :", data);

  return (
    <HeaderSection>
      <nav
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* 햄버거 메뉴 */}
        <div>
          <div className="hamburger_menu open_menu">
            <ButtonIcon onClick={handleMenuClick} icon={faBars} />
          </div>
        </div>
        <GapList
          style={{
            flexDirection: "row",
          }}
        >
          <NavIconButton icon={faUser} path={`/user/my`} />
          <NavIconButton icon={faGear} path={`/asd`} />
          <NavIconButton icon={faBell} path={`/dsa`} />
          <ButtonIcon icon={faOutdent} onClick={handleLogout} />
        </GapList>
      </nav>
    </HeaderSection>
  );
};

export default Header;
