import { Dispatch, SetStateAction } from "react";
import { theme } from "../../../../css/theme";
import { SCHEDULES } from "../../../../utils/constants/schedule.constant";
import { Radio } from "../../../molecules/inputs/Radio";

interface ISelectKindOfSchedule {
  setKindOfSchedule: Dispatch<SetStateAction<any>>;
}
const SelectKindOfSchedule = ({ setKindOfSchedule }: ISelectKindOfSchedule) => {
  return (
    <fieldset
      style={{
        display: "flex",
        justifyContent: "center",
        border: "none",
        gap: theme.spacing.xl,
      }}
    >
      <Radio
        name="schedule"
        value={SCHEDULES.VACATION}
        onClick={() => setKindOfSchedule(SCHEDULES.VACATION)}
        text="휴가"
        defaultChecked={true}
      />
      <Radio
        name="schedule"
        value={SCHEDULES.MEETING}
        onClick={() => setKindOfSchedule(SCHEDULES.MEETING)}
        text={"회의"}
      />
    </fieldset>
  );
};

export default SelectKindOfSchedule;
