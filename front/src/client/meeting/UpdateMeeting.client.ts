import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "react-relay";
import { environment } from "../client";
import {
  UpdateMeetingMutation,
  UpdateMeetingMutation$variables,
} from "./__generated__/UpdateMeetingMutation.graphql";

const updateMeetingQuery = graphql`
  mutation UpdateMeetingMutation(
    $meetingId: ID!
    $title: String
    $startTime: DateTime
    $endTime: DateTime
    $attendeesIds: [ID!]
  ) {
    updateMeeting(
      input: {
        meetingId: $meetingId
        title: $title
        startTime: $startTime
        endTime: $endTime
        attendeesIds: $attendeesIds
      }
    ) {
      ok
      error
      meeting {
        id
        title
        startTime
        endTime
        attendees {
          id
          name
        }
        host {
          id
          name
        }
      }
    }
  }
`;

export const useUpdateMeeting = () => {
  const [updateMeetingLoading, setIsLoading] = useState(false);

  const updateMeetingMutation = (
    variables: UpdateMeetingMutation$variables
  ) => {
    setIsLoading(true);
    commitMutation<UpdateMeetingMutation>(environment, {
      mutation: updateMeetingQuery,
      variables,
      onCompleted: ({ updateMeeting: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
      },
    });
  };

  return { updateMeetingMutation, updateMeetingLoading };
};
