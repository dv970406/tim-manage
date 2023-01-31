import React from "react";
import { MainSection } from "../atomics/sections/sections";

interface IMain {
  children: React.ReactNode;
}
const Main = ({ children }: IMain) => {
  return <MainSection>{children}</MainSection>;
};

export default Main;
