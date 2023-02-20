import { graphql } from "babel-plugin-relay/macro";
import { useFragment, usePaginationFragment } from "react-relay";
import { useOutletContext } from "react-router-dom";
import { RowBox, ListBox } from "../../../atomics/boxes/Boxes";
import { SectionTitle } from "../../../atomics/typographys/titles";
import PostTableContent from "../../../organisms/content/post/PostTableContent";
import { InfiniteScrollListBox } from "../../../organisms/shared/InfiniteScroll";
import { ShowUserPosts_post$key } from "./__generated__/ShowUserPosts_post.graphql";

// 여기도 connection으로
const showUserPostsFragment = graphql`
  fragment ShowUserPosts_post on User
  @argumentDefinitions(first: { type: "Int!" }, after: { type: "DateTime" })
  @refetchable(queryName: "ShowUserPostsPaginationQuery") {
    myPostsConnection(first: $first, after: $after)
      @connection(key: "ShowUserPosts_myPostsConnection") {
      edges {
        node {
          ...PostTableContent_post
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

const ShowUserPosts = () => {
  const user: ShowUserPosts_post$key = useOutletContext();
  const {
    data: { myPostsConnection },
    loadNext,
    hasNext,
    isLoadingNext,
    refetch,
  } = usePaginationFragment(showUserPostsFragment, user);

  return (
    <>
      {" "}
      <SectionTitle>게시글 목록</SectionTitle>
      <InfiniteScrollListBox
        loadNext={loadNext}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
        refetch={refetch}
      >
        {myPostsConnection?.edges?.map(
          (post) =>
            post && <PostTableContent key={post.cursor} post={post.node} />
        )}
      </InfiniteScrollListBox>
    </>
  );
};

export default ShowUserPosts;
