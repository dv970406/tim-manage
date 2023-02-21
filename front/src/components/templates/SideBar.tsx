import { SideBarSection } from "../atomics/sections/sections";
import NavTabButton from "../organisms/sidebar/NavTabButton";
import {
  faClose,
  faGameBoard,
  faHome,
  faPaperPlane,
  faPeople,
  faQ,
  faUser,
} from "@fortawesome/pro-solid-svg-icons";

import { useState } from "react";
import { GapList, HorizontalDivider, RowBox } from "../atomics/boxes/Boxes";
import { SideBarContext } from "../../utils/contexts/sidebar.context";
import { ButtonIcon } from "../molecules/buttons/Buttons";
import { NavLink } from "react-router-dom";
import { MainText } from "../atomics/typographys/texts";
import { theme } from "../../css/theme";

interface ISideBar {
  isManager?: boolean;
}
const SideBar = ({ isManager }: ISideBar) => {
  const [clickedTabs, setClickedTabs] = useState<string[]>([]);

  const handleMenuClose = () => {
    const sideBar = document.querySelector(".sidebar");
    sideBar?.classList.remove("open");

    const hamburgerMenu = document.querySelector(".hamburger_menu");
    hamburgerMenu?.classList.add("open");
  };
  return (
    <SideBarContext.Provider value={{ clickedTabs, setClickedTabs }}>
      <SideBarSection className="sidebar">
        <nav style={{ width: "100%" }}>
          <RowBox
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              padding: theme.spacing.md,
            }}
          >
            <div>
              <NavLink to="/" end>
                {/* 이 부분 추후 이미지로 변경 */}
                <MainText>팀솔루션</MainText>
              </NavLink>
            </div>
            <div className="sidebar_close">
              <ButtonIcon onClick={handleMenuClose} icon={faClose} />
            </div>
          </RowBox>
          <HorizontalDivider />
          <GapList>
            {isManager && (
              <NavTabButton
                tabName="관리자"
                icon={faQ}
                lists={[
                  // { name: "직원 추가", path: "/manager/user/create" },
                  { name: "직원 관리", path: "/manager/user" },
                  // { name: "설문 추가", path: "/manager/survey/create" },
                  { name: "설문 관리", path: "/manager/survey" },
                  { name: "미승인 휴가", path: "/manager/vacation" },
                  { name: "직책 관리", path: "/manager/position" },
                  { name: "팀 관리", path: "/manager/team" },
                  { name: "식단 추가", path: "/manager/meal/create" },
                ]}
              />
            )}
            <NavTabButton
              tabName="메인"
              icon={faHome}
              lists={[
                { name: "홈페이지", path: "/" },
                { name: "식단표", path: "/meal" },
              ]}
            />
            <NavTabButton
              tabName="설문"
              icon={faPaperPlane}
              lists={[{ name: "설문", path: "/survey" }]}
            />
            <NavTabButton
              tabName="직원"
              icon={faUser}
              lists={[{ name: "직원", path: "/user" }]}
            />
            <NavTabButton
              tabName="게시글"
              icon={faGameBoard}
              lists={[
                { name: "게시글", path: "/post" },
                // { name: "게시글 추가", path: "/post/create" },
              ]}
            />
          </GapList>
        </nav>
      </SideBarSection>
    </SideBarContext.Provider>
  );
};

export default SideBar;
