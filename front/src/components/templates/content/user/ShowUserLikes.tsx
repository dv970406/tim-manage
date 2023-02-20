import { graphql } from "babel-plugin-relay/macro";
import { useFragment, usePaginationFragment } from "react-relay";
import { useOutletContext } from "react-router-dom";
import { RowBox, ListBox } from "../../../atomics/boxes/Boxes";
import { SectionTitle } from "../../../atomics/typographys/titles";
import PostTableContent from "../../../organisms/content/post/PostTableContent";
import { InfiniteScrollListBox } from "../../../organisms/shared/InfiniteScroll";
import { ShowUserLikes_like$key } from "./__generated__/ShowUserLikes_like.graphql";

// 여기도 connection으로
const showUserLikesFragment = graphql`
  fragment ShowUserLikes_like on User
  @argumentDefinitions(first: { type: "Int!" }, after: { type: "DateTime" })
  @refetchable(queryName: "ShowUserLikesPaginationQuery") {
    myLikesConnection(first: $first, after: $after)
      @connection(key: "ShowUserLikes_myLikesConnection") {
      edges {
        node {
          id
          post {
            ...PostTableContent_post
          }
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

const ShowUserLikes = () => {
  const user: ShowUserLikes_like$key = useOutletContext();
  const {
    data: {
      myLikesConnection: { edges },
    },
    loadNext,
    hasNext,
    isLoadingNext,
    refetch,
  } = usePaginationFragment(showUserLikesFragment, user);

  return (
    <>
      {" "}
      <SectionTitle>좋아요 목록</SectionTitle>
      <InfiniteScrollListBox
        loadNext={loadNext}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
        refetch={refetch}
      >
        {edges?.map(
          (like) =>
            like && (
              <PostTableContent key={like.node.id} post={like.node.post} />
            )
        )}
      </InfiniteScrollListBox>
    </>
  );
};

export default ShowUserLikes;
