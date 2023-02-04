import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
import { environment } from "../client";
import {
  UpdatePostMutation,
  UpdatePostMutation$variables,
} from "./__generated__/UpdatePostMutation.graphql";

const updatePostQuery = graphql`
  mutation UpdatePostMutation($postId: ID!, $title: String, $content: String) {
    updatePost(input: { postId: $postId, title: $title, content: $content }) {
      ok
      error
    }
  }
`;

export const useUpdatePost = () => {
  const [updatePostLoading, setIsLoading] = useState(false);

  const updatePostMutation = (variables: UpdatePostMutation$variables) => {
    setIsLoading(true);
    commitMutation<UpdatePostMutation>(environment, {
      mutation: updatePostQuery,
      variables,
      onCompleted: ({ updatePost: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
      },
    });
  };

  return { updatePostMutation, updatePostLoading };
};
