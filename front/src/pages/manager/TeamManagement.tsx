import React, { Suspense, useEffect, useState } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import {
  getManagerTeamsQuery,
  useGetManagerTeams,
} from "../../client/manager/GetManagerTeams.client";
import { GetManagerTeamsQuery } from "../../client/manager/__generated__/GetManagerTeamsQuery.graphql";
import { useGetMyInfo } from "../../client/user/GetMyInfo.client";
import { ColumnBox } from "../../components/atomics/boxes/Boxes";
import Loading from "../../components/atomics/boxes/Loading";
import { Section } from "../../components/atomics/sections/sections";
import CenterFrame from "../../components/molecules/boxes/CenterFrame";
import Table from "../../components/molecules/tables/Table";
import ManagerTeamTableContent from "../../components/organisms/content/manager/ManagerTeamTableContent";
import CreateTeamForm from "../../components/templates/content/manager/CreateTeamForm";
import ManagerTeamsTable from "../../components/templates/content/manager/ManagerTeamsTable";
import MutateTeamForm from "../../components/templates/content/manager/MutateTeamForm";
import { theme } from "../../css/theme";

// 여기서 nominateLeader도 처리
const TeamManagementPage = () => {
  const [managerTeamsQueryReference, loadManagerTeamsQuery] =
    useQueryLoader<GetManagerTeamsQuery>(getManagerTeamsQuery);

  useEffect(() => {
    loadManagerTeamsQuery({});
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      {managerTeamsQueryReference && (
        <TeamManagement
          managerTeamsQueryReference={managerTeamsQueryReference}
        />
      )}
    </Suspense>
  );
};
interface ITeamManagement {
  managerTeamsQueryReference: PreloadedQuery<GetManagerTeamsQuery>;
}

const TeamManagement = ({ managerTeamsQueryReference }: ITeamManagement) => {
  const { teams } = useGetManagerTeams(managerTeamsQueryReference);

  const [clickedTeamId, setClickedTeamId] = useState("");

  if (!teams) return <></>;

  return (
    <CenterFrame>
      <Section style={{ width: "60%" }}>
        {teams && (
          <ManagerTeamsTable
            teams={teams}
            clickedTeamId={clickedTeamId}
            setClickedTeamId={setClickedTeamId}
          />
        )}
      </Section>
      <ColumnBox style={{ width: "40%" }}>
        <Section>
          <Suspense fallback={<Loading />}>
            <CreateTeamForm />
          </Suspense>
        </Section>
        <Section>
          <Suspense fallback={<Loading />}>
            <MutateTeamForm
              clickedTeamId={clickedTeamId}
              setClickedTeamId={setClickedTeamId}
            />
          </Suspense>
        </Section>
      </ColumnBox>
    </CenterFrame>
  );
};
export default TeamManagementPage;
