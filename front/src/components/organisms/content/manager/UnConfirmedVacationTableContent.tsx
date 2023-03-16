import { graphql } from "babel-plugin-relay/macro";
import React, { Dispatch, SetStateAction } from "react";
import { useFragment } from "react-relay";
import { theme } from "../../../../css/theme";
import { showDateFormat } from "../../../../utils/time/time";
import { MainText } from "../../../atomics/typographys/texts";
import { Td, Tr } from "../../../molecules/tables/Td";
import TableContent from "./TableContent";
import { UnConfirmedVacationTableContent_vacation$key } from "./__generated__/UnConfirmedVacationTableContent_vacation.graphql";

interface IUnConfirmedVacationTableContent {
  vacation: UnConfirmedVacationTableContent_vacation$key;
  clickedVacationId: string;
  setClickedVacationId: Dispatch<SetStateAction<string>>;
}

const unConfirmedVacationTableContentFragment = graphql`
  fragment UnConfirmedVacationTableContent_vacation on Vacation {
    id
    startDate
    endDate
    duration
    isHalf
    user {
      id
      name
    }
  }
`;
const UnConfirmedVacationTableContent = ({
  vacation,
  clickedVacationId,
  setClickedVacationId,
}: IUnConfirmedVacationTableContent) => {
  const tableContentData = useFragment(
    unConfirmedVacationTableContentFragment,
    vacation
  );

  const clickedVacation = clickedVacationId === tableContentData.id;

  return (
    <TableContent
      onClick={() => setClickedVacationId(tableContentData.id)}
      clickedItem={clickedVacation}
    >
      <Td role="gridcell">
        <MainText>{tableContentData.user.name}</MainText>
      </Td>
      <Td role="gridcell">
        <MainText>{showDateFormat(tableContentData.startDate)}</MainText>
      </Td>
      <Td role="gridcell">
        <MainText>{showDateFormat(tableContentData.endDate)}</MainText>
      </Td>
      <Td role="gridcell">
        <MainText>{tableContentData.duration}</MainText>
      </Td>
      <Td role="gridcell">
        <MainText>{tableContentData.isHalf ? "O" : "X"}</MainText>
      </Td>
    </TableContent>
  );
};

export default UnConfirmedVacationTableContent;
