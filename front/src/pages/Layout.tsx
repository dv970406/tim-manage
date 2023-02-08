import SideBar from "../components/templates/SideBar";
import Body from "../components/templates/Body";
import Main from "../components/templates/Main";

import Content from "../components/templates/Content";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import { useGetMyInfo } from "../client/user/GetMyInfo.client";
import Header from "../components/templates/Header";

export default function Layout() {
  // TemplatesLayout에서 useGetMyInfo 비동기처리할 동안 Suspense 걸어줘야 에러 안남
  return (
    <Suspense>
      <TemplatesLayout />
    </Suspense>
  );
}

function TemplatesLayout() {
  const { myInfo } = useGetMyInfo();

  const navigate = useNavigate();

  // manager 페이지일 경우 manager가 아니면 되돌려보내기
  const { pathname } = useLocation();
  const isManagerOnly = pathname.includes("manager");

  useEffect(() => {
    if (isManagerOnly && !myInfo?.isManager) {
      alert("관리자만 접근할 수 있습니다.");
      navigate("/");
    }
  }, []);

  return (
    <Body>
      <SideBar isManager={myInfo?.isManager} />
      <Main>
        <Header myId={myInfo?.id} />

        <Content>
          <Outlet /* context={user} */ />
        </Content>
      </Main>
    </Body>
  );
}
