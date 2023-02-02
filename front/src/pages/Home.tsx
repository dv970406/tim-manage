import { EventInput } from "@fullcalendar/core";
import React, { Suspense, useEffect, useState } from "react";
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
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
import { SectionTitle } from "../components/atomics/typographys/titles";
import { GapBox } from "../components/molecules/boxes/Boxes";
import KingOfMeeting from "../components/organisms/content/home/TeamMateVacation";
import LatestMeeting from "../components/organisms/content/home/LatestMeeting";
import VacationCalendar from "../components/organisms/content/home/VacationCalendar";
import { theme } from "../css/theme";
import { SCHEDULES } from "../utils/modal/modal.constants";
import TeamMateVacation from "../components/organisms/content/home/TeamMateVacation";

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
  const myTeamVacations = vacationsByCalendarFormat?.filter(
    (vacation) =>
      vacation?.user?.team?.id === myInfo?.team.id &&
      new Date() < new Date(vacation.start as Date)
  );

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
        <VacationCalendar
          schedules={schedules}
          setFilteringSchedules={setFilteringSchedules}
        />
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
            // 스크롤이 부모로 번지는 것을 막는 css
            overscrollBehavior: "contain",
          }}
        >
          <SectionTitle>오늘의 회의</SectionTitle>
          <GapBox>
            {todayMeetings.map((meeting) => (
              <LatestMeeting
                key={meeting.id}
                subTitle={meeting.title!}
                host={meeting.host.name}
                attendees={meeting.attendees}
                start={meeting?.start}
                end={meeting?.end}
              />
            ))}
          </GapBox>
        </Section>
        <Section
          style={{
            height: "50%",
            overflow: "auto",
            overscrollBehavior: "contain",
          }}
        >
          <SectionTitle>{myInfo?.team.team} 휴가 계획</SectionTitle>
          <GapBox>
            {myTeamVacations.map((vacation) => (
              <TeamMateVacation
                key={vacation.id}
                name={vacation.user.name}
                start={vacation.start}
                end={vacation.end}
                duration={vacation.duration}
                isHalf={vacation.isHalf}
              />
            ))}
          </GapBox>
        </Section>
      </div>
    </>
  );
};

export default HomePage;
