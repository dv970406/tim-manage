import React from "react";
import { Section } from "../../components/atomics/sections/sections";
import CreateSurveyForm from "../../components/templates/content/manager/CreateSurveyForm";

const SurveyCreatePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Section style={{ width: "40%" }}>
        <CreateSurveyForm />
      </Section>
    </div>
  );
};

export default SurveyCreatePage;
