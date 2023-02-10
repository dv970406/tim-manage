import styled from "@emotion/styled";

export const Td = styled.td(({ theme }) => ({
  paddingInline: theme.spacing.sm,
  paddingBlock: theme.spacing.xl,
}));

export const Tr = styled.tr(({ theme }) => ({
  borderBottom: `solid 1px ${theme.disabled.gray}`,
  cursor: "pointer",
}));
