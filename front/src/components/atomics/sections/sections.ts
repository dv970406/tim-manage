import { keyframes } from "@emotion/react";
import styled, { CreateStyledComponent } from "@emotion/styled";

export const BodySection = styled.div(({ theme }) => ({
  backgroundImage: `url("background.png")`,
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  padding: theme.spacing.lg,
}));

export const SideBarSection = styled.aside(({ theme }) => ({
  background: theme.bgColors.gradient,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100%",
  width: 275,
  padding: theme.spacing.md,
  borderRadius: theme.borderRadius.lg,
}));

export const MainSection = styled.main(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

export const HeaderSection = styled.header(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing.lg,
}));

export const ContentSection = styled.section(({ theme }) => ({
  display: "flex",
  padding: theme.spacing.md,
  height: "100%",
}));

export const Section = styled.article(({ theme }) => ({
  background: theme.bgColors.gradient,
  padding: theme.spacing.md,
  width: "100%",
  borderRadius: theme.borderRadius.lg,
}));

export const ModalBackground = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: theme.bgColors.translucent,
  zIndex: 999,
  animation: `${modalBgShow} 0.3s`,
}));

export const ModalSection = styled.section(({ theme }) => ({
  animation: `${modalShow} 0.3s`,
  width: 600,
  height: 400,
  background: theme.bgColors.gradient,
  borderRadius: theme.borderRadius.lg,
  padding: theme.spacing.xl,
}));

// 모달 애니메이션
const modalShow = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const modalBgShow = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`;
