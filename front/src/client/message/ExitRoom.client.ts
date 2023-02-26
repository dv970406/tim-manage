import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, ConnectionHandler, useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { deleteEdgeOfData } from "../../utils/store/connection";
import { environment } from "../client";
import {
  ExitRoomMutation,
  ExitRoomMutation$variables,
} from "./__generated__/ExitRoomMutation.graphql";

const exitRoomQuery = graphql`
  mutation ExitRoomMutation($roomId: ID!) {
    exitRoom(input: { roomId: $roomId }) {
      ok
      error
      deletedRoomId @deleteRecord
    }
  }
`;

export const useExitRoom = () => {
  const [exitRoomLoading, setIsLoading] = useState(false);

  const exitRoomMutation = (variables: ExitRoomMutation$variables) => {
    setIsLoading(true);
    commitMutation<ExitRoomMutation>(environment, {
      mutation: exitRoomQuery,
      variables,
      onCompleted: ({ exitRoom: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
      },
      updater: (proxyStore, { exitRoom: { deletedRoomId } }) => {},
    });
  };

  return { exitRoomMutation, exitRoomLoading };
};
