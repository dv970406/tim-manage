import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "react-relay";
import { DefaultUserInfoFragment_user$key } from "./__generated__/DefaultUserInfoFragment_user.graphql";

const defaultUserInfoFragment = graphql`
  fragment DefaultUserInfoFragment_user on User {
    id
    name
    email
  }
`;

interface IDefaultUserInfoFragment {
  userData: DefaultUserInfoFragment_user$key;
}

export const useDefaultUserInfoFragment = ({
  userData,
}: IDefaultUserInfoFragment) => {
  const defaultUserInfo = useFragment<DefaultUserInfoFragment_user$key>(
    defaultUserInfoFragment,
    userData
  );

  return { defaultUserInfo };
};
