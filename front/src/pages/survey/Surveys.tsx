import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import {
  getSurveysQuery,
  useGetSurveys,
} from "../../client/survey/GetSurveys.client";
import { GetSurveysQuery } from "../../client/survey/__generated__/GetSurveysQuery.graphql";
import { Section } from "../../components/atomics/sections/sections";
import Table from "../../components/molecules/tables/Table";
import SurveyTableContent from "../../components/organisms/content/survey/SurveyTableContent";

const SurveysPage = () => {
  const [getSurveysQueryReference, loadGetSurveysQuery] =
    useQueryLoader<GetSurveysQuery>(getSurveysQuery);

  useEffect(() => {
    loadGetSurveysQuery({});
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

  return (
    <Section>
      <Table headers={["설문자", "이름", "익명여부", "설문시작일"]}>
        {surveys?.map((survey: any) => (
          <SurveyTableContent key={survey.__id} survey={survey} />
        ))}
      </Table>
    </Section>
  );
};
export default SurveysPage;
