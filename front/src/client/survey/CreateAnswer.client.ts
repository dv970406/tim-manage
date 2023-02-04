import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { environment } from "../client";
import {
  CreateAnswerMutation,
  CreateAnswerMutation$variables,
} from "./__generated__/CreateAnswerMutation.graphql";

const createAnswerQuery = graphql`
  mutation CreateAnswerMutation($surveyId: ID!, $results: [String!]!) {
    createAnswer(input: { surveyId: $surveyId, results: $results }) {
      ok
      error
      surveyId
    }
  }
`;

export const useCreateAnswer = () => {
  const [createAnswerLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const createAnswerMutation = (variables: CreateAnswerMutation$variables) => {
    setIsLoading(true);
    commitMutation<CreateAnswerMutation>(environment, {
      mutation: createAnswerQuery,
      variables,
      updater: (proxyStore, response) => {
        const rootGetSurvyes = proxyStore.get("client:root:getSurveys");
        const oldSurvyes = rootGetSurvyes?.getLinkedRecords("surveys");

        const findSurvey = oldSurvyes?.find(
          (survey) => survey.getDataID() === response.createAnswer.surveyId
        );
        findSurvey?.setValue(true, "isAnswered");
      },

      onCompleted: ({ createAnswer: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
        navigate("/survey");
      },
    });
  };

  return { createAnswerMutation, createAnswerLoading };
};
