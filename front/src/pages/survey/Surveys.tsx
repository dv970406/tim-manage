import React, { Suspense, useEffect } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import {
  getSurveysQuery,
  useGetSurveys,
} from "../../client/survey/GetSurveys.client";
import { GetSurveysQuery } from "../../client/survey/__generated__/GetSurveysQuery.graphql";

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
  console.log(surveys);
  return (
    <div>
      {surveys?.map((survey) => (
        <span key={survey.id}>{survey.surveyTitle}</span>
      ))}
    </div>
  );
};
export default SurveysPage;
