import { graphql } from "babel-plugin-relay/macro";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GetManagerSurveysQuery } from "./__generated__/GetManagerSurveysQuery.graphql";

export const getManagerSurveysQuery = graphql`
  query GetManagerSurveysQuery(
    $onlyMine: Boolean
    $first: Int!
    $after: DateTime
  ) {
    ...ManagerSurveysTable_survey
      @arguments(onlyMine: $onlyMine, first: $first, after: $after)
  }
`;

export const useGetManagerSurveys = (
  getManagerSurveysQueryReference: PreloadedQuery<GetManagerSurveysQuery>
) => {
  const surveys = usePreloadedQuery<GetManagerSurveysQuery>(
    getManagerSurveysQuery,
    getManagerSurveysQueryReference
  );

  return { surveys };
};
