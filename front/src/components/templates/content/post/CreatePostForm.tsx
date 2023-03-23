import { faTag } from "@fortawesome/pro-solid-svg-icons";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useCreatePost } from "../../../../client/post/CreatePost.client";
import { theme } from "../../../../css/theme";
import { MODAL_NAME } from "../../../../utils/constants/modal.constant";
import { closeModal } from "../../../../utils/modal/controlModal";
import { formats, modules } from "../../../../utils/quill/props";
import { ColumnBox, ScrollBox } from "../../../atomics/boxes/Boxes";
import { Form } from "../../../atomics/form/Form";
import { SubTitle } from "../../../atomics/typographys/titles";
import { EndSubmitButton } from "../../../molecules/buttons/EndSubmitButton";
import { TextInput } from "../../../molecules/inputs/TextInput";
import "./TextEditorStyles.css";

interface ICreatePostFormValue {
  title: string;
}
const CreatePostForm = () => {
  const [content, setContent] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm<ICreatePostFormValue>({
    mode: "onChange",
  });

  const { title: watchTitle } = watch();
  const { createPostMutation, createPostLoading } = useCreatePost();

  const isSubmitDisabled = !!errors.title || !watchTitle;
  const handleChange = (text: string) => setContent(text);

  const onSubmit: SubmitHandler<ICreatePostFormValue> = ({ title }) => {
    if (createPostLoading) return;

    createPostMutation({
      title,
      content,
    });
    closeModal(MODAL_NAME.CREATE_POST);
    reset();
    setContent("");
  };

  return (
    <ColumnBox>
      <Form>
        <TextInput
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

        <SubTitle>게시글 내용</SubTitle>
        <ScrollBox>
          <ReactQuill
            // react-quill은 react-hook-form register 안먹혀서 onChange로 함
            theme="snow"
            value={content}
            onChange={handleChange}
            style={{
              borderRadius: theme.borderRadius.lg,
            }}
            formats={formats}
            modules={modules}
            placeholder="내용을 입력하세요."
            className={"text-editor"}
          />
        </ScrollBox>
      </Form>

      <EndSubmitButton
        onClick={handleSubmit(onSubmit)}
        disabled={createPostLoading || isSubmitDisabled}
        text="게시글 추가"
      />
    </ColumnBox>
  );
};

export default CreatePostForm;
