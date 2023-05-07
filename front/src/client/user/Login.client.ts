import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { environment, TOKEN } from "../client";
import {
  LoginMutation,
  LoginMutation$variables,
} from "./__generated__/LoginMutation.graphql";

const loginQuery = graphql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      ok
      error
      token
    }
  }
`;

export const useLogin = () => {
  const [loginLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const loginMutation = (variables: LoginMutation$variables) => {
    setIsLoading(true);
    commitMutation<LoginMutation>(environment, {
      mutation: loginQuery,
      variables,

      onCompleted: ({ login: { ok, error, token } }) => {
        setIsLoading(false);
        if (!token) {
          alert(error);
          return;
        } else {
          localStorage.setItem(TOKEN, token);
          // 홈으로 푸시
          navigate("/");
        }
      },
    });
  };

  return { loginMutation, loginLoading };
};

// export const saveToken = (
//   { login: { ok, token, error } }: LoginMutation$data,
//   navigate: NavigateFunction
// ) => {
//   if (!ok || !token) {
//     alert(error);
//     return;
//   }
//   localStorage.setItem(TOKEN, token);
//   // 홈으로 푸시
//   navigate("/");
// };
