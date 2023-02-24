import { EventInput } from "@fullcalendar/core";
import React from "react";
import { GapBox, ScrollBox } from "../../../atomics/boxes/Boxes";
import { SectionTitle } from "../../../atomics/typographys/titles";
import TodayMeeting from "../../../organisms/content/home/TodayMeeting";

interface ITodayMeetings {
  todayMeetings: EventInput[];
}
const TodayMeetings = ({ todayMeetings }: ITodayMeetings) => {
  return (
    <>
      <SectionTitle>오늘의 회의</SectionTitle>
      <ScrollBox height="100%">
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
      </ScrollBox>
    </>
  );
};

export default TodayMeetings;
