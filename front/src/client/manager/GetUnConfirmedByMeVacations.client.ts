import { EventInput } from "@fullcalendar/core";
import { graphql } from "babel-plugin-relay/macro";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GetUnConfirmedByMeVacationsQuery } from "./__generated__/GetUnConfirmedByMeVacationsQuery.graphql";

export const getUnConfirmedByMeVacationsQuery = graphql`
  query GetUnConfirmedByMeVacationsQuery {
    getUnConfirmedByMeVacations {
      ok
      error
      vacations {
        ...UnConfirmedVacationTableContent_vacation
      }
    }
  }
`;

export const useGetUnConfirmedByMeVacations = (
  getUnConfirmedByMeVacationsQueryReference: PreloadedQuery<GetUnConfirmedByMeVacationsQuery>
) => {
  const {
    getUnConfirmedByMeVacations: { ok, error, vacations },
  } = usePreloadedQuery<GetUnConfirmedByMeVacationsQuery>(
    getUnConfirmedByMeVacationsQuery,
    getUnConfirmedByMeVacationsQueryReference
  );

  if (!ok) {
    alert(error);
  }

  return { unConfirmedByMeVacations: vacations };
};
