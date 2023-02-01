import { faRocket } from "@fortawesome/pro-solid-svg-icons";
import { DateInput } from "@fullcalendar/core";
import React from "react";
import { theme } from "../../../../css/theme";
import { ampmFormat, meetingTimeFormat } from "../../../../utils/time/time";
import { Article, Section } from "../../../atomics/sections/sections";
import {
  AccentText,
  DateText,
  SummaryText,
  Text,
} from "../../../atomics/typographys/texts";
import { SubTitle } from "../../../atomics/typographys/titles";
import { GapBox } from "../../../molecules/boxes/Boxes";
import { BoxIcon } from "../../../molecules/icons/Icons";
import { IAttendee } from "./SelectUsers";

interface ILatestMeeting {
  subTitle: string;
  host: string;
  attendees: IAttendee[];
  start?: DateInput;
  end?: DateInput;
}
const LatestMeeting = ({
  subTitle,
  attendees,
  host,
  start,
  end,
}: ILatestMeeting) => {
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
          <SubTitle style={{ textAlign: "right" }}>{subTitle}</SubTitle>

          <DateText style={{ textAlign: "right" }}>
            {meetingTimeFormat(start as Date)}
            {` ~ `}
            {meetingTimeFormat(end as Date)}(
            <AccentText style={{ textAlign: "right" }}>{host}</AccentText>)
          </DateText>

          <div style={{ placeSelf: "flex-end" }}>
            {attendees.map((attendee, index) => (
              <SummaryText key={attendee.id} style={{ textAlign: "right" }}>
                {attendee.name}
                {index + 1 !== attendees.length && ", "}
              </SummaryText>
            ))}
          </div>
        </GapBox>
      </div>
    </Article>
  );
};

export default LatestMeeting;
