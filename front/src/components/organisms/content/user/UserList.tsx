import { Section } from "../../../atomics/sections/sections";
import Table from "../../../molecules/tables/Table";
import TableContent from "./UserTableContent";
import {
  TableContent_user$data,
  TableContent_user$key,
} from "./__generated__/TableContent_user.graphql";
import { UserTableContent_user$key } from "./__generated__/UserTableContent_user.graphql";

interface IUserList {
  users: readonly UserTableContent_user$key[];
}
const UserList = ({ users }: IUserList) => {
  return (
    <Table headers={["이름", "이메일", "직책", "팀", "입사일"]}>
      {users?.map((user: any) => (
        <TableContent key={user.__id} user={user} />
      ))}
    </Table>
  );
};

export default UserList;
