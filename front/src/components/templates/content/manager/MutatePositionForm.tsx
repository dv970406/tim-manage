import { faTag } from "@fortawesome/pro-solid-svg-icons";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGetManagerPosition } from "../../../../client/manager/GetManagerPosition.client";
import { useDeletePosition } from "../../../../client/manager/DeletePosition.client";
import { useUpdatePosition } from "../../../../client/manager/UpdatePosition.client";
import { theme } from "../../../../css/theme";
import { TextInput } from "../../../molecules/inputs/TextInput";
import { EndSubmitButton } from "../../../molecules/buttons/EndSubmitButton";
import { ColumnBox, RowBox } from "../../../atomics/boxes/FlexBox";
import Form from "../../../molecules/shared/Form";

interface IMutatePositionFormValue {
  position: string;
}

interface IMutatePositionForm {
  clickedPositionId: string;
  setClickedPositionId: Dispatch<SetStateAction<string>>;
}
const MutatePositionForm = ({
  clickedPositionId,
  setClickedPositionId,
}: IMutatePositionForm) => {
  const { position } = useGetManagerPosition(clickedPositionId);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    reset,
  } = useForm<IMutatePositionFormValue>({
    mode: "onChange",
  });

  useEffect(() => {
    if (position) {
      setValue("position", position?.position);
    } else {
      setClickedPositionId("");
      reset();
    }
  }, [position]);

  const { position: watchPosition } = watch();
  const isSubmitDisabled = !!errors.position || !watchPosition;

  const { updatePositionMutation, updatePositionLoading } = useUpdatePosition();
  const onSubmit: SubmitHandler<IMutatePositionFormValue> = ({ position }) => {
    if (updatePositionLoading) return;

    updatePositionMutation({
      id: clickedPositionId,
      position,
    });
  };
  const { deletePositionMutation, deletePositionLoading } = useDeletePosition();

  const handleDeletePosition = () => {
    if (deletePositionLoading) return;
    deletePositionMutation({ id: clickedPositionId });
  };
  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          ...(!clickedPositionId && {
            opacity: theme.disabled.opacity,
            pointerEvents: "none",
          }),
        }}
        formTitle={`${position?.position || "직책"} 수정`}
      >
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
        <RowBox>
          <EndSubmitButton
            onClick={handleSubmit(onSubmit)}
            disabled={updatePositionLoading || isSubmitDisabled}
            text="수정"
          />

          <EndSubmitButton
            onClick={handleDeletePosition}
            disabled={deletePositionLoading || !clickedPositionId}
            text="삭제"
          />
        </RowBox>
      </Form>
    </>
  );
};

export default MutatePositionForm;
