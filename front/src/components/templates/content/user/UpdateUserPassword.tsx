import { faPassport } from "@fortawesome/pro-solid-svg-icons";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUpdateUserPassword } from "../../../../client/user/UpdateUserPassword.client";

import { CenterBox, ColumnBox, RowBox } from "../../../atomics/boxes/Boxes";
import { Form } from "../../../atomics/form/Form";
import { EndSubmitButton } from "../../../molecules/buttons/EndSubmitButton";
import { TextInput } from "../../../molecules/inputs/TextInput";

interface IUpdateUserPasswordFormValue {
  password: string;
  checkPassword: string;
}
const UpdateUserPassword = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<IUpdateUserPasswordFormValue>({ mode: "onChange" });

  const { password: watchPassword, checkPassword: watchCheckPassword } =
    watch();
  const isSubmitDisabled =
    !!errors.password ||
    !!errors.checkPassword ||
    !watchPassword ||
    !watchCheckPassword;

  const { updateUserMutation, updateUserLoading } = useUpdateUserPassword();
  const onSubmit: SubmitHandler<IUpdateUserPasswordFormValue> = ({
    password,
    checkPassword,
  }) => {
    if (updateUserLoading) return;

    if (password !== checkPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    updateUserMutation({
      password,
    });
  };
  return (
    <CenterBox>
      <RowBox
        style={{
          width: 300,
        }}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            icon={faPassport}
            placeholder="비밀번호"
            type="password"
            register={register("password", {
              required: {
                value: true,
                message: "비밀번호를 입력해주세요.",
              },
              minLength: {
                value: 4,
                message: "비밀번호는 4글자 이상입니다.",
              },
              maxLength: {
                value: 16,
                message: "비밀번호는 16글자 이하입니다.",
              },
            })}
            errorMessage={errors?.password && errors?.password.message}
          />
          <TextInput
            icon={faPassport}
            placeholder="비밀번호 확인"
            type="password"
            register={register("checkPassword", {
              required: {
                value: true,
                message: "확인 비밀번호를 입력해주세요.",
              },
              minLength: {
                value: 4,
                message: "비밀번호는 4글자 이상입니다.",
              },
              maxLength: {
                value: 16,
                message: "비밀번호는 16글자 이하입니다.",
              },
            })}
            errorMessage={
              errors?.checkPassword && errors?.checkPassword.message
            }
          />

          <EndSubmitButton
            onClick={handleSubmit(onSubmit)}
            disabled={updateUserLoading || isSubmitDisabled}
            text="변경"
          />
        </Form>
      </RowBox>
    </CenterBox>
  );
};

export default UpdateUserPassword;
