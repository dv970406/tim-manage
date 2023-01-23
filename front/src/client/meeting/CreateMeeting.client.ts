import { graphql } from "babel-plugin-relay/macro";
import { useEffect, useState } from "react";
import { commitMutation } from "react-relay";
import { environment } from "../client";
import {
  CreateMeetingMutation,
  CreateMeetingMutation$variables,
} from "./__generated__/CreateMeetingMutation.graphql";

const createMeetingQuery = graphql`
  mutation CreateMeetingMutation(
    $title: String!
    $startTime: DateTime!
    $endTime: DateTime!
    $attendeesIds: [ID!]!
  ) {
    createMeeting(
      input: {
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

// export const useCreateMeeting = () => {
//   const mutate = useMutation<CreateMeetingMutation>(createMeetingQuery);

//   return mutate;
// };

export const useCreateMeeting = () => {
  const [createMeetingLoading, setIsLoading] = useState(false);

  const createMeetingMutation = (
    variables: CreateMeetingMutation$variables
  ) => {
    setIsLoading(true);
    commitMutation<CreateMeetingMutation>(environment, {
      mutation: createMeetingQuery,
      variables,
      updater: (proxyStore, response) => {
        const addMeetingPayload = proxyStore
          .getRootField("createMeeting")
          .getLinkedRecord("meeting");

        if (!addMeetingPayload) return;

        const rootGetMeetings = proxyStore.get("client:root:getMeetings");

        const oldMeetings = rootGetMeetings?.getLinkedRecords("meetings");
        if (!oldMeetings) return;

        rootGetMeetings?.setLinkedRecords(
          [addMeetingPayload, ...oldMeetings],
          "meetings"
        );
      },

      onCompleted: () => setIsLoading(false),
    });
  };

  return { createMeetingMutation, createMeetingLoading };
};
