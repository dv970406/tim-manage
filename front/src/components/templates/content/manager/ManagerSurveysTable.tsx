import React, { Dispatch, SetStateAction } from "react";
import { useDeleteSurvey } from "../../../../client/manager/DeleteSurvey.client";
import { ColumnBox, GapBox } from "../../../atomics/boxes/Boxes";
import { EndSubmitButton } from "../../../molecules/buttons/Buttons";
import Table from "../../../molecules/tables/Table";
import ManagerSurveyTableContent from "../../../organisms/content/manager/ManagerSurveyTableContent";
import { ManagerSurveyTableContent_survey$key } from "../../../organisms/content/manager/__generated__/ManagerSurveyTableContent_survey.graphql";

interface IManagerSurveysTable {
  surveys: readonly ManagerSurveyTableContent_survey$key[];
  clickedSurveyId: string;
  setClickedSurveyId: Dispatch<SetStateAction<string>>;
}

const ManagerSurveysTable = ({
  surveys,
  clickedSurveyId,
  setClickedSurveyId,
}: IManagerSurveysTable) => {
  const { deleteSurveyMutation, deleteSurveyLoading } = useDeleteSurvey();
  const handleDeleteSurvey = () => {
    if (deleteSurveyLoading) return;
    deleteSurveyMutation({ id: clickedSurveyId });
  };

  return (
    <ColumnBox>
      <Table headers={["내 설문"]}>
        {surveys.map(
          (survey: any) =>
            survey && (
              <ManagerSurveyTableContent
                key={survey.__id}
                survey={survey}
                clickedSurveyId={clickedSurveyId}
                setClickedSurveyId={setClickedSurveyId}
              />
            )
        )}
      </Table>
      <EndSubmitButton
        text="삭제"
        onClick={handleDeleteSurvey}
        disabled={!clickedSurveyId || deleteSurveyLoading}
      />
    </ColumnBox>
  );
};

export default ManagerSurveysTable;
