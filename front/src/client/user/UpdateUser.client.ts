import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { UpdateUserMutation } from "./__generated__/UpdateUserMutation.graphql";

const updateUser = graphql`
  mutation UpdateUserMutation(
    $userId: ID!
    $email: String
    $password: String
    $isManager: Boolean
    $name: String
    $joinDate: DateTime
    $availableVacation: Float
    $positionId: ID
    $teamId: ID
  ) {
    updateUser(
      input: {
        userId: $userId
        email: $email
        password: $password
        isManager: $isManager
        name: $name
        joinDate: $joinDate
        availableVacation: $availableVacation
        positionId: $positionId
        teamId: $teamId
      }
    ) {
      ok
      error
    }
  }
`;

export const useUpdateUser = () => {
  const data = useMutation<UpdateUserMutation>(updateUser);

  return data;
};
