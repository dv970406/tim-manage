import { faPlus, faTag, faWaffle } from "@fortawesome/pro-solid-svg-icons";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGetManagerTeam } from "../../../../client/manager/GetManagerTeam.client";
import { useDeleteTeam } from "../../../../client/manager/DeleteTeam.client";
import { theme } from "../../../../css/theme";
import { SubmitButton } from "../../../atomics/buttons/buttons";
import { Form } from "../../../atomics/form/Form";
import {
  ButtonIcon,
  EndSubmitButton,
} from "../../../molecules/buttons/Buttons";
import FormTitle from "../../../molecules/form/FormTitle";
import Select from "../../../molecules/inputs/Select";
import { TextInput } from "../../../molecules/inputs/TextInput";
import { useUpdateTeam } from "../../../../client/manager/UpdateTeam.client";

interface IMutateTeamFormValue {
  team: string;
  leader: string;
}

interface IMutateTeamForm {
  clickedTeamId: string;
  setClickedTeamId: Dispatch<SetStateAction<string>>;
}
const MutateTeamForm = ({
  clickedTeamId,
  setClickedTeamId,
}: IMutateTeamForm) => {
  const { team } = useGetManagerTeam(clickedTeamId);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    reset,
  } = useForm<IMutateTeamFormValue>({
    mode: "onChange",
  });

  useEffect(() => {
    if (team) {
      setValue("team", team?.team);
      if (!team?.leader?.name) return setValue("leader", "");
      setValue("leader", team?.leader?.name);
    } else {
      setClickedTeamId("");
      reset();
    }
  }, [team]);

  const { team: watchTeam, leader: watchLeader } = watch();
  const isSubmitDisabled =
    !!errors.team || !!errors.leader || !watchTeam || !watchLeader;

  const { updateTeamMutation, updateTeamLoading } = useUpdateTeam();
  const onSubmit: SubmitHandler<IMutateTeamFormValue> = ({
    team: teamName,
    leader: leaderName,
  }) => {
    if (updateTeamLoading) return;

    // 동명이인 문제 있음..
    const leaderId = team?.users.find((user) => user.name === leaderName)?.id;

    updateTeamMutation({
      teamId: clickedTeamId,
      ...(teamName && { team: teamName }),
      ...(leaderId && { leaderId }),
    });
  };
  const { deleteTeamMutation, deleteTeamLoading } = useDeleteTeam();
  const handleDeleteTeam = () => {
    if (deleteTeamLoading) return;
    deleteTeamMutation({ id: clickedTeamId });
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          ...(!clickedTeamId && {
            opacity: theme.disabled.opacity,
            pointerEvents: "none",
          }),
        }}
      >
        <FormTitle formTitle={`${team?.team || "팀"} 수정`} />
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

        <Select
          icon={faWaffle}
          errorMessage={errors.leader && errors.leader.message}
          label="리더"
          placeholder="리더"
          listName="leader"
          list={team?.users?.map((user) => (
            <option key={user?.id} value={user?.name} />
          ))}
          register={register("leader", {
            required: {
              value: true,
              message: "리더 선임은 필수입니다.",
            },
          })}
        />

        <div
          style={{ display: "flex", gap: theme.spacing.sm, marginTop: "auto" }}
        >
          <EndSubmitButton
            onClick={handleSubmit(onSubmit)}
            disabled={updateTeamLoading || isSubmitDisabled}
            text="수정"
          />

          <EndSubmitButton
            onClick={handleDeleteTeam}
            disabled={deleteTeamLoading || !clickedTeamId}
            text="삭제"
          />
        </div>
      </Form>
    </>
  );
};

export default MutateTeamForm;
