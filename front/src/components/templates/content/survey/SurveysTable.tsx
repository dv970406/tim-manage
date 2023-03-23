import { graphql } from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay";
import { SearchAndInfiniteScrollDataList } from "../../../organisms/shared/InfiniteScrolls";
import SurveyTableContent from "../../../organisms/content/survey/SurveyTableContent";
import { SurveysTable_survey$key } from "./__generated__/SurveysTable_survey.graphql";

import { MODAL_NAME } from "../../../../utils/constants/modal.constant";
import { SurveysTablePaginationQuery } from "./__generated__/SurveysTablePaginationQuery.graphql";
import { useGetMyInfo } from "../../../../client/user/GetMyInfo.client";

interface ISurveysTable {
  surveys: SurveysTable_survey$key;
}

const getSurveysFragment = graphql`
  fragment SurveysTable_survey on Query
  @argumentDefinitions(
    onlyMine: { type: "Boolean" }
    keyword: { type: "String" }
    first: { type: "Int!" }
    after: { type: "DateTime" }
  )
  @refetchable(queryName: "SurveysTablePaginationQuery") {
    getSurveys(
      onlyMine: $onlyMine
      keyword: $keyword
      first: $first
      after: $after
    ) @connection(key: "SurveysTable_getSurveys") {
      ok
      error
      edges {
        node {
          ...SurveyTableContent_survey
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
const SurveysTable = ({ surveys }: ISurveysTable) => {
  const {
    data: {
      getSurveys: { edges },
    },
    refetch,
    isLoadingNext,
    hasNext,
    loadNext,
  } = usePaginationFragment<
    SurveysTablePaginationQuery,
    SurveysTable_survey$key
  >(getSurveysFragment, surveys);

  const { myInfo } = useGetMyInfo();
  return (
    <>
      <SearchAndInfiniteScrollDataList
        mutateName={MODAL_NAME.CREATE_SURVEY}
        refetch={refetch}
        isLoadingNext={isLoadingNext}
        hasNext={hasNext}
        loadNext={loadNext}
        hasAddButton={myInfo?.isManager!}
      >
        {edges.map(
          (survey) =>
            survey.node && (
              <SurveyTableContent key={survey.cursor} survey={survey.node} />
            )
        )}
      </SearchAndInfiniteScrollDataList>
    </>
  );
};

export default SurveysTable;
