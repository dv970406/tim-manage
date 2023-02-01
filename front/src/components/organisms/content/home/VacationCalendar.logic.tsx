import { EventContentArg, EventInput } from "@fullcalendar/core";
import { Dispatch, SetStateAction } from "react";
import { SCHEDULES } from "../../../../utils/modal/modal.constants";
import { IAttendee } from "./SelectUsers";

// 막대기 렌더링하는 컴포넌트
export const renderEventContent = (eventContent: EventContentArg) => {
  // 여기서 type(vacation or meeting)을 확인 가능
  // console.log(eventContent.event.extendedProps);
  const { user, visible, type, host, attendees } =
    eventContent.event.extendedProps;
  const { borderColor } = eventContent;

  return (
    <div
      style={{
        display: visible ? "block" : "none",
        width: "100%",
        // overflow: "hidden",
        border: `1.5px solid ${borderColor}`,
      }}
    >
      <div>
        {type === SCHEDULES.VACATION && <b>{eventContent.timeText}</b>}
        <i>{eventContent.event.title}</i>
        <b>({type === SCHEDULES.VACATION ? user?.name : host?.name})</b>
      </div>
      <div>
        {type === SCHEDULES.MEETING &&
          attendees.map((attendee: IAttendee, index: number) => (
            <span key={attendee.id}>
              {attendee.name}
              {index + 1 !== attendees.length && ", "}
            </span>
          ))}
      </div>
    </div>
  );
};

interface IFilteringSchedulesButtons {
  setFilteringSchedules: Dispatch<SetStateAction<string>>;
}
export const filteringSchedulesButtons = ({
  setFilteringSchedules,
}: IFilteringSchedulesButtons) => {
  return {
    allSchedules: {
      text: "일정",
      click: () => setFilteringSchedules(""),
    },
    onlyVacation: {
      text: "휴가",
      click: () => setFilteringSchedules(SCHEDULES.VACATION),
    },
    onlyMeeting: {
      text: "회의",
      click: () => setFilteringSchedules(SCHEDULES.MEETING),
    },
  };
};
