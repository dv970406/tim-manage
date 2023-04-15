import styled from "@emotion/styled";
import React from "react";

export const MainSection = styled.main(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.lg,
}));
interface IMain {
  children: React.ReactNode;
}
const Main = ({ children }: IMain) => {
  return <MainSection>{children}</MainSection>;
};

export default Main;
