import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin, {
  EventResizeDoneArg,
} from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";
import {
  DateRangeInput,
  DateSelectArg,
  EventClickArg,
  EventDropArg,
  EventInput,
} from "@fullcalendar/core";
import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import {
  filteringSchedulesButtons,
  renderEventContent,
} from "./VacationCalendar.logic";
import { useDeleteVacation } from "../../../../client/vacation/DeleteVacation.client";
import { useUpdateVacation } from "../../../../client/vacation/UpdateVacation.client";
import { useUpdateMeeting } from "../../../../client/meeting/UpdateMeeting.client";
import {
  MODAL,
  SCHEDULES,
} from "../../../../utils/constants/schedule.constant";
import { ModalContext } from "../../../../utils/contexts/modal.context";
import "./FullCalendarStyles.css";
import {
  ampmFormat,
  endDateFormatForDb,
  meetingTimeFormatForDb,
} from "../../../../utils/time/time";
import { NINE_HOURS_TO_MILLISEC } from "../../../../utils/constants/time.constant";

// 모달 안켜지면 관련 파일 다운로드 안하도록 Lazy로딩
const CreateScheduleModal = React.lazy(() => import("./CreateScheduleModal"));
const MutateMeetingModal = React.lazy(() => import("./MutateMeetingModal"));

interface IVacationCalendar {
  schedules: EventInput[];
  setFilteringSchedules: Dispatch<SetStateAction<string>>;
}
export default function VacationCalendar({
  schedules,
  setFilteringSchedules,
}: IVacationCalendar) {
  // const [modalState, setModalState] = useRecoilState(modalStateRecoil);
  const { currentModal, setCurrentModal } = useContext(ModalContext);

  const [selectedDate, setSelectedDate] = useState<DateRangeInput>({
    start: "",
    end: "",
  });
  const [clickedScheduleId, setClickedScheduleId] = useState("");

  const handleDateSelect = ({ start, end }: DateSelectArg) => {
    // 과거의 날짜는 선택할 수 없게 함
    const now = new Date();
    if (start < now) return;

    const startDate = +new Date(start) + NINE_HOURS_TO_MILLISEC;
    const endDate = +new Date(end) - NINE_HOURS_TO_MILLISEC;
    setSelectedDate({ start: startDate, end: endDate });
    setCurrentModal(MODAL.CREATE_SCHEDULE);
  };

  const { deleteVacationMutation, deleteVacationLoading } = useDeleteVacation();
  const handleEventClick = (clickInfo: EventClickArg) => {
    const { type, isMine } = clickInfo.event.extendedProps;
    const { start } = clickInfo.event;
    const now = new Date();
    if (!isMine || start! < now) return;

    const scheduleId = clickInfo.event.id;
    if (type === SCHEDULES.VACATION) {
      if (deleteVacationLoading) return;
      deleteVacationMutation({ id: scheduleId });
    } else if (type === SCHEDULES.MEETING) {
      setClickedScheduleId(scheduleId);
      setCurrentModal(MODAL.MUTATE_MEETING);
    }
  };

  const { updateVacationMutation, updateVacationLoading } = useUpdateVacation();
  const { updateMeetingMutation, updateMeetingLoading } = useUpdateMeeting();
  const handleEventResize = (eventResizeInfo: EventResizeDoneArg) => {
    const { type, isMine } = eventResizeInfo.event.extendedProps;
    const { start, end } = eventResizeInfo.event._instance?.range!;

    const now = new Date();
    if (!isMine || start < now) return;
    const scheduleId = eventResizeInfo.event.id;

    if (type === SCHEDULES.VACATION) {
      if (updateVacationLoading || !start || !end) return;

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
    if (!isMine) return;

    if (start < new Date()) {
      const isOk = window.confirm(
        "과거시점으로 이동하게 되면 더이상 수정할 수 없습니다. 진행하시겠습니까?"
      );

      if (!isOk) return;
    }
    if (type === SCHEDULES.VACATION) {
      if (updateVacationLoading || !start || !end) return;

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

  return (
    <>
      <FullCalendar
        height="100%"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today allSchedules onlyVacation onlyMeeting",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        buttonText={{
          today: "오늘",
          month: "달",
          week: "주",
          day: "일",
        }}
        customButtons={filteringSchedulesButtons({ setFilteringSchedules })}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        locale="ko"
        slotMinTime="09:00"
        slotMaxTime="18:00"
        slotLabelContent={({ time }) => ampmFormat(time.milliseconds)}
        weekends={false}
        allDaySlot={false}
        slotDuration={"00:20"}
        // select, dateClick 역할은 비슷한데 select는 start,end를 제공해주고 dateClick은 클릭한 그 date만 제공해줌
        select={handleDateSelect}
        events={schedules}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        eventResize={handleEventResize}
        eventDrop={handleEventUpdate}
        eventDisplay="block"
        dayCellContent={({ date }) => date.getDate()}
      />
      {currentModal === MODAL.CREATE_SCHEDULE && (
        <CreateScheduleModal selectedDate={selectedDate} />
      )}
      {currentModal === MODAL.MUTATE_MEETING && (
        <MutateMeetingModal scheduleId={clickedScheduleId} />
      )}
    </>
  );
}
