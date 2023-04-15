import { faTag } from "@fortawesome/pro-solid-svg-icons";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateTeam } from "../../../../client/manager/CreateTeam.client";
import { ColumnBox } from "../../../atomics/boxes/FlexBox";
import { EndSubmitButton } from "../../../molecules/buttons/EndSubmitButton";
import Form from "../../../molecules/shared/Form";
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
    reset,
  } = useForm<ICreateTeamFormValue>({
    mode: "onChange",
  });

  const { team: watchTeam } = watch();
  const isSubmitDisabled = !!errors.team || !watchTeam;

  const { createTeamMutation, createTeamLoading, createTeamSuccess } =
    useCreateTeam();
  const onSubmit: SubmitHandler<ICreateTeamFormValue> = ({ team }) => {
    if (createTeamLoading) return;

    createTeamMutation({
      team,
    });
  };

  useEffect(() => {
    if (createTeamSuccess) reset();
  }, [createTeamSuccess]);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} formTitle={`팀 생성`}>
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
