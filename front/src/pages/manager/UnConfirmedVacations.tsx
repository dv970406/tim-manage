import React, { Suspense, useEffect, useState } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import { useConfirmVacation } from "../../client/manager/ConfirmVacation.client";
import {
  getUnConfirmedByMeVacationsQuery,
  useGetUnConfirmedByMeVacations,
} from "../../client/manager/GetUnConfirmedByMeVacations.client";
import { GetUnConfirmedByMeVacationsQuery } from "../../client/manager/__generated__/GetUnConfirmedByMeVacationsQuery.graphql";
import { Section } from "../../components/atomics/sections/sections";
import { EndSubmitButton } from "../../components/molecules/buttons/Buttons";
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
    <Suspense fallback={"UnConfirmedVacations Loading..."}>
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Section style={{ width: "60%", height: "60%" }}>
        {unConfirmedByMeVacations && (
          <UnConfirmedVacationsTable
            unConfirmedVacations={unConfirmedByMeVacations}
            clickedVacationId={clickedVacationId}
            setClickedVacationId={setClickedVacationId}
          />
        )}
      </Section>
    </div>
  );
};

export default UnConfirmedVacationsPage;
