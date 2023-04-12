import { faRocket } from "@fortawesome/pro-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDeleteMeeting } from "../../../../client/meeting/DeleteMeeting.client";
import { useGetMeeting } from "../../../../client/meeting/GetMeeting.client";
import { useUpdateMeeting } from "../../../../client/meeting/UpdateMeeting.client";
import { TextInput } from "../../../molecules/inputs/TextInput";
import { IMeetingFormValue } from "./CreateScheduleModal";
import SelectUsers from "../../../organisms/content/home/SelectUsers";
import { EndSubmitButton } from "../../../molecules/buttons/EndSubmitButton";
import { closeModal } from "../../../../utils/modal/controlModal";
import { MODAL_NAME } from "../../../../utils/constants/modal.constant";
import PortalModal from "../../../../utils/modal/PortalModal";
import Form from "../../../molecules/form/Form";
import { RowBox } from "../../../atomics/boxes/FlexBox";
import MeetingInfo from "../../../organisms/content/home/MeetingInfo";

interface IMutateMeetingModal {
  scheduleId: string;
}

const MutateMeetingModal = ({ scheduleId }: IMutateMeetingModal) => {
  const { meeting } = useGetMeeting(scheduleId);

  const prevAttendeesIds =
    meeting?.attendees.map((attendee) => attendee.id) || [];
  const [attendeesIds, setAttendeesId] = useState<string[]>(prevAttendeesIds);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    reset,
  } = useForm<IMeetingFormValue>({
    mode: "onChange",
  });

  useEffect(() => {
    if (!meeting?.title) return;
    setValue("title", meeting?.title);
  }, [meeting]);

  const { updateMeetingMutation, updateMeetingLoading } = useUpdateMeeting();
  const { deleteMeetingMutation, deleteMeetingLoading } = useDeleteMeeting();

  const onSubmit: SubmitHandler<IMeetingFormValue> = ({ title }) => {
    if (updateMeetingLoading || !scheduleId) return;
    updateMeetingMutation({
      meetingId: scheduleId,
      title,
      attendeesIds,
    });

    closeModal(MODAL_NAME.MUTATE_MEETING);
  };

  const handleDeleteVacation = () => {
    if (deleteMeetingLoading || !scheduleId) return;
    deleteMeetingMutation({ id: scheduleId });

    closeModal(MODAL_NAME.MUTATE_MEETING);
  };

  return (
    <PortalModal modalName={MODAL_NAME.MUTATE_MEETING}>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          defaultValue={meeting?.title}
          errorMessage={errors?.title && errors?.title.message}
          prevAttendees={meeting?.attendees as any}
          setAttendeesId={setAttendeesId}
        />
      </Form>
      <RowBox style={{ flex: 1 }}>
        <EndSubmitButton
          onClick={handleSubmit(onSubmit)}
          disabled={updateMeetingLoading}
          text="수정"
        />

        <EndSubmitButton
          onClick={handleDeleteVacation}
          disabled={deleteMeetingLoading}
          text="삭제"
        />
      </RowBox>
    </PortalModal>
  );
};

export default MutateMeetingModal;
