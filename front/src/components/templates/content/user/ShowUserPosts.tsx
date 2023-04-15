import { graphql } from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay";
import { useOutletContext } from "react-router-dom";
import { SectionTitle } from "../../../atomics/typographys/Etc";
import PostTableContent from "../../../organisms/content/post/PostTableContent";
import { SearchAndInfiniteScrollList } from "../../../organisms/scrolls/SearchAndInfiniteScrollList";
import { ShowUserPosts_post$key } from "./__generated__/ShowUserPosts_post.graphql";

// 여기도 connection으로
const showUserPostsFragment = graphql`
  fragment ShowUserPosts_post on User
  @refetchable(queryName: "ShowUserPostsPaginationQuery") {
    myPostsConnection(keyword: $keyword, first: $first, after: $after)
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
      <SectionTitle>게시글 목록</SectionTitle>
      <SearchAndInfiniteScrollList
        loadNext={loadNext}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
        refetch={refetch}
      >
        {myPostsConnection?.edges?.map(
          (post) =>
            post?.node && (
              <PostTableContent key={post.cursor} post={post.node} />
            )
        )}
      </SearchAndInfiniteScrollList>
    </>
  );
};

export default ShowUserPosts;
