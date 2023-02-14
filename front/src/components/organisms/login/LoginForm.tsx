import { faLock, faUser } from "@fortawesome/pro-solid-svg-icons";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../client/user/Login.client";
import { theme } from "../../../css/theme";
import { SubmitButton } from "../../atomics/buttons/buttons";
import { Form } from "../../atomics/form/Form";
import { Section } from "../../atomics/sections/sections";
import { ErrorText, MainText } from "../../atomics/typographys/texts";
import { EndSubmitButton } from "../../molecules/buttons/Buttons";
import { TextInput } from "../../molecules/inputs/TextInput";
import MenuButton from "../sidebar/NavTabButton";

interface ILoginForm {
  email: string;
  password: string;
}
const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<ILoginForm>({
    mode: "onChange",
  });

  const { email: watchEmail, password: watchPassword } = watch();
  const { loginMutation, loginLoading } = useLogin();

  const onSubmit: SubmitHandler<ILoginForm> = ({ email, password }) => {
    if (loginLoading) return;
    loginMutation({
      email,
      password,
    });
  };

  const isSubmitDisabled =
    !!errors.email || !!errors.password || !watchEmail || !watchPassword;

  return (
    <Section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing.md,
        width: 500,
      }}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          icon={faUser}
          placeholder="email@timmanage.com"
          type="email"
          register={register("email", {
            required: {
              value: true,
              message: "이메일을 입력해주세요.",
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식이 아닙니다.",
            },
          })}
          errorMessage={errors?.email && errors?.email.message}
        />

        <TextInput
          icon={faLock}
          placeholder="password"
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

        <EndSubmitButton
          onClick={handleSubmit(onSubmit)}
          disabled={loginLoading || isSubmitDisabled}
          text="LOGIN"
        />
      </Form>
    </Section>
  );
};

export default LoginForm;
