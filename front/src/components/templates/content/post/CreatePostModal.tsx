import { faTag } from "@fortawesome/pro-solid-svg-icons";
import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useCreatePost } from "../../../../client/post/CreatePost.client";
import { theme } from "../../../../css/theme";
import PortalModal from "../../../molecules/shared/PortalModal";
import { formats, modules } from "../../../../utils/values/quill";
import { ScrollBox } from "../../../atomics/boxes/ScrollBox";
import { SubTitle } from "../../../atomics/typographys/Sub";
import { EndSubmitButton } from "../../../molecules/buttons/EndSubmitButton";
import Form from "../../../molecules/shared/Form";
import { TextInput } from "../../../molecules/inputs/TextInput";
import "./TextEditorStyles.css";

interface ICreatePostFormValue {
  title: string;
}
interface ICreatePostModal {
  onClose: () => void;
}
const CreatePostModal = ({ onClose }: ICreatePostModal) => {
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

  // React-Quill의 type을 몰라서 any로 둠
  const contentRef = useRef<any>(null);
  const onSubmit: SubmitHandler<ICreatePostFormValue> = ({ title }) => {
    if (createPostLoading) return;

    const content = contentRef?.current?.value || "";

    createPostMutation({
      title,
      content,
    });
    onClose();
    reset();
  };

  return (
    <PortalModal onClose={onClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
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

        <ReactQuill
          ref={contentRef}
          // react-quill은 react-hook-form register 안먹혀서 onChange로 함
          theme="snow"
          style={{
            borderRadius: theme.borderRadius.md,
            flexGrow: 1,
            height: "60vh",
            overflowY: "auto",
          }}
          formats={formats}
          modules={modules}
          placeholder="내용을 입력하세요."
          className={"text-editor"}
        />
        <EndSubmitButton
          onClick={handleSubmit(onSubmit)}
          disabled={createPostLoading || isSubmitDisabled}
          text="게시글 추가"
        />
      </Form>
    </PortalModal>
  );
};

export default CreatePostModal;
