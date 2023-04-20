import { graphql } from "babel-plugin-relay/macro";
import { Dispatch, SetStateAction } from "react";
import { useFragment } from "react-relay";
import { Td } from "../../../atomics/table/Table";
import { MainText } from "../../../atomics/typographys/Main";
import TableContent from "../../../molecules/tables/TableContent";
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
  const { id: surveyId, surveyTitle } = useFragment(
    managerSurveyTableContentFragment,
    survey
  );

  const clickedSurvey = clickedSurveyId === surveyId;
  return (
    <TableContent
      onClick={() => setClickedSurveyId(surveyId)}
      clickedItem={clickedSurvey}
    >
      <Td role="gridcell">
        <MainText>{surveyTitle}</MainText>
      </Td>
    </TableContent>
  );
};

export default ManagerSurveyTableContent;
