import styled from "@emotion/styled";
import React from "react";

export const SCenterBox = styled.div(({ theme }) => ({
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
}));

interface ICenterBox {
  children: React.ReactNode;
}
const CenterBox = ({ children }: ICenterBox) => {
  return (
    <SCenterBox>
      <SizingBox>{children}</SizingBox>
    </SCenterBox>
  );
};

export default CenterBox;
