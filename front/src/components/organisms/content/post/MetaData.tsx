import {
  faComment,
  faHeart as faFullHeart,
} from "@fortawesome/pro-solid-svg-icons";
import { faHeart as faEmptyHeart } from "@fortawesome/pro-light-svg-icons";

import React from "react";
import { useToggleLike } from "../../../../client/post/ToggleLike.client";
import { theme } from "../../../../css/theme";
import { IconButton } from "../../../molecules/buttons/IconButton";
import { Icon } from "../../../atomics/icons/Icon";
import { RowBox } from "../../../atomics/boxes/FlexBox";
import { SubText } from "../../../atomics/typographys/Sub";

interface IMetaData {
  postId: string;
  isLiked: boolean;
  countLikes: number;
  countComments: number;
}
const MetaData = ({
  postId,
  isLiked,
  countLikes,
  countComments,
}: IMetaData) => {
  const { toggleLikeMutation, toggleLikeLoading } = useToggleLike();

  const handleToggleLike = () => {
    if (toggleLikeLoading) return;
    toggleLikeMutation({
      postId,
    });
  };
  return (
    <RowBox
      style={{
        placeSelf: "flex-end",
        gap: theme.spacing.lg,
      }}
    >
      <RowBox
        style={{
          gap: theme.spacing.sm,
        }}
      >
        <IconButton
          size="1x"
          onClick={handleToggleLike}
          icon={isLiked ? faFullHeart : faEmptyHeart}
          color={isLiked ? theme.colors.red : theme.colors.white}
        />
        <SubText>{countLikes}</SubText>
      </RowBox>
      <RowBox style={{ gap: theme.spacing.sm }}>
        <Icon size="1x" icon={faComment} />
        <SubText>{countComments}</SubText>
      </RowBox>
    </RowBox>
  );
};

export default MetaData;
