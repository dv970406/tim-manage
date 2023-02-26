import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { PAGINATION_LOAD_COUNT } from "../../utils/constants/share.constant";
import { GetRoomsQuery } from "./__generated__/GetRoomsQuery.graphql";

const getRoomsQuery = graphql`
  query GetRoomsQuery($first: Int!, $after: DateTime) {
    ...RoomsTable_room @arguments(first: $first, after: $after)
  }
`;

export const useGetRooms = () => {
  const rooms = useLazyLoadQuery<GetRoomsQuery>(getRoomsQuery, {
    first: PAGINATION_LOAD_COUNT,
  });

  return { rooms };
};
