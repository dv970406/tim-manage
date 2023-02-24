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
import { GapBox } from "../../components/atomics/boxes/Boxes";
import { CenterFixBox } from "../../components/molecules/boxes/CenterBox";

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
    <CenterFixBox>
      <GapBox
        style={{
          flexDirection: "row",
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
          }}
        >
          {post && <CommentsZone post={post} />}{" "}
        </Section>
      </GapBox>
    </CenterFixBox>
  );
};
export default PostDetailPage;
