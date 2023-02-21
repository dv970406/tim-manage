import { graphql } from "babel-plugin-relay/macro";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ReactSelect, { GroupBase, MultiValue, StylesConfig } from "react-select";
import {
  useSelectUsers,
  useSelectUsersPagination,
} from "../../../../client/user/SelectUsers.client";
import { theme } from "../../../../css/theme";
import { SubTitle } from "../../../atomics/typographys/titles";
import { GapBox } from "../../../atomics/boxes/Boxes";
import { usePaginationFragment } from "react-relay";
import { SelectUsersPaginationQuery } from "./__generated__/SelectUsersPaginationQuery.graphql";
import { SelectUsers_user$key } from "./__generated__/SelectUsers_user.graphql";
import { PAGINATION_LOAD_COUNT } from "../../../../utils/constants/share.constant";

export interface IAttendee {
  readonly id: string;
  readonly name: string;
}

export interface ISelectFormat {
  value: string;
  label: string;
}
interface ISelectUsers {
  prevAttendees?: IAttendee[];
  setAttendeesId: Dispatch<SetStateAction<string[]>>;
}

// 모든 유저의 정보를 가져와서 리스트에 띄워주고 참석자를 고를 수 있게 함
// Multi Select가 필요해서 datalist를 여기에는 사용하지 않음

const selectUsersQuery = graphql`
  fragment SelectUsers_user on Query
  @argumentDefinitions(first: { type: "Int!" }, after: { type: "DateTime" })
  @refetchable(queryName: "SelectUsersPaginationQuery") {
    getUsers(first: $first, after: $after)
      @connection(key: "SelectUsers_getUsers") {
      ok
      error
      edges {
        node {
          id
          name
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
const SelectUsers = ({ prevAttendees, setAttendeesId }: ISelectUsers) => {
  const { users } = useSelectUsers();

  const {
    data: {
      getUsers: { edges },
    },
    loadNext,
    hasNext,
    isLoadingNext,
  } = usePaginationFragment<SelectUsersPaginationQuery, SelectUsers_user$key>(
    selectUsersQuery,
    users
  );

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

  const selectableUsers = edges.map((user) => ({
    value: user.node.id,
    label: user.node.name,
  }));

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const getMoreData = () => {
    if (!hasNext || isLoadingNext) return;
    console.log("reached");
    loadNext(PAGINATION_LOAD_COUNT);
  };
  return (
    <GapBox>
      <label
        htmlFor="attendees"
        style={{ cursor: "pointer" }}
        onClick={() => setMenuIsOpen((prev) => !prev)}
      >
        <SubTitle>참석자</SubTitle>
      </label>
      <ReactSelect
        id="attendees"
        value={selectedUsers}
        maxMenuHeight={200}
        isMulti
        menuIsOpen={menuIsOpen}
        onMenuOpen={() => setMenuIsOpen(true)}
        onMenuClose={() => setMenuIsOpen(false)}
        loadingMessage={() => "팀솔러의 정보를 불러오는 중입니다."}
        noOptionsMessage={() => "존재하지 않는 이름입니다."}
        placeholder="참석할 인원을 골라주세요."
        name="attendees"
        options={selectableUsers}
        styles={selectStyles}
        onChange={handleChangeSelect}
        // infinite scroll에 활용
        onMenuScrollToBottom={getMoreData}
      />
    </GapBox>
  );
};

export default SelectUsers;

const selectStyles: StylesConfig<unknown, true, GroupBase<unknown>> = {
  input: (styles) => ({
    ...styles,
    color: theme.colors.white,
  }),
  control: (styles, { isFocused, menuIsOpen }) => ({
    ...styles,
    backgroundColor: "none",
    borderColor:
      isFocused || menuIsOpen ? theme.colors.purple : theme.colors.white,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    transition: "all 0.2s",

    ":focus": {
      borderColor: theme.colors.purple,
    },
  }),

  option: (styles) => {
    return {
      ...styles,
      backgroundColor: theme.bgColors.section,
      ":hover": {
        backgroundColor: theme.bgColors.gray,
      },
      ":focus": {
        borderColor: theme.bgColors.purple,
      },
    };
  },
  menuList: (styles) => {
    return {
      ...styles,
      backgroundColor: theme.bgColors.section,
    };
  },
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: theme.bgColors.purple,
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: theme.colors.white,
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: theme.colors.white,
    ":hover": {
      backgroundColor: theme.hoverColors.purple,
    },
  }),
};
