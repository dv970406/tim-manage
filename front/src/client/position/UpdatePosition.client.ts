import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { UpdatePositionMutation } from "./__generated__/UpdatePositionMutation.graphql";

const updatePosition = graphql`
  mutation UpdatePositionMutation($id: ID!, $position: String!) {
    updatePosition(input: { id: $id, position: $position }) {
      ok
      error
    }
  }
`;

export const useUpdatePosition = () => {
  const data = useMutation<UpdatePositionMutation>(updatePosition);

  return data;
};
