import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { theme } from "../../../../css/theme";
import { TextInput } from "../../../molecules/inputs/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  faCalendar,
  faMailbox,
  faTag,
  faUsers,
  faWaffle,
} from "@fortawesome/pro-solid-svg-icons";
import { useGetPositions } from "../../../../client/position/GetPositions.client";
import { useGetTeams } from "../../../../client/team/GetTeams.client";
import Select from "../../../molecules/inputs/Select";
import { useGetManagerUser } from "../../../../client/manager/GetManagerUser.client";
import { useDeleteUser } from "../../../../client/manager/DeleteUser.client";
import { useUpdateUser } from "../../../../client/manager/UpdateUser.client";
import { Checkbox } from "../../../molecules/inputs/Checkbox";
import { POSITION } from "../../../../utils/constants/user.constant";
import { EndSubmitButton } from "../../../molecules/buttons/EndSubmitButton";
import { ColumnBox, RowBox } from "../../../atomics/boxes/FlexBox";
import Form from "../../../molecules/shared/Form";
import { SubmitButton } from "../../../molecules/buttons/SubmitButton";

interface IMutateUserFormValue {
  name: string;
  email: string;
  joinDate: string;
  position: string;
  team: string;
  availableVacation: string;
}
interface IMutateUserForm {
  clickedUserId: string;
  setClickedUserId: Dispatch<SetStateAction<string>>;
  myPosition?: string;
  myId?: string;
}
const MutateUserForm = ({
  clickedUserId,
  setClickedUserId,
  myPosition,
  myId,
}: IMutateUserForm) => {
  const { user } = useGetManagerUser(clickedUserId);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    reset,
  } = useForm<IMutateUserFormValue>({
    mode: "onChange",
  });

  useEffect(() => {
    if (user) {
      setValue("name", user?.name);
      setValue("email", user?.email);
      setValue("position", user?.position.position);
      setValue("team", user?.team.team);
      setValue("joinDate", user?.joinDate.substring(0, 10));
      setValue("availableVacation", user?.availableVacation);
    } else {
      setClickedUserId("");
      reset();
    }
  }, [user]);

  const {
    name: watchName,
    email: watchEmail,
    joinDate: watchJoinDate,
    position: watchPosition,
    team: watchTeam,
  } = watch();

  const { positionsExceptCeo: positions } = useGetPositions();
  const { teams } = useGetTeams();
  const { updateUserMutation, updateUserLoading } = useUpdateUser();

  const [isManager, setIsManager] = useState<boolean>();

  const isSubmitDisabled =
    !!errors.email ||
    !!errors.name ||
    !watchEmail ||
    !watchName ||
    !watchJoinDate ||
    !watchPosition ||
    !watchTeam;

  useEffect(() => {
    setIsManager(user?.isManager);
  }, [user]);

  const onSubmit: SubmitHandler<IMutateUserFormValue> = ({
    position,
    team,
    ...updatedUserInfo
  }) => {
    if (updateUserLoading) return;
    const positionId = positions?.find(
      (existPosition) => existPosition.position === position
    )?.id;
    const teamId = teams?.find((existTeam) => existTeam?.team === team)?.id;

    if (!positionId || !teamId) return;

    updateUserMutation({
      userId: clickedUserId,
      positionId,
      teamId,
      ...(myPosition === POSITION["대표"] && { isManager }),
      ...updatedUserInfo,
    });
  };
  const { deleteUserMutation, deleteUserLoading } = useDeleteUser();

  const handleDeleteUser = () => {
    if (deleteUserLoading) return;
    deleteUserMutation({ id: clickedUserId });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        ...(!clickedUserId && {
          opacity: theme.disabled.opacity,
          pointerEvents: "none",
        }),
      }}
      formTitle="유저 수정"
    >
      <ColumnBox>
        <TextInput
          icon={faTag}
          label="이름"
          placeholder="이름"
          register={register("name", {
            required: {
              value: true,
              message: "이름은 필수입니다.",
            },
            minLength: {
              value: 2,
              message: "이름은 2글자 이상입니다.",
            },
            maxLength: {
              value: 6,
              message: "이름은 6글자 이하입니다.",
            },
          })}
          errorMessage={errors?.name && errors?.name.message}
        />
        <TextInput
          icon={faMailbox}
          label="이메일"
          type="email"
          placeholder="email@timmanage.com"
          register={register("email", {
            required: {
              value: true,
              message: "이메일은 필수입니다.",
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식이 아닙니다.",
            },
          })}
          errorMessage={errors?.email && errors?.email.message}
        />

        <Select
          icon={faWaffle}
          errorMessage={errors.position && errors.position.message}
          label="직책"
          placeholder="직책"
          listName="positions"
          list={positions?.map((position) => (
            <option key={position?.id} value={position?.position} />
          ))}
          register={register("position", {
            required: {
              value: true,
              message: "직책 선택은 필수입니다.",
            },
          })}
        />

        <Select
          icon={faUsers}
          errorMessage={errors.team && errors.team.message}
          label="팀"
          placeholder="팀"
          listName="teams"
          list={teams?.map((team) => (
            <option key={team?.id} value={team?.team} />
          ))}
          register={register("team", {
            required: {
              value: true,
              message: "팀 선택은 필수입니다.",
            },
          })}
        />

        <TextInput
          icon={faCalendar}
          label="입사일"
          type="date"
          placeholder="YYYY-MM-DD"
          register={register("joinDate", {
            required: { value: true, message: "입사일을 선택해주세요." },
          })}
          errorMessage={errors.joinDate && errors.joinDate.message}
        />

        <TextInput
          icon={faCalendar}
          label="잔여 연차"
          type="number"
          step={0.5}
          placeholder="잔여연차"
          register={register("availableVacation", {
            required: {
              value: true,
              message: "연차 지정은 필수입니다.",
            },
            min: {
              value: 0,
              message: "연차는 0일 이상입니다.",
            },
            max: {
              value: 30,
              message: "연차는 30일 이하입니다.",
            },
          })}
          errorMessage={
            errors?.availableVacation && errors?.availableVacation.message
          }
        />

        {myPosition === POSITION["대표"] && (
          <Checkbox
            id="isManager"
            defaultChecked={isManager}
            text="관리자 여부"
            onClick={() => setIsManager((prev) => !prev)}
          />
        )}
      </ColumnBox>
      <RowBox style={{ flexGrow: 1 }}>
        <SubmitButton
          onClick={handleSubmit(onSubmit)}
          disabled={updateUserLoading || isSubmitDisabled}
          text="수정"
        />

        <SubmitButton
          onClick={handleDeleteUser}
          disabled={deleteUserLoading || !clickedUserId || user?.id === myId}
          text="삭제"
        />
      </RowBox>
    </Form>
  );
};

export default MutateUserForm;
