import { EventInput } from "@fullcalendar/core";
import { graphql } from "babel-plugin-relay/macro";
import { useEffect, useState, Suspense } from "react";
import { loadQuery, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { theme } from "../../css/theme";
import { homeMeetingsQuery } from "../../pages/Home";
import { HomeMeetingsQuery } from "../../pages/__generated__/HomeMeetingsQuery.graphql";
import { environment } from "../client";
import { useGetMyInfo } from "../user/GetMyInfo.client";
import { GetMeetingsQuery } from "./__generated__/GetMeetingsQuery.graphql";

export const getMeetingsQuery = graphql`
  query GetMeetingsQuery {
    getMeetings {
      ok
      error
      meetings {
        id
        title
        startTime
        endTime
        attendees {
          id
          name
        }
        host {
          id
          name
        }
      }
    }
  }
`;

export const useGetMeetings = (
  getMeetingsQueryReference: PreloadedQuery<HomeMeetingsQuery>
) => {
  const {
    getMeetings: { ok, error, meetings },
  } = usePreloadedQuery<HomeMeetingsQuery>(
    homeMeetingsQuery,
    getMeetingsQueryReference
  );
  // 페칭한 Meetings 데이터를 달력 라이브러리 포맷에 맞게 변환하는 로직
  const [meetingsByCalendarFormat, setCalendarFormat] = useState<EventInput[]>(
    []
  );

  const { myInfo } = useGetMyInfo();

  useEffect(() => {
    if (!ok) {
      return alert(error);
    }
    const getCalendarFormat: EventInput[] = meetings
      ?.filter((meeting) => !!meeting)
      .map((meeting) => {
        const isMine = meeting.host.id === myInfo?.id;

        // fullCalendar 라이브러리의 형식을 맞춰주기 위해 toJSON 작업
        const start = new Date(meeting.startTime);
        const end = new Date(meeting.endTime);

        const amIAttend = meeting.attendees.find(
          (attendee) => attendee.id === myInfo?.id
        );
        return {
          id: meeting.id,
          start,
          end,
          backgroundColor: theme.colors.blue,
          title: meeting.title,
          host: meeting.host,
          attendees: meeting.attendees,
          type: "meeting",
          // allday를 false로 줘서 Month에서 수정 못하게 했음
          allDay: false,
          editable: isMine,
          visible: true,
          borderColor:
            amIAttend || isMine ? theme.colors.yellow : "transparent",
        };
      })!;
    setCalendarFormat(getCalendarFormat);
  }, [ok]);
  return { meetingsByCalendarFormat, setCalendarFormat };
};
