import { graphql } from "babel-plugin-relay/macro";
import React, { Dispatch, SetStateAction } from "react";
import { useFragment } from "react-relay";
import { MainText } from "../../../atomics/typographys/texts";
import { Td, Tr } from "../../../molecules/tables/Td";
import { ManagerPositionTableContent_position$key } from "../../../templates/content/manager/__generated__/ManagerPositionTableContent_position.graphql";
import TableContent from "./TableContent";

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
  const tableContentData = useFragment(
    managerPositionTableContentFragment,
    position
  );

  const clickedPosition = clickedPositionId === tableContentData.id;
  return (
    <TableContent
      onClick={() => setClickedPositionId(tableContentData.id)}
      clickedItem={clickedPosition}
    >
      <Td role="gridcell">
        <MainText>{tableContentData.position}</MainText>
      </Td>
    </TableContent>
  );
};

export default ManagerPositionTableContent;
