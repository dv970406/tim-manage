import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { ColumnBox, ScrollBox } from "../../../atomics/boxes/Boxes";
import { CommentsZone_post$key } from "./__generated__/CommentsZone_post.graphql";
import Comment from "../../../organisms/content/post/Comment";
import CreateComment from "../../../organisms/content/post/CreateComment";

interface ICommentsZoneFragment extends CommentsZone_post$key {
  id: string;
}

interface ICommentsZone {
  post: ICommentsZoneFragment;
}

const commentsZoneFragment = graphql`
  fragment CommentsZone_post on Post {
    comments {
      ...Comment_comment
    }
  }
`;

const CommentsZone = ({ post }: ICommentsZone) => {
  const commentsZoneData = useFragment(commentsZoneFragment, post);

  return (
    <>
      <ScrollBox>
        {/* reverse로 뒤집어야함 - createComment mutation의 updater 부분 참조 */}
        {commentsZoneData.comments
          .map(
            (comment: any) =>
              comment && <Comment key={comment.__id} comment={comment} />
          )
          .reverse()}
      </ScrollBox>
      <CreateComment postId={post.id} />
    </>
  );
};

export default CommentsZone;
