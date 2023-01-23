import { graphql } from "babel-plugin-relay/macro";
import { useEffect } from "react";
import { useMutation } from "react-relay";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  LoginMutation,
  LoginMutation$data,
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
  const [loginMutate, loginLoading] = useMutation<LoginMutation>(loginQuery);

  const navigate = useNavigate();
  const saveToken = ({ login: { ok, token, error } }: LoginMutation$data) => {
    if (!ok || !token) {
      alert(error);
      return;
    }

    localStorage.setItem("TOKEN", token);
    // 홈으로 푸시
    navigate("/");
  };

  return { loginMutate, loginLoading, saveToken };
};

// export const saveToken = (
//   { login: { ok, token, error } }: LoginMutation$data,
//   navigate: NavigateFunction
// ) => {
//   if (!ok || !token) {
//     alert(error);
//     return;
//   }
//   localStorage.setItem("TOKEN", token);
//   // 홈으로 푸시
//   navigate("/");
// };
