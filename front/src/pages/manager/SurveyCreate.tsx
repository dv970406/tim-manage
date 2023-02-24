import React from "react";
import { Section } from "../../components/atomics/sections/sections";
import { CenterFixBox } from "../../components/molecules/boxes/CenterBox";
import CreateSurveyForm from "../../components/templates/content/manager/CreateSurveyForm";

const SurveyCreatePage = () => {
  return (
    <CenterFixBox>
      <Section style={{ width: "40%" }}>
        <CreateSurveyForm />
      </Section>
    </CenterFixBox>
  );
};

export default SurveyCreatePage;
