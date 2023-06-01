import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";
import { EventInput } from "@fullcalendar/core";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  filteringSchedulesButtons,
  renderEventContent,
} from "./VacationCalendar.logic";
import "./FullCalendarStyles.css";
import { ampmFormat } from "../../../../utils/func/time";
import { useSchedules } from "../../../../utils/hooks/schedules.hook";

// lazy loading
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
  const [openCreateScheduleModal, setOpenCreateScheduleModal] = useState(false);
  const [openMutateMeetingModal, setOpenMutateMeetingModal] = useState(false);

  const {
    events,
    selectedDate,
    clickedScheduleId,
    handleDateSelect,
    handleEventClick,
    handleEventResize,
    handleEventUpdate,
  } = useSchedules({
    schedules,
    setOpenCreateScheduleModal,
    setOpenMutateMeetingModal,
  });

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
        events={events}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        eventResize={handleEventResize}
        eventDrop={handleEventUpdate}
        eventDisplay="block"
        dayCellContent={({ date }) => date.getDate()}
      />
      {openCreateScheduleModal && (
        <CreateScheduleModal
          onClose={() => setOpenCreateScheduleModal(false)}
          selectedDate={selectedDate}
        />
      )}
      {openMutateMeetingModal && (
        <MutateMeetingModal
          onClose={() => setOpenMutateMeetingModal(false)}
          scheduleId={clickedScheduleId}
        />
      )}
    </>
  );
}
