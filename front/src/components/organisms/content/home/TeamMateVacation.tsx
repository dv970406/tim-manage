import { faRocket } from "@fortawesome/pro-solid-svg-icons";
import { DateInput, EventInput } from "@fullcalendar/core";
import React from "react";
import { theme } from "../../../../css/theme";
import {
  meetingTimeFormat,
  vacationDateFormat,
} from "../../../../utils/time/time";
import { Article } from "../../../atomics/sections/sections";
import {
  AccentText,
  DateText,
  SectionText,
} from "../../../atomics/typographys/texts";
import { SubTitle } from "../../../atomics/typographys/titles";
import { GapBox } from "../../../atomics/boxes/Boxes";
import { BoxIcon } from "../../../molecules/icons/Icons";

interface ITeamMateVacation {
  name: string;
  start?: DateInput;
  end?: DateInput;
  isHalf: boolean;
  duration: number;
}
const TeamMateVacation = ({
  name,
  start,
  end,
  isHalf,
  duration,
}: ITeamMateVacation) => {
  return (
    <Article>
      <div
        style={{
          display: "flex",
          gap: theme.spacing.lg,
          justifyContent: "space-between",
        }}
      >
        <BoxIcon icon={faRocket} size="lg" bgColor={theme.bgColors.purple} />

        <GapBox style={{ placeSelf: "flex-end" }}>
          <SubTitle style={{ textAlign: "right" }}>{name}</SubTitle>
          <DateText style={{ textAlign: "right" }}>
            {vacationDateFormat(start as Date)}
            {` ~ `}
            {vacationDateFormat(end as Date)}(
            <AccentText style={{ textAlign: "right" }}>{duration}일</AccentText>
            )
          </DateText>
          <div style={{ placeSelf: "flex-end" }}>
            <SectionText>{isHalf ? "반차" : "연차"}</SectionText>
          </div>
        </GapBox>
      </div>
    </Article>
  );
};

export default TeamMateVacation;
