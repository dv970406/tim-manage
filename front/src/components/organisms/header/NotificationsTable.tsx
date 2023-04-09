import { graphql } from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay";
import { useReadNotification } from "../../../client/notification/ReadNotification.client";
import { InfiniteScrollList } from "../scrolls/InfiniteScrollList";
import NotificationTableContent from "./NotificationTableContent";
import { NotificationsTablePaginationQuery } from "./__generated__/NotificationsTablePaginationQuery.graphql";
import { NotificationsTable_notification$key } from "./__generated__/NotificationsTable_notification.graphql";

interface INotificationsTable {
  notifications: NotificationsTable_notification$key;
  // setClickedNotificationId: Dispatch<SetStateAction<string>>;
}

const getNotificationsFragment = graphql`
  fragment NotificationsTable_notification on Query
  @argumentDefinitions(first: { type: "Int!" }, after: { type: "DateTime" })
  @refetchable(queryName: "NotificationsTablePaginationQuery") {
    getNotifications(first: $first, after: $after)
      @connection(key: "NotificationsTable_getNotifications") {
      ok
      error
      edges {
        node {
          ...NotificationTableContent_notification
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const NotificationsTable = ({ notifications }: INotificationsTable) => {
  const {
    data: { getNotifications },
    loadNext,
    isLoadingNext,
    hasNext,
  } = usePaginationFragment<
    NotificationsTablePaginationQuery,
    NotificationsTable_notification$key
  >(getNotificationsFragment, notifications);

  const { readNotificationMutation, readNotificationLoading } =
    useReadNotification();
  return (
    <>
      <InfiniteScrollList
        loadNext={loadNext}
        isLoadingNext={isLoadingNext}
        hasNext={hasNext}
      >
        {getNotifications?.edges?.map(
          (notification) =>
            notification.cursor && (
              <NotificationTableContent
                key={notification.cursor}
                notification={notification.node}
                readNotificationMutation={readNotificationMutation}
                readNotificationLoading={readNotificationLoading}
              />
            )
        )}
      </InfiniteScrollList>
    </>
  );
};

export default NotificationsTable;
