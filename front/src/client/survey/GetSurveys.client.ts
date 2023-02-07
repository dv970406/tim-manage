import { graphql } from "babel-plugin-relay/macro";
import {
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
} from "react-relay";
import { GetSurveysQuery } from "./__generated__/GetSurveysQuery.graphql";

export const getSurveysQuery = graphql`
  query GetSurveysQuery($onlyMine: Boolean) {
    getSurveys(input: { onlyMine: $onlyMine }) {
      ok
      error
      surveys {
        ...SurveyTableContent_survey
        ...ManagerSurveyTableContent_survey
      }
    }
  }
`;

export const useGetSurveys = (
  getSurveysQueryReference: PreloadedQuery<GetSurveysQuery>
) => {
  const {
    getSurveys: { ok, error, surveys },
  } = usePreloadedQuery<GetSurveysQuery>(
    getSurveysQuery,
    getSurveysQueryReference
  );

  if (!ok) {
    alert(error);
  }
  return { surveys };
};
