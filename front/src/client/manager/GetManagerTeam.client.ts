import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { GetManagerTeamQuery } from "./__generated__/GetManagerTeamQuery.graphql";

export const getManagerTeamQuery = graphql`
  query GetManagerTeamQuery($id: ID!, $skip: Boolean!) {
    getTeam(input: { id: $id }) @skip(if: $skip) {
      ok
      error
      team {
        id
        team
        users {
          id
          name
        }
        leader {
          id
          name
        }
      }
    }
  }
`;

// 페이지 로드 시 필요한 데이터가 아니라 해당 유저 클릭시 작동이 필요하므로 lazyLoadQuery
export const useGetManagerTeam = (teamId: string) => {
  const { getTeam } = useLazyLoadQuery<GetManagerTeamQuery>(
    getManagerTeamQuery,
    {
      skip: !teamId,
      id: teamId,
    }
  );

  if (teamId && !getTeam?.ok) {
    alert(getTeam?.error);
  }

  return { team: getTeam?.team };
};
