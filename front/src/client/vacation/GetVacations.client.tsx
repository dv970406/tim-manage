import { EventInput } from "@fullcalendar/core";
import { graphql } from "babel-plugin-relay/macro";
import { useEffect, useState, Suspense } from "react";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { theme } from "../../css/theme";
import { SCHEDULES } from "../../utils/constants/schedule.constant";
import { NINE_HOURS_TO_MILLISEC } from "../../utils/constants/time.constant";
import { useGetMyInfo } from "../user/GetMyInfo.client";
import { GetVacationsQuery } from "./__generated__/GetVacationsQuery.graphql";

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
          team {
            id
            team
          }
        }
      }
    }
  }
`;

export const useGetVacations = (
  getVacationsQueryReference: PreloadedQuery<GetVacationsQuery>
) => {
  const {
    getVacations: { ok, error, vacations },
  } = usePreloadedQuery<GetVacationsQuery>(
    getVacationsQuery,
    getVacationsQueryReference
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
        const isApproved = byCeo && byLeader && byManager;

        // 만약 미승인 + 내 휴가가 아니라면 리스트에 포함 안시킴
        if (!isMine && !isApproved) return {};

        // fullCalendar 라이브러리의 형식을 맞춰주기 위해 9시간을 더해줌
        const start = new Date(vacation.startDate);
        const end = new Date(
          +new Date(vacation.endDate) + NINE_HOURS_TO_MILLISEC
        );
        const now = new Date();

        let backgroundColor;
        if (isMine && !isApproved) {
          backgroundColor = theme.disabled.green;
        } else if (isMine) {
          backgroundColor = theme.bgColors.green;
        } else {
          backgroundColor = theme.bgColors.yellow;
        }

        const isExpired = start < now;
        return {
          id: vacation.id,
          start,
          end,
          backgroundColor,
          title: vacation.isHalf ? "반차" : "연차",
          user: vacation.user,
          type: SCHEDULES.VACATION,
          // 반차, 연차 모두 allday로
          allDay: true,
          editable: isMine && !isExpired,
          durationEditable: !vacation.isHalf && isMine && !isExpired,
          visible: !isMine && !isApproved ? false : true,
          borderColor: "transparent",
          isMine,
          isHalf: vacation.isHalf,
          duration: vacation.duration,
          isExpired,
        };
      })!;

    setCalendarFormat(getCalendarFormat);
  }, [vacations]);

  const myTeamVacations = vacationsByCalendarFormat.filter((vacation) => {
    if (!vacation) return;
    return (
      vacation?.user?.team?.id === myInfo?.team?.id &&
      new Date() < new Date(vacation.start as Date)
    );
  });
  return { vacationsByCalendarFormat, myTeamVacations };
};
