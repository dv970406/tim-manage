import { EventInput } from "@fullcalendar/core";
import { graphql } from "babel-plugin-relay/macro";
import { useEffect, useState } from "react";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { theme } from "../../css/theme";
import { SCHEDULES } from "../../utils/constants/schedule.constant";
import { getExpiredDate } from "../../utils/func/time";
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
  getMeetingsQueryReference: PreloadedQuery<GetMeetingsQuery>
) => {
  const {
    getMeetings: { ok, error, meetings },
  } = usePreloadedQuery<GetMeetingsQuery>(
    getMeetingsQuery,
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
        const expiredDate = getExpiredDate();

        const amIAttend = meeting.attendees.find((attendee) => {
          if (!attendee) return;
          return attendee.id === myInfo?.id;
        });

        const isExpired = start < expiredDate;

        return {
          id: meeting.id,
          start,
          end,
          backgroundColor:
            amIAttend || isMine ? theme.colors.green : theme.colors.purple,
          title: meeting.title,
          host: meeting.host,
          attendees: meeting.attendees,
          type: SCHEDULES.MEETING,
          // allday를 false로 줘서 Month에서 수정 못하게 했음
          allDay: false,
          editable: isMine && !isExpired,
          visible: true,
          borderColor: "transparent",
          isMine,
          isExpired,
        };
      })!;
    setCalendarFormat(getCalendarFormat);
  }, [meetings]);

  const todayMeetings = meetingsByCalendarFormat.filter((meeting) => {
    const meetingStartDate = new Date(meeting.start as Date)
      .toISOString()
      .substring(0, 10);
    const today = new Date().toISOString().substring(0, 10);

    return meetingStartDate === today;
  });

  return { meetingsByCalendarFormat, todayMeetings };
};
