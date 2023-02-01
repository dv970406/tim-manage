import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "react-relay";
import { theme } from "../../../../css/theme";
import { Text } from "../../../atomics/typographys/texts";
import { Td, Tr } from "../../../molecules/tables/Td";
import {
  UserTableContent_user$data,
  UserTableContent_user$key,
} from "./__generated__/UserTableContent_user.graphql";

interface IUserTableContent {
  user: UserTableContent_user$key;
}

const userTableContentFragment = graphql`
  fragment UserTableContent_user on User {
    id
    name
    email
    position {
      id
      position
    }
    team {
      id
      team
    }
    joinDate
  }
`;
const UserTableContent = ({ user }: IUserTableContent) => {
  const tableContentData = useFragment(userTableContentFragment, user);

  return (
    <Tr key={tableContentData.id}>
      <Td role="gridcell">
        <Text>{tableContentData.name}</Text>
      </Td>
      <Td role="gridcell">
        <Text>{tableContentData.email}</Text>
      </Td>
      <Td role="gridcell">
        <Text>{tableContentData.position.position}</Text>
      </Td>
      <Td role="gridcell">
        <Text>{tableContentData.team.team}</Text>
      </Td>
      <Td role="gridcell">
        <Text>
          {new Date(tableContentData.joinDate).toJSON().substring(0, 10)}
        </Text>
      </Td>
    </Tr>
  );
};

export default UserTableContent;
