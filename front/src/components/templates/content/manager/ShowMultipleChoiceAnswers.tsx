import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { GetAnswersOfSurveyQuery$data } from "../../../../client/manager/__generated__/GetAnswersOfSurveyQuery.graphql";
import { pieChartOptions } from "../../../../utils/chart/options";
import { GapBox, GapList } from "../../../atomics/boxes/Boxes";
import { SectionText } from "../../../atomics/typographys/texts";
import { SubTitle, SectionTitle } from "../../../atomics/typographys/titles";

// const showMultipleChoiceAnswerFragment = graphql`
//   fragment ShowMultipleChoiceAnswer_answer on Answer {
//     multipleChoiceFormat {
//          paragraphTitle
//          description
//          chartFormatResults {
//            labels
//            series
//          }
//        }
//   }
// `;
interface IShowMultipleChoiceAnswers {
  readonly multipleChoiceFormat?: ReadonlyArray<{
    readonly chartFormatResults: {
      readonly labels: ReadonlyArray<string>;
      readonly series: ReadonlyArray<number>;
    };
    readonly description: string;
    readonly paragraphTitle: string;
  }> | null;
}

const ShowMultipleChoiceAnswers = ({
  multipleChoiceFormat,
}: IShowMultipleChoiceAnswers) => {
  return (
    <GapBox>
      <SectionTitle>객관식 답변</SectionTitle>
      <GapList>
        {multipleChoiceFormat?.map((result, index) => (
          <li key={index}>
            <GapBox>
              <SubTitle>{result.paragraphTitle}</SubTitle>
              <SectionText>{result.description}</SectionText>
              <ReactApexChart
                options={{
                  ...pieChartOptions,
                  labels: result.chartFormatResults.labels as string[],
                }}
                series={result.chartFormatResults.series as number[]}
                type="pie"
              />
            </GapBox>
          </li>
        ))}
      </GapList>
    </GapBox>
  );
};

export default ShowMultipleChoiceAnswers;
