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
import { getElaspedDay } from "../../../../utils/time/time";
import {
  RowBox,
  HorizontalDivider,
  ColumnBox,
  ItemBox,
} from "../../../atomics/boxes/Boxes";
import { MainText } from "../../../atomics/typographys/texts";
import { SectionTitle } from "../../../atomics/typographys/titles";
import { ButtonIcon } from "../../../molecules/buttons/Buttons";
import { BoxIcon } from "../../../molecules/icons/Icons";
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
  const tableContentData = useFragment(surveyTableContentFragment, survey);
  const navigate = useNavigate();
  const surveyCreatedAt = getElaspedDay(tableContentData.createdAt);

  const [isHovering, setIsHovering] = useState(false);

  return (
    <ItemBox
      onClick={() => navigate(`/survey/${tableContentData.id}`)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        opacity: tableContentData.isAnswered ? 0.4 : 1,
      }}
    >
      <RowBox>
        <BoxIcon
          bgColor={isHovering ? theme.bgColors.purple : theme.bgColors.gray}
          icon={tableContentData.isAnswered ? faBadgeCheck : faPenCircle}
          size={"2x"}
        />
        <ColumnBox gap={theme.spacing.sm}>
          <SectionTitle className="one-line">
            {tableContentData.surveyTitle}
          </SectionTitle>

          <MainText>{tableContentData.user.name}</MainText>
        </ColumnBox>
      </RowBox>

      <HorizontalDivider />
      <RowBox
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <BoxIcon
          icon={tableContentData.isAnonymous ? faEyeSlash : faEye}
          bgColor={
            tableContentData.isAnonymous
              ? theme.bgColors.red
              : theme.bgColors.purple
          }
        />

        <MainText>{surveyCreatedAt}</MainText>
      </RowBox>
    </ItemBox>
  );
};

export default SurveyTableContent;
