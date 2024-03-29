import { TextInput } from "../../../molecules/inputs/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  faCalendar,
  faMailbox,
  faTag,
  faUsers,
  faWaffle,
} from "@fortawesome/pro-solid-svg-icons";
import { useCreateUser } from "../../../../client/manager/CreateUser.client";
import { useGetPositions } from "../../../../client/position/GetPositions.client";
import { useGetTeams } from "../../../../client/team/GetTeams.client";
import Select from "../../../molecules/inputs/Select";
import { EndSubmitButton } from "../../../molecules/buttons/EndSubmitButton";
import { ColumnBox } from "../../../atomics/boxes/FlexBox";
import Form from "../../../molecules/shared/Form";
import PortalModal from "../../../molecules/shared/PortalModal";

interface ICreateUserFormValue {
  name: string;
  email: string;
  joinDate: Date;
  position: string;
  team: string;
}
interface ICreateUserModal {
  onClose: () => void;
}
const CreateUserModal = ({ onClose }: ICreateUserModal) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<ICreateUserFormValue>({ mode: "onChange" });

  const {
    name: watchName,
    email: watchEmail,
    joinDate: watchJoinDate,
    position: watchPosition,
    team: watchTeam,
  } = watch();
  const { positionsExceptCeo: positions } = useGetPositions();
  const { teams } = useGetTeams();
  const { createUserMutation, createUserLoading } = useCreateUser();

  const onSubmit: SubmitHandler<ICreateUserFormValue> = ({
    position,
    team,
    ...createUserInfo
  }) => {
    if (createUserLoading) return;
    const positionId = positions?.find(
      (existPosition) => existPosition.position === position
    )?.id;
    const teamId = teams?.find((existTeam) => existTeam.team === team)?.id;

    if (!positionId || !teamId) return;
    createUserMutation({
      positionId,
      teamId,
      ...createUserInfo,
    });

    onClose();
  };

  const isSubmitDisabled =
    !!errors.email ||
    !!errors.name ||
    !watchEmail ||
    !watchName ||
    !watchJoinDate ||
    !watchPosition ||
    !watchTeam;

  return (
    <PortalModal onClose={onClose}>
      <Form onSubmit={handleSubmit(onSubmit)} formTitle="새 직원">
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
        <EndSubmitButton
          onClick={handleSubmit(onSubmit)}
          disabled={createUserLoading || isSubmitDisabled}
          text={"직원 추가"}
        />
      </Form>
    </PortalModal>
  );
};

export default CreateUserModal;
