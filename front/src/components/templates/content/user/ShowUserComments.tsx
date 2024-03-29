import { graphql } from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay";
import { useOutletContext } from "react-router-dom";
import { SectionTitle } from "../../../atomics/typographys/Etc";
import PostTableContent from "../../../organisms/content/post/PostTableContent";
import { SearchAndInfiniteScrollList } from "../../../organisms/scrolls/SearchAndInfiniteScrollList";
import { ShowUserComments_comment$key } from "./__generated__/ShowUserComments_comment.graphql";

// 여기도 connection으로
const showUserCommentsFragment = graphql`
  fragment ShowUserComments_comment on User
  @refetchable(queryName: "ShowUserCommentsPaginationQuery") {
    myCommentsConnection(keyword: $keyword, first: $first, after: $after)
      @connection(key: "ShowUserComments_myCommentsConnection") {
      edges {
        node {
          id
          post {
            ...PostTableContent_post
          }
          content
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

const ShowUserComments = () => {
  const user: ShowUserComments_comment$key = useOutletContext();
  const {
    data: {
      myCommentsConnection: { edges },
    },
    loadNext,
    hasNext,
    isLoadingNext,
    refetch,
  } = usePaginationFragment(showUserCommentsFragment, user);

  return (
    <>
      <SectionTitle>댓글 목록</SectionTitle>
      <SearchAndInfiniteScrollList
        loadNext={loadNext}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
        refetch={refetch}
      >
        {edges?.map(
          (comment) =>
            comment?.node?.post && (
              <PostTableContent
                key={comment.node.id}
                post={comment.node.post}
                comment={comment.node.content}
              />
            )
        )}
      </SearchAndInfiniteScrollList>
    </>
  );
};

export default ShowUserComments;
