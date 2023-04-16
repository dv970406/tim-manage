import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

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
