import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import { useParams } from "react-router-dom";
import { getPostQuery, useGetPost } from "../../client/post/GetPost.client";
import { GetPostQuery } from "../../client/post/__generated__/GetPostQuery.graphql";
import { Section } from "../../components/atomics/sections/sections";
import CommentsZone from "../../components/templates/content/post/CommentsZone";
import ContentZone from "../../components/templates/content/post/ContentZone";
import Loading from "../../components/molecules/shared/Loading";
import { CenterBox, RowBox } from "../../components/atomics/boxes/FlexBox";

const PostDetailPage = () => {
  const { postId } = useParams();
  const [getPostQueryReference, loadGetPostDetailQuery] =
    useQueryLoader<GetPostQuery>(getPostQuery);

  useEffect(() => {
    if (!postId) return;
    loadGetPostDetailQuery({ id: postId });
  }, []);
  return (
    <Suspense fallback={<Loading />}>
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

  return (
    <CenterBox style={{ width: "100%" }}>
      <RowBox
        style={{
          width: "70%",
          height: "80%",
        }}
      >
        <Section style={{ width: "60%" }}>
          {post && <ContentZone post={post} />}
        </Section>

        <Section
          style={{
            width: "40%",
            display: "grid",
            gridTemplateRows: "12fr 1fr",
          }}
        >
          {post && <CommentsZone post={post} />}{" "}
        </Section>
      </RowBox>
    </CenterBox>
  );
};
export default PostDetailPage;
