import { graphql } from "babel-plugin-relay/macro";
import React, { ChangeEvent, FormEventHandler, useState } from "react";
import { useFragment } from "react-relay";
import { useNavigate } from "react-router-dom";
import { useCreateAnswer } from "../../../../client/survey/CreateAnswer.client";
import { theme } from "../../../../css/theme";
import { SubmitButton } from "../../../atomics/buttons/buttons";
import { Form } from "../../../atomics/form/Form";
import { SectionText } from "../../../atomics/typographys/texts";
import { SectionTitle, SubTitle } from "../../../atomics/typographys/titles";
import { Radio } from "../../../molecules/inputs/Radio";
import { TextArea } from "../../../molecules/inputs/TextArea";
import { ColumnBox, GapList } from "../../../atomics/boxes/Boxes";
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
    isAnswered
    paragraphs {
      paragraphTitle
      description
      multipleChoice
    }
    # 아래 answers는 이미 답한자가 그 survey에 접근했을때 작성했던 답을 보여주기 위함 // 참고로 백엔드에서 로그인한 유저의 대답만 필터링해서 가져옴
    answers {
      id
      results
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
      <Form
        onSubmit={createAnswer}
        style={{
          ...(answerSheetData.isAnswered && {
            pointerEvents: "none",
          }),
        }}
      >
        <GapList style={{ gap: theme.spacing.xl }}>
          <FormTitle formTitle={answerSheetData.surveyTitle} />
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
              <SectionText>{paragraph.description}</SectionText>
              {/* paragraphs와 같은 이유로 multipleChoice도 개별 삭제 위험 X => key로 인덱스 사용*/}
              {paragraph.multipleChoice.length > 0 ? (
                <GapList style={{ flexDirection: "row" }}>
                  {paragraph.multipleChoice?.map((choice, i) => (
                    <li key={i}>
                      <Radio
                        key={i}
                        value={choice}
                        name={paragraph.paragraphTitle}
                        text={choice}
                        onClick={() => choiceAnswer(choice, paragraphIndex)}
                        // 백엔드에서 필터링해서 내 답변만 가져오므로 무조건 answers 배열의 길이는 1임

                        defaultChecked={
                          answerSheetData?.answers[0]?.results[
                            paragraphIndex
                          ] === choice
                        }
                      />
                    </li>
                  ))}
                </GapList>
              ) : (
                <TextArea
                  placeholder="답변"
                  onChange={(event) => writeAnswer(event, paragraphIndex)}
                  // 백엔드에서 필터링해서 내 답변만 가져오므로 무조건 answers 배열의 길이는 1임

                  defaultValue={
                    answerSheetData?.answers[0]?.results[paragraphIndex]
                  }
                />
              )}
            </li>
          ))}
        </GapList>
        <EndSubmitButton
          onClick={() => null}
          text="제출"
          disabled={answerSheetData.isAnswered}
        />
      </Form>
    </>
  );
};

export default AnswerSheet;
