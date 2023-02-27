import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { PAGINATION_LOAD_COUNT } from "../../utils/constants/share.constant";
import { POSITION } from "../../utils/constants/user.constant";
import { GetNotificationsQuery } from "./__generated__/GetNotificationsQuery.graphql";

const getNotificationsQuery = graphql`
  query GetNotificationsQuery($first: Int!, $after: DateTime) {
    ...NotificationsTable_notification @arguments(first: $first, after: $after)
  }
`;

export const useGetNotifications = () => {
  const notifications = useLazyLoadQuery<GetNotificationsQuery>(
    getNotificationsQuery,
    {
      first: PAGINATION_LOAD_COUNT,
    }
  );

  return { notifications };
};
