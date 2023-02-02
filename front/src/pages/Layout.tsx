import SideBar from "../components/templates/SideBar";
import Body from "../components/templates/Body";
import Main from "../components/templates/Main";

import Content from "../components/templates/Content";
import { Outlet } from "react-router-dom";
import React, { Suspense, useEffect, lazy } from "react";
import AdminTool from "../components/templates/AdminTool";
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

  return (
    <Body>
      <SideBar isManager={myInfo?.isManager} />
      <Main>
        <Header myId={myInfo?.id} />

        <Content>
          <Outlet /* context={user} */ />
        </Content>
        {myInfo?.isManager && <AdminTool />}
      </Main>
    </Body>
  );
}
