import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { GetTeamsQuery } from "./__generated__/GetTeamsQuery.graphql";

const getTeamsQuery = graphql`
  query GetTeamsQuery {
    getTeams {
      ok
      error
      teams {
        id
        team
      }
    }
  }
`;

export const useGetTeams = () => {
  const { getTeams } = useLazyLoadQuery<GetTeamsQuery>(getTeamsQuery, {});

  return getTeams;
};
