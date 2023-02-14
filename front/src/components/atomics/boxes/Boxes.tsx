import styled from "@emotion/styled";
import React from "react";
import { theme } from "../../../css/theme";
import { BoxIcon } from "../../molecules/icons/Icons";

export const ColumnBox = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.xl,
  width: "100%",
  height: "100%",
}));

export const RowBox = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing.xl,
  width: "100%",
}));

export const GapBox = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.sm,
  width: "100%",
}));

export const GapList = styled.ul(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.md,
}));

export const ListBox = styled.ul(({ theme }) => ({
  display: "grid",
  gap: theme.spacing.lg,
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  width: "100%",
}));

export const ItemBox = styled.li(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing.xl,
  gap: theme.spacing.md,
  borderRadius: theme.borderRadius.md,
  background: theme.bgColors.listGradient,
  backdropFilter: theme.bgColors.backdropFilter,
  "&:hover": {
    transform: "translateY(-8px)",
  },

  transition: "all 0.3s",
  cursor: "pointer",
}));

export const HorizontalDivider = styled.div(({ theme }) => ({
  height: "1px",
  width: "100%",
  background: theme.bgColors.silver,
}));
export const VerticalDivider = styled.div(({ theme }) => ({
  width: "1px",
  height: "100%",
  background: theme.bgColors.silver,
}));
