import {
  faComment,
  faEye,
  faEyeSlash,
  faHeart,
  faEllipsisVertical,
  faPooStorm,
  faBadgeCheck,
  faClose,
  faStar,
} from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { useFragment } from "react-relay";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../css/theme";
import {
  getElaspedDay,
  getKoreanDateFormat,
} from "../../../../utils/time/time";
import {
  RowBox,
  HorizontalDivider,
  GapBox,
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
    >
      <RowBox>
        <BoxIcon
          bgColor={isHovering ? theme.bgColors.purple : theme.bgColors.gray}
          icon={tableContentData.isAnswered ? faBadgeCheck : faStar}
          size={"2x"}
        />
        <GapBox>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <SectionTitle>{tableContentData.surveyTitle}</SectionTitle>
            <ButtonIcon onClick={() => null} icon={faEllipsisVertical} />
          </div>
          <div>
            <MainText>{tableContentData.user.name}</MainText>
          </div>
        </GapBox>
      </RowBox>

      <HorizontalDivider />
      <RowBox
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: theme.spacing.sm,
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
          <MainText>
            {tableContentData.isAnswered ? "응답됨" : "응답안됨"}
          </MainText>
        </div>

        <MainText>{surveyCreatedAt}</MainText>
      </RowBox>
    </ItemBox>
  );
};

export default SurveyTableContent;
