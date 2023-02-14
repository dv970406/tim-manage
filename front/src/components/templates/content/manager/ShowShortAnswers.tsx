import { useGetAnswersOfSurvey } from "../../../../client/manager/GetAnswersOfSurvey.client";
import ApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { GetAnswersOfSurveyQuery$data } from "../../../../client/manager/__generated__/GetAnswersOfSurveyQuery.graphql";
import { SubTitle, SectionTitle } from "../../../atomics/typographys/titles";
import { GapBox, GapList } from "../../../atomics/boxes/Boxes";
import { SectionText, MainText } from "../../../atomics/typographys/texts";

// const showShortAnswersFragment = graphql`
//   fragment ShowShortAnswers_answer on Answer {
//     shortAnswerFormat {
//       paragraphTitle
//       description
//       shortAnswers
//     }
//   }
// `;
interface IShowShortAnswers {
  readonly shortAnswerFormat?: ReadonlyArray<{
    readonly description: string;
    readonly paragraphTitle: string;
    readonly shortAnswers: ReadonlyArray<string>;
  }> | null;
}
const ShowShortAnswers = ({ shortAnswerFormat }: IShowShortAnswers) => {
  return (
    <GapBox>
      <SectionTitle>주관식 답변</SectionTitle>
      {shortAnswerFormat?.map((result, index) => (
        <GapBox key={index}>
          <SubTitle>{result.paragraphTitle}</SubTitle>
          <SectionText>{result.description}</SectionText>
          <GapList>
            {result.shortAnswers.map((shortAnswer, index) => (
              <li key={index}>
                <MainText>{shortAnswer}</MainText>
              </li>
            ))}
          </GapList>
        </GapBox>
      ))}
    </GapBox>
  );
};

export default ShowShortAnswers;
