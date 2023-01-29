import SideBar from "../components/templates/SideBar";
import Body from "../components/templates/Body";
import Main from "../components/templates/Main";
import Header from "../components/templates/Header";
import Content from "../components/templates/Content";
import { Outlet } from "react-router-dom";
import { Suspense, useEffect, lazy } from "react";

export default function Layout() {
  return (
    <Body>
      <SideBar />
      <Main>
        <Header />
        <Suspense fallback={<h1>dsa!!!!!@@@@</h1>}>
          <Content>
            <Outlet /* context={user} */ />
          </Content>
        </Suspense>
      </Main>
    </Body>
  );
}
