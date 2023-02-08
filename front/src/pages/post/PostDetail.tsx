import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import { useParams } from "react-router-dom";
import { getPostQuery, useGetPost } from "../../client/post/GetPost.client";
import { GetPostQuery } from "../../client/post/__generated__/GetPostQuery.graphql";
import { Section } from "../../components/atomics/sections/sections";
import "react-quill/dist/quill.bubble.css";
import CommentsZone from "../../components/templates/content/post/CommentsZone";
import ContentZone from "../../components/templates/content/post/ContentZone";
import { theme } from "../../css/theme";

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

  return (
    <>
      <Section style={{ width: "50%" }}>
        {post && <ContentZone post={post} />}
      </Section>

      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing.xl,
        }}
      >
        <Section style={{ height: "50%" }}>
          {post && <CommentsZone post={post} />}{" "}
        </Section>
        <Section style={{ height: "50%" }}></Section>
      </div>
    </>
  );
};
export default PostDetailPage;
