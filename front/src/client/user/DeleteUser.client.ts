import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { DeleteUserMutation } from "./__generated__/DeleteUserMutation.graphql";

const deleteUser = graphql`
  mutation DeleteUserMutation($id: ID!) {
    deleteUser(input: { id: $id }) {
      ok
      error
    }
  }
`;

export const useDeleteUser = () => {
  const data = useMutation<DeleteUserMutation>(deleteUser);

  return data;
};
