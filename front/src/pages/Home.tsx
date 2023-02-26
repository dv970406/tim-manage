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
import { SCHEDULES } from "../utils/constants/schedule.constant";
import MyTeamVacations from "../components/templates/content/home/MyTeamVacations";
import TodayMeetings from "../components/templates/content/home/TodayMeetings";
import VacationCalendar from "../components/templates/content/home/VacationCalendar";
import { ColumnBox, RowBox } from "../components/atomics/boxes/Boxes";
import Loading from "../components/atomics/boxes/Loading";

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
    <Suspense fallback={<Loading />}>
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
  const { vacationsByCalendarFormat, myTeamVacations } = useGetVacations(
    getVacationsQueryReference
  );
  const { meetingsByCalendarFormat, todayMeetings } = useGetMeetings(
    getMeetingsQueryReference
  );
  const { myInfo } = useGetMyInfo();

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
    <RowBox style={{ height: "92vh" }}>
      <Section style={{ width: "75%" }}>
        <Suspense fallback={<Loading />}>
          <VacationCalendar
            schedules={schedules}
            setFilteringSchedules={setFilteringSchedules}
          />
        </Suspense>
      </Section>
      <ColumnBox
        style={{
          width: "25%",
        }}
      >
        <Section
          style={{
            height: "50%",
          }}
        >
          <TodayMeetings todayMeetings={todayMeetings} />
        </Section>
        <Section
          style={{
            height: "50%",
          }}
        >
          <MyTeamVacations
            myTeam={myInfo?.team?.team}
            myTeamVacations={myTeamVacations}
          />
        </Section>
      </ColumnBox>
    </RowBox>
  );
};

export default HomePage;
