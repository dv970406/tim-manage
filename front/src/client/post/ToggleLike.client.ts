import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, ConnectionHandler, useMutation } from "react-relay";
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

        const addLikePayload = proxyStore
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

        if (!myInfoRecord) return;
        const myLikeConnection = ConnectionHandler.getConnection(
          myInfoRecord,
          "ShowUserLikes_myLikesConnection"
        );
        console.log(myLikeConnection);
        if (myLikeConnection)
          ConnectionHandler.insertEdgeBefore(myLikeConnection, addLikePayload);

        // 좋아요를 달면 myInfo에 좋아요한 게시글을 추가
        // const rootGetMyInfo = proxyStore.get("client:root:getMyInfo");
        // const rootGetMyInfoUser = rootGetMyInfo?.getLinkedRecord("user");
        // const oldMyLikes = rootGetMyInfoUser?.getLinkedRecords("likes");
        // if (isLiked) {
        //   if (toggleLike?.like?.id) proxyStore.delete(toggleLike?.like?.id);
        // } else {
        //   if (oldMyLikes) {
        //     rootGetMyInfoUser?.setLinkedRecords(
        //       [...oldMyLikes, addLikePayload],
        //       "likes"
        //     );
        //   }
        // }
      },
    });
  };

  return { toggleLikeMutation, toggleLikeLoading };
};
