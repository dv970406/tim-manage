import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import { useParams } from "react-router-dom";
import { getPostQuery, useGetPost } from "../../client/post/GetPost.client";
import { GetPostQuery } from "../../client/post/__generated__/GetPostQuery.graphql";
import Loading from "../../components/molecules/shared/Loading";
import { Section } from "../../components/atomics/sections/sections";
import MutatePostForm from "../../components/templates/content/post/MutatePostForm";
import { CenterBox } from "../../components/atomics/boxes/FlexBox";

const PostUpdatePage = () => {
  const { postId } = useParams();

  const [getPostQueryReference, loadGetPostQuery] =
    useQueryLoader<GetPostQuery>(getPostQuery);

  useEffect(() => {
    if (!postId) return;
    loadGetPostQuery({ id: postId });
  }, []);
  return (
    <Suspense fallback={<Loading />}>
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
  return (
    <CenterBox style={{ width: "100%" }}>
      <Section style={{ width: "40%" }}>
        {post && <MutatePostForm post={post} />}
      </Section>
    </CenterBox>
  );
};

export default PostUpdatePage;
