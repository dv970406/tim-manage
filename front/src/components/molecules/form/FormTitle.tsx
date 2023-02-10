import React from "react";
import { GapBox } from "../../atomics/boxes/Boxes";
import { SectionTitle, SubTitle } from "../../atomics/typographys/titles";

interface IFormTitle {
  formTitle: string;
  formSubTitle?: string;
}
const FormTitle = ({ formTitle, formSubTitle }: IFormTitle) => {
  return (
    <GapBox>
      <SectionTitle>{formTitle}</SectionTitle>
      {formSubTitle && <SubTitle>{formSubTitle}</SubTitle>}
    </GapBox>
  );
};

export default FormTitle;
