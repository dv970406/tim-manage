import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { useOutletContext } from "react-router-dom";
import { ColumnBox } from "../../../atomics/boxes/FlexBox";
import { ShowUserInfo_user$key } from "./__generated__/ShowUserInfo_user.graphql";

const showUserInfoFragment = graphql`
  fragment ShowUserInfo_user on User {
    id
    name
    email
    isManager
    joinDate
    position {
      id
      position
    }
    team {
      id
      team
    }
    availableVacation
  }
`;
const ShowUserInfo = () => {
  const user: ShowUserInfo_user$key = useOutletContext();
  const userInfo = useFragment(showUserInfoFragment, user);

  return <ColumnBox>{userInfo?.email}</ColumnBox>;
};

export default ShowUserInfo;
