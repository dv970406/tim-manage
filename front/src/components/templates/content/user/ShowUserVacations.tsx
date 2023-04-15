import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { usePaginationFragment } from "react-relay";
import { useOutletContext } from "react-router-dom";
import { RowBox } from "../../../atomics/boxes/FlexBox";
import { MainText } from "../../../atomics/typographys/Main";
import UserVacationTableContent from "../../../organisms/content/user/UserVacationTableContent";
import { InfiniteScrollTable } from "../../../organisms/scrolls/InfiniteScrollTable";
import { ShowUserVacationsPaginationQuery } from "./__generated__/ShowUserVacationsPaginationQuery.graphql";
import { ShowUserVacations_vacation$key } from "./__generated__/ShowUserVacations_vacation.graphql";

const showUserVacationsFragment = graphql`
  fragment ShowUserVacations_vacation on User
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
    hasNext,
    loadNext,
    isLoadingNext,
  } = usePaginationFragment<
    ShowUserVacationsPaginationQuery,
    ShowUserVacations_vacation$key
  >(showUserVacationsFragment, user);

  return (
    <>
      <RowBox style={{ justifyContent: "space-between" }}>
        <MainText>사용 연차 목록</MainText>

        <MainText>남은 연차 : {availableVacation}</MainText>
      </RowBox>
      <InfiniteScrollTable
        hasNext={hasNext}
        loadNext={loadNext}
        isLoadingNext={isLoadingNext}
        headers={["시작일", "종료일", "기간", "반차여부", "승인여부"]}
      >
        {edges?.map(
          (vacation) =>
            vacation?.node && (
              <UserVacationTableContent
                key={vacation.cursor}
                vacation={vacation.node}
              />
            )
        )}
      </InfiniteScrollTable>
    </>
  );
};

export default ShowUserVacations;
