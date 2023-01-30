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
import { homeVacationsQuery } from "../../pages/Home";
import { HomeVacationsQuery } from "../../pages/__generated__/HomeVacationsQuery.graphql";
import { SCHEDULES } from "../../utils/modal/modal.constants";
import { useGetMyInfo } from "../user/GetMyInfo.client";

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

export const useGetVacations = (
  homeVacationsQueryReference: PreloadedQuery<HomeVacationsQuery>
) => {
  const {
    getVacations: { ok, error, vacations },
  } = usePreloadedQuery<HomeVacationsQuery>(
    homeVacationsQuery,
    homeVacationsQueryReference
  );
  // 페칭한 vacations 데이터를 달력 라이브러리 포맷에 맞게 변환하는 로직
  const [vacationsByCalendarFormat, setCalendarFormat] = useState<EventInput[]>(
    []
  );

  const { myInfo } = useGetMyInfo();

  useEffect(() => {
    if (!ok) {
      return alert(error);
    }
    const getCalendarFormat: EventInput[] = vacations
      ?.filter((vacation) => !!vacation)
      .map((vacation) => {
        const { byCeo, byLeader, byManager } = vacation?.confirmed;
        const isMine = vacation.user.id === myInfo?.id;
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
          type: SCHEDULES.VACATION,
          // 반차, 연차 모두 allday로
          allDay: true,
          editable: isMine,
          visible: !isMine && !approved ? false : true,
          borderColor: isMine ? theme.colors.yellow : "transparent",
        };
      })!;
    setCalendarFormat(getCalendarFormat);
  }, [ok]);
  return { vacationsByCalendarFormat, setCalendarFormat };
};
