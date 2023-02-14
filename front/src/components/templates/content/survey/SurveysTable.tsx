import React from "react";
import { ListBox } from "../../../atomics/boxes/Boxes";
import SurveyTableContent from "../../../organisms/content/survey/SurveyTableContent";
import { SurveyTableContent_survey$key } from "../../../organisms/content/survey/__generated__/SurveyTableContent_survey.graphql";

interface ISurveysTable {
  surveys: readonly SurveyTableContent_survey$key[];
}
const SurveysTable = ({ surveys }: ISurveysTable) => {
  return (
    <ListBox>
      {surveys.map(
        (survey: any) =>
          survey && <SurveyTableContent key={survey.__id} survey={survey} />
      )}
    </ListBox>
  );
};

export default SurveysTable;
