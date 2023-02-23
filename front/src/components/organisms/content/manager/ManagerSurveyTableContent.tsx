import { graphql } from "babel-plugin-relay/macro";
import React, { Dispatch, SetStateAction } from "react";
import { useFragment } from "react-relay";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../css/theme";
import { MainText } from "../../../atomics/typographys/texts";
import { Td, Tr } from "../../../molecules/tables/Td";
import { ManagerSurveyTableContent_survey$key } from "./__generated__/ManagerSurveyTableContent_survey.graphql";

interface IManagerSurveyTableContent {
  survey: ManagerSurveyTableContent_survey$key;
  clickedSurveyId: string;
  setClickedSurveyId: Dispatch<SetStateAction<string>>;
}

const managerSurveyTableContentFragment = graphql`
  fragment ManagerSurveyTableContent_survey on Survey {
    id
    surveyTitle
    isAnonymous
    createdAt
  }
`;
const ManagerSurveyTableContent = ({
  survey,
  clickedSurveyId,
  setClickedSurveyId,
}: IManagerSurveyTableContent) => {
  const tableContentData = useFragment(
    managerSurveyTableContentFragment,
    survey
  );

  const clickedSurvey = clickedSurveyId === tableContentData?.id;
  return (
    <Tr
      onClick={() => setClickedSurveyId(tableContentData?.id)}
      style={{
        ...(clickedSurvey && { backgroundColor: theme.bgColors.purple }),
      }}
    >
      <Td role="gridcell">
        <MainText>{tableContentData?.surveyTitle}</MainText>
      </Td>
    </Tr>
  );
};

export default ManagerSurveyTableContent;
