import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { PAGINATION_LOAD_COUNT } from "../../utils/constants/share.constant";
import { GetSpeakableUsersQuery } from "./__generated__/GetSpeakableUsersQuery.graphql";
import { GetUsersQuery } from "./__generated__/GetUsersQuery.graphql";

export const getSpeakableUsersQuery = graphql`
  query GetSpeakableUsersQuery(
    $keyword: String
    $first: Int!
    $after: DateTime
  ) {
    ...SpeakableUsersTable_user
      @arguments(keyword: $keyword, first: $first, after: $after)
  }
`;

export const useGetSpeakableUsers = () => {
  const users = useLazyLoadQuery<GetSpeakableUsersQuery>(
    getSpeakableUsersQuery,
    { first: PAGINATION_LOAD_COUNT }
  );

  return { users };
};
