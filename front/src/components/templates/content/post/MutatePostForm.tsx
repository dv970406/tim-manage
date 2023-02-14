import { faTag } from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import React, { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFragment } from "react-relay";
import { useDeletePost } from "../../../../client/post/DeletePost.client";
import { useUpdatePost } from "../../../../client/post/UpdatePost.client";
import { theme } from "../../../../css/theme";
import { formats, modules } from "../../../../utils/quill/props";
import { GapBox } from "../../../atomics/boxes/Boxes";
import { SubmitButton } from "../../../atomics/buttons/buttons";
import { Form } from "../../../atomics/form/Form";
import { SubTitle } from "../../../atomics/typographys/titles";
import { EndSubmitButton } from "../../../molecules/buttons/Buttons";
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

  const [content, setContent] = useState(mutatePostFormData.content);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm<IMutatePostFormValue>({
    // useForm의 defaultValues는 비동기 데이터는 잘 안먹힘 - TextInput에 defaultValue로 넣자
    // defaultValues: mutatePostFormData.title,
    mode: "onChange",
  });

  const { title: watchTitle } = watch();

  const isSubmitDisabled = !!errors.title || !watchTitle;
  const { updatePostMutation, updatePostLoading } = useUpdatePost();
  const onSubmit: SubmitHandler<IMutatePostFormValue> = ({ title }) => {
    if (updatePostLoading) return;

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

  const handleChange = (text: string) => setContent(text);

  useEffect(() => {
    if (mutatePostFormData) {
      setValue("title", mutatePostFormData.title);
    }
  }, [mutatePostFormData]);

  return (
    <Form>
      <TextInput
        defaultValue={mutatePostFormData.title}
        register={register("title", {
          required: { value: true, message: "제목은 필수입니다." },
          minLength: {
            value: 2,
            message: "제목은 2글자 이상입니다.",
          },
          maxLength: {
            value: 50,
            message: "제목은 50글자 이하입니다.",
          },
        })}
        label="게시글 제목"
        errorMessage={errors.title && errors.title.message}
        placeholder="게시글 제목"
        icon={faTag}
      />

      <GapBox>
        <SubTitle>게시글 내용</SubTitle>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleChange}
          style={{
            borderRadius: 20,
          }}
          formats={formats}
          modules={modules}
          placeholder="내용을 입력하세요."
          className={"text-editor"}
        />
      </GapBox>
      <div
        style={{ display: "flex", gap: theme.spacing.sm, marginTop: "auto" }}
      >
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
      </div>
    </Form>
  );
};

export default MutatePostForm;
