import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Section } from "../../../atomics/sections/sections";
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
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
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
import { ampmFormat, endDateFormat } from "../../../../utils/time/time";
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

    const startTime = +new Date(start) - NINE_HOURS_TO_MILLISEC;
    const endTime = +new Date(end) - NINE_HOURS_TO_MILLISEC;

    if (type === SCHEDULES.VACATION) {
      if (updateVacationLoading || !start || !end) return;

      updateVacationMutation({
        vacationId: scheduleId,
        startDate: start,
        endDate: endDateFormat(end),
        isHalf: false,
      });
    } else if (type === SCHEDULES.MEETING) {
      if (updateMeetingLoading || !isMine) return;

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

    const startTime = +new Date(start) - NINE_HOURS_TO_MILLISEC;
    const endTime = +new Date(end) - NINE_HOURS_TO_MILLISEC;

    if (type === SCHEDULES.VACATION) {
      if (updateVacationLoading || !start || !end) return;

      updateVacationMutation({
        vacationId: scheduleId,
        startDate: start,
        endDate: endDateFormat(end),
        isHalf,
      });
    } else if (type === SCHEDULES.MEETING) {
      if (updateMeetingLoading) return;

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
        height="85vh"
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
        // fetch해온 데이터쓸거면 initialEvents말고 events prop쓰란 말인듯?
        events={schedules}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        eventResize={handleEventResize}
        eventDrop={handleEventUpdate}
        eventDisplay="block"
        dayCellContent={({ date }) => date.getDate()}
        // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
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
