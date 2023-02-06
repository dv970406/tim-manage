import React, { Dispatch, SetStateAction } from "react";
import Table from "../../../molecules/tables/Table";
import ManagerUserTableContent from "../../../organisms/content/manager/ManagerUserTableContent";
import { ManagerUserTableContent_user$key } from "./__generated__/ManagerUserTableContent_user.graphql";

interface IManagerUsersTable {
  users: readonly ManagerUserTableContent_user$key[];
  clickedUserId: string;
  setClickedUserId: Dispatch<SetStateAction<string>>;
  myPosition?: string;
}
const ManagerUsersTable = ({
  users,
  clickedUserId,
  setClickedUserId,
  myPosition,
}: IManagerUsersTable) => {
  return (
    <Table headers={["이름", "직책", "팀"]}>
      {users
        ?.filter((user) => !!user)
        .map((user: any) => (
          <ManagerUserTableContent
            key={user.__id}
            user={user}
            clickedUserId={clickedUserId}
            setClickedUserId={setClickedUserId}
            myPosition={myPosition}
          />
        ))}
    </Table>
  );
};

export default ManagerUsersTable;
