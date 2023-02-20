import { graphql } from "babel-plugin-relay/macro";
import React, { Dispatch, SetStateAction } from "react";
import { useFragment } from "react-relay";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../css/theme";
import { POSITION_CEO } from "../../../../utils/constants/user.constant";
import { MainText } from "../../../atomics/typographys/texts";
import { Td, Tr } from "../../../molecules/tables/Td";
import { ManagerUserTableContent_user$key } from "../../../templates/content/manager/__generated__/ManagerUserTableContent_user.graphql";

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
  const tableContentData = useFragment(managerUserTableContentFragment, user);

  // 관리자인 사람과 대표님은 리스트에서 제외, 단 대표님이라면 모두 보이게함
  if (myPosition === POSITION_CEO) {
  } else if (
    tableContentData?.isManager ||
    tableContentData?.position?.position === POSITION_CEO
  ) {
    return <></>;
  }

  const clickedUser = clickedUserId === tableContentData?.id;
  return (
    <Tr
      onClick={() => setClickedUserId(tableContentData?.id)}
      style={{
        ...(clickedUser && { backgroundColor: theme.bgColors.purple }),
      }}
    >
      <Td role="gridcell">
        <MainText>{tableContentData?.name}</MainText>
      </Td>
      <Td role="gridcell">
        <MainText>{tableContentData?.position.position}</MainText>
      </Td>
      <Td role="gridcell">
        <MainText>{tableContentData?.team.team}</MainText>
      </Td>
    </Tr>
  );
};

export default ManagerUserTableContent;
