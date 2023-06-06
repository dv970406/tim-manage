import { DateRangeInput } from "@fullcalendar/core";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateMeeting } from "../../../../client/meeting/CreateMeeting.client";
import { useCreateVacation } from "../../../../client/vacation/CreateVacation.client";
import { SCHEDULES } from "../../../../utils/constants/schedule.constant";
import { EndSubmitButton } from "../../../molecules/buttons/EndSubmitButton";
import PortalModal from "../../../molecules/shared/PortalModal";
import Form from "../../../molecules/shared/Form";
import SelectKindOfSchedule from "../../../organisms/content/home/SelectKindOfSchedule";
import MeetingInfo from "../../../organisms/content/home/MeetingInfo";

interface ICreateScheduleModal {
  selectedDate: DateRangeInput;
  onClose: () => void;
}
export interface IMeetingFormValue {
  title: string;
}

const CreateScheduleModal = ({
  selectedDate: { start, end },
  onClose,
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

    onClose();
  };

  useEffect(() => {
    if (createMeetingSuccess) {
      setAttendeesId([]);
      reset();
    }
  }, [createMeetingSuccess]);

  return (
    <PortalModal onClose={onClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <EndSubmitButton onClick={handleSubmit(onSubmit)} text="신청" />
      </Form>
    </PortalModal>
  );
};

export default CreateScheduleModal;
