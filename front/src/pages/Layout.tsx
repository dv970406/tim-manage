import SideBar from "../components/templates/SideBar";
import Body from "../components/templates/Body";
import Main from "../components/templates/Main";

import Content from "../components/templates/Content";
import { Outlet } from "react-router-dom";
import React, { Suspense, useEffect, lazy } from "react";

const Header = React.lazy(() => import("../components/templates/Header"));

export default function Layout() {
  return (
    <Body>
      <SideBar />
      <Main>
        <Suspense fallback={"유저 정보를 가져오는 중입니다."}>
          <Header />
        </Suspense>
        <Suspense fallback={<h1>dsa!!!!!@@@@</h1>}>
          <Content>
            <Outlet /* context={user} */ />
          </Content>
        </Suspense>
      </Main>
    </Body>
  );
}
