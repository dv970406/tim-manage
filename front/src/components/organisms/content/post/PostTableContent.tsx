import {
  faBox,
  faComment,
  faHeart,
  faEllipsisVertical,
} from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import React, { useState } from "react";
import { useFragment, usePaginationFragment } from "react-relay";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../css/theme";
import { getElaspedDay } from "../../../../utils/time/time";
import {
  RowBox,
  HorizontalDivider,
  GapBox,
  ItemBox,
} from "../../../atomics/boxes/Boxes";
import { MainText } from "../../../atomics/typographys/texts";
import { SectionTitle } from "../../../atomics/typographys/titles";
import { ButtonIcon } from "../../../molecules/buttons/Buttons";
import { BoxIcon } from "../../../molecules/icons/Icons";
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
  const tableContentData = useFragment(postTableContentFragment, post);

  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const postCreatedAt = getElaspedDay(tableContentData?.createdAt);

  return (
    <ItemBox
      onClick={() => navigate(`/post/${tableContentData?.id}`)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <RowBox>
        <BoxIcon
          bgColor={isHovering ? theme.bgColors.purple : theme.bgColors.gray}
          icon={faBox}
          size={"2x"}
        />
        <GapBox>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <SectionTitle>{tableContentData?.title}</SectionTitle>
            <ButtonIcon onClick={() => null} icon={faEllipsisVertical} />
          </div>
          <div>
            {comment ? (
              <MainText color={theme.colors.blue}>{comment}</MainText>
            ) : (
              <MainText>{tableContentData?.user.name}</MainText>
            )}
          </div>
        </GapBox>
      </RowBox>

      <HorizontalDivider />
      <RowBox
        style={{
          justifyContent: "space-between",
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
          <div
            style={{
              display: "flex",
              gap: theme.spacing.sm,
              alignItems: "center",
            }}
          >
            <BoxIcon
              color={
                tableContentData?.isLiked
                  ? theme.bgColors.red
                  : theme.bgColors.white
              }
              icon={faHeart}
            />
            <MainText>{tableContentData?.countLikes}</MainText>
          </div>
          <div
            style={{
              display: "flex",
              gap: theme.spacing.sm,
              alignItems: "center",
            }}
          >
            <BoxIcon icon={faComment} />
            <MainText>{tableContentData?.countComments}</MainText>
          </div>
        </div>
        <MainText>{postCreatedAt}</MainText>
      </RowBox>
    </ItemBox>
  );
};

export default React.memo(PostTableContent);
