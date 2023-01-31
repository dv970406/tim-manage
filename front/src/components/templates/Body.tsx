import React from "react";
import { BodySection } from "../atomics/sections/sections";

interface IBody {
  children: React.ReactNode;
}
const Body = ({ children }: IBody) => {
  return <BodySection>{children}</BodySection>;
};

export default Body;
