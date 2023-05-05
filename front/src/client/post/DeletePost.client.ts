import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { deleteEdgeOfData } from "../../utils/shared/connection";
import { environment } from "../client";
import {
  DeletePostMutation,
  DeletePostMutation$variables,
} from "./__generated__/DeletePostMutation.graphql";

const deletePostQuery = graphql`
  mutation DeletePostMutation($id: ID!) {
    deletePost(input: { id: $id }) {
      ok
      error
      deletedPostId @deleteRecord
    }
  }
`;

export const useDeletePost = () => {
  const [deletePostLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const deletePostMutation = (variables: DeletePostMutation$variables) => {
    setIsLoading(true);
    commitMutation<DeletePostMutation>(environment, {
      mutation: deletePostQuery,
      variables,
      onCompleted: ({ deletePost: { ok, error } }) => {
        setIsLoading(false);
        if (!ok) {
          alert(error);
          return;
        }
        navigate("/post");
      },
      updater: (proxyStore, { deletePost: { deletedPostId } }) => {
        const rootRecord = proxyStore.getRoot();

        deleteEdgeOfData({
          record: rootRecord,
          key: "PostsTable_getPosts",
          dataId: deletedPostId,
        });

        const myInfoRecord = proxyStore
          .get("client:root:getMyInfo")
          ?.getLinkedRecord("user");

        deleteEdgeOfData({
          record: myInfoRecord,
          key: "ShowUserPosts_myPostsConnection",
          dataId: deletedPostId,
        });
      },
    });
  };

  return { deletePostMutation, deletePostLoading };
};
