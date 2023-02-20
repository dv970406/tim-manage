import { graphql } from "babel-plugin-relay/macro";
import {
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
} from "react-relay";
import { GetSurveysQuery } from "./__generated__/GetSurveysQuery.graphql";

export const getSurveysQuery = graphql`
  query GetSurveysQuery(
    $onlyMine: Boolean
    $keyword: String
    $first: Int!
    $after: DateTime
  ) {
    ...SurveysTable_survey
      @arguments(
        onlyMine: $onlyMine
        keyword: $keyword
        first: $first
        after: $after
      )
  }
`;

export const useGetSurveys = (
  getSurveysQueryReference: PreloadedQuery<GetSurveysQuery>
) => {
  const surveys = usePreloadedQuery<GetSurveysQuery>(
    getSurveysQuery,
    getSurveysQueryReference
  );

  return { surveys };
};
