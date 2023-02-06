import React from "react";
import Table from "../../../molecules/tables/Table";
import SurveyTableContent from "../../../organisms/content/survey/SurveyTableContent";
import { SurveyTableContent_survey$key } from "../../../organisms/content/survey/__generated__/SurveyTableContent_survey.graphql";

interface ISurveysTable {
  surveys: readonly SurveyTableContent_survey$key[];
}
const SurveysTable = ({ surveys }: ISurveysTable) => {
  return (
    <Table headers={["설문자", "이름", "익명여부", "설문시작일"]}>
      {surveys
        ?.filter((survey) => !!survey)
        .map((survey: any) => (
          <SurveyTableContent key={survey.__id} survey={survey} />
        ))}
    </Table>
  );
};

export default SurveysTable;
