import React, { useEffect, useState } from "react";
import { RefetchFnDynamic } from "react-relay";
import ReactSelect from "react-select";
import { useGetPositions } from "../../../../client/position/GetPositions.client";
import { useGetTeams } from "../../../../client/team/GetTeams.client";
import { ISelectFormat, selectStyles } from "../home/SelectUsers";
import { Options } from "react-relay/relay-hooks/useRefetchableFragmentNode";
import { UsersTable_user$key } from "../../../templates/content/user/__generated__/UsersTable_user.graphql";
import { UsersTablePaginationQuery } from "../../../templates/content/user/__generated__/UsersTablePaginationQuery.graphql";
import { RowBox } from "../../../atomics/boxes/Boxes";

interface IOrderUsers {
  refetch: RefetchFnDynamic<
    UsersTablePaginationQuery,
    UsersTable_user$key,
    Options
  >;
}

interface IOrders {
  order1?: string[];
  order2?: string[];
  order3?: string[];
}

const OrderUsers = ({ refetch }: IOrderUsers) => {
  const { positions } = useGetPositions();
  const { teams } = useGetTeams();

  const selectablePositions = positions?.map((position) => ({
    value: position.id,
    label: position.position,
  }));

  const selectableTeams = teams?.map((team) => ({
    value: team.id,
    label: team.team,
  }));

  // 메모이징 활용할 예정
  const [selectedPositions, setSelectedPositions] = useState<ISelectFormat[]>(
    []
  );
  const [selectedTeams, setSelectedTeams] = useState<ISelectFormat[]>([]);

  const [orders, setOrders] = useState<IOrders | null>(null);

  const handleChangePositions = (selectedPositions: any) => {
    setSelectedPositions(selectedPositions);
    const selectedPositionsId = selectedPositions.map(
      (position: ISelectFormat) => position.value
    );
    setOrders((prev) => ({
      ...prev,
      order1: selectedPositionsId,
    }));
  };
  const handleChangeTeams = (selectedTeams: any) => {
    setSelectedTeams(selectedTeams);
    const selectedTeamsId = selectedTeams.map(
      (team: ISelectFormat) => team.value
    );
    setOrders((prev) => ({
      ...prev,
      order2: selectedTeamsId,
    }));
  };

  // order1 : positions
  // order2 : teams
  useEffect(() => {
    if (!orders) return;
    refetch({ orders });
  }, [orders]);
  return (
    <RowBox>
      <ReactSelect
        value={selectedPositions}
        maxMenuHeight={200}
        isMulti
        loadingMessage={() => "직책 정보를 불러오는 중입니다."}
        noOptionsMessage={() => "존재하지 않는 직책입니다."}
        placeholder="직책을 골라주세요."
        name="positions"
        options={selectablePositions}
        styles={selectStyles}
        onChange={handleChangePositions}
      />
      <ReactSelect
        value={selectedTeams}
        maxMenuHeight={200}
        isMulti
        loadingMessage={() => "팀 정보를 불러오는 중입니다."}
        noOptionsMessage={() => "존재하지 않는 팀입니다."}
        placeholder="팀을 골라주세요."
        name="teams"
        options={selectableTeams}
        styles={selectStyles}
        onChange={handleChangeTeams}
      />
    </RowBox>
  );
};

export default OrderUsers;
