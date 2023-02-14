import React, { Suspense, useEffect, useState } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import {
  getManagerPositionsQuery,
  useGetManagerPositions,
} from "../../client/manager/GetManagerPositions.client";
import { GetManagerPositionsQuery } from "../../client/manager/__generated__/GetManagerPositionsQuery.graphql";
import { GapBox } from "../../components/atomics/boxes/Boxes";
import { Section } from "../../components/atomics/sections/sections";
import CreatePositionForm from "../../components/templates/content/manager/CreatePositionForm";
import ManagerPositionsTable from "../../components/templates/content/manager/ManagerPositionsTable";
import MutatePositionForm from "../../components/templates/content/manager/MutatePositionForm";
import { theme } from "../../css/theme";

const PositionManagementPage = () => {
  const [managerPositionsQueryReference, loadManagerPositionsQuery] =
    useQueryLoader<GetManagerPositionsQuery>(getManagerPositionsQuery);

  useEffect(() => {
    loadManagerPositionsQuery({});
  }, []);
  return (
    <Suspense fallback="qweewqqweewqqweewqqweewqqweewq">
      {managerPositionsQueryReference && (
        <PositionManagement
          managerPositionsQueryReference={managerPositionsQueryReference}
        />
      )}
    </Suspense>
  );
};
interface IPositionManagement {
  managerPositionsQueryReference: PreloadedQuery<GetManagerPositionsQuery>;
}

const PositionManagement = ({
  managerPositionsQueryReference,
}: IPositionManagement) => {
  const { positions } = useGetManagerPositions(managerPositionsQueryReference);

  const [clickedPositionId, setClickedPositionId] = useState("");

  if (!positions) return <></>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <GapBox
        style={{
          flexDirection: "row",
          width: "70%",
          height: "80%",
        }}
      >
        <Section style={{ width: "60%" }}>
          {positions && (
            <ManagerPositionsTable
              positions={positions}
              clickedPositionId={clickedPositionId}
              setClickedPositionId={setClickedPositionId}
            />
          )}
        </Section>
        <GapBox style={{ width: "40%", gap: theme.spacing.xl }}>
          <Section>
            <Suspense fallback="hihihihi">
              <CreatePositionForm />
            </Suspense>
          </Section>
          <Section>
            <Suspense fallback="hihihihi">
              <MutatePositionForm
                clickedPositionId={clickedPositionId}
                setClickedPositionId={setClickedPositionId}
              />
            </Suspense>
          </Section>
        </GapBox>
      </GapBox>
    </div>
  );
};
export default PositionManagementPage;
