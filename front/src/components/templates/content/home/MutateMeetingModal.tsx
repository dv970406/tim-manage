import { faRocket } from "@fortawesome/pro-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDeleteMeeting } from "../../../../client/meeting/DeleteMeeting.client";
import { useGetMeeting } from "../../../../client/meeting/GetMeeting.client";
import { useUpdateMeeting } from "../../../../client/meeting/UpdateMeeting.client";
import { theme } from "../../../../css/theme";
import { ModalContext } from "../../../../utils/contexts/modal.context";
import { SubmitButton } from "../../../atomics/buttons/buttons";
import { Form } from "../../../atomics/form/Form";
import { GapBox } from "../../../atomics/boxes/Boxes";
import { TextInput } from "../../../molecules/inputs/TextInput";
import Modal from "../../Modal";
import { IMeetingFormValue } from "./CreateScheduleModal";
import SelectUsers from "../../../organisms/content/home/SelectUsers";
import { EndSubmitButton } from "../../../molecules/buttons/Buttons";

interface IMutateMeetingModal {
  scheduleId: string;
}

const MutateMeetingModal = ({ scheduleId }: IMutateMeetingModal) => {
  const { setCurrentModal } = useContext(ModalContext);

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
    if (updateMeetingLoading) return;
    updateMeetingMutation({
      meetingId: scheduleId,
      title,
      attendeesIds,
    });
    setCurrentModal("");
  };

  const handleDeleteVacation = () => {
    if (deleteMeetingLoading) return;
    deleteMeetingMutation({ id: scheduleId });
    setCurrentModal("");
  };
  return (
    <Modal>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <GapBox>
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
              defaultValue={meeting?.title}
              type="text"
              icon={faRocket}
              placeholder="회의명을 입력하세요."
              errorMessage={errors?.title && errors?.title.message}
            />
          </div>
          <div>
            <SelectUsers
              prevAttendees={meeting?.attendees as any}
              setAttendeesId={setAttendeesId}
            />
          </div>
        </GapBox>
        <div
          style={{ display: "flex", gap: theme.spacing.sm, marginTop: "auto" }}
        >
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
        </div>
      </Form>
    </Modal>
  );
};

export default MutateMeetingModal;
