import { graphql } from "babel-plugin-relay/macro";
import { Dispatch, SetStateAction } from "react";
import { requestSubscription, useSubscription } from "react-relay";
import { environment } from "../client";

const subscriptionConfirmVacationQuery = graphql`
  subscription SubscriptionConfirmVacationSubscription($userId: ID!) {
    subscriptionConfirmVacation(userId: $userId) {
      id
      startDate
      endDate
      duration
      confirmed {
        byCeo
        byManager
        byLeader
      }
      user {
        id
        name
        team {
          leader {
            id
            name
          }
        }
      }
    }
  }
`;

interface IUseSubscriptionConfirmVacation {
  userId: string;
  setData: Dispatch<SetStateAction<any>>;
}
export const subscriptionConfirmVacation = ({
  userId,
  setData,
}: IUseSubscriptionConfirmVacation) => {
  console.log("user Od : ", userId);

  return requestSubscription(environment, {
    subscription: subscriptionConfirmVacationQuery,
    variables: {
      userId,
    },
    onNext: (data) => {
      console.log("confirm Subscription : ", data);
    },
  });
};
