import {
  faComment,
  faHeart as faFullHeart,
} from "@fortawesome/pro-solid-svg-icons";
import { faHeart as faEmptyHeart } from "@fortawesome/pro-light-svg-icons";

import React from "react";
import { useToggleLike } from "../../../../client/post/ToggleLike.client";
import { theme } from "../../../../css/theme";
import { SectionText } from "../../../atomics/typographys/texts";
import { ButtonIcon } from "../../../molecules/buttons/Buttons";
import { Icon } from "../../../atomics/icons/icons";

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
    <div
      style={{
        placeSelf: "flex-end",
        display: "flex",
        gap: theme.spacing.lg,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: theme.spacing.sm,
        }}
      >
        <ButtonIcon
          size="1x"
          onClick={handleToggleLike}
          icon={isLiked ? faFullHeart : faEmptyHeart}
          color={isLiked ? theme.colors.red : theme.colors.white}
        />
        <SectionText>{countLikes}</SectionText>
      </div>
      <div style={{ display: "flex", gap: theme.spacing.sm }}>
        <Icon size="1x" icon={faComment} />
        <SectionText>{countComments}</SectionText>
      </div>
    </div>
  );
};

export default MetaData;
