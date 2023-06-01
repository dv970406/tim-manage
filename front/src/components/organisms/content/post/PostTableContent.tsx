import { faBox, faComment, faHeart } from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import React, { useState } from "react";
import { useFragment } from "react-relay";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../css/theme";
import { getElaspedDay } from "../../../../utils/func/time";
import { HorizontalDivider } from "../../../atomics/boxes/Divider";
import { ColumnBox, RowBox } from "../../../atomics/boxes/FlexBox";
import { GridItem } from "../../../atomics/boxes/GridBox";
import { SectionTitle } from "../../../atomics/typographys/Etc";
import { MainText } from "../../../atomics/typographys/Main";
import { IconBox } from "../../../molecules/boxes/IconBox";
import { PostTableContent_post$key } from "./__generated__/PostTableContent_post.graphql";

interface IPostTableContent {
  post: PostTableContent_post$key;
  comment?: string;
}
const postTableContentFragment = graphql`
  fragment PostTableContent_post on Post {
    id
    title
    user {
      id
      name
    }
    isLiked
    countLikes
    countComments
    createdAt
  }
`;

const PostTableContent = ({ post, comment }: IPostTableContent) => {
  const {
    id: postId,
    isLiked,
    title,
    user,
    countLikes,
    countComments,
    createdAt,
  } = useFragment(postTableContentFragment, post);

  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const postCreatedAt = getElaspedDay(createdAt);

  return (
    <GridItem
      onClick={() => navigate(`/post/${postId}`)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <RowBox style={{ width: "100%" }}>
        <IconBox
          bgColor={isHovering ? theme.bgColors.purple : theme.bgColors.gray}
          icon={faBox}
          size={"2x"}
        />
        <ColumnBox gap={theme.spacing.sm}>
          <SectionTitle className="one-line">{title}</SectionTitle>

          {comment ? (
            <MainText color={theme.colors.blue}>{comment}</MainText>
          ) : (
            <MainText>{user.name}</MainText>
          )}
        </ColumnBox>
      </RowBox>

      <HorizontalDivider />
      <RowBox
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: theme.spacing.sm,
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: theme.spacing.sm,
              alignItems: "center",
            }}
          >
            <IconBox
              color={isLiked ? theme.bgColors.red : theme.bgColors.white}
              icon={faHeart}
            />
            <MainText>{countLikes}</MainText>
          </div>
          <div
            style={{
              display: "flex",
              gap: theme.spacing.sm,
              alignItems: "center",
            }}
          >
            <IconBox icon={faComment} />
            <MainText>{countComments}</MainText>
          </div>
        </div>
        <MainText>{postCreatedAt}</MainText>
      </RowBox>
    </GridItem>
  );
};

export default React.memo(PostTableContent);
