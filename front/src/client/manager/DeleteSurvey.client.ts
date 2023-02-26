import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, ConnectionHandler } from "react-relay";
import { useAlert } from "../../utils/hooks/alert/alert.hook";
import { deleteEdgeOfData } from "../../utils/store/connection";
import { environment } from "../client";
import {
  DeleteSurveyMutation,
  DeleteSurveyMutation$variables,
} from "./__generated__/DeleteSurveyMutation.graphql";

const deleteSurveyQuery = graphql`
  mutation DeleteSurveyMutation($id: ID!) {
    deleteSurvey(input: { id: $id }) {
      ok
      error
      deletedSurveyId @deleteRecord
    }
  }
`;

export const useDeleteSurvey = () => {
  const [deleteSurveyLoading, setIsLoading] = useState(false);
  const { enqueueAlert } = useAlert();

  const deleteSurveyMutation = (variables: DeleteSurveyMutation$variables) => {
    setIsLoading(true);
    commitMutation<DeleteSurveyMutation>(environment, {
      mutation: deleteSurveyQuery,
      variables: {
        id: "1",
      },
      onCompleted: ({ deleteSurvey: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          // enqueueAlert({ message: error, type: "error" });
          return;
        }
        // enqueueAlert({ message: "설문 삭제에 성공했습니다.", type: "success" });
      },
      updater: (proxyStore, { deleteSurvey: { deletedSurveyId } }) => {
        const rootRecord = proxyStore.getRoot();

        deleteEdgeOfData({
          record: rootRecord,
          key: "SurveysTable_getSurveys",
          dataId: deletedSurveyId,
        });
      },
    });
  };

  return { deleteSurveyMutation, deleteSurveyLoading };
};
