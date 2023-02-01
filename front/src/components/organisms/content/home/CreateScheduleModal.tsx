import { faRocket } from "@fortawesome/pro-solid-svg-icons";
import { DateRangeInput, DateSelectArg } from "@fullcalendar/core";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateMeeting } from "../../../../client/meeting/CreateMeeting.client";
import { useCreateVacation } from "../../../../client/vacation/CreateVacation.client";
import { theme } from "../../../../css/theme";
import { SCHEDULES } from "../../../../utils/modal/modal.constants";
import { ModalContext } from "../../../../utils/modal/modal.context";
import { endDateFormat } from "../../../../utils/time/time";
import { SubmitButton } from "../../../atomics/buttons/buttons";
import { GapBox } from "../../../molecules/boxes/Boxes";
import { TextInput } from "../../../molecules/inputs/Inputs";
import { Radio } from "../../../molecules/inputs/Radio";
import Modal from "../../../templates/Modal";
import SelectUsers from "./SelectUsers";

interface ICreateScheduleModal {
  selectedDate: DateRangeInput;
}
export interface IMeetingForm {
  title: string;
}

const CreateScheduleModal = ({
  selectedDate: { start, end },
}: ICreateScheduleModal) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IMeetingForm>({
    mode: "onChange",
  });
  const { createVacationMutation, createVacationLoading } = useCreateVacation();
  const { createMeetingMutation, createMeetingLoading } = useCreateMeeting();
  const { setCurrentModal } = useContext(ModalContext);

  const [kindOfSchedule, setKindOfSchedule] = useState(SCHEDULES.VACATION);

  const [attendeesIds, setAttendeesId] = useState<string[]>([]);

  const onSubmit: SubmitHandler<IMeetingForm> = ({ title }) => {
    if (kindOfSchedule === SCHEDULES.VACATION) {
      if (createVacationLoading || !start || !end) return;
      const isHalf = window.confirm("반차입니까?");

      createVacationMutation({
        startDate: start,
        endDate: isHalf ? end : endDateFormat(end as Date),
        isHalf,
      });
    } else if (kindOfSchedule === SCHEDULES.MEETING) {
      if (createMeetingLoading || !start || !end) return;
      createMeetingMutation({
        title,
        startTime: start,
        endTime: endDateFormat(end as Date),
        attendeesIds,
      });
    }
    setCurrentModal("");
  };

  return (
    <Modal>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <GapBox>
          <fieldset
            style={{
              display: "flex",
              justifyContent: "center",
              border: "none",
              gap: theme.spacing.xl,
            }}
          >
            <Radio
              value={SCHEDULES.VACATION}
              onClick={() => setKindOfSchedule(SCHEDULES.VACATION)}
            />
            <Radio
              value={SCHEDULES.MEETING}
              onClick={() => setKindOfSchedule(SCHEDULES.MEETING)}
            />
          </fieldset>

          {kindOfSchedule === "meeting" && (
            <>
              <div>
                <TextInput
                  label="제목"
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
                  type="text"
                  icon={faRocket}
                  placeholder="회의명을 입력하세요."
                  errorMessage={errors?.title && errors?.title.message}
                />
              </div>
              <div>
                <SelectUsers setAttendeesId={setAttendeesId} />
              </div>
            </>
          )}
        </GapBox>
        <SubmitButton onClick={handleSubmit(onSubmit)}>신청</SubmitButton>
      </form>
    </Modal>
  );
};

export default CreateScheduleModal;
