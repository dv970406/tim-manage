import { graphql } from "babel-plugin-relay/macro";
import { useFragment, usePaginationFragment } from "react-relay";
import { useOutletContext } from "react-router-dom";
import { MODAL_NAME } from "../../../../utils/constants/modal.constant";
import { RowBox, ListBox } from "../../../atomics/boxes/Boxes";
import { SectionTitle } from "../../../atomics/typographys/titles";
import PostTableContent from "../../../organisms/content/post/PostTableContent";
import { SearchAndInfiniteScrollDataList } from "../../../organisms/shared/InfiniteScrolls";
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
      <SearchAndInfiniteScrollDataList
        loadNext={loadNext}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
        refetch={refetch}
        hasAddButton={false}
      >
        {myPostsConnection?.edges?.map(
          (post) =>
            post?.node && (
              <PostTableContent key={post.cursor} post={post.node} />
            )
        )}
      </SearchAndInfiniteScrollDataList>
    </>
  );
};

export default ShowUserPosts;
