import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { GetUsersOfPositionQuery } from "./__generated__/GetUsersOfPositionQuery.graphql";

const getUsersOfPositionQuery = graphql`
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
  const {
    getUsersOfPosition: { ok, error, users },
  } = useLazyLoadQuery<GetUsersOfPositionQuery>(getUsersOfPositionQuery, {
    id: positionId,
  });

  if (!ok) {
    alert(error);
  }
  return { users };
};
