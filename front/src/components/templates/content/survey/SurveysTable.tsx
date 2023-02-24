import { graphql } from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay";
import { ManageDataList } from "../../../organisms/shared/ManageDataList";
import SurveyTableContent from "../../../organisms/content/survey/SurveyTableContent";
import { GetSurveysPaginationQuery } from "./__generated__/GetSurveysPaginationQuery.graphql";
import { SurveysTable_survey$key } from "./__generated__/SurveysTable_survey.graphql";
import DataToolBar from "../../../molecules/inputs/DataToolBar";
import { ChangeEventHandler, useEffect, useState } from "react";
import Modal from "../../Modal";
import CreateScheduleModal from "../home/CreateScheduleModal";
import MutateMeetingModal from "../home/MutateMeetingModal";
import { MODAL_NAME } from "../../../../utils/constants/modal.constant";

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
  } = usePaginationFragment<GetSurveysPaginationQuery, SurveysTable_survey$key>(
    getSurveysFragment,
    surveys
  );

  return (
    <>
      <ManageDataList
        mutateName={MODAL_NAME.CREATE_SURVEY}
        refetch={refetch}
        isLoadingNext={isLoadingNext}
        hasNext={hasNext}
        loadNext={loadNext}
      >
        {edges.map(
          (survey) =>
            survey.node && (
              <SurveyTableContent key={survey.cursor} survey={survey.node} />
            )
        )}
      </ManageDataList>
    </>
  );
};

export default SurveysTable;
