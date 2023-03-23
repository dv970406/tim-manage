import { graphql } from "babel-plugin-relay/macro";
import React, { Dispatch, SetStateAction } from "react";
import { usePaginationFragment } from "react-relay";
import { useDeleteSurvey } from "../../../../client/manager/DeleteSurvey.client";

import { ColumnBox, ScrollBox } from "../../../atomics/boxes/Boxes";
import { EndSubmitButton } from "../../../molecules/buttons/EndSubmitButton";

import ManagerSurveyTableContent from "../../../organisms/content/manager/ManagerSurveyTableContent";
import { InfiniteScrollDataTable } from "../../../organisms/shared/InfiniteScrolls";

import { ManagerSurveysTablePaginationQuery } from "./__generated__/ManagerSurveysTablePaginationQuery.graphql";
import { ManagerSurveysTable_survey$key } from "./__generated__/ManagerSurveysTable_survey.graphql";

interface IManagerSurveysTable {
  surveys: ManagerSurveysTable_survey$key;
  clickedSurveyId: string;
  setClickedSurveyId: Dispatch<SetStateAction<string>>;
}

const getManagerSurveysFragment = graphql`
  fragment ManagerSurveysTable_survey on Query
  @argumentDefinitions(
    onlyMine: { type: "Boolean" }
    first: { type: "Int!" }
    after: { type: "DateTime" }
  )
  @refetchable(queryName: "ManagerSurveysTablePaginationQuery") {
    getSurveys(onlyMine: $onlyMine, first: $first, after: $after)
      @connection(key: "ManagerSurveysTable_getSurveys") {
      ok
      error
      edges {
        node {
          ...ManagerSurveyTableContent_survey
        }
        cursor
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

const ManagerSurveysTable = ({
  surveys,
  clickedSurveyId,
  setClickedSurveyId,
}: IManagerSurveysTable) => {
  const { deleteSurveyMutation, deleteSurveyLoading } = useDeleteSurvey();
  const handleDeleteSurvey = () => {
    if (deleteSurveyLoading) return;
    deleteSurveyMutation({ id: clickedSurveyId });
  };

  const {
    data: {
      getSurveys: { edges },
    },
    hasNext,
    isLoadingNext,
    loadNext,
  } = usePaginationFragment<
    ManagerSurveysTablePaginationQuery,
    ManagerSurveysTable_survey$key
  >(getManagerSurveysFragment, surveys);

  return (
    <>
      <ScrollBox>
        <InfiniteScrollDataTable
          headers={["내 설문"]}
          loadNext={loadNext}
          hasNext={hasNext}
          isLoadingNext={isLoadingNext}
        >
          {edges.map(
            (survey) =>
              survey.node && (
                <ManagerSurveyTableContent
                  key={survey.cursor}
                  survey={survey.node}
                  clickedSurveyId={clickedSurveyId}
                  setClickedSurveyId={setClickedSurveyId}
                />
              )
          )}
        </InfiniteScrollDataTable>
      </ScrollBox>

      <EndSubmitButton
        text="삭제"
        onClick={handleDeleteSurvey}
        disabled={!clickedSurveyId || deleteSurveyLoading}
      />
    </>
  );
};

export default ManagerSurveysTable;
