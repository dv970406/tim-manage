import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { environment } from "../client";
import {
  CreateCommentMutation,
  CreateCommentMutation$variables,
} from "./__generated__/CreateCommentMutation.graphql";

const createCommentQuery = graphql`
  mutation CreateCommentMutation($postId: ID!, $content: String!) {
    createComment(input: { postId: $postId, content: $content }) {
      ok
      error
      comment {
        id
        content
        user {
          id
          name
        }
        createdAt
        isMyComment
      }
      postId
    }
  }
`;

export const useCreateComment = () => {
  const [createCommentLoading, setIsLoading] = useState(false);
  const [createCommentSuccess, setCreateCommentSuccess] = useState<boolean>();

  const createCommentMutation = (
    variables: CreateCommentMutation$variables
  ) => {
    setIsLoading(true);
    setCreateCommentSuccess(false);
    commitMutation<CreateCommentMutation>(environment, {
      mutation: createCommentQuery,
      variables,
      updater: (proxyStore, { createComment }) => {
        const addCommentPayload = proxyStore
          .getRootField("createComment")
          .getLinkedRecord("comment");

        if (!addCommentPayload) return;

        const rootGetPosts = proxyStore.get(
          `client:root:getPost(input:{"id":"${createComment.postId}"})`
        );

        // 댓글 추가하면 해당 Post의 countComments +1 해줘야함
        const targetPost = rootGetPosts?.getLinkedRecord("post");
        const prevCount = targetPost?.getValue("countComments") || 0;
        targetPost?.setValue(+prevCount + 1, "countComments");

        const oldComments = targetPost?.getLinkedRecords("comments");

        if (!targetPost || !oldComments) return;

        // 메모이징하려면 배열 맨 끝에 새로운 데이터를 달아야함.
        // 맨 앞에다가 달면 모든 아이템이 index 1씩 밀려서 모든 아이템이 새로운 데이터라고 판단해서 메모이징을 해도 리렌더링되어버림
        // 어쩔 수 없이 reverse함수를 쓰던가하자
        targetPost?.setLinkedRecords(
          [...oldComments, addCommentPayload],
          "comments"
        );
      },

      onCompleted: ({ createComment: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);

          setCreateCommentSuccess(false);
          return;
        }
        setCreateCommentSuccess(true);
      },
    });
  };
  return { createCommentMutation, createCommentLoading, createCommentSuccess };
};