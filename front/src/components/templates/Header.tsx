import {
  faBell,
  faGear,
  faOutdent,
  faUser,
} from "@fortawesome/pro-solid-svg-icons";
import { TOKEN } from "../../client/client";
import { theme } from "../../css/theme";
import { GapList } from "../atomics/boxes/Boxes";
import { HeaderSection } from "../atomics/sections/sections";
import { ButtonIcon } from "../molecules/buttons/Buttons";
import NavIconButton from "../organisms/header/NavIconButton";

interface IHeader {
  myId?: string;
}
const Header = ({ myId }: IHeader) => {
  const handleLogout = () => {
    localStorage.removeItem(TOKEN);
    window.location.reload();
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
        <div></div>
        <GapList
          style={{
            flexDirection: "row",
          }}
        >
          <NavIconButton icon={faUser} path={`/user/${myId}`} />
          <NavIconButton icon={faGear} path={`/asd`} />
          <NavIconButton icon={faBell} path={`/dsa`} />
          <ButtonIcon icon={faOutdent} onClick={handleLogout} />
        </GapList>
      </nav>
    </HeaderSection>
  );
};

export default Header;
