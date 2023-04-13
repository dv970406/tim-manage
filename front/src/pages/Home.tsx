import { EventInput } from "@fullcalendar/core";
import { Suspense, useEffect, useState } from "react";
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
import Loading from "../components/molecules/shared/Loading";
import "../css/media-query/Home.css";
import styled from "@emotion/styled/macro";
import { breakpoints } from "../css/media-query/media-query";
import { ColumnBox, RowBox } from "../components/atomics/boxes/FlexBox";

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

const HomeFrame = styled(RowBox)`
  @media (max-width: ${breakpoints.pc}) {
    display: grid;
    grid-template-rows: 2fr 1fr;
  }
`;
const CalendarZone = styled(Section)`
  width: 75%;

  @media (max-width: ${breakpoints.pc}) {
    width: 100%;
    height: 100%;
  }
`;
const RecentSchedulesZone = styled(ColumnBox)`
  width: 25%;
  & > section {
    height: 50%;
  }
  @media (max-width: ${breakpoints.pc}) {
    display: flex;
    flex-direction: row;
    width: 100%;
    & > section {
      height: 100%;
    }
  }
`;
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
    <>
      <HomeFrame>
        <CalendarZone>
          <Suspense fallback={<Loading />}>
            <VacationCalendar
              schedules={schedules}
              setFilteringSchedules={setFilteringSchedules}
            />
          </Suspense>
        </CalendarZone>
        <RecentSchedulesZone>
          <Section>
            <TodayMeetings todayMeetings={todayMeetings} />
          </Section>
          <Section>
            <MyTeamVacations
              myTeam={myInfo?.team?.team}
              myTeamVacations={myTeamVacations}
            />
          </Section>
        </RecentSchedulesZone>
      </HomeFrame>
    </>
  );
};

export default HomePage;
