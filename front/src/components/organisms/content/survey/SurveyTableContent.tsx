import {
  faEye,
  faEyeSlash,
  faBadgeCheck,
  faPenCircle,
} from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { useFragment } from "react-relay";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../css/theme";
import { getElaspedDay } from "../../../../utils/func/time";
import { HorizontalDivider } from "../../../atomics/boxes/Divider";
import { ColumnBox, RowBox } from "../../../atomics/boxes/FlexBox";
import { GridItem } from "../../../atomics/boxes/GridBox";
import { SectionTitle } from "../../../atomics/typographys/Etc";
import { MainText } from "../../../atomics/typographys/Main";
import { IconBox } from "../../../molecules/boxes/IconBox";
import { SurveyTableContent_survey$key } from "./__generated__/SurveyTableContent_survey.graphql";

interface ISurveyTableContent {
  survey: SurveyTableContent_survey$key;
}
const surveyTableContentFragment = graphql`
  fragment SurveyTableContent_survey on Survey {
    id
    surveyTitle
    isAnonymous
    user {
      id
      name
    }
    isAnswered
    createdAt
  }
`;

const SurveyTableContent = ({ survey }: ISurveyTableContent) => {
  const {
    id: surveyId,
    isAnonymous,
    isAnswered,
    surveyTitle,
    user,
    createdAt,
  } = useFragment(surveyTableContentFragment, survey);

  const navigate = useNavigate();
  const surveyCreatedAt = getElaspedDay(createdAt);

  const [isHovering, setIsHovering] = useState(false);

  return (
    <GridItem
      onClick={() => navigate(`/survey/${surveyId}`)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        opacity: isAnswered ? 0.4 : 1,
      }}
    >
      <RowBox style={{ width: "100%" }}>
        <IconBox
          bgColor={isHovering ? theme.bgColors.purple : theme.bgColors.gray}
          icon={isAnswered ? faBadgeCheck : faPenCircle}
          size={"2x"}
        />
        <ColumnBox gap={theme.spacing.sm}>
          <SectionTitle className="one-line">{surveyTitle}</SectionTitle>

          <MainText>{user.name}</MainText>
        </ColumnBox>
      </RowBox>

      <HorizontalDivider />
      <RowBox
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <IconBox
          icon={isAnonymous ? faEyeSlash : faEye}
          bgColor={isAnonymous ? theme.bgColors.red : theme.bgColors.purple}
        />

        <MainText>{surveyCreatedAt}</MainText>
      </RowBox>
    </GridItem>
  );
};

export default SurveyTableContent;
