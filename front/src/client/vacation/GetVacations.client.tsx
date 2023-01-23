import { EventInput } from "@fullcalendar/core";
import { graphql } from "babel-plugin-relay/macro";
import { useEffect, useState, Suspense } from "react";
import {
  loadQuery,
  PreloadedQuery,
  useFragment,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { theme } from "../../css/theme";
import { environment } from "../client";
import { useGetMyInfo } from "../user/GetMyInfo.client";
import { GetVacationsQuery } from "./__generated__/GetVacationsQuery.graphql";

const vacationsFragment = graphql`
  fragment GetVacations_vacation on Vacation {
    id
    startDate
    endDate
    confirmed {
      byCeo
      byLeader
      byManager
    }
    isHalf
    duration
    user {
      id
      name
    }
  }
`;

export const getVacationsQuery = graphql`
  query GetVacationsQuery {
    getVacations {
      ok
      error
      vacations {
        id
        startDate
        endDate
        confirmed {
          byCeo
          byLeader
          byManager
        }
        isHalf
        duration
        user {
          id
          name
        }
      }
    }
  }
`;

const getVacationsQueryReference = loadQuery<GetVacationsQuery>(
  environment,
  getVacationsQuery,
  {}
);
export const useGetVacations = () => {
  const { getVacations } = usePreloadedQuery<GetVacationsQuery>(
    getVacationsQuery,
    getVacationsQueryReference
  );
  // 페칭한 vacations 데이터를 달력 라이브러리 포맷에 맞게 변환하는 로직
  const [vacationsByCalendarFormat, setCalendarFormat] = useState<EventInput[]>(
    []
  );

  const {
    getMyInfo: { user: loggedInUser },
  } = useGetMyInfo();

  useEffect(() => {
    if (!getVacations) return;
    const getCalendarFormat: EventInput[] = getVacations?.vacations
      ?.filter((vacation) => !!vacation)
      .map((vacation) => {
        const { byCeo, byLeader, byManager } = vacation?.confirmed;
        const isMine = vacation.user.id === loggedInUser?.id;
        const approved = byCeo && byLeader && byManager;

        // 만약 미승인 + 내 휴가가 아니라면 리스트에 포함 안시킴
        if (!isMine && !approved) return {};

        // fullCalendar 라이브러리의 형식을 맞춰주기 위해 toJSON 작업
        const start = new Date(vacation.startDate);
        const end = new Date(vacation.endDate);

        return {
          id: vacation.id,
          start,
          end,
          backgroundColor:
            isMine && !approved ? theme.disabled.green : theme.colors.green,
          title: vacation.isHalf ? "반차" : "연차",
          user: vacation.user,
          type: "vacation",
          // 반차, 연차 모두 allday로
          allDay: true,
          editable: isMine,
          visible: !isMine && !approved ? false : true,
          borderColor: isMine ? "red" : "none",
        };
      })!;
    setCalendarFormat(getCalendarFormat);
  }, [getVacations]);
  return { vacationsByCalendarFormat, setCalendarFormat };
};
