import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { GetUsersOfPositionQuery } from "./__generated__/GetUsersOfPositionQuery.graphql";

const users = graphql`
  query GetUsersOfPositionQuery($id: ID!) {
    getUsersOfPosition(input: { id: $id }) {
      ok
      error
      users {
        id
        name
        email
      }
    }
  }
`;

export const useGetUsersOfPosition = (positionId: string) => {
  const { getUsersOfPosition } = useLazyLoadQuery<GetUsersOfPositionQuery>(
    users,
    {
      id: positionId,
    }
  );

  return getUsersOfPosition;
};
