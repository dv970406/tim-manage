import styled from "@emotion/styled";
import React, { CSSProperties, FormEventHandler } from "react";
import { SectionTitle } from "../../atomics/typographys/Etc";
import { SubTitle } from "../../atomics/typographys/Sub";

const SForm = styled.form(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.sm,
  width: "100%",
}));

interface IForm {
  formTitle?: string;
  formSubTitle?: string;
  children: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
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
