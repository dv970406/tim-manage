import { useEffect, useState } from "react";
import { useGetPositions } from "../../client/position/GetPositions.client";
import { useGetTeams } from "../../client/team/GetTeams.client";
import { ISelectFormat } from "../../components/organisms/content/home/SelectUsers";

interface IOrders {
  order1?: string[];
  order2?: string[];
  order3?: string[];
}

export const useOrderUsers = () => {
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

  // order1 : positions
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

  // order2 : teams
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

  return {
    selectablePositions,
    selectableTeams,
    selectedPositions,
    selectedTeams,
    orders,
    handleChangePositions,
    handleChangeTeams,
  };
};
