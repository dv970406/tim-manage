import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, ConnectionHandler, useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import {
  deleteEdgeOfData,
  insertEdgeToData,
} from "../../utils/store/connection";
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
      like {
        id
        post {
          id
          title
        }
      }
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
        const rootGetPost = proxyStore.get(
          `client:root:getPost(input:{"id":"${variables.postId}"})`
        );

        const newLikeEdge = proxyStore
          .getRootField("toggleLike")
          .getLinkedRecord("like");

        const targetPost = rootGetPost?.getLinkedRecord("post");
        const prevCount = targetPost?.getValue("countLikes") || 0;
        const isLiked = targetPost?.getValue("isLiked");
        targetPost?.setValue(
          isLiked ? +prevCount - 1 : +prevCount + 1,
          "countLikes"
        );
        targetPost?.setValue(!isLiked, "isLiked");

        const myInfoRecord = proxyStore
          .get("client:root:getMyInfo")
          ?.getLinkedRecord("user");

        if (isLiked) {
          deleteEdgeOfData({
            record: myInfoRecord,
            key: "ShowUserLikes_myLikesConnection",
            dataId: toggleLike.like?.id,
          });
        } else {
          insertEdgeToData({
            record: myInfoRecord,
            key: "ShowUserLikes_myLikesConnection",
            newEdge: newLikeEdge,
          });
        }
      },
    });
  };

  return { toggleLikeMutation, toggleLikeLoading };
};
