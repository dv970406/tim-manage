import { faLock, faUser } from "@fortawesome/pro-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLogin } from "../../../client/user/Login.client";
import { theme } from "../../../css/theme";
import { CenterBox, ColumnBox } from "../../atomics/boxes/FlexBox";
import { Section } from "../../atomics/boxes/Sections";
import { EndSubmitButton } from "../../molecules/buttons/EndSubmitButton";
import Form from "../../molecules/shared/Form";
import { TextInput } from "../../molecules/inputs/TextInput";

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
        width: 500,
      }}
    >
      <CenterBox
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing.md,
        }}
      >
        <ColumnBox style={{ width: "100%" }}>
          <ColumnBox style={{ alignItems: "center" }}>
            <img src="/logo.png" alt="TIM_SOLUTION" width={170} height={30} />
          </ColumnBox>
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
        </ColumnBox>
      </CenterBox>
    </Section>
  );
};

export default LoginForm;
