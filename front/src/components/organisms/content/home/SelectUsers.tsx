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

export interface IAttendee {
  readonly id: string;
  readonly name: string;
}

export interface ISelectFormat {
  value: string;
  label: string;
}
interface ISelect {
  prevAttendees?: IAttendee[];
  setAttendeesId: Dispatch<SetStateAction<string[]>>;
}

// 모든 유저의 정보를 가져와서 리스트에 띄워주고 참석자를 고를 수 있게 함
// Multi Select가 필요해서 datalist를 여기에는 사용하지 않음

const selectUsersQuery = graphql`
  fragment SelectUsers_user on Query
  @argumentDefinitions(first: { type: "Int!" }, after: { type: "DateTime" }) {
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
const SelectUsers = ({ prevAttendees, setAttendeesId }: ISelect) => {
  const prevAttendeesBySelectOptions = prevAttendees?.map(
    (attendee: IAttendee) => ({
      value: attendee.id,
      label: attendee.name,
    })
  );

  // 여기서부터 useEffect까지 훅으로 묶고 싶은데 에러남..
  const { users } = useSelectUsers();
  const {
    data: {
      getUsers: { edges },
    },
  } = usePaginationFragment<SelectUsersPaginationQuery, SelectUsers_user$key>(
    selectUsersQuery,
    users
  );

  const [usersBySelectOptions, setUsersBySelectOptions] = useState<
    ISelectFormat[]
  >([]);
  const newUserFormat = edges.map((user) => ({
    value: user.node.id,
    label: user.node.name,
  }));

  useEffect(() => {
    setUsersBySelectOptions(newUserFormat);
  }, []);

  const handleChangeSelect = (selectedUsers: MultiValue<any>) => {
    const attendeesIdArray = selectedUsers.map((user) => user.value);
    setAttendeesId(attendeesIdArray);
  };

  const [menuIsOpen, setMenuIsOpen] = useState(false);
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
        defaultValue={prevAttendeesBySelectOptions}
        isMulti
        menuIsOpen={menuIsOpen}
        onMenuOpen={() => setMenuIsOpen(true)}
        onMenuClose={() => setMenuIsOpen(false)}
        loadingMessage={() => "팀솔러의 정보를 불러오는 중입니다."}
        noOptionsMessage={() => "존재하지 않는 이름입니다."}
        placeholder="참석할 인원을 골라주세요."
        name="attendees"
        options={usersBySelectOptions}
        styles={selectStyles}
        onChange={handleChangeSelect}
      />
    </GapBox>
  );
};

export default SelectUsers;

const selectStyles: StylesConfig<unknown, true, GroupBase<unknown>> = {
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
