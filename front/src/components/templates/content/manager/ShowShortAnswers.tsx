import { SubTitle, SectionTitle } from "../../../atomics/typographys/titles";
import { ColumnBox, ScrollBox } from "../../../atomics/boxes/Boxes";
import { SectionText, MainText } from "../../../atomics/typographys/texts";
import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { ShowShortAnswers_answer$key } from "./__generated__/ShowShortAnswers_answer.graphql";
import { theme } from "../../../../css/theme";

const showShortAnswersFragment = graphql`
  fragment ShowShortAnswers_answer on Survey {
    isAnonymous
    shortAnswerFormat {
      paragraphTitle
      description
      shortAnswers {
        result
        user {
          id
          name
        }
      }
    }
  }
`;
interface IShowShortAnswers {
  answers: ShowShortAnswers_answer$key;
}
const ShowShortAnswers = ({ answers }: IShowShortAnswers) => {
  const { shortAnswerFormat, isAnonymous } =
    useFragment<ShowShortAnswers_answer$key>(showShortAnswersFragment, answers);

  return (
    <ColumnBox>
      <SectionTitle>주관식 답변</SectionTitle>
      <ScrollBox>
        {shortAnswerFormat?.map((result, index) => (
          <ColumnBox key={index}>
            <SubTitle>
              제목{index + 1}: {result.paragraphTitle}
            </SubTitle>
            <SectionText>
              설명{index + 1}: {result.description}
            </SectionText>
            <ColumnBox
              style={{
                padding: theme.spacing.md,
                borderBottom: `1px solid ${theme.colors.white}`,
              }}
            >
              {result.shortAnswers.map((shortAnswer, index) => (
                <li key={index}>
                  {!isAnonymous && (
                    <SubTitle>{shortAnswer?.user?.name}</SubTitle>
                  )}
                  <MainText>{shortAnswer.result}</MainText>
                </li>
              ))}
            </ColumnBox>
          </ColumnBox>
        ))}
      </ScrollBox>
    </ColumnBox>
  );
};

export default ShowShortAnswers;
