import styled from "@emotion/styled";

export const BodySection = styled.body(({ theme }) => ({
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

export const ContentSection = styled.article(({ theme }) => ({
  display: "flex",
  padding: theme.spacing.md,
  height: "100%",
}));

export const Section = styled.section(({ theme }) => ({
  background: theme.bgColors.gradient,
  padding: theme.spacing.md,
  width: "100%",
  borderRadius: theme.borderRadius.lg,
}));
