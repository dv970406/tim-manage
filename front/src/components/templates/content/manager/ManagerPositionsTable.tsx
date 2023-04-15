import React, { Dispatch, SetStateAction } from "react";
import { Table } from "../../../molecules/tables/Table";
import ManagerPositionTableContent from "../../../organisms/content/manager/ManagerPositionTableContent";
import { ManagerPositionTableContent_position$key } from "./__generated__/ManagerPositionTableContent_position.graphql";

interface IManagerPositionsTable {
  positions: readonly ManagerPositionTableContent_position$key[];
  clickedPositionId: string;
  setClickedPositionId: Dispatch<SetStateAction<string>>;
}
const ManagerPositionsTable = ({
  positions,
  clickedPositionId,
  setClickedPositionId,
}: IManagerPositionsTable) => {
  return (
    <Table headers={["직책"]}>
      {positions.map(
        (position: any) =>
          position && (
            <ManagerPositionTableContent
              key={position.__id}
              position={position}
              clickedPositionId={clickedPositionId}
              setClickedPositionId={setClickedPositionId}
            />
          )
      )}
    </Table>
  );
};

export default ManagerPositionsTable;
