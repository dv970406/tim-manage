import {
  DateRangeInput,
  DateSelectArg,
  EventClickArg,
  EventDropArg,
  EventInput,
} from "@fullcalendar/core";
import { EventResizeDoneArg } from "@fullcalendar/interaction";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useUpdateMeeting } from "../../client/meeting/UpdateMeeting.client";
import { useDeleteVacation } from "../../client/vacation/DeleteVacation.client";
import { useUpdateVacation } from "../../client/vacation/UpdateVacation.client";
import { SCHEDULES } from "../constants/schedule.constant";
import { NINE_HOURS_TO_MILLISEC } from "../constants/time.constant";
import {
  endDateFormatForDb,
  getExpiredDate,
  meetingTimeFormatForDb,
} from "../shared/time";

interface IUseSchedules {
  schedules: EventInput[];
  setOpenCreateScheduleModal: Dispatch<SetStateAction<boolean>>;
  setOpenMutateMeetingModal: Dispatch<SetStateAction<boolean>>;
}
export const useSchedules = ({
  schedules,
  setOpenCreateScheduleModal,
  setOpenMutateMeetingModal,
}: IUseSchedules) => {
  const [events, setEvents] = useState(schedules);

  const [selectedDate, setSelectedDate] = useState<DateRangeInput>({
    start: "",
    end: "",
  });
  const [clickedScheduleId, setClickedScheduleId] = useState("");

  const handleDateSelect = ({ start, end }: DateSelectArg) => {
    // 과거의 날짜는 선택할 수 없게 함
    const expiredDate = getExpiredDate();

    if (start < expiredDate) return;

    const startDate = +new Date(start) + NINE_HOURS_TO_MILLISEC;
    const endDate = +new Date(end) - NINE_HOURS_TO_MILLISEC;
    setSelectedDate({ start: startDate, end: endDate });

    setOpenCreateScheduleModal(true);
  };

  const { deleteVacationMutation, deleteVacationLoading } = useDeleteVacation();
  const handleEventClick = (clickInfo: EventClickArg) => {
    const { type, isMine } = clickInfo.event.extendedProps;
    const { start } = clickInfo.event;
    const expiredDate = getExpiredDate();

    const scheduleId = clickInfo.event.id;
    if (!isMine || start! < expiredDate || !scheduleId) return;

    if (type === SCHEDULES.VACATION) {
      if (deleteVacationLoading) return;
      deleteVacationMutation({ id: scheduleId });
    } else if (type === SCHEDULES.MEETING) {
      setClickedScheduleId(scheduleId);

      setOpenMutateMeetingModal(true);
    }
  };

  const { updateVacationMutation, updateVacationLoading } = useUpdateVacation();
  const { updateMeetingMutation, updateMeetingLoading } = useUpdateMeeting();
  const handleEventResize = (eventResizeInfo: EventResizeDoneArg) => {
    const { type, isMine } = eventResizeInfo.event.extendedProps;
    const { start, end } = eventResizeInfo.event._instance?.range!;

    const now = new Date();
    const scheduleId = eventResizeInfo.event.id;
    if (!isMine || start < now || !scheduleId) return;

    if (type === SCHEDULES.VACATION) {
      if (updateVacationLoading || !start || !end) return;
      const isReally = window.confirm(
        "수정 시 모든 승인이 해제됩니다. 진행하시겠습니까?"
      );
      if (!isReally) {
        // 이 로직 진짜 중요함
        // 단순히 setEvents(schedules)로 하면 schedules값이 참조타입이므로 이전과 비교해도 값이 같다고 판단하여 리액트가 변화를 감지하지 못해서 취소 전 원래 상태로 안돌려보냄
        setEvents((prev) => {
          const copied = [...prev];
          const targetIndex = copied.findIndex(
            (data) => data.id === scheduleId
          );
          const target = copied.find((data) => data.id === scheduleId);
          copied.splice(targetIndex, 1);
          return [...copied, { ...target }];
        });
        return;
      }

      updateVacationMutation({
        vacationId: scheduleId,
        startDate: start,
        endDate: endDateFormatForDb(end),
        isHalf: false,
      });
    } else if (type === SCHEDULES.MEETING) {
      if (updateMeetingLoading || !isMine) return;
      const { startTime, endTime } = meetingTimeFormatForDb({ start, end });

      updateMeetingMutation({
        meetingId: scheduleId,
        startTime,
        endTime,
      });
    }
  };

  const handleEventUpdate = (eventDropInfo: EventDropArg) => {
    const { type, isMine, isHalf } = eventDropInfo.event.extendedProps;
    const scheduleId = eventDropInfo.event.id;
    const { start, end } = eventDropInfo.event._instance?.range!;

    if (!isMine || !scheduleId) return;

    if (start < new Date()) {
      const isOk = window.confirm(
        "과거시점으로 이동하게 되면 더이상 수정할 수 없습니다. 진행하시겠습니까?"
      );

      if (!isOk) {
        // 이 로직 진짜 중요함
        // 단순히 setEvents(schedules)로 하면 schedules값이 참조타입이므로 이전과 비교해도 값이 같다고 판단하여 리액트가 변화를 감지하지 못해서 취소 전 원래 상태로 안돌려보냄
        setEvents((prev) => {
          const copied = [...prev];
          const targetIndex = copied.findIndex(
            (data) => data.id === scheduleId
          );
          const target = copied.find((data) => data.id === scheduleId);
          copied.splice(targetIndex, 1);
          return [...copied, { ...target }];
        });
        return;
      }
    }

    if (type === SCHEDULES.VACATION) {
      if (updateVacationLoading || !start || !end) return;
      const isReally = window.confirm(
        "수정 시 모든 승인이 해제됩니다. 진행하시겠습니까?"
      );
      if (!isReally) {
        // 이 로직 진짜 중요함
        // 단순히 setEvents(schedules)로 하면 schedules값이 참조타입이므로 이전과 비교해도 값이 같다고 판단하여 리액트가 변화를 감지하지 못해서 취소 전 원래 상태로 안돌려보냄
        setEvents((prev) => {
          const copied = [...prev];
          const targetIndex = copied.findIndex(
            (data) => data.id === scheduleId
          );
          const target = copied.find((data) => data.id === scheduleId);
          copied.splice(targetIndex, 1);
          return [...copied, { ...target }];
        });
        return;
      }

      updateVacationMutation({
        vacationId: scheduleId,
        startDate: start,
        endDate: endDateFormatForDb(end),
        isHalf,
      });
    } else if (type === SCHEDULES.MEETING) {
      if (updateMeetingLoading) return;
      const { startTime, endTime } = meetingTimeFormatForDb({ start, end });

      updateMeetingMutation({
        meetingId: scheduleId,
        startTime,
        endTime,
      });
    }
  };

  useEffect(() => {
    setEvents(schedules);
  }, [schedules]);

  return {
    handleDateSelect,
    handleEventClick,
    handleEventResize,
    handleEventUpdate,
    events,
    selectedDate,
    clickedScheduleId,
  };
};
