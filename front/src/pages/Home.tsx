import { graphql } from "babel-plugin-relay/macro";
import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import {
  getMeetingsQuery,
  useGetMeetings,
} from "../client/meeting/GetMeetings.client";
import { GetMeetingsQuery } from "../client/meeting/__generated__/GetMeetingsQuery.graphql";
import {
  getVacationsQuery,
  useGetVacations,
} from "../client/vacation/GetVacations.client";
import { GetVacationsQuery } from "../client/vacation/__generated__/GetVacationsQuery.graphql";
import { Section } from "../components/atomics/sections/sections";
import VacationCalendar from "../components/organisms/content/home/VacationCalendar";

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

  return (
    <>
      <Section style={{ width: "80%" }}>
        <VacationCalendar
          vacationsByCalendarFormat={vacationsByCalendarFormat}
          meetingsByCalendarFormat={meetingsByCalendarFormat}
        />
      </Section>
      <Section style={{ width: "20%" }}></Section>
    </>
  );
};

export default HomePage;
