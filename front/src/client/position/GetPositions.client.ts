import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { POSITION } from "../../utils/constants/user.constant";
import { GetPositionsQuery } from "./__generated__/GetPositionsQuery.graphql";

const getPositionsQuery = graphql`
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
  const {
    getPositions: { ok, error, positions },
  } = useLazyLoadQuery<GetPositionsQuery>(getPositionsQuery, {});

  if (!ok) {
    alert(error);
  }

  const positionsExceptCeo = positions?.filter(
    (position) => position.position !== POSITION["대표"]
  );
  return { positionsExceptCeo, positions };
};
