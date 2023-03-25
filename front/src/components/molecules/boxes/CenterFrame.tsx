import styled from "@emotion/styled";
import React from "react";
import { CenterBox } from "../../atomics/boxes/Boxes";

export const SizingBox = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing.sm,
  minWidth: "60%",
  minHeight: "50%",
  height: "90%",
}));

interface ICenterFrame {
  children: React.ReactNode;
}
const CenterFrame = ({ children }: ICenterFrame) => {
  return (
    <CenterBox style={{ width: "100%" }}>
      <SizingBox>{children}</SizingBox>
    </CenterBox>
  );
};

export default CenterFrame;
