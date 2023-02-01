import { faLock, faUser } from "@fortawesome/pro-solid-svg-icons";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../client/user/Login.client";
import { theme } from "../../../css/theme";
import { SubmitButton } from "../../atomics/buttons/buttons";
import { Form } from "../../atomics/form/Form";
import { Section } from "../../atomics/sections/sections";
import { ErrorText, Text } from "../../atomics/typographys/texts";
import { TextInput } from "../../molecules/inputs/Inputs";
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

  const isSubmitAvailable =
    !!errors.email || !!errors.password || !watchEmail || !watchPassword;
  return (
    <Section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.bgColors.gradient,
        width: 500,
        height: 500,
        borderRadius: theme.borderRadius.md,
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
          })}
          errorMessage={errors?.password && errors?.password.message}
        />

        <div
          style={{
            marginBlock: theme.spacing.lg,
          }}
        >
          <SubmitButton
            onClick={handleSubmit(onSubmit)}
            disabled={loginLoading || isSubmitAvailable}
          >
            LOGIN
          </SubmitButton>
        </div>
      </Form>
    </Section>
  );
};

export default LoginForm;
