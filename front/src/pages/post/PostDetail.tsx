import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import { useParams } from "react-router-dom";
import { getPostQuery, useGetPost } from "../../client/post/GetPost.client";
import { GetPostQuery } from "../../client/post/__generated__/GetPostQuery.graphql";

const PostDetailPage = () => {
  const { postId } = useParams();
  const [getPostQueryReference, loadGetPostDetailQuery] =
    useQueryLoader<GetPostQuery>(getPostQuery);

  useEffect(() => {
    if (!postId) return;
    loadGetPostDetailQuery({ id: postId });
  }, []);
  return (
    <Suspense fallback="Post loading">
      {getPostQueryReference && (
        <PostDetail getPostQueryReference={getPostQueryReference} />
      )}
    </Suspense>
  );
};
interface IPostDetail {
  getPostQueryReference: PreloadedQuery<GetPostQuery>;
}
const PostDetail = ({ getPostQueryReference }: IPostDetail) => {
  const { post } = useGetPost(getPostQueryReference);
  console.log(post);
  return <div>{post?.title}</div>;
};
export default PostDetailPage;
