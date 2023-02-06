import { faTag } from "@fortawesome/pro-solid-svg-icons";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateTeam } from "../../../../client/manager/CreateTeam.client";
import { SubmitButton } from "../../../atomics/buttons/buttons";
import { Form } from "../../../atomics/form/Form";
import { EndSubmitButton } from "../../../molecules/buttons/Buttons";
import FormTitle from "../../../molecules/form/FormTitle";
import { TextInput } from "../../../molecules/inputs/TextInput";

interface ICreateTeamFormValue {
  team: string;
}

interface ICreateTeamForm {}

const CreateTeamForm = ({}: ICreateTeamForm) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<ICreateTeamFormValue>({
    mode: "onChange",
  });

  const { team: watchTeam } = watch();
  const isSubmitDisabled = !!errors.team || !watchTeam;

  const { createTeamMutation, createTeamLoading } = useCreateTeam();
  const onSubmit: SubmitHandler<ICreateTeamFormValue> = ({ team }) => {
    if (createTeamLoading) return;

    createTeamMutation({
      team,
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle formTitle={`팀 생성`} />
        <TextInput
          icon={faTag}
          label="팀"
          placeholder="팀"
          register={register("team", {
            required: {
              value: true,
              message: "팀명 입력은 필수입니다.",
            },
            minLength: {
              value: 2,
              message: "팀명은 2글자 이상입니다.",
            },
            maxLength: {
              value: 8,
              message: "팀명은 8글자 이하입니다.",
            },
          })}
          errorMessage={errors?.team && errors?.team.message}
        />

        <EndSubmitButton
          onClick={handleSubmit(onSubmit)}
          disabled={createTeamLoading || isSubmitDisabled}
          text="생성"
        />
      </Form>
    </>
  );
};

export default CreateTeamForm;
