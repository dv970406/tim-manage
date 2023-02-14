import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "react-relay";
import { useOutletContext } from "react-router-dom";
import { GapBox } from "../../../atomics/boxes/Boxes";
import { MainText } from "../../../atomics/typographys/texts";
import Table from "../../../molecules/tables/Table";
import UnConfirmedVacationTableContent from "../../../organisms/content/manager/UnConfirmedVacationTableContent";
import ShowUserVacationsHistory from "../../../organisms/content/user/ShowUserVacationsHistory";
import { ShowUserVacations_vacation$key } from "./__generated__/ShowUserVacations_vacation.graphql";

const showUserVacationsFragment = graphql`
  fragment ShowUserVacations_vacation on User {
    availableVacation
    vacations {
      ...ShowUserVacationsHistory_vacation
    }
  }
`;

const ShowUserVacations = () => {
  const user: ShowUserVacations_vacation$key = useOutletContext();
  const showUserVacationsData = useFragment(showUserVacationsFragment, user);

  return (
    <>
      <MainText>남은 휴가 : {showUserVacationsData.availableVacation}</MainText>

      <Table headers={["시작일", "종료일", "기간", "반차여부", "승인여부"]}>
        {showUserVacationsData?.vacations?.map(
          (vacation: any) =>
            vacation && (
              <ShowUserVacationsHistory
                key={vacation.__id}
                vacation={vacation}
              />
            )
        )}
      </Table>
    </>
  );
};

export default ShowUserVacations;
