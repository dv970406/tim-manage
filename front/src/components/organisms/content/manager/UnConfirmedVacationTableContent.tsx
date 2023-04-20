import { graphql } from "babel-plugin-relay/macro";
import { Dispatch, SetStateAction } from "react";
import { useFragment } from "react-relay";
import { showDateFormat } from "../../../../utils/shared/time";
import { Td } from "../../../atomics/table/Table";
import { MainText } from "../../../atomics/typographys/Main";
import TableContent from "../../../molecules/tables/TableContent";
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
  const {
    id: unConfirmedVacationId,
    duration,
    endDate,
    isHalf,
    startDate,
    user,
  } = useFragment(unConfirmedVacationTableContentFragment, vacation);

  const clickedVacation = clickedVacationId === unConfirmedVacationId;

  return (
    <TableContent
      onClick={() => setClickedVacationId(unConfirmedVacationId)}
      clickedItem={clickedVacation}
    >
      <Td role="gridcell">
        <MainText>{user.name}</MainText>
      </Td>
      <Td role="gridcell">
        <MainText>{showDateFormat(startDate)}</MainText>
      </Td>
      <Td role="gridcell">
        <MainText>{showDateFormat(endDate)}</MainText>
      </Td>
      <Td role="gridcell">
        <MainText>{duration}</MainText>
      </Td>
      <Td role="gridcell">
        <MainText>{isHalf ? "O" : "X"}</MainText>
      </Td>
    </TableContent>
  );
};

export default UnConfirmedVacationTableContent;
