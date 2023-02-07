import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { GetPositionQuery } from "./__generated__/GetPositionQuery.graphql";

const getPositionQuery = graphql`
  query GetPositionQuery($id: ID!) {
    getPosition(input: { id: $id }) {
      ok
      error
      position {
        id
        position
      }
    }
  }
`;

export const useGetPosition = (positionId: string) => {
  const {
    getPosition: { ok, error, position },
  } = useLazyLoadQuery<GetPositionQuery>(getPositionQuery, {
    id: positionId,
  });
  if (!ok) {
    alert(error);
  }
  return { position };
};
