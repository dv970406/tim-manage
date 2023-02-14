import { keyframes, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const BodySection = styled.div(({ theme }) => ({
  backgroundImage: `url("/background.png")`,
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  padding: theme.spacing.lg,
  gap: theme.spacing.lg,
}));

export const SideBarSection = styled.aside(({ theme }) => ({
  background: theme.bgColors.sectionGradient,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 275,
  padding: theme.spacing.md,
  borderRadius: theme.borderRadius.lg,
}));

export const MainSection = styled.main(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.lg,
}));

export const HeaderSection = styled.header(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

export const ContentSection = styled.article(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",

  gap: theme.spacing.xl,
}));

interface ISection {
  theme?: Theme;
  noneBg?: boolean;
}
export const Section = styled.section(
  ({ theme, noneBg = false }: ISection) => ({
    background: noneBg ? undefined : theme?.bgColors.sectionGradient,
    backdropFilter: theme?.bgColors.backdropFilter,
    padding: theme?.spacing.xl,
    width: "100%",
    borderRadius: theme?.borderRadius.lg,
  })
);
// framer-motion -> 위 Section에 motion을 씌운 것
export const AnimateSection = styled(motion.section)(
  ({ theme, noneBg = false }: ISection) => ({
    background: noneBg ? undefined : theme?.bgColors.sectionGradient,
    backdropFilter: theme?.bgColors.backdropFilter,
    padding: theme?.spacing.xl,
    width: "100%",
    borderRadius: theme?.borderRadius.lg,
  })
);

export const Article = styled.article(({ theme }) => ({
  background: theme.bgColors.sectionGradient,
  padding: theme.spacing.xl,
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
  background: theme.bgColors.sectionGradient,
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
