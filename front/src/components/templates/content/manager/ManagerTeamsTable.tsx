import React, { Dispatch, SetStateAction } from "react";
import Table from "../../../molecules/tables/Table";
import ManagerTeamTableContent from "../../../organisms/content/manager/ManagerTeamTableContent";
import { ManagerTeamTableContent_team$key } from "./__generated__/ManagerTeamTableContent_team.graphql";

interface IManagerTeamsTable {
  teams: readonly ManagerTeamTableContent_team$key[];
  clickedTeamId: string;
  setClickedTeamId: Dispatch<SetStateAction<string>>;
}

const ManagerTeamsTable = ({
  teams,
  clickedTeamId,
  setClickedTeamId,
}: IManagerTeamsTable) => {
  return (
    <Table headers={["팀"]}>
      {teams.map(
        (team: any) =>
          team && (
            <ManagerTeamTableContent
              key={team.__id}
              team={team}
              clickedTeamId={clickedTeamId}
              setClickedTeamId={setClickedTeamId}
            />
          )
      )}
    </Table>
  );
};

export default ManagerTeamsTable;
