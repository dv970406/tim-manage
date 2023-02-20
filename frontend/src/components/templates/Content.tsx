import React from "react";
import { ContentSection } from "../atomics/sections/sections";

interface IContent {
  children: React.ReactNode;
}
const Content = ({ children }: IContent) => {
  return <ContentSection>{children}</ContentSection>;
};

export default Content;
