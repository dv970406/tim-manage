import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useFragment, usePaginationFragment } from "react-relay";
import { useOutletContext } from "react-router-dom";
import { GapBox, ListBox } from "../../../atomics/boxes/Boxes";
import { SectionTitle } from "../../../atomics/typographys/titles";
import SurveyTableContent from "../../../organisms/content/survey/SurveyTableContent";
import { SearchAndInfiniteScrollDataList } from "../../../organisms/shared/InfiniteScrolls";
import { ShowUserAnswers_answer$key } from "./__generated__/ShowUserAnswers_answer.graphql";

const showUserAnswersFragment = graphql`
  fragment ShowUserAnswers_answer on User
  @refetchable(queryName: "ShowUserAnswersPaginationQuery") {
    myAnswersConnection(keyword: $keyword, first: $first, after: $after)
      @connection(key: "ShowUserAnswers_myAnswersConnection") {
      edges {
        node {
          id
          results
          survey {
            ...SurveyTableContent_survey
          }
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

const ShowUserAnswers = () => {
  const user: ShowUserAnswers_answer$key = useOutletContext();
  const {
    data: {
      myAnswersConnection: { edges },
    },
    hasNext,
    isLoadingNext,
    loadNext,
    refetch,
  } = usePaginationFragment(showUserAnswersFragment, user);

  return (
    <>
      <SectionTitle>답변 목록</SectionTitle>

      <SearchAndInfiniteScrollDataList
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
        loadNext={loadNext}
        refetch={refetch}
      >
        {edges.map(
          (answer) =>
            answer?.node?.id && (
              <SurveyTableContent
                key={answer.node.id}
                survey={answer.node.survey}
              />
            )
        )}
      </SearchAndInfiniteScrollDataList>
    </>
  );
};

export default ShowUserAnswers;
