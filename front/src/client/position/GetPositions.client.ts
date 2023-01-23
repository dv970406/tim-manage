import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { GetPositionsQuery } from "./__generated__/GetPositionsQuery.graphql";

const positions = graphql`
  query GetPositionsQuery {
    getPositions {
      ok
      error
      positions {
        id
        position
      }
    }
  }
`;

export const useGetPositions = () => {
  const { getPositions } = useLazyLoadQuery<GetPositionsQuery>(positions, {});

  return getPositions;
};
