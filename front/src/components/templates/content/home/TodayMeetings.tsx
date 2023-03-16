import { EventInput } from "@fullcalendar/core";
import React from "react";
import { meetingTimeFormat } from "../../../../utils/time/time";
import { ColumnBox, ScrollBox } from "../../../atomics/boxes/Boxes";
import { AccentText } from "../../../atomics/typographys/texts";
import { SectionTitle } from "../../../atomics/typographys/titles";
import InformationCard from "../../../organisms/content/home/InformationCard";
import TodayMeeting from "../../../organisms/content/home/InformationCard";
import { IAttendee } from "../../../organisms/content/home/SelectUsers";

interface ITodayMeetings {
  todayMeetings: EventInput[];
}
const TodayMeetings = ({ todayMeetings }: ITodayMeetings) => {
  return (
    <>
      <SectionTitle>오늘의 회의</SectionTitle>
      <ScrollBox>
        {todayMeetings.map((meeting) => (
          <InformationCard
            key={meeting.id}
            mainText={meeting.title!}
            middleText={
              <>
                {meetingTimeFormat(meeting.start as Date)}
                {` ~ `}
                {meetingTimeFormat(meeting.end as Date)}(
                <AccentText>{meeting.host.name}</AccentText>)
              </>
            }
            endText={meeting.attendees.map(
              (attendee: IAttendee, index: number) => (
                <React.Fragment key={attendee.id}>
                  {attendee.name}
                  {index + 1 !== meeting.attendees.length && ", "}
                </React.Fragment>
              )
            )}
          />
        ))}
      </ScrollBox>
    </>
  );
};

export default TodayMeetings;
