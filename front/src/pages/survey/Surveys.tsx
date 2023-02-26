import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import {
  getSurveysQuery,
  useGetSurveys,
} from "../../client/survey/GetSurveys.client";
import { GetSurveysQuery } from "../../client/survey/__generated__/GetSurveysQuery.graphql";
import Loading from "../../components/atomics/boxes/Loading";
import { Section } from "../../components/atomics/sections/sections";
import CreateSurveyModal from "../../components/templates/content/survey/CreateSurveyModal";
import SurveysTable from "../../components/templates/content/survey/SurveysTable";
import { PAGINATION_LOAD_COUNT } from "../../utils/constants/share.constant";

const SurveysPage = () => {
  const [getSurveysQueryReference, loadGetSurveysQuery] =
    useQueryLoader<GetSurveysQuery>(getSurveysQuery);

  useEffect(() => {
    loadGetSurveysQuery({ onlyMine: false, first: PAGINATION_LOAD_COUNT });
  }, []);
  return (
    <Suspense fallback={<Loading />}>
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
    /* Section이 있어야 Observer가 제대로 동작해서 Infinite Scroll이 정상 작동함 */
    <Section noneBg>
      <CreateSurveyModal />
      {surveys && <SurveysTable surveys={surveys} />}
    </Section>
  );
};
export default SurveysPage;
