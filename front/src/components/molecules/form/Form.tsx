import styled from "@emotion/styled";
import React, { CSSProperties } from "react";
import { SectionTitle, SubTitle } from "../../atomics/typographys/titles";

const SForm = styled.form(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.sm,
  width: "100%",
  height: "100%",
  color: theme.colors.white,
}));

interface IForm {
  formTitle?: string;
  formSubTitle?: string;
  children: React.ReactNode;
  onSubmit?: any;
  style?: CSSProperties;
}
export default function Form({
  formTitle,
  formSubTitle,
  children,
  onSubmit,
  style,
}: IForm) {
  return (
    <SForm onSubmit={onSubmit} style={style}>
      {formTitle && <SectionTitle>{formTitle}</SectionTitle>}
      {formSubTitle && <SubTitle>{formSubTitle}</SubTitle>}
      {children}
    </SForm>
  );
}
