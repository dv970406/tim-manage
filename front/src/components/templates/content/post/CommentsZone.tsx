import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { ColumnBox, GapBox } from "../../../atomics/boxes/Boxes";
import { CommentsZone_post$key } from "./__generated__/CommentsZone_post.graphql";
import Comment from "../../../organisms/content/post/Comment";
import CreateComment from "../../../organisms/content/post/CreateComment";
import { theme } from "../../../../css/theme";

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
    <ColumnBox>
      <GapBox
        style={{ overflow: "auto", height: "100%", gap: theme.spacing.xl }}
      >
        {/* reverse로 뒤집어야함 - createComment mutation의 updater 부분 참조 */}
        {commentsZoneData.comments
          .map(
            (comment: any) =>
              comment && <Comment key={comment.__id} comment={comment} />
          )
          .reverse()}
      </GapBox>
      <GapBox>
        <CreateComment postId={post.id} />
      </GapBox>
    </ColumnBox>
  );
};

export default CommentsZone;
