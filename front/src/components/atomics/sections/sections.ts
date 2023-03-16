import { keyframes, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { breakpoints } from "../../../css/media-query/media-query";

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
  @media (min-width: ${breakpoints.pc}) {
    display: flex;
    width: 275px;
    .sidebar_close {
      display: none;
    }
    position: static;
  }
  @media (max-width: ${breakpoints.pc}) {
    &.open {
      display: flex;
      width: 275px;
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
  @media (min-width: ${breakpoints.pc}) {
    .hamburger_menu {
      display: none;
    }
  }
  @media (max-width: ${breakpoints.pc}) {
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

interface IMessageSection {
  theme?: Theme;
  isInRoom?: boolean;
}
export const MessageSection = styled.section(
  ({ theme, isInRoom = false }: IMessageSection) => ({
    backdropFilter: theme?.bgColors.backdropFilter,
    backgroundColor: theme?.bgColors.lightgray,
    width: 350,
    height: 600,
    position: "fixed",
    right: 40,
    bottom: 65,
    borderRadius: theme?.borderRadius.lg,
    borderBottomRightRadius: 0,
    padding: theme?.spacing.lg,
    zIndex: 5,
    display: "grid",
    gridTemplateRows: isInRoom ? "5% 85% 10%" : "5% 95%",
    gap: theme?.spacing.sm,
  })
);

export const NotificationSection = styled.section(({ theme }) => ({
  backdropFilter: theme.bgColors.backdropFilter,
  background: theme.bgColors.lightgray,
  width: 300,
  height: 300,
  borderRadius: theme.borderRadius.lg,
  borderTopRightRadius: 0,
  padding: theme.spacing.lg,
  display: "flex",
  flexDirection: "column",
  gap: theme?.spacing.sm,

  position: "absolute",
  top: 25,
  right: 10,
  zIndex: 5,
}));

interface ISection {
  theme?: Theme;
  noneBg?: boolean;
  padding?: number;
  flexDirection?: "row" | "column";
}
export const Section = styled.section(
  ({ theme, noneBg = false, padding, flexDirection = "column" }: ISection) => ({
    display: "flex",
    flexDirection,
    background: noneBg ? undefined : theme?.bgColors.sectionGradient,
    backdropFilter: theme?.bgColors.backdropFilter,
    padding: padding || theme?.spacing.xl,
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

export const ListItem = styled.li(({ theme }) => ({
  background: theme.bgColors.sectionGradient,
  padding: theme.spacing.lg,
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
  minHeight: 350,
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
