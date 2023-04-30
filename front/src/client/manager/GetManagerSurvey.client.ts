import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { GetManagerSurveyQuery } from "./__generated__/GetManagerSurveyQuery.graphql";

export const getManagerSurveyQuery = graphql`
  query GetManagerSurveyQuery($id: ID!, $skip: Boolean!) {
    getSurvey(input: { id: $id }) @skip(if: $skip) {
      ok
      error
      survey {
        id
        surveyTitle
        paragraphs {
          paragraphTitle
          description
          multipleChoice
        }
      }
    }
  }
`;

export const useGetManagerSurvey = (surveyId: string) => {
  const { getSurvey } = useLazyLoadQuery<GetManagerSurveyQuery>(
    getManagerSurveyQuery,
    {
      id: surveyId,
      skip: !surveyId,
    }
  );

  if (surveyId && !getSurvey?.ok) {
    alert(getSurvey?.error);
  }

  return { survey: getSurvey?.survey };
};
