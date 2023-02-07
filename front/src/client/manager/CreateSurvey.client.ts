import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { environment } from "../client";
import {
  CreateSurveyMutation,
  CreateSurveyMutation$variables,
} from "./__generated__/CreateSurveyMutation.graphql";

const createSurveyQuery = graphql`
  mutation CreateSurveyMutation(
    $isAnonymous: Boolean!
    $paragraphs: [SurveyFormInputType!]!
    $surveyTitle: String!
  ) {
    createSurvey(
      input: {
        isAnonymous: $isAnonymous
        paragraphs: $paragraphs
        surveyTitle: $surveyTitle
      }
    ) {
      ok
      error
      survey {
        isAnonymous
        paragraphs {
          paragraphTitle
          description
          multipleChoice
        }
        surveyTitle
        user {
          id
          name
        }
      }
    }
  }
`;

export const useCreateSurvey = () => {
  const [createSurveyLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const createSurveyMutation = (variables: CreateSurveyMutation$variables) => {
    setIsLoading(true);
    commitMutation<CreateSurveyMutation>(environment, {
      mutation: createSurveyQuery,
      variables,
      updater: (proxyStore, response) => {
        const addSurveyPayload = proxyStore
          .getRootField("createSurvey")
          .getLinkedRecord("survey");

        if (!addSurveyPayload) return;

        const rootGetSurveys = proxyStore.get(`client:root:getSurveys`);

        const oldSurveys = rootGetSurveys?.getLinkedRecords("surveys");

        if (!oldSurveys) return;

        rootGetSurveys?.setLinkedRecords(
          [addSurveyPayload, ...oldSurveys],
          "surveys"
        );
      },

      onCompleted: ({ createSurvey: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
        navigate("/survey");
      },
    });
  };

  return { createSurveyMutation, createSurveyLoading };
};
