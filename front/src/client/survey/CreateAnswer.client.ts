import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { insertEdgeToData } from "../../utils/shared/connection";
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
      answer {
        id
        results
        survey {
          id
          surveyTitle
          isAnswered
          paragraphs {
            paragraphTitle
            description
            multipleChoice
          }
          # 아래 answers는 이미 답한자가 그 survey에 접근했을때 작성했던 답을 보여주기 위함 // 참고로 백엔드에서 로그인한 유저의 대답만 필터링해서 가져옴
          answers {
            id
            results
          }
        }
      }
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
      updater: (proxyStore, { createAnswer }) => {
        const surveyRecord = proxyStore.get(
          `client:root:getSurvey(input:{"id":"${createAnswer.surveyId}"})`
        );
        const newAnswerEdge = proxyStore
          .getRootField("createAnswer")
          .getLinkedRecord("answer");

        // 해당 survey의 답변했음을 보여줌
        surveyRecord?.setValue(true, "isAnswered");

        // 그리고 해당 survey에 작성한 답변 추가해주기
        // getSurvey의 answers는 어차피 백엔드에서 오직 나의 답변만 들어가게 처리했으므로 이전의 값들이랄게 없다.
        const surveyField = surveyRecord?.getLinkedRecord("survey");
        surveyField?.setLinkedRecords([newAnswerEdge], "answers");

        const myInfoRecord = proxyStore
          .get("client:root:getMyInfo")
          ?.getLinkedRecord("user");

        insertEdgeToData({
          record: myInfoRecord,
          key: "ShowUserAnswers_myAnswersConnection",
          newEdge: newAnswerEdge,
        });
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
