import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import {
  getSurveysQuery,
  useGetSurveys,
} from "../../client/survey/GetSurveys.client";
import { GetSurveysQuery } from "../../client/survey/__generated__/GetSurveysQuery.graphql";
import { Section } from "../../components/atomics/sections/sections";
import SurveysTable from "../../components/templates/content/survey/SurveysTable";

const SurveysPage = () => {
  const [getSurveysQueryReference, loadGetSurveysQuery] =
    useQueryLoader<GetSurveysQuery>(getSurveysQuery);

  useEffect(() => {
    loadGetSurveysQuery({ onlyMine: false });
  }, []);
  return (
    <Suspense fallback="Surveys loading">
      {getSurveysQueryReference && (
        <Surveys getSurveysQueryReference={getSurveysQueryReference} />
      )}
    </Suspense>
  );
};

interface ISurveys {
  getSurveysQueryReference: PreloadedQuery<GetSurveysQuery>;
}
const Surveys = ({ getSurveysQueryReference }: ISurveys) => {
  const { surveys } = useGetSurveys(getSurveysQueryReference);

  return <Section>{surveys && <SurveysTable surveys={surveys} />}</Section>;
};
export default SurveysPage;
