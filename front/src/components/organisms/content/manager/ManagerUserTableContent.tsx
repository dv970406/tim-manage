import { graphql } from "babel-plugin-relay/macro";
import { Dispatch, SetStateAction } from "react";
import { useFragment } from "react-relay";
import { POSITION } from "../../../../utils/constants/user.constant";
import { MainText } from "../../../atomics/typographys/Main";
import { ManagerUserTableContent_user$key } from "../../../templates/content/manager/__generated__/ManagerUserTableContent_user.graphql";
import TableContent from "../../../molecules/tables/TableContent";
import { Td } from "../../../atomics/table/Table";

interface IManagerUserTableContent {
  user: ManagerUserTableContent_user$key;
  clickedUserId: string;
  setClickedUserId: Dispatch<SetStateAction<string>>;
  myPosition?: string;
}

const managerUserTableContentFragment = graphql`
  fragment ManagerUserTableContent_user on User {
    id
    name
    email
    isManager
    position {
      id
      position
    }
    team {
      id
      team
    }
    joinDate
    createdAt
  }
`;
const ManagerUserTableContent = ({
  user,
  clickedUserId,
  setClickedUserId,
  myPosition,
}: IManagerUserTableContent) => {
  const {
    id: userId,
    isManager,
    name,
    position,
    team,
  } = useFragment(managerUserTableContentFragment, user);

  // 관리자인 사람과 대표님은 리스트에서 제외, 단 대표님이라면 모두 보이게함
  if (myPosition === POSITION["대표"]) {
  } else if (isManager || position?.position === POSITION["대표"]) {
    return <></>;
  }

  const clickedUser = clickedUserId === userId;
  return (
    <TableContent
      onClick={() => setClickedUserId(userId)}
      clickedItem={clickedUser}
    >
      <Td role="gridcell">
        <MainText>{name}</MainText>
      </Td>
      <Td role="gridcell">
        <MainText>{position.position}</MainText>
      </Td>
      <Td role="gridcell">
        <MainText>{team.team}</MainText>
      </Td>
    </TableContent>
  );
};

export default ManagerUserTableContent;
