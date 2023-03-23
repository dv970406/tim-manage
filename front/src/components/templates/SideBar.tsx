import { SideBarSection } from "../atomics/sections/sections";
import NavTabButton from "../organisms/sidebar/NavTabButton";
import {
  faClose,
  faGameBoard,
  faHome,
  faPaperPlane,
  faQ,
  faUser,
} from "@fortawesome/pro-solid-svg-icons";

import { useEffect, useState } from "react";
import {
  ColumnBox,
  GapList,
  HorizontalDivider,
  RowBox,
} from "../atomics/boxes/Boxes";
import { SideBarContext } from "../../utils/contexts/sidebar.context";
import { IconButton } from "../molecules/buttons/IconButton";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { theme } from "../../css/theme";
import { TOKEN } from "../../client/client";

interface ISideBar {
  isManager?: boolean;
  isLeader?: boolean;
}
const SideBar = ({ isManager, isLeader }: ISideBar) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (!token) {
      navigate("/login");
      return;
    }

    // manager페이지인데 manager아닌 사람이 접근하려고 할 때 접근 제한
    const isManagerOnlyPage = pathname.includes("manager");
    // 단, manager/vacation은 leader는 접근 가능
    const isManagerVacationPage = pathname.includes("/manager/vacation");

    if (isManagerOnlyPage) {
      if (isManager) return;
      if (isManagerVacationPage && isLeader) return;
      alert("관리자만 접근할 수 있습니다.");

      navigate("/");
    }
  }, []);

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
            <RowBox>
              <NavLink to="/" end>
                {/* 이 부분 추후 이미지로 변경 */}
                <img src="/logo.png" width={170} height={30} />
              </NavLink>
            </RowBox>
            {/* sidebar_close class는 media query로 화면 크기에 따라 나타나거나 사라짐 */}
            <div className="sidebar_close">
              <IconButton onClick={handleMenuClose} icon={faClose} size="lg" />
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
            {isLeader && (
              <NavTabButton
                tabName="리더"
                icon={faQ}
                lists={[{ name: "미승인 휴가", path: "/manager/vacation" }]}
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
