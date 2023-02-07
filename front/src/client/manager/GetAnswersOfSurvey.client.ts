import { graphql } from "babel-plugin-relay/macro";
import {
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
} from "react-relay";
import { GetAnswersOfSurveyQuery } from "./__generated__/GetAnswersOfSurveyQuery.graphql";

export const getAnswersOfSurveyQuery = graphql`
  query GetAnswersOfSurveyQuery($surveyId: ID!, $skip: Boolean!) {
    getAnswersOfSurvey(input: { surveyId: $surveyId }) @skip(if: $skip) {
      ok
      error
      answers {
        results
        user {
          id
          name
        }
      }
    }
  }
`;

export const useGetAnswersOfSurvey = (surveyId: string) => {
  const { getAnswersOfSurvey } = useLazyLoadQuery<GetAnswersOfSurveyQuery>(
    getAnswersOfSurveyQuery,
    {
      skip: !surveyId,
      surveyId,
    }
  );

  if (surveyId && !getAnswersOfSurvey?.ok) {
    alert(getAnswersOfSurvey?.error);
  }
  return { answers: getAnswersOfSurvey?.answers };
};
