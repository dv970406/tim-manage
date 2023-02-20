"use client";
import React from "react";
import { ThemeProvider, Global } from "@emotion/react";
import { globalStyles, theme } from "../src/css/theme";
import { RelayEnvironmentProvider } from "react-relay";
import SideBar from "../src/components/templates/SideBar";
import Header from "../src/components/templates/Header";
import Main from "../src/components/templates/Main";
import Body from "../src/components/templates/Body";
import Content from "../src/components/templates/Content";
import { environment } from "client/client";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <html lang="ko">
      <head>
        <title>IAM</title>
        <script
          src="https://kit.fontawesome.com/c4757ab67b.js"
          crossOrigin="anonymous"
        ></script>
      </head>

      <RelayEnvironmentProvider environment={environment}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <Body>
            <SideBar />
            <Main>
              <Header />
              <Content>{children}</Content>
            </Main>
          </Body>
        </ThemeProvider>
      </RelayEnvironmentProvider>
    </html>
  );
}
