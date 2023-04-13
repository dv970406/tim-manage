import React, { Suspense, useEffect, useState } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import {
  getManagerPositionsQuery,
  useGetManagerPositions,
} from "../../client/manager/GetManagerPositions.client";
import { GetManagerPositionsQuery } from "../../client/manager/__generated__/GetManagerPositionsQuery.graphql";
import Loading from "../../components/molecules/shared/Loading";
import { Section } from "../../components/atomics/sections/sections";
import CenterFrame from "../../components/molecules/boxes/CenterFrame";
import CreatePositionForm from "../../components/templates/content/manager/CreatePositionForm";
import ManagerPositionsTable from "../../components/templates/content/manager/ManagerPositionsTable";
import MutatePositionForm from "../../components/templates/content/manager/MutatePositionForm";
import { ColumnBox } from "../../components/atomics/boxes/FlexBox";

const PositionManagementPage = () => {
  const [managerPositionsQueryReference, loadManagerPositionsQuery] =
    useQueryLoader<GetManagerPositionsQuery>(getManagerPositionsQuery);

  useEffect(() => {
    loadManagerPositionsQuery({});
  }, []);
  return (
    <Suspense fallback={<Loading />}>
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
    <CenterFrame>
      <Section style={{ width: "60%" }}>
        {positions && (
          <ManagerPositionsTable
            positions={positions}
            clickedPositionId={clickedPositionId}
            setClickedPositionId={setClickedPositionId}
          />
        )}
      </Section>
      <ColumnBox style={{ width: "40%" }}>
        <Section>
          <Suspense fallback={<Loading />}>
            <CreatePositionForm />
          </Suspense>
        </Section>
        <Section>
          <Suspense fallback={<Loading />}>
            <MutatePositionForm
              clickedPositionId={clickedPositionId}
              setClickedPositionId={setClickedPositionId}
            />
          </Suspense>
        </Section>
      </ColumnBox>
    </CenterFrame>
  );
};
export default PositionManagementPage;
