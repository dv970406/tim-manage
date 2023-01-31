import { SideBarSection } from "../atomics/sections/sections";
import NavTabButton from "../organisms/sidebar/NavTabButton";
import {
  faGameBoard,
  faHome,
  faPaperPlane,
  faPeople,
  faUser,
} from "@fortawesome/pro-solid-svg-icons";
import { theme } from "../../css/theme";

const SideBar = () => {
  return (
    <SideBarSection>
      <nav style={{ width: "100%" }}>
        <ul
          style={{
            display: "flex",
            gap: theme.spacing.md,
            flexDirection: "column",
            width: "100%",
          }}
        >
          <NavTabButton text="메인" icon={faHome} path={"/"} />
          <NavTabButton text="설문" icon={faPaperPlane} path={"/survey"} />
          <NavTabButton text="직원" icon={faUser} path={"/user"} />
          <NavTabButton text="게시글" icon={faGameBoard} path={"/post"} />
        </ul>
      </nav>
    </SideBarSection>
  );
};

export default SideBar;
