import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { showDateFormat } from "../../../../utils/func/time";
import { Td } from "../../../atomics/table/Table";
import { MainText } from "../../../atomics/typographys/Main";
import TableContent from "../../../molecules/tables/TableContent";
import { UserVacationTableContent_vacation$key } from "./__generated__/UserVacationTableContent_vacation.graphql";

interface IUserVacationTableContent {
  vacation: UserVacationTableContent_vacation$key;
}

const userVacationTableContentFragment = graphql`
  fragment UserVacationTableContent_vacation on Vacation {
    id
    startDate
    endDate
    duration
    isHalf
    confirmed {
      byCeo
      byManager
      byLeader
    }
  }
`;
const UserVacationTableContent = ({ vacation }: IUserVacationTableContent) => {
  const {
    id: vacationId,
    confirmed,
    duration,
    endDate,
    isHalf,
    startDate,
  } = useFragment(userVacationTableContentFragment, vacation);
  if (!vacationId) return <></>;

  const { byCeo, byLeader, byManager } = confirmed;
  const isApproved = byCeo && byLeader && byManager;

  return (
    <TableContent>
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
      <Td role="gridcell">
        <MainText>{isApproved ? "승인" : "미승인"}</MainText>
      </Td>
    </TableContent>
  );
};

export default UserVacationTableContent;
