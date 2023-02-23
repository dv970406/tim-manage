import React, { Suspense, useEffect, useState } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import {
  getManagerTeamsQuery,
  useGetManagerTeams,
} from "../../client/manager/GetManagerTeams.client";
import { GetManagerTeamsQuery } from "../../client/manager/__generated__/GetManagerTeamsQuery.graphql";
import { useGetMyInfo } from "../../client/user/GetMyInfo.client";
import { GapBox } from "../../components/atomics/boxes/Boxes";
import { Section } from "../../components/atomics/sections/sections";
import CenterBox from "../../components/molecules/boxes/CenterBox";
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
    <Suspense fallback="qweewqqweewqqweewqqweewqqweewq">
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
    <CenterBox>
      <Section style={{ width: "60%" }}>
        {teams && (
          <ManagerTeamsTable
            teams={teams}
            clickedTeamId={clickedTeamId}
            setClickedTeamId={setClickedTeamId}
          />
        )}
      </Section>
      <GapBox style={{ width: "40%" }}>
        <Section>
          <Suspense fallback="hihihihi">
            <CreateTeamForm />
          </Suspense>
        </Section>
        <Section>
          <Suspense fallback="hihihihi">
            <MutateTeamForm
              clickedTeamId={clickedTeamId}
              setClickedTeamId={setClickedTeamId}
            />
          </Suspense>
        </Section>
      </GapBox>
    </CenterBox>
  );
};
export default TeamManagementPage;
