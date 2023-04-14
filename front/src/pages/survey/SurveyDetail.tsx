import { Suspense, useEffect } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import { useParams } from "react-router-dom";
import {
  getSurveyQuery,
  useGetSurvey,
} from "../../client/survey/GetSurvey.client";
import { GetSurveyQuery } from "../../client/survey/__generated__/GetSurveyQuery.graphql";
import Loading from "../../components/molecules/shared/Loading";
import { Section } from "../../components/atomics/boxes/Sections";
import AnswerSheet from "../../components/templates/content/survey/AnswerSheet";
import { ColumnBox, RowBox } from "../../components/atomics/boxes/FlexBox";

const SurveyDetailPage = () => {
  const { surveyId } = useParams();

  const [getSurveyQueryReference, loadGetSurveyQuery] =
    useQueryLoader<GetSurveyQuery>(getSurveyQuery);

  useEffect(() => {
    if (!surveyId) return;
    loadGetSurveyQuery({ id: surveyId });
  }, []);
  return (
    <Suspense fallback={<Loading />}>
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

  return (
    <>
      <Section style={{ width: "40%" }}>
        {survey && <AnswerSheet survey={survey} />}
      </Section>
      <ColumnBox
        style={{
          width: "60%",
        }}
      >
        <Section style={{ height: "50%" }}></Section>
        <Section style={{ height: "50%" }}></Section>
      </ColumnBox>
    </>
  );
};

export default SurveyDetailPage;
