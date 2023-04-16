import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ModalBackground = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: theme.bgColors.translucent,
  zIndex: 999,
}));

export const ModalSection = styled(motion.section)(({ theme }) => ({
  display: "flex",
  animation: `${modalShow} 0.5s`,
  width: 700,
  minHeight: 350,
  maxHeight: "80%",
  background: theme.bgColors.gray,
  borderRadius: theme.borderRadius.lg,
  padding: theme.spacing.xl,
  overflowY: "auto",
}));
// 모달 애니메이션
const modalShow = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px)
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
`;
