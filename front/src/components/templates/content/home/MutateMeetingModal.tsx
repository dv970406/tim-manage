import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDeleteMeeting } from "../../../../client/meeting/DeleteMeeting.client";
import { useGetMeeting } from "../../../../client/meeting/GetMeeting.client";
import { useUpdateMeeting } from "../../../../client/meeting/UpdateMeeting.client";
import { IMeetingFormValue } from "./CreateScheduleModal";
import { EndSubmitButton } from "../../../molecules/buttons/EndSubmitButton";
import Form from "../../../molecules/shared/Form";
import { RowBox } from "../../../atomics/boxes/FlexBox";
import MeetingInfo from "../../../organisms/content/home/MeetingInfo";
import PortalModal from "../../../../utils/modal/PortalModal";

interface IMutateMeetingModal {
  scheduleId: string;
  onClose: () => void;
}

const MutateMeetingModal = ({ scheduleId, onClose }: IMutateMeetingModal) => {
  const { meeting } = useGetMeeting(scheduleId);

  const prevAttendeesIds =
    meeting?.attendees.map((attendee) => attendee.id) || [];
  const [attendeesIds, setAttendeesId] = useState<string[]>(prevAttendeesIds);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
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

    onClose();
  };

  const handleDeleteVacation = () => {
    if (deleteMeetingLoading || !scheduleId) return;
    deleteMeetingMutation({ id: scheduleId });

    onClose();
  };

  return (
    <PortalModal onClose={onClose}>
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
        <RowBox style={{ flexGrow: 1 }}>
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
      </Form>
    </PortalModal>
  );
};

export default MutateMeetingModal;
