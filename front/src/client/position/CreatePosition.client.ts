import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { CreatePositionMutation } from "./__generated__/CreatePositionMutation.graphql";

const createPosition = graphql`
  mutation CreatePositionMutation($position: String!) {
    createPosition(input: { position: $position }) {
      ok
      error
    }
  }
`;

export const useCreatePosition = () => {
  const data = useMutation<CreatePositionMutation>(createPosition);

  return data;
};
