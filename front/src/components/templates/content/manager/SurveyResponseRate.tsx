import { graphql } from "babel-plugin-relay/macro";
import ReactApexChart from "react-apexcharts";
import { useFragment } from "react-relay";
import { pieChartOptions } from "../../../../utils/shared/chart";
import { SectionTitle } from "../../../atomics/typographys/Etc";
import { SubTitle } from "../../../atomics/typographys/Sub";
import { SurveyResponseRate_answer$key } from "./__generated__/SurveyResponseRate_answer.graphql";

const surveyResponseRateFragment = graphql`
  fragment SurveyResponseRate_answer on Survey {
    responseRate {
      notAnsweredEmployeeCount
      answeredEmployeeCount
    }
  }
`;
interface ISurveyResponseRate {
  answers: SurveyResponseRate_answer$key;
}

const SurveyResponseRate = ({ answers }: ISurveyResponseRate) => {
  const { responseRate } = useFragment<SurveyResponseRate_answer$key>(
    surveyResponseRateFragment,
    answers
  );
  return (
    <>
      <>
        <SectionTitle>응답률</SectionTitle>
        <SubTitle>
          총원 :{" "}
          {responseRate?.answeredEmployeeCount! +
            responseRate?.notAnsweredEmployeeCount! || "대기중"}
        </SubTitle>
      </>
      {responseRate?.answeredEmployeeCount !== undefined && (
        <ReactApexChart
          type="pie"
          options={{
            ...pieChartOptions,

            labels: ["응답", "미응답"],
          }}
          series={[
            responseRate?.answeredEmployeeCount!,
            responseRate?.notAnsweredEmployeeCount!,
          ]}
        />
      )}
    </>
  );
};

export default SurveyResponseRate;
