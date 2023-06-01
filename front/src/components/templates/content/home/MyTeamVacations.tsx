import { EventInput } from "@fullcalendar/core";
import { vacationDateFormat } from "../../../../utils/func/time";
import { ScrollBox } from "../../../atomics/boxes/ScrollBox";
import { AccentText, SectionTitle } from "../../../atomics/typographys/Etc";
import { SubText } from "../../../atomics/typographys/Sub";
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
            endText={<SubText>{vacation.isHalf ? "반차" : "연차"}</SubText>}
          />
        ))}
      </ScrollBox>
    </>
  );
};

export default MyTeamVacations;
