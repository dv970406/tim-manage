import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useFragment, usePaginationFragment } from "react-relay";
import { useOutletContext } from "react-router-dom";
import { MainText } from "../../../atomics/typographys/texts";
import Table from "../../../molecules/tables/Table";
import UserVacationTableContent from "../../../organisms/content/user/UserVacationTableContent";
import { ShowUserVacations_vacation$key } from "./__generated__/ShowUserVacations_vacation.graphql";

const showUserVacationsFragment = graphql`
  fragment ShowUserVacations_vacation on User
  @argumentDefinitions(first: { type: "Int!" }, after: { type: "DateTime" })
  @refetchable(queryName: "ShowUserVacationsPaginationQuery") {
    availableVacation
    myVacationsConnection(first: $first, after: $after)
      @connection(key: "ShowUserVacations_myVacationsConnection") {
      edges {
        node {
          ...UserVacationTableContent_vacation
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const ShowUserVacations = () => {
  const user: ShowUserVacations_vacation$key = useOutletContext();
  const {
    data: {
      myVacationsConnection: { edges },
      availableVacation,
    },
  } = usePaginationFragment(showUserVacationsFragment, user);

  return (
    <>
      <MainText>남은 휴가 : {availableVacation}</MainText>

      <Table headers={["시작일", "종료일", "기간", "반차여부", "승인여부"]}>
        {edges?.map(
          (vacation) =>
            vacation?.node && (
              <UserVacationTableContent
                key={vacation.cursor}
                vacation={vacation.node}
              />
            )
        )}
      </Table>
    </>
  );
};

export default ShowUserVacations;
