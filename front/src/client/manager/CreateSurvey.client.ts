import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, ConnectionHandler, useMutation } from "react-relay";
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
      edge {
        cursor
        node {
          id
          surveyTitle
          isAnonymous
          paragraphs {
            paragraphTitle
            description
            multipleChoice
          }
          user {
            id
            name
          }
          isAnswered
          createdAt
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
      updater: (proxyStore) => {
        // pagination 적용하기 이전에 썼던 store 업데이트
        // const addSurveyPayload = proxyStore
        //   .getRootField("createSurvey")
        //   .getLinkedRecord("survey");

        // if (!addSurveyPayload) return;

        // const rootGetSurveys = proxyStore.get(`client:root:getSurveys`);

        // const oldSurveys = rootGetSurveys?.getLinkedRecords("surveys");

        // if (!oldSurveys) return;

        // rootGetSurveys?.setLinkedRecords(
        //   [addSurveyPayload, ...oldSurveys],
        //   "surveys"
        // );

        // pagination 적용을 위해 connection을 이용해서 store 업데이트
        const newSurveyEdge = proxyStore
          .getRootField("createSurvey")
          .getLinkedRecord("edge");
        if (!newSurveyEdge) return;

        const surveyRecord = proxyStore.getRoot();
        if (!surveyRecord) return;

        const surveyConnection = ConnectionHandler.getConnection(
          // parent 필요. 만약 type User가 가진 surveys들을 가져오는 것이라면 해당 user의 dataRecord를 넣어야힘
          // 지금같은 경우는 getSurveys의 부모가 type Query이므로 getRoot로 client:root값을 parent로 넣은 것
          surveyRecord,
          "SurveysTable_getSurveys",
          // first, after 같은 @connection이 제공해주는 argument이외의 값은 아래처럼 filters 값으로 넣어주어야 한다! 안적으면 undefined뜸!!
          {
            onlyMine: false,
          }
        );

        const managerSurveyConnection = ConnectionHandler.getConnection(
          surveyRecord,
          "ManagerSurveysTable_getSurveys",
          {
            onlyMine: true,
          }
        );
        if (surveyConnection)
          ConnectionHandler.insertEdgeBefore(surveyConnection, newSurveyEdge);
        if (managerSurveyConnection)
          ConnectionHandler.insertEdgeBefore(
            managerSurveyConnection,
            newSurveyEdge
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
