import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useLazyLoadQuery } from "react-relay";

import { environment } from "../client";
import {
  SendMessageMutation,
  SendMessageMutation$variables,
} from "./__generated__/SendMessageMutation.graphql";

const sendMessageQuery = graphql`
  mutation SendMessageMutation($message: String!, $roomId: ID!) {
    sendMessage(input: { message: $message, roomId: $roomId }) {
      ok
      error
      edge {
        cursor
        node {
          id
          isMine
          message
          user {
            id
            name
          }
          room {
            id
          }
          createdAt
        }
      }
    }
  }
`;

export const useSendMessage = () => {
  const [sendMessageLoading, setIsLoading] = useState(false);
  const [sendMessageSuccess, setIsSuccess] = useState(false);

  const sendMessageMutation = (variables: SendMessageMutation$variables) => {
    setIsLoading(true);
    setIsSuccess(false);

    commitMutation<SendMessageMutation>(environment, {
      mutation: sendMessageQuery,
      variables,
      onCompleted: ({ sendMessage: { ok, error } }) => {
        setIsLoading(false);

        if (!ok) {
          alert(error);
          return;
        }
        setIsSuccess(true);
      },
    });
  };

  return { sendMessageMutation, sendMessageLoading, sendMessageSuccess };
};
