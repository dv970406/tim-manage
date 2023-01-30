import { graphql } from "babel-plugin-relay/macro";
import { useEffect, useState } from "react";
import { useLazyLoadQuery } from "react-relay";
import {
  IAttendee,
  ISelectFormat,
} from "../../components/organisms/content/calendar/SelectUsers";
import { SelectUsersQuery } from "./__generated__/SelectUsersQuery.graphql";

export const selectUsersQuery = graphql`
  query SelectUsersQuery {
    getUsers {
      ok
      error
      users {
        id
        name
      }
    }
  }
`;

export const useSelectUsers = () => {
  const [usersBySelectOptions, setUsersBySelectOptions] = useState<
    ISelectFormat[]
  >([]);

  const {
    getUsers: { ok, error, users },
  } = useLazyLoadQuery<SelectUsersQuery>(selectUsersQuery, {});

  useEffect(() => {
    if (!ok) return alert(error);
    const newUserFormat = users?.map((user: IAttendee) => ({
      value: user.id,
      label: user.name,
    }));

    if (!newUserFormat) return;
    setUsersBySelectOptions(newUserFormat);
  }, [ok]);

  return { usersBySelectOptions };
};
