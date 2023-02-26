import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useLazyLoadQuery } from "react-relay";
import { POSITION } from "../../utils/constants/user.constant";
import { environment } from "../client";
import { GetRoomsQuery } from "./__generated__/GetRoomsQuery.graphql";
import {
  SendMessageMutation,
  SendMessageMutation$variables,
} from "./__generated__/SendMessageMutation.graphql";

const sendMessageQuery = graphql`
  mutation SendMessageMutation(
    $message: String!
    $roomId: ID
    $listenerId: ID
  ) {
    sendMessage(
      input: { message: $message, roomId: $roomId, listenerId: $listenerId }
    ) {
      ok
      error
      message {
        id
        message
        user {
          id
          name
        }
        room {
          id
        }
      }
    }
  }
`;

export const useSendMessage = () => {
  const [sendMessageLoading, setIsLoading] = useState(false);

  const sendMessageMutation = (variables: SendMessageMutation$variables) => {
    setIsLoading(true);
    commitMutation<SendMessageMutation>(environment, {
      mutation: sendMessageQuery,
      variables,
      onCompleted: ({ sendMessage: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
      },
    });
  };

  return { sendMessageMutation, sendMessageLoading };
};
