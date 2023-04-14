import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  IAttendee,
  ISelectFormat,
} from "../../components/organisms/content/home/SelectUsers";

interface IUseSelectableUsers {
  prevAttendees?: IAttendee[];
  setAttendeesId: Dispatch<SetStateAction<string[]>>;
}
export const useSelectedUsers = ({
  prevAttendees,
  setAttendeesId,
}: IUseSelectableUsers) => {
  const prevSelectedUsers = prevAttendees?.map((user) => ({
    value: user.id,
    label: user.name,
  }));

  const [selectedUsers, setSelectedUsers] = useState(prevSelectedUsers);

  useEffect(() => {
    setSelectedUsers(prevSelectedUsers);
  }, [prevAttendees]);

  const handleChangeSelect = (selectedUsersArray: any) => {
    const attendeesIdArray = selectedUsersArray.map(
      (user: ISelectFormat) => user.value
    );
    setSelectedUsers(selectedUsersArray);
    setAttendeesId(attendeesIdArray);
  };

  return {
    selectedUsers,
    handleChangeSelect,
  };
};
