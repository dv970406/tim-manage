import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import { getPostsQuery, useGetPosts } from "../../client/post/GetPosts.client";
import { GetPostsQuery } from "../../client/post/__generated__/GetPostsQuery.graphql";
import Loading from "../../components/atomics/boxes/Loading";
import { Section } from "../../components/atomics/sections/sections";
import CreatePostModal from "../../components/templates/content/post/CreatePostModal";
import PostsTable from "../../components/templates/content/post/PostsTable";
import { PAGINATION_LOAD_COUNT } from "../../utils/constants/share.constant";

const PostsPage = () => {
  const [getPostsQueryReference, loadGetPostsQuery] =
    useQueryLoader<GetPostsQuery>(getPostsQuery);

  useEffect(() => {
    loadGetPostsQuery({ first: PAGINATION_LOAD_COUNT });
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      {getPostsQueryReference && (
        <Posts getPostsQueryReference={getPostsQueryReference} />
      )}
    </Suspense>
  );
};
interface IPosts {
  getPostsQueryReference: PreloadedQuery<GetPostsQuery>;
}
const Posts = ({ getPostsQueryReference }: IPosts) => {
  const { posts } = useGetPosts(getPostsQueryReference);

  return (
    /* Section이 있어야 Observer가 제대로 동작해서 Infinite Scroll이 정상 작동함 */
    <Section noneBg>
      {posts && <PostsTable posts={posts} />}
      <CreatePostModal />
    </Section>
  );
};
export default PostsPage;
