import { faRocket } from "@fortawesome/pro-solid-svg-icons";
import { DateInput } from "@fullcalendar/core";
import React from "react";
import { theme } from "../../../../css/theme";
import { ampmFormat, meetingTimeFormat } from "../../../../utils/time/time";
import { Article, ListItem, Section } from "../../../atomics/sections/sections";
import {
  AccentText,
  DateText,
  SectionText,
  MainText,
} from "../../../atomics/typographys/texts";
import { SubTitle } from "../../../atomics/typographys/titles";
import { ColumnBox, RowBox } from "../../../atomics/boxes/Boxes";
import { BoxIcon } from "../../../molecules/icons/Icons";
import { IAttendee } from "./SelectUsers";

interface ITodayMeeting {
  subTitle: string;
  host: string;
  attendees: IAttendee[];
  start?: DateInput;
  end?: DateInput;
}
const TodayMeeting = ({
  subTitle,
  attendees,
  host,
  start,
  end,
}: ITodayMeeting) => {
  return (
    <ListItem>
      <RowBox
        style={{
          justifyContent: "space-between",
        }}
      >
        <BoxIcon icon={faRocket} size="lg" bgColor={theme.bgColors.purple} />

        <ColumnBox style={{ placeSelf: "flex-end" }}>
          <SubTitle style={{ textAlign: "right" }}>{subTitle}</SubTitle>

          <DateText style={{ textAlign: "right" }}>
            {meetingTimeFormat(start as Date)}
            {` ~ `}
            {meetingTimeFormat(end as Date)}(
            <AccentText style={{ textAlign: "right" }}>{host}</AccentText>)
          </DateText>

          <div style={{ placeSelf: "flex-end" }}>
            {attendees.map((attendee, index) => (
              <SectionText key={attendee.id} style={{ textAlign: "right" }}>
                {attendee.name}
                {index + 1 !== attendees.length && ", "}
              </SectionText>
            ))}
          </div>
        </ColumnBox>
      </RowBox>
    </ListItem>
  );
};

export default TodayMeeting;
