import styled from "@emotion/styled";
import React from "react";

const BodySection = styled.div(({ theme }) => ({
  backgroundImage: `url("/background.png")`,
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  padding: theme.spacing.lg,
  gap: theme.spacing.lg,
}));
interface IBody {
  children: React.ReactNode;
}
const Body = ({ children }: IBody) => {
  return <BodySection>{children}</BodySection>;
};

export default Body;
