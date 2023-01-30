import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "relay-runtime";
import { environment } from "../client";
import {
  DeleteMeetingMutation,
  DeleteMeetingMutation$variables,
} from "./__generated__/DeleteMeetingMutation.graphql";

const deleteMeetingQuery = graphql`
  mutation DeleteMeetingMutation($id: ID!) {
    deleteMeeting(input: { id: $id }) {
      ok
      error
      deletedMeetingId @deleteRecord
    }
  }
`;

export const useDeleteMeeting = () => {
  const [deleteMeetingLoading, setIsLoading] = useState(false);

  const deleteMeetingMutation = (
    variables: DeleteMeetingMutation$variables
  ) => {
    setIsLoading(true);
    commitMutation<DeleteMeetingMutation>(environment, {
      mutation: deleteMeetingQuery,
      variables,
      onCompleted: ({ deleteMeeting: { ok, error } }) => {
        if (!ok) {
          alert(error);
        }
        setIsLoading(false);
      },
    });
  };

  return { deleteMeetingMutation, deleteMeetingLoading };
};
