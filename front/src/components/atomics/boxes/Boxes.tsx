import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

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
interface IScrollBox {
  theme?: Theme;
  height: string;
  gap?: string;
}
export const ScrollBox = styled.div(({ theme, height, gap }: IScrollBox) => ({
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  gap: gap || theme?.spacing.xl,
  width: "100%",
  height,
}));

export const GapList = styled.ul(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.md,
}));

export const ListBox = styled.ul(({ theme }) => ({
  display: "grid",
  gap: theme.spacing.lg,

  // 변수화하고 싶은데.. emotion/styled 중에서도 이렇게 theme을 가져다 쓸 수 있는 방법에서는 미디어 쿼리를 변수화할 수 있는 방법을 모르겠다.
  "@media (min-width: 567px)": {
    gridTemplateColumns: "1fr 1fr",
  },
  "@media (min-width: 992px)": {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  "@media (min-width: 1420px)": {
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },
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
