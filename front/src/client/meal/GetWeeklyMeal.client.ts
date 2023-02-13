import { graphql } from "babel-plugin-relay/macro";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GetWeeklyMealQuery } from "./__generated__/GetWeeklyMealQuery.graphql";

export const getWeeklyMealQuery = graphql`
  query GetWeeklyMealQuery {
    getWeeklyMeal {
      ok
      error
      weeklyMeal {
        mon
        tue
        wed
        thu
        fri
      }
    }
  }
`;

export const useGetWeeklyMeal = (
  getWeeklyMealQueryReference: PreloadedQuery<GetWeeklyMealQuery>
) => {
  const {
    getWeeklyMeal: { ok, error, weeklyMeal },
  } = usePreloadedQuery<GetWeeklyMealQuery>(
    getWeeklyMealQuery,
    getWeeklyMealQueryReference
  );

  if (!ok) {
    alert(error);
  }

  return { weeklyMeal };
};
