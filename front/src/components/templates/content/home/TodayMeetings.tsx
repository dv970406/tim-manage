import { EventInput } from "@fullcalendar/core";
import React from "react";
import { GapBox } from "../../../atomics/boxes/Boxes";
import { SectionTitle } from "../../../atomics/typographys/titles";
import TodayMeeting from "../../../organisms/content/home/TodayMeeting";

interface ITodayMeetings {
  todayMeetings: EventInput[];
}
const TodayMeetings = ({ todayMeetings }: ITodayMeetings) => {
  return (
    <GapBox>
      <SectionTitle>오늘의 회의</SectionTitle>
      <GapBox>
        {todayMeetings.map((meeting) => (
          <TodayMeeting
            key={meeting.id}
            subTitle={meeting.title!}
            host={meeting.host.name}
            attendees={meeting.attendees}
            start={meeting?.start}
            end={meeting?.end}
          />
        ))}
      </GapBox>
    </GapBox>
  );
};

export default TodayMeetings;
