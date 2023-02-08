import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import { useParams } from "react-router-dom";
import { getPostQuery, useGetPost } from "../../client/post/GetPost.client";
import { GetPostQuery } from "../../client/post/__generated__/GetPostQuery.graphql";
import { useGetUser } from "../../client/user/GetUser.client";
import { GetUserQuery } from "../../client/user/__generated__/GetUserQuery.graphql";
import { Section } from "../../components/atomics/sections/sections";
import MutatePostForm from "../../components/templates/content/post/MutatePostForm";

const PostUpdatePage = () => {
  const { postId } = useParams();

  const [getPostQueryReference, loadGetPostQuery] =
    useQueryLoader<GetPostQuery>(getPostQuery);

  useEffect(() => {
    if (!postId) return;
    loadGetPostQuery({ id: postId });
  }, []);
  return (
    <Suspense fallback="qweewqqweewqqweewqqweewqqweewq">
      {getPostQueryReference && (
        <PostUpdate getPostQueryReference={getPostQueryReference} />
      )}
    </Suspense>
  );
};
interface IPostUpdate {
  getPostQueryReference: PreloadedQuery<GetPostQuery>;
}

const PostUpdate = ({ getPostQueryReference }: IPostUpdate) => {
  const { post } = useGetPost(getPostQueryReference);
  return <Section>{post && <MutatePostForm post={post} />}</Section>;
};

export default PostUpdatePage;
