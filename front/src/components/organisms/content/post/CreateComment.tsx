import { faI, faPaperPlane } from "@fortawesome/pro-solid-svg-icons";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateComment } from "../../../../client/post/CreateComment.client";
import { theme } from "../../../../css/theme";
import { RowBox } from "../../../atomics/boxes/FlexBox";
import { Icon } from "../../../atomics/icons/Icon";
import { IconButton } from "../../../molecules/buttons/IconButton";
import { SubmitButton } from "../../../molecules/buttons/SubmitButton";
import Form from "../../../molecules/shared/Form";
import { TextInput } from "../../../molecules/inputs/TextInput";

interface ICreateCommentForm {
  content: string;
}

interface ICreateComment {
  postId: string;
}
const CreateComment = ({ postId }: ICreateComment) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue,
    watch,
  } = useForm<ICreateCommentForm>({ mode: "onChange" });

  const { createCommentMutation, createCommentLoading, createCommentSuccess } =
    useCreateComment();
  const onSubmit: SubmitHandler<ICreateCommentForm> = ({ content }) => {
    if (createCommentLoading) return;
    createCommentMutation({
      postId,
      content,
    });
  };

  const { content: watchContent } = watch();
  const isSubmitDisabled = !!errors.content || !watchContent;
  useEffect(() => {
    if (createCommentSuccess) setValue("content", "");
  }, [createCommentSuccess]);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <RowBox>
        <TextInput
          register={register("content", {
            required: {
              value: true,
              message: "댓글을 입력해주세요.",
            },
            maxLength: {
              value: 100,
              message: "댓글은 100자 이하입니다.",
            },
          })}
          noError
          errorMessage={errors.content && errors.content.message}
          placeholder="댓글을 입력하세요."
          icon={faI}
        />
        <SubmitButton
          onClick={handleSubmit(onSubmit)}
          disabled={createCommentLoading || isSubmitDisabled}
          style={{
            padding: theme.spacing.sm,
          }}
        >
          <Icon size="lg" icon={faPaperPlane} />
        </SubmitButton>
      </RowBox>
    </Form>
  );
};

export default CreateComment;
