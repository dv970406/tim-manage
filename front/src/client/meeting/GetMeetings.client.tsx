import { EventInput } from "@fullcalendar/core";
import { graphql } from "babel-plugin-relay/macro";
import { useEffect, useState, Suspense } from "react";
import { loadQuery, usePreloadedQuery } from "react-relay";
import { theme } from "../../css/theme";
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

const getMeetingsQueryReference = loadQuery<GetMeetingsQuery>(
  environment,
  getMeetingsQuery,
  {}
);
export const useGetMeetings = () => {
  const { getMeetings } = usePreloadedQuery<GetMeetingsQuery>(
    getMeetingsQuery,
    getMeetingsQueryReference
  );
  // 페칭한 Meetings 데이터를 달력 라이브러리 포맷에 맞게 변환하는 로직
  const [meetingsByCalendarFormat, setCalendarFormat] = useState<EventInput[]>(
    []
  );

  const {
    getMyInfo: { user: loggedInUser },
  } = useGetMyInfo();

  useEffect(() => {
    if (!getMeetings) return;
    const getCalendarFormat: EventInput[] = getMeetings?.meetings
      ?.filter((meeting) => !!meeting)
      .map((meeting) => {
        const isMine = meeting.host.id === loggedInUser?.id;

        // fullCalendar 라이브러리의 형식을 맞춰주기 위해 toJSON 작업
        const start = new Date(meeting.startTime);
        const end = new Date(meeting.endTime);

        return {
          id: meeting.id,
          start,
          end,
          backgroundColor: theme.colors.red,
          title: meeting.title,
          host: meeting.host,
          attendees: meeting.attendees,
          type: "meeting",
          // allday를 false로 줘서 Month에서 수정 못하게 했음
          allDay: false,
          editable: isMine,
          visible: true,
        };
      })!;
    setCalendarFormat(getCalendarFormat);
  }, [getMeetings]);
  return { meetingsByCalendarFormat, setCalendarFormat };
};
