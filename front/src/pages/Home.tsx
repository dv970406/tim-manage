import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import {
  getVacationsQuery,
  useGetVacations,
} from "../client/vacation/GetVacations.client";
import { GetVacationsQuery } from "../client/vacation/__generated__/GetVacationsQuery.graphql";
import VacationCalendar from "../components/organisms/content/calendar/VacationCalendar";

const HomePage = () => {
  const [getVacationsQueryReference, loadGetVacationsQuery] =
    useQueryLoader<GetVacationsQuery>(getVacationsQuery);

  useEffect(() => {
    loadGetVacationsQuery({});
  }, []);
  return (
    <Suspense fallback={"Home Loading..."}>
      {getVacationsQueryReference && (
        <Home getVacationsQueryReference={getVacationsQueryReference} />
      )}
    </Suspense>
  );
};

interface IHome {
  getVacationsQueryReference: PreloadedQuery<GetVacationsQuery>;
}
const Home = ({ getVacationsQueryReference }: IHome) => {
  const { vacationsByCalendarFormat } = useGetVacations(
    getVacationsQueryReference
  );
  return (
    <VacationCalendar vacationsByCalendarFormat={vacationsByCalendarFormat} />
  );
};

export default HomePage;
