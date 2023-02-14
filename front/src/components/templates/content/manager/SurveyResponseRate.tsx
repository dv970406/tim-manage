import { graphql } from "babel-plugin-relay/macro";
import { Dispatch, SetStateAction } from "react";
import ReactApexChart from "react-apexcharts";
import { pieChartOptions } from "../../../../utils/chart/options";
import { GapBox } from "../../../atomics/boxes/Boxes";
import { SectionTitle, SubTitle } from "../../../atomics/typographys/titles";

// const surveyResponseRateFragment = graphql`
//   fragment SurveyResponseRate_answer on Answer {
//     responseRate {
//       notAnsweredEmployeeCount
//       answeredEmployeeCount
//     }
//   }
// `;
interface ISurveyResponseRate {
  responseRate?: {
    readonly notAnsweredEmployeeCount: number;
    readonly answeredEmployeeCount: number;
  } | null;
}

const SurveyResponseRate = ({ responseRate }: ISurveyResponseRate) => {
  return (
    <GapBox>
      <GapBox>
        <SectionTitle>응답률</SectionTitle>
        <SubTitle>
          총원 :{" "}
          {responseRate?.answeredEmployeeCount! +
            responseRate?.notAnsweredEmployeeCount! || "대기중"}
        </SubTitle>
      </GapBox>
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
    </GapBox>
  );
};

export default SurveyResponseRate;
