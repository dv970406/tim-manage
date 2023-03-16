import { EventInput } from "@fullcalendar/core";
import { vacationDateFormat } from "../../../../utils/time/time";
import { ScrollBox } from "../../../atomics/boxes/Boxes";
import { AccentText, SectionText } from "../../../atomics/typographys/texts";
import { SectionTitle } from "../../../atomics/typographys/titles";
import InformationCard from "../../../organisms/content/home/InformationCard";

interface IMyTeamVacations {
  myTeamVacations: EventInput[];
  myTeam?: string;
}
const MyTeamVacations = ({ myTeamVacations, myTeam }: IMyTeamVacations) => {
  return (
    <>
      <SectionTitle>{myTeam} 휴가 계획</SectionTitle>
      <ScrollBox>
        {myTeamVacations.map((vacation) => (
          <InformationCard
            key={vacation.id}
            mainText={vacation.user.name}
            middleText={
              <>
                {vacationDateFormat(vacation.start as Date)}
                {` ~ `}
                {vacationDateFormat(vacation.end as Date)}(
                <AccentText style={{ textAlign: "right" }}>
                  {vacation.duration}일
                </AccentText>
                )
              </>
            }
            endText={
              <SectionText>{vacation.isHalf ? "반차" : "연차"}</SectionText>
            }
          />
        ))}
      </ScrollBox>
    </>
  );
};

export default MyTeamVacations;
