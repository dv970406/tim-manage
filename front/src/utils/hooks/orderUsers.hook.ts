import { useEffect, useState } from "react";
import { useGetPositions } from "../../client/position/GetPositions.client";
import { useGetTeams } from "../../client/team/GetTeams.client";
import { ISelectFormat } from "../../components/organisms/content/home/SelectUsers";

interface IOrders {
  order1?: string[];
  order2?: string[];
  order3?: string[];
}

// Users에서 직책, 팀별로 정렬하기 위한 훅
export const useOrderUsers = () => {
  const { positions } = useGetPositions();
  const { teams } = useGetTeams();

  // 고를 수 있는 직책과 팀을 react-select 라이브러리 포맷에 맞게 변환한다.
  const selectablePositions = positions?.map((position) => ({
    value: position.id,
    label: position.position,
  }));
  const selectableTeams = teams?.map((team) => ({
    value: team.id,
    label: team.team,
  }));

  // 선택한 직책들과 팀들을 저장한다.
  const [selectedPositions, setSelectedPositions] = useState<ISelectFormat[]>(
    []
  );
  const [selectedTeams, setSelectedTeams] = useState<ISelectFormat[]>([]);

  // 선택한 직책, 팀으로 정렬(refetch)을 위해 백엔드로 보낼 포맷이다.
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
