import React from "react";
import Table from "../../../molecules/tables/Table";
import SurveyTableContent from "../../../organisms/content/survey/SurveyTableContent";
import { SurveyTableContent_survey$key } from "../../../organisms/content/survey/__generated__/SurveyTableContent_survey.graphql";
import UserTableContent from "../../../organisms/content/user/UserTableContent";
import { UserTableContent_user$key } from "../../../organisms/content/user/__generated__/UserTableContent_user.graphql";

interface IUsersTable {
  users: readonly UserTableContent_user$key[];
}
const UsersTable = ({ users }: IUsersTable) => {
  return (
    <Table headers={["이름", "이메일", "직책", "팀", "입사일"]}>
      {users
        ?.filter((user) => !!user)
        .map((user: any) => (
          <UserTableContent key={user.__id} user={user} />
        ))}
    </Table>
  );
};

export default UsersTable;
