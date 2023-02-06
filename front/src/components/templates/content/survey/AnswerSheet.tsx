import { graphql } from "babel-plugin-relay/macro";
import React, { ChangeEvent, FormEventHandler, useState } from "react";
import { useFragment } from "react-relay";
import { useNavigate } from "react-router-dom";
import { useCreateAnswer } from "../../../../client/survey/CreateAnswer.client";
import { theme } from "../../../../css/theme";
import { SubmitButton } from "../../../atomics/buttons/buttons";
import { Form } from "../../../atomics/form/Form";
import { SummaryText } from "../../../atomics/typographys/texts";
import { SectionTitle, SubTitle } from "../../../atomics/typographys/titles";
import { Radio } from "../../../molecules/inputs/Radio";
import { TextArea } from "../../../molecules/inputs/TextArea";
import { GapBox, GapList } from "../../../atomics/boxes/Boxes";
import { AnswerSheet_survey$key } from "./__generated__/AnswerSheet_survey.graphql";
import FormTitle from "../../../molecules/form/FormTitle";
import { EndSubmitButton } from "../../../molecules/buttons/Buttons";

interface IAnswerSheetFragment extends AnswerSheet_survey$key {}
interface IAnswerSheet {
  survey: IAnswerSheetFragment;
}

const answerSheetFragment = graphql`
  fragment AnswerSheet_survey on Survey {
    id
    surveyTitle
    paragraphs {
      paragraphTitle
      description
      multipleChoice
    }
  }
`;
const AnswerSheet = ({ survey }: IAnswerSheet) => {
  const answerSheetData = useFragment(answerSheetFragment, survey);

  const { createAnswerMutation, createAnswerLoading } = useCreateAnswer();

  const [answers, setAnswers] = useState<string[]>([]);
  const choiceAnswer = (choice: string, paragraphIndex: number) => {
    setAnswers((prev) => {
      prev[paragraphIndex] = choice;
      return prev;
    });
  };

  const writeAnswer = (
    event: ChangeEvent<HTMLTextAreaElement>,
    paragraphIndex: number
  ) => {
    const { value } = event.currentTarget;
    setAnswers((prev) => {
      prev[paragraphIndex] = value;
      return prev;
    });
  };
  const createAnswer: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (createAnswerLoading) return;

    createAnswerMutation({
      surveyId: answerSheetData.id,
      results: answers,
    });
  };
  return (
    <>
      <Form onSubmit={createAnswer}>
        <FormTitle formTitle={answerSheetData.surveyTitle} />
        <GapList style={{ gap: theme.spacing.xl }}>
          {answerSheetData.paragraphs.map((paragraph, paragraphIndex) => (
            // 어차피 paragraphs들은 개별로 삭제될 일 없으니까 key로 인덱스 줘도 될듯
            <li
              key={paragraphIndex}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing.md,
              }}
            >
              <SubTitle>{paragraph.paragraphTitle}</SubTitle>
              <SummaryText>{paragraph.description}</SummaryText>
              {/* paragraphs와 같은 이유로 multipleChoice도 개별 삭제 위험 X => key로 인덱스 사용*/}
              {paragraph.multipleChoice ? (
                <GapList style={{ flexDirection: "row" }}>
                  {paragraph.multipleChoice?.map((choice, i) => (
                    <li key={i}>
                      <Radio
                        key={i}
                        value={choice}
                        name={paragraph.paragraphTitle}
                        text={choice}
                        onClick={() => choiceAnswer(choice, paragraphIndex)}
                      />
                    </li>
                  ))}
                </GapList>
              ) : (
                <TextArea
                  placeholder="답변"
                  onChange={(event) => writeAnswer(event, paragraphIndex)}
                />
              )}
            </li>
          ))}
        </GapList>
        <EndSubmitButton onClick={() => null} text="제출" />
      </Form>
    </>
  );
};

export default AnswerSheet;
