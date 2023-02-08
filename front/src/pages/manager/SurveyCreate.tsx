import React from "react";
import { Section } from "../../components/atomics/sections/sections";
import CreateSurveyForm from "../../components/templates/content/manager/CreateSurveyForm";

const SurveyCreatePage = () => {
  return (
    <Section style={{ width: "40%" }}>
      <CreateSurveyForm />
    </Section>
  );
};

export default SurveyCreatePage;
