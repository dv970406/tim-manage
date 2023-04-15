import NavTabButton from "../organisms/sidebar/NavTabButton";
import {
  faClose,
  faGameBoard,
  faHome,
  faPaperPlane,
  faQ,
  faUser,
} from "@fortawesome/pro-solid-svg-icons";

import { useState } from "react";
import { SideBarContext } from "../../utils/contexts/sidebar.context";
import { IconButton } from "../molecules/buttons/IconButton";
import { NavLink } from "react-router-dom";
import { theme } from "../../css/theme";
import { ColumnBox, RowBox } from "../atomics/boxes/FlexBox";
import { HorizontalDivider } from "../atomics/boxes/Divider";
import styled from "@emotion/styled";
import { useCheckManager } from "../../utils/hooks/checkManager.hook";
import { breakpoints } from "../../css/media-query/media-query";

export const SideBarSection = styled.aside`
  display: none;
  @media (min-width: ${breakpoints.pc}) {
    display: flex;
    width: 275px;
    .sidebar_close {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.pc}) {
    &.open {
      display: flex;
      width: 275px;
      z-index: 5;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      ${({ theme }) => ({
        backgroundColor: theme.bgColors.gray,
      })};
    }
  }

  ${({ theme }) => ({
    background: theme.bgColors.sectionGradient,
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  })}
`;

interface ISideBar {
  isManager?: boolean;
  isLeader?: boolean;
}
const SideBar = ({ isManager, isLeader }: ISideBar) => {
  useCheckManager({ isManager, isLeader });

  const handleMenuClose = () => {
    const sideBar = document.querySelector(".sidebar");
    sideBar?.classList.remove("open");

    const hamburgerMenu = document.querySelector(".hamburger_menu");
    hamburgerMenu?.classList.add("open");
  };

  const [clickedTabs, setClickedTabs] = useState<string[]>([]);
  return (
    <SideBarContext.Provider value={{ clickedTabs, setClickedTabs }}>
      <SideBarSection className="sidebar">
        <nav style={{ width: "100%" }}>
          <RowBox
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: theme.spacing.md,
            }}
          >
            <RowBox>
              <NavLink to="/" end>
                {/* 이 부분 추후 이미지로 변경 */}
                <img
                  src="/logo.png"
                  alt="TIM_SOLUTION"
                  width={170}
                  height={30}
                />
              </NavLink>
            </RowBox>
            {/* sidebar_close class는 media query로 화면 크기에 따라 나타나거나 사라짐 */}
            <div className="sidebar_close">
              <IconButton onClick={handleMenuClose} icon={faClose} size="lg" />
            </div>
          </RowBox>
          <HorizontalDivider />
          <ColumnBox style={{ gap: theme.spacing.md }}>
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
                  // { name: "식단 추가", path: "/manager/meal/create" },
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
                // { name: "식단표", path: "/meal" },
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
          </ColumnBox>
        </nav>
      </SideBarSection>
    </SideBarContext.Provider>
  );
};

export default SideBar;
