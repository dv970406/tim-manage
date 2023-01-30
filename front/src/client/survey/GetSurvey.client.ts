import { graphql } from "babel-plugin-relay/macro";
import {
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
} from "react-relay";
import { GetSurveyQuery } from "./__generated__/GetSurveyQuery.graphql";

export const getSurveyQuery = graphql`
  query GetSurveyQuery($id: ID!) {
    getSurvey(input: { id: $id }) {
      ok
      error
      survey {
        surveyTitle
        isAnonymous
        paragraphs {
          paragraphTitle
          description
          multipleChoice
        }
        answers {
          user {
            id
            name
          }
          results
        }
        user {
          id
          name
        }
      }
    }
  }
`;

export const useGetSurvey = (
  getSurveyQueryReference: PreloadedQuery<GetSurveyQuery>
) => {
  const {
    getSurvey: { ok, error, survey },
  } = usePreloadedQuery<GetSurveyQuery>(
    getSurveyQuery,
    getSurveyQueryReference
  );

  if (!ok) {
    alert(error);
  }

  return { survey };
};
