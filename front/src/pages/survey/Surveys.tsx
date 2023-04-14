import { Suspense, useEffect } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import {
  getSurveysQuery,
  useGetSurveys,
} from "../../client/survey/GetSurveys.client";
import { GetSurveysQuery } from "../../client/survey/__generated__/GetSurveysQuery.graphql";
import Loading from "../../components/molecules/shared/Loading";
import { Section } from "../../components/atomics/boxes/Sections";
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
    <>
      <Section noneBg>{surveys && <SurveysTable surveys={surveys} />}</Section>
    </>
  );
};
export default SurveysPage;
