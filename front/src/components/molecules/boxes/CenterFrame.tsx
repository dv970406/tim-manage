import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { CenterBox } from "../../atomics/boxes/FlexBox";

interface ISizingBox {
  theme?: Theme;
  minWidth?: string | number;
}
export const SizingBox = styled.div(
  ({ theme, minWidth = "70%" }: ISizingBox) => ({
    display: "flex",
    gap: theme?.spacing.sm,
    minWidth,
    minHeight: "80%",
    maxHeight: "95%",
  })
);

interface ICenterFrame {
  children: React.ReactNode;
  minWidth?: string | number;
  flexDirection?: "row" | "column";
}
const CenterFrame = ({ children, minWidth }: ICenterFrame) => {
  return (
    <CenterBox style={{ width: "100%" }}>
      <SizingBox minWidth={minWidth}>{children}</SizingBox>
    </CenterBox>
  );
};

export default CenterFrame;
