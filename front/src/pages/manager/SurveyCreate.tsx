import React from "react";
import { CenterBox } from "../../components/atomics/boxes/Boxes";
import { Section } from "../../components/atomics/sections/sections";
import CreateSurveyForm from "../../components/templates/content/manager/CreateSurveyForm";

const SurveyCreatePage = () => {
  return (
    <CenterBox>
      <Section style={{ width: "40%" }}>
        <CreateSurveyForm />
      </Section>
    </CenterBox>
  );
};

export default SurveyCreatePage;
