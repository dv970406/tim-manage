import {
  faCirclePlus,
  faPlus,
  faRuler,
  faTable,
  faTag,
} from "@fortawesome/pro-solid-svg-icons";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useReducer,
  useState,
} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateSurvey } from "../../../../client/manager/CreateSurvey.client";
import { theme } from "../../../../css/theme";
import { MODAL_NAME } from "../../../../utils/constants/modal.constant";
import { closeModal } from "../../../../utils/modal/controlModal";
import { ColumnBox, RowBox, ScrollBox } from "../../../atomics/boxes/Boxes";
import { Form } from "../../../atomics/form/Form";
import { ChoiceInput } from "../../../atomics/inputs/inputs";
import { Section } from "../../../atomics/sections/sections";
import { MainText } from "../../../atomics/typographys/texts";
import {
  ButtonIcon,
  ButtonTextIcon,
  EndSubmitButton,
} from "../../../molecules/buttons/Buttons";
import FormTitle from "../../../molecules/form/FormTitle";
import { Checkbox } from "../../../molecules/inputs/Checkbox";
import { TextInput } from "../../../molecules/inputs/TextInput";

interface ICreateSurveyFormValue {
  surveyTitle: string;
}
interface IParagraph {
  paragraphTitle: string;
  description?: string;
  multipleChoice: string[];
}
interface ICreateSurveyForm {}

interface IActionTypes {
  type: string;
  value?: string;
  choiceIndex?: number;
  paragraphIndex?: number;
}
const ACTION_TYPES = {
  ADD_CHOICE: "ADD_CHOICE",
  ADD_PARAGRAPH: "ADD_PARAGRAPH",
  ADD_PARAGRAPH_TITLE: "ADD_PARAGRAPH_TITLE",
  ADD_PARAGRAPH_DESCRIPTION: "ADD_DESCRIPTION",
  ADD_SURVEY_TITLE: "ADD_SURVEY_TITLE",
  ADD_CHOICE_VALUE: "ADD_CHOICE_VALUE",
};
const paragraphsReducer = (
  paragraphs: IParagraph[],
  action: IActionTypes
): IParagraph[] => {
  const { type, value, choiceIndex, paragraphIndex } = action;
  //
  let copiedParagraphs = [...JSON.parse(JSON.stringify(paragraphs))];

  const isParagraphIndexExist =
    Number.isInteger(paragraphIndex) && paragraphIndex !== undefined;
  const isChoiceIndexExist =
    Number.isInteger(choiceIndex) && choiceIndex !== undefined;

  switch (type) {
    case ACTION_TYPES.ADD_PARAGRAPH:
      copiedParagraphs.push({
        paragraphTitle: "",
        description: "",
        multipleChoice: [],
      });
      return copiedParagraphs;
    case ACTION_TYPES.ADD_CHOICE:
      if (!isParagraphIndexExist) return copiedParagraphs;

      if (copiedParagraphs[paragraphIndex].multipleChoice.length >= 5)
        return copiedParagraphs;
      copiedParagraphs[paragraphIndex].multipleChoice.push("");

      return copiedParagraphs;

    case ACTION_TYPES.ADD_PARAGRAPH_TITLE:
      if (!isParagraphIndexExist || !value) return copiedParagraphs;

      copiedParagraphs[paragraphIndex].paragraphTitle = value;

      return copiedParagraphs;

    case ACTION_TYPES.ADD_PARAGRAPH_DESCRIPTION:
      if (!isParagraphIndexExist) return copiedParagraphs;

      copiedParagraphs[paragraphIndex].description = value;
      return copiedParagraphs;

    case ACTION_TYPES.ADD_CHOICE_VALUE:
      if (!isParagraphIndexExist || !isChoiceIndexExist || !value)
        return copiedParagraphs;
      const findMultipleChoiceOfMatchingParagraph =
        copiedParagraphs[paragraphIndex].multipleChoice;

      findMultipleChoiceOfMatchingParagraph[choiceIndex] = value;
      copiedParagraphs[paragraphIndex].multipleChoice =
        findMultipleChoiceOfMatchingParagraph;
      return copiedParagraphs;
  }
  return copiedParagraphs;
};

const initialParagraph: IParagraph[] = [
  { paragraphTitle: "", description: "", multipleChoice: [] },
];

