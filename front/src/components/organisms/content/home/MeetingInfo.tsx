import { faRocket } from "@fortawesome/pro-solid-svg-icons";
import { Dispatch, SetStateAction } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { TextInput } from "../../../molecules/inputs/TextInput";
import SelectUsers, { IAttendee } from "./SelectUsers";

interface IMeetingInfo {
  register: UseFormRegisterReturn<string>;
  errorMessage?: string;
  setAttendeesId: Dispatch<SetStateAction<string[]>>;
  defaultValue?: string;
  prevAttendees?: IAttendee[];
}
const MeetingInfo = ({
  register,
  errorMessage,
  setAttendeesId,
  defaultValue,
  prevAttendees,
}: IMeetingInfo) => {
  return (
    <>
      <TextInput
        label="제목"
        register={register}
        type="text"
        icon={faRocket}
        placeholder="회의명을 입력하세요."
        errorMessage={errorMessage}
        defaultValue={defaultValue}
      />
      <SelectUsers
        prevAttendees={prevAttendees}
        setAttendeesId={setAttendeesId}
      />
    </>
  );
};

export default MeetingInfo;
