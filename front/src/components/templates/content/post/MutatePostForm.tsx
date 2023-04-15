import { faTag } from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import React, { useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFragment } from "react-relay";
import { useDeletePost } from "../../../../client/post/DeletePost.client";
import { useUpdatePost } from "../../../../client/post/UpdatePost.client";
import { formats, modules } from "../../../../utils/shared/quill";
import { ColumnBox, RowBox } from "../../../atomics/boxes/FlexBox";
import { SubTitle } from "../../../atomics/typographys/Sub";
import { EndSubmitButton } from "../../../molecules/buttons/EndSubmitButton";
import Form from "../../../molecules/shared/Form";
import { TextInput } from "../../../molecules/inputs/TextInput";
import "./TextEditorStyles.css";
import { MutatePostForm_post$key } from "./__generated__/MutatePostForm_post.graphql";

interface IMutatePostFormValue {
  title: string;
}
interface IMutatePostFormFragment extends MutatePostForm_post$key {
  id: string;
}

interface IMutatePostForm {
  post: IMutatePostFormFragment;
}

const mutatePostFormFragment = graphql`
  fragment MutatePostForm_post on Post {
    title
    content
    user {
      id
      name
    }
    createdAt
    isMyPost
  }
`;
const MutatePostForm = ({ post }: IMutatePostForm) => {
  const mutatePostFormData = useFragment(mutatePostFormFragment, post);

  const contentRef = useRef<any>(mutatePostFormData.content);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm<IMutatePostFormValue>({
    mode: "onChange",
  });

  const { title: watchTitle } = watch();

  const isSubmitDisabled = !!errors.title || !watchTitle;
  const { updatePostMutation, updatePostLoading } = useUpdatePost();
  const onSubmit: SubmitHandler<IMutatePostFormValue> = ({ title }) => {
    if (updatePostLoading) return;

    const content = contentRef?.current?.value || "";

    updatePostMutation({
      postId: post.id,
      title,
      content,
    });
  };

  const { deletePostMutation, deletePostLoading } = useDeletePost();
  const handleDeletePost = () => {
    if (deletePostLoading) return;
    deletePostMutation({
      id: post.id,
    });
  };

  useEffect(() => {
    if (mutatePostFormData) {
      setValue("title", mutatePostFormData.title);
    }
  }, [mutatePostFormData]);

  return (
    <ColumnBox>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          defaultValue={mutatePostFormData.title}
          register={register("title", {
            required: { value: true, message: "제목은 필수입니다." },
            minLength: {
              value: 2,
              message: "제목은 2글자 이상입니다.",
            },
            maxLength: {
              value: 100,
              message: "제목은 100글자 이하입니다.",
            },
          })}
          label="게시글 제목"
          errorMessage={errors.title && errors.title.message}
          placeholder="게시글 제목"
          icon={faTag}
        />

        <ColumnBox>
          <SubTitle>게시글 내용</SubTitle>
          <ReactQuill
            ref={contentRef}
            defaultValue={mutatePostFormData.content}
            theme="snow"
            style={{
              borderRadius: 20,
            }}
            formats={formats}
            modules={modules}
            placeholder="내용을 입력하세요."
            className={"text-editor"}
          />
        </ColumnBox>
      </Form>
      <RowBox>
        <EndSubmitButton
          onClick={handleSubmit(onSubmit)}
          disabled={updatePostLoading || isSubmitDisabled}
          text="수정"
        />
        <EndSubmitButton
          onClick={handleDeletePost}
          disabled={deletePostLoading}
          text="삭제"
        />
      </RowBox>
    </ColumnBox>
  );
};

export default MutatePostForm;
