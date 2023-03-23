import React, { Suspense, useEffect, useState } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import { useConfirmVacation } from "../../client/manager/ConfirmVacation.client";
import {
  getUnConfirmedByMeVacationsQuery,
  useGetUnConfirmedByMeVacations,
} from "../../client/manager/GetUnConfirmedByMeVacations.client";
import { GetUnConfirmedByMeVacationsQuery } from "../../client/manager/__generated__/GetUnConfirmedByMeVacationsQuery.graphql";
import Loading from "../../components/atomics/boxes/Loading";
import { Section } from "../../components/atomics/sections/sections";
import CenterFrame from "../../components/molecules/boxes/CenterFrame";
import UnConfirmedVacationsTable from "../../components/templates/content/manager/UnConfirmedVacationsTable";

const UnConfirmedVacationsPage = () => {
  const [
    getUnConfirmedByMeVacationsQueryReference,
    loadGetUnConfirmedByMeVacationsQuery,
  ] = useQueryLoader<GetUnConfirmedByMeVacationsQuery>(
    getUnConfirmedByMeVacationsQuery
  );

  useEffect(() => {
    loadGetUnConfirmedByMeVacationsQuery({});
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      {getUnConfirmedByMeVacationsQueryReference && (
        <UnConfirmedVacations
          getUnConfirmedByMeVacationsQueryReference={
            getUnConfirmedByMeVacationsQueryReference
          }
        />
      )}
    </Suspense>
  );
};

interface IUnConfirmedVacations {
  getUnConfirmedByMeVacationsQueryReference: PreloadedQuery<GetUnConfirmedByMeVacationsQuery>;
}
const UnConfirmedVacations = ({
  getUnConfirmedByMeVacationsQueryReference,
}: IUnConfirmedVacations) => {
  const { unConfirmedByMeVacations } = useGetUnConfirmedByMeVacations(
    getUnConfirmedByMeVacationsQueryReference
  );
  const [clickedVacationId, setClickedVacationId] = useState("");

  if (!unConfirmedByMeVacations) return <></>;

  return (
    <CenterFrame>
      <Section>
        {unConfirmedByMeVacations && (
          <UnConfirmedVacationsTable
            unConfirmedVacations={unConfirmedByMeVacations}
            clickedVacationId={clickedVacationId}
            setClickedVacationId={setClickedVacationId}
          />
        )}
      </Section>
    </CenterFrame>
  );
};

export default UnConfirmedVacationsPage;
