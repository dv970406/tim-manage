import styled from "@emotion/styled";
import React from "react";
import { CenterBox } from "../../atomics/boxes/Boxes";

export const SizingBox = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing.sm,
  width: "70%",
  minHeight: "50%",
  height: "90%",
  maxHeight: "90%",
}));

interface ICenterFrame {
  children: React.ReactNode;
}
const CenterFrame = ({ children }: ICenterFrame) => {
  return (
    <CenterBox>
      <SizingBox>{children}</SizingBox>
    </CenterBox>
  );
};

export default CenterFrame;
