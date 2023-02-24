import styled from "@emotion/styled";
import React from "react";

export const CenterFixBox = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
}));
export const SizingBox = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing.sm,
  width: "70%",
  minHeight: "50%",
  height: "80%",
}));

interface ICenterBox {
  children: React.ReactNode;
}
const CenterBox = ({ children }: ICenterBox) => {
  return (
    <CenterFixBox>
      <SizingBox>{children}</SizingBox>
    </CenterFixBox>
  );
};

export default CenterBox;
