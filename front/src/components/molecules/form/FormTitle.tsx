import React from "react";
import { ColumnBox } from "../../atomics/boxes/Boxes";
import { SectionTitle, SubTitle } from "../../atomics/typographys/titles";

interface IFormTitle {
  formTitle: string;
  formSubTitle?: string;
}
const FormTitle = ({ formTitle, formSubTitle }: IFormTitle) => {
  return (
    <ColumnBox>
      <SectionTitle>{formTitle}</SectionTitle>
      {formSubTitle && <SubTitle>{formSubTitle}</SubTitle>}
    </ColumnBox>
  );
};

export default FormTitle;
