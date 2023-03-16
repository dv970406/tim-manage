import { ApexOptions } from "apexcharts";
import { graphql } from "babel-plugin-relay/macro";
import ReactApexChart from "react-apexcharts";
import { useFragment } from "react-relay";
import { pieChartOptions } from "../../../../utils/chart/options";
import { ColumnBox, ScrollBox } from "../../../atomics/boxes/Boxes";
import { SectionText } from "../../../atomics/typographys/texts";
import { SubTitle, SectionTitle } from "../../../atomics/typographys/titles";
import { ShowMultipleChoiceAnswers_answer$key } from "./__generated__/ShowMultipleChoiceAnswers_answer.graphql";

const showMultipleChoiceAnswersFragment = graphql`
  fragment ShowMultipleChoiceAnswers_answer on Survey {
    multipleChoiceFormat {
      paragraphTitle
      description
      chartFormatResults {
        labels
        series
      }
    }
  }
`;
interface IShowMultipleChoiceAnswers {
  answers: ShowMultipleChoiceAnswers_answer$key;
}

const ShowMultipleChoiceAnswers = ({ answers }: IShowMultipleChoiceAnswers) => {
  const { multipleChoiceFormat } =
    useFragment<ShowMultipleChoiceAnswers_answer$key>(
      showMultipleChoiceAnswersFragment,
      answers
    );

  return (
    <ColumnBox>
      <SectionTitle>객관식 답변</SectionTitle>
      <ScrollBox>
        {multipleChoiceFormat?.map((result, index) => (
          <li key={index}>
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
          </li>
        ))}
      </ScrollBox>
    </ColumnBox>
  );
};

export default ShowMultipleChoiceAnswers;
