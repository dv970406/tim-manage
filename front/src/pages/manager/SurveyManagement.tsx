import React, { Suspense, useEffect, useState } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import { GetManagerSurveysQuery } from "../../client/manager/__generated__/GetManagerSurveysQuery.graphql";
import {
  ColumnBox,
  GapBox,
  RowBox,
} from "../../components/atomics/boxes/Boxes";
import { Section } from "../../components/atomics/sections/sections";
import ManagerSurveysTable from "../../components/templates/content/manager/ManagerSurveysTable";
import ShowShortAnswers from "../../components/templates/content/manager/ShowShortAnswers";
import ShowMultipleChoiceAnswers from "../../components/templates/content/manager/ShowMultipleChoiceAnswers";
import { theme } from "../../css/theme";
import { useGetAnswersOfSurvey } from "../../client/manager/GetAnswersOfSurvey.client";
import SurveyResponseRate from "../../components/templates/content/manager/SurveyResponseRate";
import {
  getManagerSurveysQuery,
  useGetManagerSurveys,
} from "../../client/manager/GetManagerSurveys.client";
import { PAGINATION_LOAD_COUNT } from "../../utils/constants/share.constant";
import CenterBox from "../../components/molecules/boxes/CenterBox";

// 대표는 모두 수정 가능, 관리자는 자기가 만든 것만 수정가능
const SurveyManagementPage = () => {
  const [managerSurveysQueryReference, loadManagerSurveysQuery] =
    useQueryLoader<GetManagerSurveysQuery>(getManagerSurveysQuery);

  useEffect(() => {
    loadManagerSurveysQuery({ onlyMine: true, first: PAGINATION_LOAD_COUNT });
  }, []);
  return (
    <Suspense fallback="qweewqqweewqqweewqqweewqqweewq">
      {managerSurveysQueryReference && (
        <SurveyManagement
          managerSurveysQueryReference={managerSurveysQueryReference}
        />
      )}
    </Suspense>
  );
};
interface ISurveyManagement {
  managerSurveysQueryReference: PreloadedQuery<GetManagerSurveysQuery>;
}

const SurveyManagement = ({
  managerSurveysQueryReference,
}: ISurveyManagement) => {
  const { surveys } = useGetManagerSurveys(managerSurveysQueryReference); // usePreloadedQuery

  const [clickedSurveyId, setClickedSurveyId] = useState("");

  const { answers } = useGetAnswersOfSurvey(clickedSurveyId); // useLazyLoadQuery
  console.log("answers : ", answers);

  return (
    <CenterBox>
      <Section style={{ width: "35%" }}>
        <Suspense fallback="wait">
          {answers && <ShowMultipleChoiceAnswers answers={answers} />}
        </Suspense>
      </Section>
      <Section style={{ width: "35%" }}>
        <Suspense fallback="wait">
          {answers && <ShowShortAnswers answers={answers} />}
        </Suspense>
      </Section>

      <GapBox style={{ width: "30%" }}>
        <Section style={{ height: "50%" }}>
          <ManagerSurveysTable
            surveys={surveys}
            clickedSurveyId={clickedSurveyId}
            setClickedSurveyId={setClickedSurveyId}
          />
        </Section>
        <Section style={{ height: "50%" }}>
          {answers && <SurveyResponseRate answers={answers} />}
        </Section>
      </GapBox>
    </CenterBox>
  );
};
export default SurveyManagementPage;
