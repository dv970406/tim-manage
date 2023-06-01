import { faEraser } from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "react-relay";
import { useDeleteComment } from "../../../../client/post/DeleteComment.client";
import { theme } from "../../../../css/theme";
import { getElaspedDay } from "../../../../utils/func/time";
import { RowBox } from "../../../atomics/boxes/FlexBox";
import { MainText } from "../../../atomics/typographys/Main";
import { SubText, SubTitle } from "../../../atomics/typographys/Sub";
import { IconButton } from "../../../molecules/buttons/IconButton";
import { Comment_comment$key } from "./__generated__/Comment_comment.graphql";

const commentFragment = graphql`
  fragment Comment_comment on Comment {
    id
    content
    user {
      id
      name
    }
    isMyComment
    createdAt
  }
`;

interface IComment {
  comment: Comment_comment$key;
}
const Comment = ({ comment }: IComment) => {
  const commentData = useFragment(commentFragment, comment);

  const { deleteCommentMutation, deleteCommentLoading } = useDeleteComment();
  const handleDeleteComment = (commentId: string) => {
    if (deleteCommentLoading) return;
    deleteCommentMutation({
      id: commentId,
    });
  };
  return (
    <li>
      <RowBox style={{ justifyContent: "space-between" }}>
        <SubTitle>{commentData.user.name}</SubTitle>
        {commentData.isMyComment && (
          <IconButton
            icon={faEraser}
            onClick={() => handleDeleteComment(commentData.id)}
            color={theme.colors.red}
          />
        )}
      </RowBox>
      <MainText>{commentData.content}</MainText>
      <div>
        <SubText>{getElaspedDay(commentData.createdAt)}</SubText>
      </div>
    </li>
  );
};

export default React.memo(Comment);
