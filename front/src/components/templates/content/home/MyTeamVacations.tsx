import { EventInput } from "@fullcalendar/core";
import { ScrollBox } from "../../../atomics/boxes/Boxes";
import { SectionTitle } from "../../../atomics/typographys/titles";
import TeamMateVacation from "../../../organisms/content/home/TeamMateVacation";

interface IMyTeamVacations {
  myTeamVacations: EventInput[];
  myTeam?: string;
}
const MyTeamVacations = ({ myTeamVacations, myTeam }: IMyTeamVacations) => {
  return (
    <>
      <SectionTitle>{myTeam} 휴가 계획</SectionTitle>
      <ScrollBox height="100%">
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
      </ScrollBox>
    </>
  );
};

export default MyTeamVacations;
