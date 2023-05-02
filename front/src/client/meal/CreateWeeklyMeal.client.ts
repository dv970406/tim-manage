import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { environment } from "../client";
import {
  CreateWeeklyMealMutation,
  CreateWeeklyMealMutation$variables,
} from "./__generated__/CreateWeeklyMealMutation.graphql";

const createWeeklyMealQuery = graphql`
  mutation CreateWeeklyMealMutation($excelToJson: String!) {
    createWeeklyMeal(input: { excelToJson: $excelToJson }) {
      ok
      error
      weeklyMeal {
        mon
        tue
        wed
        thu
        fri
      }
    }
  }
`;

export const useCreateWeeklyMeal = () => {
  const [createWeeklyMealLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const createWeeklyMealMutation = (
    variables: CreateWeeklyMealMutation$variables
  ) => {
    setIsLoading(true);

    commitMutation<CreateWeeklyMealMutation>(environment, {
      mutation: createWeeklyMealQuery,
      variables,
      updater: (proxyStore) => {
        const addWeeklyMealPayload = proxyStore
          .getRootField("createWeeklyMeal")
          .getLinkedRecord("weeklyMeal");

        if (!addWeeklyMealPayload) return;

        const rootGetWeeklyMeal = proxyStore.get("client:root:getWeeklyMeal");

        rootGetWeeklyMeal?.setLinkedRecord(addWeeklyMealPayload, "weeklyMeal");
      },

      onCompleted: ({ createWeeklyMeal: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
        navigate("/meal");
      },
    });
  };

  return { createWeeklyMealMutation, createWeeklyMealLoading };
};
