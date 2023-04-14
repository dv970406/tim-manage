import React, { Suspense, useEffect, useState } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import {
  getManagerTeamsQuery,
  useGetManagerTeams,
} from "../../client/manager/GetManagerTeams.client";
import { GetManagerTeamsQuery } from "../../client/manager/__generated__/GetManagerTeamsQuery.graphql";
import Loading from "../../components/molecules/shared/Loading";
import { Section } from "../../components/atomics/boxes/Sections";
import CenterFrame from "../../components/molecules/boxes/CenterFrame";
import CreateTeamForm from "../../components/templates/content/manager/CreateTeamForm";
import ManagerTeamsTable from "../../components/templates/content/manager/ManagerTeamsTable";
import MutateTeamForm from "../../components/templates/content/manager/MutateTeamForm";
import { ColumnBox } from "../../components/atomics/boxes/FlexBox";

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
