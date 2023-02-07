import { graphql } from "babel-plugin-relay/macro";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GetManagerPositionsQuery } from "./__generated__/GetManagerPositionsQuery.graphql";

export const getManagerPositionsQuery = graphql`
  query GetManagerPositionsQuery {
    getPositions {
      ok
      error
      positions {
        ...ManagerPositionTableContent_position
      }
    }
  }
`;

export const useGetManagerPositions = (
  managerPositionsQueryReference: PreloadedQuery<GetManagerPositionsQuery>
) => {
  const {
    getPositions: { ok, error, positions },
  } = usePreloadedQuery<GetManagerPositionsQuery>(
    getManagerPositionsQuery,
    managerPositionsQueryReference
  );
  if (!ok) {
    alert(error);
  }

  return { positions };
};
