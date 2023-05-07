import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { PAGINATION_LOAD_COUNT } from "../../utils/constants/share.constant";
import { SelectUsersQuery } from "./__generated__/SelectUsersQuery.graphql";

export const selectUsersQuery = graphql`
  query SelectUsersQuery($first: Int!, $after: DateTime) {
    ...SelectUsers_user @arguments(first: $first, after: $after)
  }
`;

export const useSelectUsers = () => {
  const users = useLazyLoadQuery<SelectUsersQuery>(selectUsersQuery, {
    first: PAGINATION_LOAD_COUNT,
  });
  return { users };
};

export const useSelectUsersPagination = () => {
  // return { usersBySelectOptions };
};
