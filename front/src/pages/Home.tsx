import { EventInput } from "@fullcalendar/core";
import React, { Suspense, useEffect, useState } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import {
  getMeetingsQuery,
  useGetMeetings,
} from "../client/meeting/GetMeetings.client";
import { GetMeetingsQuery } from "../client/meeting/__generated__/GetMeetingsQuery.graphql";
import { useGetMyInfo } from "../client/user/GetMyInfo.client";
import {
  getVacationsQuery,
  useGetVacations,
} from "../client/vacation/GetVacations.client";
import { GetVacationsQuery } from "../client/vacation/__generated__/GetVacationsQuery.graphql";
import { Section } from "../components/atomics/sections/sections";

import { theme } from "../css/theme";
import { SCHEDULES } from "../utils/constants/schedule.constant";
import MyTeamVacations from "../components/templates/content/home/MyTeamVacations";
import TodayMeetings from "../components/templates/content/home/TodayMeetings";
import VacationCalendar from "../components/templates/content/home/VacationCalendar";

const HomePage = () => {
  const [getVacationsQueryReference, loadGetVacationsQuery] =
    useQueryLoader<GetVacationsQuery>(getVacationsQuery);

  const [getMeetingsQueryReference, loadGetMeetingsQuery] =
    useQueryLoader<GetMeetingsQuery>(getMeetingsQuery);

  useEffect(() => {
    loadGetVacationsQuery({});
    loadGetMeetingsQuery({});
  }, []);
  return (
    <Suspense fallback={"Home Loading..."}>
      {getVacationsQueryReference && getMeetingsQueryReference && (
        <Home
          getVacationsQueryReference={getVacationsQueryReference}
          getMeetingsQueryReference={getMeetingsQueryReference}
        />
      )}
    </Suspense>
  );
};

interface IHome {
  getVacationsQueryReference: PreloadedQuery<GetVacationsQuery>;
  getMeetingsQueryReference: PreloadedQuery<GetMeetingsQuery>;
}
const Home = ({
  getVacationsQueryReference,
  getMeetingsQueryReference,
}: IHome) => {
  // vacations와 meetings는 Calendar 라이브러리에 맞는 포맷으로 변환이 필요해서 hook에서 처리하게 했음
  const { vacationsByCalendarFormat } = useGetVacations(
    getVacationsQueryReference
  );
  const { meetingsByCalendarFormat } = useGetMeetings(
    getMeetingsQueryReference
  );

  const todayMeetings = meetingsByCalendarFormat.filter((meeting) => {
    const meetingStartDate = new Date(meeting.start as Date)
      .toISOString()
      .substring(0, 10);
    const today = new Date().toISOString().substring(0, 10);

    return meetingStartDate === today;
  });

  const { myInfo } = useGetMyInfo();
  const myTeamVacations = vacationsByCalendarFormat.filter((vacation) => {
    if (!vacation) return;
    return (
      vacation?.user?.team?.id === myInfo?.team?.id &&
      new Date() < new Date(vacation.start as Date)
    );
  });

  // 일정 필터링
  const [filteringSchedules, setFilteringSchedules] = useState("");
  let schedules: EventInput[] = [];

  if (filteringSchedules === SCHEDULES.VACATION) {
    schedules = [...vacationsByCalendarFormat];
  } else if (filteringSchedules === SCHEDULES.MEETING) {
    schedules = [...meetingsByCalendarFormat];
  } else {
    schedules = [...vacationsByCalendarFormat, ...meetingsByCalendarFormat];
  }

  return (
    <>
      <Section style={{ width: "70%" }}>
        <Suspense fallback="dsadasdsadsaeqwqeqweqw">
          <VacationCalendar
            schedules={schedules}
            setFilteringSchedules={setFilteringSchedules}
          />
        </Suspense>
      </Section>
      <div
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing.xl,
        }}
      >
        <Section
          style={{
            height: "50%",
            overflow: "auto",
          }}
        >
          <TodayMeetings todayMeetings={todayMeetings} />
        </Section>
        <Section
          style={{
            height: "50%",
            overflow: "auto",
          }}
        >
          <MyTeamVacations
            myTeam={myInfo?.team?.team}
            myTeamVacations={myTeamVacations}
          />
        </Section>
      </div>
    </>
  );
};

export default HomePage;
