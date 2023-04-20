import { graphql } from "babel-plugin-relay/macro";
import { Dispatch, SetStateAction } from "react";
import { useFragment } from "react-relay";
import { MainText } from "../../../atomics/typographys/Main";
import { ManagerPositionTableContent_position$key } from "../../../templates/content/manager/__generated__/ManagerPositionTableContent_position.graphql";
import TableContent from "../../../molecules/tables/TableContent";
import { Td } from "../../../atomics/table/Table";

interface IManagerPositionTableContent {
  position: ManagerPositionTableContent_position$key;
  clickedPositionId: string;
  setClickedPositionId: Dispatch<SetStateAction<string>>;
}

const managerPositionTableContentFragment = graphql`
  fragment ManagerPositionTableContent_position on Position {
    id
    position
  }
`;
const ManagerPositionTableContent = ({
  position,
  clickedPositionId,
  setClickedPositionId,
}: IManagerPositionTableContent) => {
  const { id: positionId, position: positionName } = useFragment(
    managerPositionTableContentFragment,
    position
  );

  const clickedPosition = clickedPositionId === positionId;
  return (
    <TableContent
      onClick={() => setClickedPositionId(positionId)}
      clickedItem={clickedPosition}
    >
      <Td role="gridcell">
        <MainText>{positionName}</MainText>
      </Td>
    </TableContent>
  );
};

export default ManagerPositionTableContent;
