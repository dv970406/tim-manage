import { graphql } from "babel-plugin-relay/macro";
import React, { Dispatch, SetStateAction } from "react";
import { useFragment } from "react-relay";
import { MainText } from "../../../atomics/typographys/Main";
import { ManagerTeamTableContent_team$key } from "../../../templates/content/manager/__generated__/ManagerTeamTableContent_team.graphql";
import TableContent from "../../../molecules/tables/TableContent";
import { Td } from "../../../atomics/table/Table";

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
  const { id: teamId, team: teamName } = useFragment(
    managerTeamTableContentFragment,
    team
  );

  const clickedTeam = clickedTeamId === teamId;
  return (
    <TableContent
      onClick={() => setClickedTeamId(teamId)}
      clickedItem={clickedTeam}
    >
      <Td role="gridcell">
        <MainText>{teamName}</MainText>
      </Td>
    </TableContent>
  );
};

export default ManagerTeamTableContent;
