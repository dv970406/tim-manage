import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { showDateFormat } from "../../../../utils/time/time";
import { MainText } from "../../../atomics/typographys/texts";
import { Td, Tr } from "../../../molecules/tables/Td";
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
  const tableContentData = useFragment(
    userVacationTableContentFragment,
    vacation
  );
  if (!tableContentData) return <></>;

  const {
    confirmed: { byCeo, byLeader, byManager },
  } = tableContentData;
  const isApproved = byCeo && byLeader && byManager;

  return (
    <Tr style={{ cursor: "auto" }}>
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
      <Td role="gridcell">
        <MainText>{isApproved ? "승인" : "미승인"}</MainText>
      </Td>
    </Tr>
  );
};

export default UserVacationTableContent;
