import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { DeletePositionMutation } from "./__generated__/DeletePositionMutation.graphql";

const deletePosition = graphql`
  mutation DeletePositionMutation($id: ID!) {
    deletePosition(input: { id: $id }) {
      ok
      error
    }
  }
`;

export const useDeletePosition = () => {
  const data = useMutation<DeletePositionMutation>(deletePosition);

  return data;
};
