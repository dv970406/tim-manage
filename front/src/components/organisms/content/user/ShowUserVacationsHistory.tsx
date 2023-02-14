import { graphql } from "babel-plugin-relay/macro";
import React, { Dispatch, SetStateAction } from "react";
import { useFragment } from "react-relay";
import { theme } from "../../../../css/theme";
import { showDateFormat } from "../../../../utils/time/time";
import { MainText } from "../../../atomics/typographys/texts";
import { Td, Tr } from "../../../molecules/tables/Td";
import { ShowUserVacationsHistory_vacation$key } from "./__generated__/ShowUserVacationsHistory_vacation.graphql";

interface IShowUserVacationsHistory {
  vacation: ShowUserVacationsHistory_vacation$key;
}

const showUserVacationsHistoryFragment = graphql`
  fragment ShowUserVacationsHistory_vacation on Vacation {
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
const ShowUserVacationsHistory = ({ vacation }: IShowUserVacationsHistory) => {
  const tableContentData = useFragment(
    showUserVacationsHistoryFragment,
    vacation
  );
  const {
    confirmed: { byCeo, byLeader, byManager },
  } = tableContentData;
  const isApproved = byCeo && byLeader && byManager;

  return (
    <Tr>
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

export default ShowUserVacationsHistory;
