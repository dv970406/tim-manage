import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { environment } from "../client";
import {
  ToggleLikeMutation,
  ToggleLikeMutation$variables,
} from "./__generated__/ToggleLikeMutation.graphql";

const toggleLikeQuery = graphql`
  mutation ToggleLikeMutation($postId: ID!) {
    toggleLike(input: { postId: $postId }) {
      ok
      error
    }
  }
`;

export const useToggleLike = () => {
  const [toggleLikeLoading, setIsLoading] = useState(false);

  const toggleLikeMutation = (variables: ToggleLikeMutation$variables) => {
    setIsLoading(true);
    commitMutation<ToggleLikeMutation>(environment, {
      mutation: toggleLikeQuery,
      variables,
      onCompleted: ({ toggleLike: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
      },
      updater: (proxyStore, { toggleLike }) => {
        // 댓글 지워지면 해당 Post의 countComments -1 해줘야함
        const rootGetPosts = proxyStore.get(
          `client:root:getPost(input:{"id":"${variables.postId}"})`
        );
        const targetPost = rootGetPosts?.getLinkedRecord("post");
        const prevCount = targetPost?.getValue("countLikes") || 0;
        const isLiked = targetPost?.getValue("isLiked");
        targetPost?.setValue(
          isLiked ? +prevCount - 1 : +prevCount + 1,
          "countLikes"
        );
        targetPost?.setValue(!isLiked, "isLiked");
      },
    });
  };

  return { toggleLikeMutation, toggleLikeLoading };
};
