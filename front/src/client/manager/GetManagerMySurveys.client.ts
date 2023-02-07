import { graphql } from "babel-plugin-relay/macro";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GetManagerMySurveysQuery } from "./__generated__/GetManagerMySurveysQuery.graphql";

// export const getManagerMySurveysQuery = graphql`
//   query GetManagerMySurveysQuery {
//     getMySurveys {
//       ok
//       error
//       surveys {
//         ...ManagerSurveyTableContent_survey
//       }
//     }
//   }
// `;

// export const useGetManagerMySurveys = (
//   managerSurveysQueryReference: PreloadedQuery<GetManagerMySurveysQuery>
// ) => {
//   const {
//     getMySurveys: { ok, error, surveys },
//   } = usePreloadedQuery<GetManagerMySurveysQuery>(
//     getManagerMySurveysQuery,
//     managerSurveysQueryReference
//   );
//   if (!ok) {
//     alert(error);
//   }

//   return { surveys };
// };
