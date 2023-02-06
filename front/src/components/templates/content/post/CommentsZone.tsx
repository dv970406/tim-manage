import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { GapBox } from "../../../atomics/boxes/Boxes";
import { faEraser, faFileXmark, faI } from "@fortawesome/pro-solid-svg-icons";
import { TextInput } from "../../../molecules/inputs/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { SubmitButton } from "../../../atomics/buttons/buttons";
import { Form } from "../../../atomics/form/Form";
import { useCreateComment } from "../../../../client/post/CreateComment.client";
import { useEffect } from "react";
import { SubTitle } from "../../../atomics/typographys/titles";
import { SummaryText } from "../../../atomics/typographys/texts";
import { getElaspedDay } from "../../../../utils/time/time";
import {
  ButtonIcon,
  EndSubmitButton,
} from "../../../molecules/buttons/Buttons";
import { useDeleteComment } from "../../../../client/post/DeleteComment.client";
import { CommentsZone_post$key } from "./__generated__/CommentsZone_post.graphql";
import Comment from "../../../organisms/content/post/Comment";

interface ICommentsZoneFragment extends CommentsZone_post$key {
  id: string;
}

interface ICommentsZone {
  post: ICommentsZoneFragment;
}

const commentsZoneFragment = graphql`
  fragment CommentsZone_post on Post {
    comments {
      id
      content
      user {
        id
        name
      }
      isMyComment
      createdAt
    }
  }
`;

interface ICommentsZoneFormValue {
  content: string;
}
const CommentsZone = ({ post }: ICommentsZone) => {
  const commentsZoneData = useFragment(commentsZoneFragment, post);
  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue,
    watch,
  } = useForm<ICommentsZoneFormValue>({ mode: "onChange" });

  const { createCommentMutation, createCommentLoading, createCommentSuccess } =
    useCreateComment();
  const onSubmit: SubmitHandler<ICommentsZoneFormValue> = ({ content }) => {
    if (createCommentLoading) return;
    createCommentMutation({
      postId: post.id,
      content,
    });
  };

  const { deleteCommentMutation, deleteCommentLoading } = useDeleteComment();
  const handleDeleteComment = (commentId: string) => {
    if (deleteCommentLoading) return;
    deleteCommentMutation({
      id: commentId,
    });
  };

  const { content: watchContent } = watch();
  const isSubmitDisabled = !!errors.content || !watchContent;

  useEffect(() => {
    if (createCommentSuccess) setValue("content", "");
  }, [createCommentSuccess]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <GapBox>
        {commentsZoneData.comments
          .filter((comment) => !!comment)
          .map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              onDelete={() => handleDeleteComment(comment.id)}
            />
          ))}
      </GapBox>
      <GapBox>
        <TextInput
          label="댓글"
          register={register("content", {
            required: {
              value: true,
              message: "댓글은 필수입니다.",
            },
            minLength: {
              value: 2,
              message: "댓글은 2글자 이상입니다.",
            },
            maxLength: {
              value: 100,
              message: "댓글은 100자 이하입니다.",
            },
          })}
          errorMessage={errors.content && errors.content.message}
          placeholder="댓글을 입력하세요."
          icon={faI}
        />
        <EndSubmitButton
          onClick={handleSubmit(onSubmit)}
          disabled={createCommentLoading || isSubmitDisabled}
          text="댓글 추가"
        />
      </GapBox>
    </Form>
  );
};

export default CommentsZone;
