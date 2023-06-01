import {
  faCirclePlus,
  faRuler,
  faTable,
  faTag,
} from "@fortawesome/pro-solid-svg-icons";
import { ChangeEvent, useReducer, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateSurvey } from "../../../../client/manager/CreateSurvey.client";
import { theme } from "../../../../css/theme";
import PortalModal from "../../../molecules/shared/PortalModal";
import {
  ACTION_TYPES,
  initialParagraph,
  paragraphsReducer,
} from "../../../../utils/reducer/survey.reducer";
import { RowBox } from "../../../atomics/boxes/FlexBox";
import { ScrollBox } from "../../../atomics/boxes/ScrollBox";
import { ChoiceInput } from "../../../atomics/inputs/ChoiceInput";
import { Section } from "../../../atomics/boxes/Sections";
import { EndSubmitButton } from "../../../molecules/buttons/EndSubmitButton";
import { TextIconButton } from "../../../molecules/buttons/TextIconButton";
import Form from "../../../molecules/shared/Form";
import { Checkbox } from "../../../molecules/inputs/Checkbox";
import { TextInput } from "../../../molecules/inputs/TextInput";

interface ICreateSurveyFormValue {
  surveyTitle: string;
}

interface ICreateSurveyModal {
  onClose: () => void;
}

const CreateSurveyModal = ({ onClose }: ICreateSurveyModal) => {
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

    onClose();
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
    <PortalModal onClose={onClose}>
      <Form onSubmit={handleSubmit(onSubmit)} formTitle="새 설문">
        <TextInput
          icon={faTag}
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
          <TextIconButton
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
                  <TextIconButton
                    text="지문 추가"
                    onClick={() => addChoices(paragraphIndex)}
                    icon={faCirclePlus}
                  />
                </RowBox>
                <Section
                  style={{
                    gap: theme.spacing.md,
                    justifyContent: "center",
                    height: 80,
                  }}
                  flexDirection="row"
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
    </PortalModal>
  );
};

export default CreateSurveyModal;
