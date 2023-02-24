import { keyframes, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { maxMq, minMq } from "../../../utils/css/media-query";

export const BodySection = styled.div(({ theme }) => ({
  backgroundImage: `url("/background.png")`,
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  padding: theme.spacing.lg,
  gap: theme.spacing.lg,
}));

export const SideBarSection = styled.aside`
  display: none;
  ${minMq[3]} {
    display: flex;
    width: 275;
    .sidebar_close {
      display: none;
    }
    position: static;
  }

  ${maxMq[3]} {
    &.open {
      display: flex;
      width: 275;
      position: absolute;
      overflow: auto;
      z-index: 5;
    }
  }
  ${({ theme }) => ({
    background: theme.bgColors.sectionGradient,
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  })}
`;

export const MainSection = styled.main(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.lg,
}));

export const HeaderSection = styled.header`
  ${minMq[3]} {
    .hamburger_menu {
      display: none;
    }
  }

  ${maxMq[3]} {
    .hamburger_menu {
      display: none;
    }
    .open_menu {
      display: block;
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

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

// export const ModalBackground = styled.div(({ theme }) => ({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: theme.bgColors.translucent,
//   zIndex: 999,
//   animation: `${modalBgShow} 0.3s`,
// }));

export const ModalDialog = styled(motion.dialog)(({ theme }) => ({
  "::backdrop": {
    backgroundColor: theme.bgColors.translucent,
  },
  animation: `${modalShow} 0.5s`,
  width: 700,
  height: "80%",
  maxHeight: "80%",
  background: theme.bgColors.gray,
  borderRadius: theme.borderRadius.lg,
  padding: theme.spacing.xl,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
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
