import { SideBarSection } from "../atomics/sections/sections";
import NavTabButton from "../organisms/sidebar/NavTabButton";
import {
  faGameBoard,
  faHome,
  faPaperPlane,
  faPeople,
  faQ,
  faUser,
} from "@fortawesome/pro-solid-svg-icons";
import { theme } from "../../css/theme";
import { useState } from "react";
import { GapList } from "../atomics/boxes/Boxes";

interface ISideBar {
  isManager?: boolean;
}
const SideBar = ({ isManager }: ISideBar) => {
  const [clickedTab, setClickedTab] = useState("");

  return (
    <SideBarSection>
      <nav style={{ width: "100%" }}>
        <GapList>
          {isManager && (
            <NavTabButton
              tabName="관리자"
              icon={faQ}
              lists={[
                { name: "직원 추가", path: "/manager/user/create" },
                { name: "직원 관리", path: "/manager/user" },
                { name: "설문 추가", path: "/manager/survey/create" },
                { name: "설문 관리", path: "/manager/survey" },
                { name: "미승인 휴가", path: "/manager/vacation" },
                { name: "직책 관리", path: "/manager/position" },
                { name: "팀 관리", path: "/manager/team" },
              ]}
              clickedTab={clickedTab}
              setClickedTab={setClickedTab}
            />
          )}
          <NavTabButton
            tabName="메인"
            icon={faHome}
            lists={[{ name: "홈페이지", path: "/" }]}
            clickedTab={clickedTab}
            setClickedTab={setClickedTab}
          />
          <NavTabButton
            tabName="설문"
            icon={faPaperPlane}
            lists={[{ name: "설문", path: "/survey" }]}
            clickedTab={clickedTab}
            setClickedTab={setClickedTab}
          />
          <NavTabButton
            tabName="직원"
            icon={faUser}
            lists={[{ name: "직원", path: "/user" }]}
            clickedTab={clickedTab}
            setClickedTab={setClickedTab}
          />
          <NavTabButton
            tabName="게시글"
            icon={faGameBoard}
            lists={[
              { name: "게시글", path: "/post" },
              { name: "게시글 추가", path: "/post/create" },
            ]}
            clickedTab={clickedTab}
            setClickedTab={setClickedTab}
          />
        </GapList>
      </nav>
    </SideBarSection>
  );
};

export default SideBar;
