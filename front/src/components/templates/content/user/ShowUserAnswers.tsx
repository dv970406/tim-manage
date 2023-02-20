import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useFragment, usePaginationFragment } from "react-relay";
import { useOutletContext } from "react-router-dom";
import { GapBox, ListBox } from "../../../atomics/boxes/Boxes";
import SurveyTableContent from "../../../organisms/content/survey/SurveyTableContent";
import { ShowUserAnswers_answer$key } from "./__generated__/ShowUserAnswers_answer.graphql";

const showUserAnswersFragment = graphql`
  fragment ShowUserAnswers_answer on User
  @argumentDefinitions(first: { type: "Int!" }, after: { type: "DateTime" })
  @refetchable(queryName: "ShowUserAnswersPaginationQuery") {
    myAnswersConnection(first: $first, after: $after)
      @connection(key: "ShowUserAnswers_myAnswersConnection") {
      edges {
        node {
          id
          results
          survey {
            id
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
  } = usePaginationFragment(showUserAnswersFragment, user);

  return (
    <ListBox>
      {edges.map(
        (answer: any) =>
          answer && (
            <SurveyTableContent key={answer.id} survey={answer.survey} />
          )
      )}
    </ListBox>
  );
};

export default ShowUserAnswers;
