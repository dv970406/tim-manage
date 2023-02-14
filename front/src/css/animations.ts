import { Variants } from "framer-motion";
import { CSSProperties } from "react";

// Chevron 버튼 애니메이션
export const chevronTurnOnAnimation: CSSProperties = {
  transition: "all 0.2s",
  transform: "rotate(180deg)",
};
export const chevronTurnOffAnimation: CSSProperties = {
  transition: "all 0.2s",
  transform: "rotate(360deg)",
};

// framer-motion 'variants' animation
export const cardAnimation: Variants = {
  invisible: (isBack: boolean) => ({
    x: isBack ? "-100%" : "100%",
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? "100%" : "-100%",
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  }),
};
