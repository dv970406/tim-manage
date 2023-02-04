import { graphql } from "babel-plugin-relay/macro";
import { useEffect, useState } from "react";
import { commitMutation } from "react-relay";
import { environment } from "../client";
import {
  UpdateVacationMutation,
  UpdateVacationMutation$variables,
} from "./__generated__/UpdateVacationMutation.graphql";

const updateVacationQuery = graphql`
  mutation UpdateVacationMutation(
    $vacationId: ID!
    $startDate: DateTime
    $endDate: DateTime
    $isHalf: Boolean
  ) {
    updateVacation(
      input: {
        vacationId: $vacationId
        startDate: $startDate
        endDate: $endDate
        isHalf: $isHalf
      }
    ) {
      ok
      error
      vacation {
        id
        startDate
        endDate
        confirmed {
          byCeo
          byLeader
          byManager
        }
        isHalf
        duration
        user {
          id
          name
        }
      }
    }
  }
`;

// export const useCreateVacation = () => {
//   const mutate = useMutation<CreateVacationMutation>(createVacationQuery);

//   return mutate;
// };

export const useUpdateVacation = () => {
  const [updateVacationLoading, setIsLoading] = useState(false);

  const updateVacationMutation = (
    variables: UpdateVacationMutation$variables
  ) => {
    setIsLoading(true);
    commitMutation<UpdateVacationMutation>(environment, {
      mutation: updateVacationQuery,
      variables,
      onCompleted: ({ updateVacation: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          return alert(error);
        }
      },
    });
  };

  return { updateVacationMutation, updateVacationLoading };
};
