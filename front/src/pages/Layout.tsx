import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useGetMyInfo } from "../client/user/GetMyInfo.client";
import Body from "../components/templates/layout/Body";
import SideBar from "../components/templates/layout/SideBar";
import Main from "../components/templates/layout/Main";
import Header from "../components/templates/layout/Header";
import Content from "../components/templates/layout/Content";
import MessageTool from "../components/templates/layout/MessageTool";

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
    <>
      <Body>
        <SideBar isManager={myInfo?.isManager} isLeader={myInfo?.isLeader} />
        <Main>
          <Header unreadNotificationCount={myInfo?.unreadNotificationCount} />

          <Content>
            <Outlet />
          </Content>
          <MessageTool />
        </Main>
      </Body>
      <div id="modal-root"></div>
    </>
  );
}
