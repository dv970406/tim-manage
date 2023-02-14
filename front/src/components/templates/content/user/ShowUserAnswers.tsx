import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "react-relay";
import { useOutletContext } from "react-router-dom";
import { GapBox, ListBox } from "../../../atomics/boxes/Boxes";
import SurveyTableContent from "../../../organisms/content/survey/SurveyTableContent";
import { ShowUserAnswers_answer$key } from "./__generated__/ShowUserAnswers_answer.graphql";

const showUserAnswersFragment = graphql`
  fragment ShowUserAnswers_answer on User {
    answers {
      id
      results
      survey {
        id
        ...SurveyTableContent_survey
      }
    }
  }
`;

const ShowUserAnswers = () => {
  const user: ShowUserAnswers_answer$key = useOutletContext();
  const showUserAnswersData = useFragment(showUserAnswersFragment, user);

  console.log(showUserAnswersData);
  return (
    <ListBox>
      {showUserAnswersData.answers.map(
        (answer: any) =>
          answer && (
            <SurveyTableContent key={answer.id} survey={answer.survey} />
          )
      )}
    </ListBox>
  );
};

export default ShowUserAnswers;
