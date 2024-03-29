import { graphql } from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay";
import { useOutletContext } from "react-router-dom";
import { SectionTitle } from "../../../atomics/typographys/Etc";
import SurveyTableContent from "../../../organisms/content/survey/SurveyTableContent";
import { SearchAndInfiniteScrollList } from "../../../organisms/scrolls/SearchAndInfiniteScrollList";
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

      <SearchAndInfiniteScrollList
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
      </SearchAndInfiniteScrollList>
    </>
  );
};

export default ShowUserAnswers;
