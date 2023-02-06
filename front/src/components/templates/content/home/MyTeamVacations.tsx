import { EventInput } from "@fullcalendar/core";
import React from "react";
import { GapBox } from "../../../atomics/boxes/Boxes";
import { SectionTitle } from "../../../atomics/typographys/titles";
import TeamMateVacation from "../../../organisms/content/home/TeamMateVacation";

interface IMyTeamVacations {
  myTeamVacations: EventInput[];
  myTeam?: string;
}
const MyTeamVacations = ({ myTeamVacations, myTeam }: IMyTeamVacations) => {
  return (
    <GapBox>
      <SectionTitle>{myTeam} 휴가 계획</SectionTitle>
      <GapBox>
        {myTeamVacations.map((vacation) => (
          <TeamMateVacation
            key={vacation.id}
            name={vacation.user.name}
            start={vacation.start}
            end={vacation.end}
            duration={vacation.duration}
            isHalf={vacation.isHalf}
          />
        ))}
      </GapBox>
    </GapBox>
  );
};

export default MyTeamVacations;
