import styled from "@emotion/styled";
import React from "react";

const ContentSection = styled.article(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  gap: theme.spacing.xl,
}));
interface IContent {
  children: React.ReactNode;
}

const Content = ({ children }: IContent) => {
  return <ContentSection>{children}</ContentSection>;
};

export default Content;
