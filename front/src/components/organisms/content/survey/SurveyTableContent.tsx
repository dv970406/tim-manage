import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { Text } from "../../../atomics/typographys/texts";
import { Td, Tr } from "../../../molecules/tables/Td";
import { SurveyTableContent_survey$key } from "./__generated__/SurveyTableContent_survey.graphql";

interface ISurveyTableContent {
  survey: SurveyTableContent_survey$key;
}
const surveyTableContentFragment = graphql`
  fragment SurveyTableContent_survey on Survey {
    id
    surveyTitle
    isAnonymous
    user {
      id
      name
    }
    createdAt
  }
`;

const SurveyTableContent = ({ survey }: ISurveyTableContent) => {
  const tableContentData = useFragment(surveyTableContentFragment, survey);

  return (
    <Tr key={tableContentData.id}>
      <Td role="gridcell">
        <Text>{tableContentData.user.name}</Text>
      </Td>
      <Td role="gridcell">
        <Text>{tableContentData.surveyTitle}</Text>
      </Td>
      <Td role="gridcell">
        <Text>{tableContentData.isAnonymous ? "O" : "X"}</Text>
      </Td>

      <Td role="gridcell">
        <Text>
          {new Date(tableContentData.createdAt).toJSON().substring(0, 10)}
        </Text>
      </Td>
    </Tr>
  );
};

export default SurveyTableContent;
