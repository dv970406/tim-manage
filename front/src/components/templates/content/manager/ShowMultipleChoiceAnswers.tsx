import { graphql } from "babel-plugin-relay/macro";
import ReactApexChart from "react-apexcharts";
import { useFragment } from "react-relay";
import { pieChartOptions } from "../../../../utils/shared/chart";
import { ColumnBox } from "../../../atomics/boxes/FlexBox";
import { ScrollBox } from "../../../atomics/boxes/ScrollBox";
import { SectionTitle } from "../../../atomics/typographys/Etc";
import { SubText, SubTitle } from "../../../atomics/typographys/Sub";
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
            <SubText>{result.description}</SubText>
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
