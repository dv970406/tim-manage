import { Suspense, useEffect } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import { useParams } from "react-router-dom";
import {
  getSurveyQuery,
  useGetSurvey,
} from "../../client/survey/GetSurvey.client";
import { GetSurveyQuery } from "../../client/survey/__generated__/GetSurveyQuery.graphql";

const SurveyDetailPage = () => {
  const { surveyId } = useParams();

  console.log(surveyId);
  const [getSurveyQueryReference, loadGetSurveyQuery] =
    useQueryLoader<GetSurveyQuery>(getSurveyQuery);

  useEffect(() => {
    if (!surveyId) return;
    loadGetSurveyQuery({ id: surveyId });
  }, []);
  return (
    <Suspense fallback="Loading...">
      {getSurveyQueryReference && (
        <SurveyDetail getSurveyQueryReference={getSurveyQueryReference} />
      )}
    </Suspense>
  );
};

interface ISurveyDetail {
  getSurveyQueryReference: PreloadedQuery<GetSurveyQuery>;
}
const SurveyDetail = ({ getSurveyQueryReference }: ISurveyDetail) => {
  const { survey } = useGetSurvey(getSurveyQueryReference);
  return <div>{survey?.surveyTitle}zz</div>;
};

export default SurveyDetailPage;
