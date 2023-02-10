import styled from "@emotion/styled";

export const Form = styled.form(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.sm,
  width: "100%",
  height: "100%",
}));
