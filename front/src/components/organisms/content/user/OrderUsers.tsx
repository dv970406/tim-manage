import { useEffect } from "react";
import { RefetchFnDynamic } from "react-relay";
import ReactSelect from "react-select";
import { Options } from "react-relay/relay-hooks/useRefetchableFragmentNode";
import { UsersTable_user$key } from "../../../templates/content/user/__generated__/UsersTable_user.graphql";
import { UsersTablePaginationQuery } from "../../../templates/content/user/__generated__/UsersTablePaginationQuery.graphql";
import { orderSelectStyles } from "../../../../utils/css/select";
import { theme } from "../../../../css/theme";
import { RowBox } from "../../../atomics/boxes/FlexBox";
import { useOrderUsers } from "../../../../utils/hooks/orderUsers.hook";

interface IOrderUsers {
  refetch: RefetchFnDynamic<
    UsersTablePaginationQuery,
    UsersTable_user$key,
    Options
  >;
}

const OrderUsers = ({ refetch }: IOrderUsers) => {
  const {
    orders,
    selectablePositions,
    selectableTeams,
    selectedPositions,
    selectedTeams,
    handleChangePositions,
    handleChangeTeams,
  } = useOrderUsers();

  useEffect(() => {
    if (!orders) return;
    refetch({ orders });
  }, [orders]);
  return (
    <RowBox style={{ justifyContent: "space-between" }}>
      <div></div>
      <div style={{ display: "flex", gap: theme.spacing.xl }}>
        <ReactSelect
          value={selectedPositions}
          maxMenuHeight={200}
          isMulti
          loadingMessage={() => "직책 정보를 불러오는 중입니다."}
          noOptionsMessage={() => "존재하지 않는 직책입니다."}
          placeholder="직책 정렬"
          name="positions"
          options={selectablePositions}
          styles={orderSelectStyles}
          onChange={handleChangePositions}
        />
        <ReactSelect
          value={selectedTeams}
          maxMenuHeight={200}
          isMulti
          loadingMessage={() => "팀 정보를 불러오는 중입니다."}
          noOptionsMessage={() => "존재하지 않는 팀입니다."}
          placeholder="팀 정렬"
          name="teams"
          options={selectableTeams}
          styles={orderSelectStyles}
          onChange={handleChangeTeams}
        />
      </div>
    </RowBox>
  );
};

export default OrderUsers;
