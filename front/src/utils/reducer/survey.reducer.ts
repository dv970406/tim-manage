interface IParagraph {
  paragraphTitle: string;
  description?: string;
  multipleChoice: string[];
}

interface IActionTypes {
  type: string;
  value?: string;
  choiceIndex?: number;
  paragraphIndex?: number;
}
export const ACTION_TYPES = {
  ADD_CHOICE: "ADD_CHOICE",
  ADD_PARAGRAPH: "ADD_PARAGRAPH",
  ADD_PARAGRAPH_TITLE: "ADD_PARAGRAPH_TITLE",
  ADD_PARAGRAPH_DESCRIPTION: "ADD_DESCRIPTION",
  ADD_SURVEY_TITLE: "ADD_SURVEY_TITLE",
  ADD_CHOICE_VALUE: "ADD_CHOICE_VALUE",
};

// 설문 로직이다. 제목, 설명, 객관식 단락을 늘리거나, 답안의 경우의 수를 컨트롤할 수 있다.
// 설문 로직이 꽤 복잡한데 그 로직을 state로 컴포넌트 내에서 쓰면 코드가 지저분해져서 reducer를 사용해보았다.
export const paragraphsReducer = (
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

export const initialParagraph: IParagraph[] = [
  { paragraphTitle: "", description: "", multipleChoice: [] },
];
