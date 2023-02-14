import { graphql } from "babel-plugin-relay/macro";
import React, { Dispatch, SetStateAction } from "react";
import { useFragment } from "react-relay";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../css/theme";
import { MainText } from "../../../atomics/typographys/texts";
import { Td, Tr } from "../../../molecules/tables/Td";
import { ManagerTeamTableContent_team$key } from "../../../templates/content/manager/__generated__/ManagerTeamTableContent_team.graphql";

interface IManagerTeamTableContent {
  team: ManagerTeamTableContent_team$key;
  clickedTeamId: string;
  setClickedTeamId: Dispatch<SetStateAction<string>>;
}

const managerTeamTableContentFragment = graphql`
  fragment ManagerTeamTableContent_team on Team {
    id
    team
  }
`;
const ManagerTeamTableContent = ({
  team,
  clickedTeamId,
  setClickedTeamId,
}: IManagerTeamTableContent) => {
  const tableContentData = useFragment(managerTeamTableContentFragment, team);

  const clickedTeam = clickedTeamId === tableContentData.id;
  return (
    <Tr
      onClick={() => setClickedTeamId(tableContentData.id)}
      style={{
        ...(clickedTeam && { backgroundColor: theme.bgColors.purple }),
      }}
    >
      <Td role="gridcell">
        <MainText>{tableContentData.team}</MainText>
      </Td>
    </Tr>
  );
};

export default ManagerTeamTableContent;
