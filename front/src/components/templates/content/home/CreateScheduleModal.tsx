import { faRocket } from "@fortawesome/pro-solid-svg-icons";
import { DateRangeInput, DateSelectArg } from "@fullcalendar/core";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateMeeting } from "../../../../client/meeting/CreateMeeting.client";
import { useCreateVacation } from "../../../../client/vacation/CreateVacation.client";
import { theme } from "../../../../css/theme";
import { SCHEDULES } from "../../../../utils/constants/schedule.constant";
import { TextInput } from "../../../molecules/inputs/TextInput";
import { Radio } from "../../../molecules/inputs/Radio";
import SelectUsers from "../../../organisms/content/home/SelectUsers";
import { EndSubmitButton } from "../../../molecules/buttons/EndSubmitButton";
import { closeModal } from "../../../../utils/modal/controlModal";
import { MODAL_NAME } from "../../../../utils/constants/modal.constant";
import PortalModal from "../../../../utils/modal/PortalModal";
import { ColumnBox } from "../../../atomics/boxes/FlexBox";
import Form from "../../../molecules/form/Form";
import SelectKindOfSchedule from "../../../organisms/content/home/SelectKindOfSchedule";
import MeetingInfo from "../../../organisms/content/home/MeetingInfo";

interface ICreateScheduleModal {
  selectedDate: DateRangeInput;
}
export interface IMeetingFormValue {
  title: string;
}

const CreateScheduleModal = ({
  selectedDate: { start, end },
}: ICreateScheduleModal) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IMeetingFormValue>({
    mode: "onChange",
  });
  const { createVacationMutation, createVacationLoading } = useCreateVacation();
  const { createMeetingMutation, createMeetingLoading, createMeetingSuccess } =
    useCreateMeeting();

  const [kindOfSchedule, setKindOfSchedule] = useState(SCHEDULES.VACATION);

  const [attendeesIds, setAttendeesId] = useState<string[]>([]);

  const onSubmit: SubmitHandler<IMeetingFormValue> = ({ title }) => {
    if (!start || !end) return;

    if (kindOfSchedule === SCHEDULES.VACATION) {
      if (createVacationLoading) return;
      const isHalf = window.confirm("반차입니까?");

      createVacationMutation({
        startDate: start,
        endDate: end,
        isHalf,
      });
    } else if (kindOfSchedule === SCHEDULES.MEETING) {
      if (createMeetingLoading) return;
      createMeetingMutation({
        title,
        startTime: start,
        endTime: end,
        attendeesIds,
      });
    }

    closeModal(MODAL_NAME.CREATE_SCHEDULE);
  };

  useEffect(() => {
    if (createMeetingSuccess) {
      setAttendeesId([]);
      reset();
    }
  }, [createMeetingSuccess]);

  return (
    <PortalModal modalName={MODAL_NAME.CREATE_SCHEDULE}>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <ColumnBox>
          <SelectKindOfSchedule setKindOfSchedule={setKindOfSchedule} />

          {kindOfSchedule === SCHEDULES.MEETING && (
            <MeetingInfo
              register={register("title", {
                required: {
                  value: true,
                  message: "제목은 필수입니다.",
                },
                minLength: {
                  value: 2,
                  message: "제목은 2글자 이상입니다.",
                },
                maxLength: {
                  value: 15,
                  message: "제목은 15글자 이하입니다.",
                },
              })}
              errorMessage={errors?.title && errors?.title.message}
              setAttendeesId={setAttendeesId}
            />
          )}
        </ColumnBox>
      </Form>

      <EndSubmitButton onClick={handleSubmit(onSubmit)} text="신청" />
    </PortalModal>
  );
};

export default CreateScheduleModal;
