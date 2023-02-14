import React from "react";
import { useGetMyInfo } from "../../../../client/user/GetMyInfo.client";
import { ListBox } from "../../../atomics/boxes/Boxes";
import Table from "../../../molecules/tables/Table";
import SurveyTableContent from "../../../organisms/content/survey/SurveyTableContent";
import { SurveyTableContent_survey$key } from "../../../organisms/content/survey/__generated__/SurveyTableContent_survey.graphql";
import UserTableContent from "../../../organisms/content/user/UserTableContent";
import { UserTableContent_user$key } from "../../../organisms/content/user/__generated__/UserTableContent_user.graphql";

interface IUsersTable {
  users: readonly UserTableContent_user$key[];
}
const UsersTable = ({ users }: IUsersTable) => {
  const { myInfo } = useGetMyInfo();

  return (
    <ListBox>
      {users.map(
        (user: any) =>
          user && (
            <UserTableContent
              key={user.__id}
              user={user}
              isManager={myInfo?.isManager}
            />
          )
      )}
    </ListBox>
  );
};

export default UsersTable;