const CreateSurveyForm = ({}: ICreateSurveyForm) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<ICreateSurveyFormValue>({ mode: "onChange" });

  const [isAnonymous, setIsAnonymous] = useState(false);
  const { surveyTitle: watchSurveyTitle } = watch();

  const { createSurveyMutation, createSurveyLoading } = useCreateSurvey();

  const [paragraphs, dispatch] = useReducer(
    paragraphsReducer,
    initialParagraph
  );

  const onSubmit: SubmitHandler<ICreateSurveyFormValue> = ({ surveyTitle }) => {
    if (createSurveyLoading) return;

    createSurveyMutation({
      surveyTitle,
      isAnonymous,
      paragraphs,
    });

    closeModal(MODAL_NAME.CREATE_SURVEY);
  };

  const isSubmitDisabled = !!errors.surveyTitle || !watchSurveyTitle;

  const handleChoicesValue = (
    event: ChangeEvent<HTMLInputElement>,
    choiceIndex: number,
    paragraphIndex: number
  ) => {
    const { value } = event.currentTarget;

    dispatch({
      type: ACTION_TYPES.ADD_CHOICE_VALUE,
      value,
      choiceIndex,
      paragraphIndex,
    });
  };

  const handleParagraphTitle = (
    event: ChangeEvent<HTMLInputElement>,
    paragraphIndex: number
  ) => {
    const { value } = event.currentTarget;

    dispatch({ type: ACTION_TYPES.ADD_PARAGRAPH_TITLE, value, paragraphIndex });
  };

  const handleParagraphDescription = (
    event: ChangeEvent<HTMLInputElement>,
    paragraphIndex: number
  ) => {
    const { value } = event.currentTarget;

    dispatch({
      type: ACTION_TYPES.ADD_PARAGRAPH_DESCRIPTION,
      value,
      paragraphIndex,
    });
  };

  const addParagraphs = () => {
    dispatch({ type: ACTION_TYPES.ADD_PARAGRAPH });
  };

  const addChoices = (paragraphIndex: number) => {
    dispatch({ type: ACTION_TYPES.ADD_CHOICE, paragraphIndex });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle formTitle="새 설문" />

        <TextInput
          icon={faTag}
          label="설문 제목"
          placeholder="설문 제목"
          register={register("surveyTitle", {
            required: {
              value: true,
              message: "제목은 필수입니다.",
            },
            minLength: {
              value: 2,
              message: "제목은 2글자 이상입니다.",
            },
            maxLength: {
              value: 20,
              message: "제목은 20글자 이하입니다.",
            },
          })}
          errorMessage={errors?.surveyTitle && errors?.surveyTitle.message}
        />
        <Checkbox
          id="isAnonymous"
          text="익명 여부"
          defaultChecked={false}
          onClick={() => setIsAnonymous((prev) => !prev)}
        />
        <RowBox style={{ gap: theme.spacing.sm }}>
          <ButtonTextIcon
            onClick={addParagraphs}
            icon={faCirclePlus}
            text="추가"
          />
        </RowBox>
        <ScrollBox>
          {paragraphs?.map((count, paragraphIndex) => (
            <li key={paragraphIndex}>
              <Section>
                <TextInput
                  label={`주제${paragraphIndex + 1}`}
                  placeholder="주제"
                  icon={faTable}
                  onChange={(event) =>
                    handleParagraphTitle(event, paragraphIndex)
                  }
                />
                <TextInput
                  label={`설명${paragraphIndex + 1}`}
                  placeholder="설명"
                  icon={faRuler}
                  onChange={(event) =>
                    handleParagraphDescription(event, paragraphIndex)
                  }
                />
                <RowBox style={{ gap: theme.spacing.sm }}>
                  <ButtonTextIcon
                    text="지문 추가"
                    onClick={() => addChoices(paragraphIndex)}
                    icon={faCirclePlus}
                  />
                </RowBox>
                <Section
                  style={{
                    display: "flex",
                    gap: theme.spacing.md,
                    justifyContent: "center",
                  }}
                >
                  {paragraphs[paragraphIndex].multipleChoice.map(
                    (count, choiceIndex) => (
                      <ChoiceInput
                        key={choiceIndex}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                          handleChoicesValue(event, choiceIndex, paragraphIndex)
                        }
                      />
                    )
                  )}
                </Section>
              </Section>
            </li>
          ))}
        </ScrollBox>
        <EndSubmitButton
          onClick={handleSubmit(onSubmit)}
          disabled={createSurveyLoading || isSubmitDisabled}
          text="추가"
        />
      </Form>
    </>
  );
};

export default CreateSurveyForm;
