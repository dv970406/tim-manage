import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { ShowShortAnswers_answer$key } from "./__generated__/ShowShortAnswers_answer.graphql";
import { theme } from "../../../../css/theme";
import { ColumnBox } from "../../../atomics/boxes/FlexBox";
import { ScrollBox } from "../../../atomics/boxes/ScrollBox";
import { SectionTitle } from "../../../atomics/typographys/Etc";
import { SubText, SubTitle } from "../../../atomics/typographys/Sub";
import { MainText } from "../../../atomics/typographys/Main";

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
          <li key={index}>
            <SubTitle>
              제목{index + 1}: {result.paragraphTitle}
            </SubTitle>
            <SubText>
              설명{index + 1}: {result.description}
            </SubText>
            <ColumnBox
              style={{
                padding: theme.spacing.sm,
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
          </li>
        ))}
      </ScrollBox>
    </ColumnBox>
  );
};

export default ShowShortAnswers;
