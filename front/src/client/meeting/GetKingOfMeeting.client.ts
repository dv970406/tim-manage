import { graphql } from "babel-plugin-relay/macro";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GetKingOfMeetingQuery } from "./__generated__/GetKingOfMeetingQuery.graphql";

export const getKingOfMeetingQuery = graphql`
  query GetKingOfMeetingQuery {
    getKingOfMeeting {
      ok
      error
      users {
        id
        name
      }
    }
  }
`;

export const useGetKingOfMeeting = (
  getKingOfMeetingQueryReference: PreloadedQuery<GetKingOfMeetingQuery>
) => {
  const {
    getKingOfMeeting: { ok, error, users },
  } = usePreloadedQuery<GetKingOfMeetingQuery>(
    getKingOfMeetingQuery,
    getKingOfMeetingQueryReference
  );

  if (!ok) alert(error);

  return { users };
};
