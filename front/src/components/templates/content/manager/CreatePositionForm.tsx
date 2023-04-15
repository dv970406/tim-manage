import { faTag } from "@fortawesome/pro-solid-svg-icons";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreatePosition } from "../../../../client/manager/CreatePosition.client";
import { EndSubmitButton } from "../../../molecules/buttons/EndSubmitButton";
import Form from "../../../molecules/shared/Form";
import { TextInput } from "../../../molecules/inputs/TextInput";

interface ICreatePositionFormValue {
  position: string;
}

interface ICreatePositionForm {}

const CreatePositionForm = ({}: ICreatePositionForm) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm<ICreatePositionFormValue>({
    mode: "onChange",
  });

  const { position: watchPosition } = watch();
  const isSubmitDisabled = !!errors.position || !watchPosition;

  const {
    createPositionMutation,
    createPositionLoading,
    createPositionSuccess,
  } = useCreatePosition();
  const onSubmit: SubmitHandler<ICreatePositionFormValue> = ({ position }) => {
    if (createPositionLoading) return;

    createPositionMutation({
      position,
    });
  };

  useEffect(() => {
    if (createPositionSuccess) reset();
  }, [createPositionSuccess]);
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} formTitle={`직책 생성`}>
        <TextInput
          icon={faTag}
          label="직책"
          placeholder="직책"
          register={register("position", {
            required: {
              value: true,
              message: "직책명 입력은 필수입니다.",
            },
            minLength: {
              value: 2,
              message: "직책명은 2글자 이상입니다.",
            },
            maxLength: {
              value: 8,
              message: "직책명은 8글자 이하입니다.",
            },
          })}
          errorMessage={errors?.position && errors?.position.message}
        />

        <EndSubmitButton
          onClick={handleSubmit(onSubmit)}
          disabled={createPositionLoading || isSubmitDisabled}
          text="생성"
        />
      </Form>
    </>
  );
};

export default CreatePositionForm;
