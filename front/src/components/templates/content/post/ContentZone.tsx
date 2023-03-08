import React from "react";
import ReactQuill from "react-quill";
import { graphql } from "babel-plugin-relay/macro";
import { SectionTitle } from "../../../atomics/typographys/titles";
import { useFragment } from "react-relay";
import { ContentZone_post$key } from "./__generated__/ContentZone_post.graphql";
import { ColumnBox } from "../../../atomics/boxes/Boxes";
import { ButtonIcon } from "../../../molecules/buttons/Buttons";
import {
  faComment,
  faFileXmark,
  faHeart as faFullHeart,
} from "@fortawesome/pro-solid-svg-icons";
import { theme } from "../../../../css/theme";
import { useNavigate } from "react-router-dom";
import MetaData from "../../../organisms/content/post/MetaData";

interface IContentZoneFragment extends ContentZone_post$key {
  id: string;
}

interface IContentZone {
  post: IContentZoneFragment;
}

const contentZoneFragment = graphql`
  fragment ContentZone_post on Post {
    title
    content
    user {
      id
      name
    }
    createdAt
    isMyPost
    isLiked
    countLikes
    countComments
  }
`;
const ContentZone = ({ post }: IContentZone) => {
  const contentZoneData = useFragment(contentZoneFragment, post);
  const navigate = useNavigate();

  return (
    <ColumnBox style={{ height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SectionTitle>{contentZoneData?.title}</SectionTitle>
        {contentZoneData.isMyPost && (
          <ButtonIcon
            onClick={() => navigate(`/post/update/${post.id}`)}
            icon={faFileXmark}
            color={theme.bgColors.purple}
          />
        )}
      </div>
      {/* bubble 테마와 reaonly 쓰면 표현하기 쉬워짐 (참고로 텍스트 에디터에서는 snow theme 썼음)  */}
      <ReactQuill
        value={contentZoneData?.content}
        readOnly={true}
        theme={"bubble"}
        style={{
          height: "100%",
        }}
      />
      <MetaData
        postId={post.id}
        isLiked={contentZoneData?.isLiked}
        countLikes={contentZoneData?.countLikes}
        countComments={contentZoneData?.countComments}
      />
    </ColumnBox>
  );
};

export default ContentZone;
