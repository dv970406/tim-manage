import { graphql } from "babel-plugin-relay/macro";
import { useMemo } from "react";
import { requestSubscription } from "react-relay";
import { GraphQLSubscriptionConfig, OperationType } from "relay-runtime";
import { environment } from "../client";

const subscriptionRoomQuery = graphql`
  subscription SubscriptionRoomSubscription($roomId: ID!) {
    subscriptionRoom(roomId: $roomId) {
      id
      message
      user {
        id
        name
      }
    }
  }
`;

export const useSubscriptionRoom = (roomId: string) => {
  return requestSubscription(environment, {
    subscription: subscriptionRoomQuery,
    variables: {
      roomId,
    },
    onNext: (data) => {
      console.log("onNext : ", data);
    },
  });
};
