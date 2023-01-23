import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { CreateUserMutation } from "./__generated__/CreateUserMutation.graphql";

const createUser = graphql`
  mutation CreateUserMutation(
    $email: String!
    $isManager: Boolean!
    $name: String!
    $joinDate: DateTime!
    $positionId: ID!
    $teamId: ID!
  ) {
    createUser(
      input: {
        email: $email
        isManager: $isManager
        name: $name
        joinDate: $joinDate
        positionId: $positionId
        teamId: $teamId
      }
    ) {
      ok
      error
    }
  }
`;

export const useCreateUser = () => {
  const data = useMutation<CreateUserMutation>(createUser);

  return data;
};
