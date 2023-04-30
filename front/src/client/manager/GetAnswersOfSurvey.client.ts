import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { GetAnswersOfSurveyQuery } from "./__generated__/GetAnswersOfSurveyQuery.graphql";

export const getAnswersOfSurveyQuery = graphql`
  query GetAnswersOfSurveyQuery($surveyId: ID!, $skip: Boolean!) {
    getAnswersOfSurvey(surveyId: $surveyId) @skip(if: $skip) {
      ok
      error
      survey {
        ...ShowShortAnswers_answer
        ...ShowMultipleChoiceAnswers_answer
        ...SurveyResponseRate_answer
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
  return {
    answers: getAnswersOfSurvey?.survey,
  };
};
