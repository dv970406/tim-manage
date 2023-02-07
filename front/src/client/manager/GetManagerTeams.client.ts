import { graphql } from "babel-plugin-relay/macro";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GetManagerTeamsQuery } from "./__generated__/GetManagerTeamsQuery.graphql";

export const getManagerTeamsQuery = graphql`
  query GetManagerTeamsQuery {
    getTeams {
      ok
      error
      teams {
        ...ManagerTeamTableContent_team
      }
    }
  }
`;

export const useGetManagerTeams = (
  managerTeamsQueryReference: PreloadedQuery<GetManagerTeamsQuery>
) => {
  const {
    getTeams: { ok, error, teams },
  } = usePreloadedQuery<GetManagerTeamsQuery>(
    getManagerTeamsQuery,
    managerTeamsQueryReference
  );
  if (!ok) {
    alert(error);
  }

  return { teams };
};
