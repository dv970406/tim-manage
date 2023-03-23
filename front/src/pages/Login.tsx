import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetMyInfo } from "../client/user/GetMyInfo.client";
import CenterFrame from "../components/molecules/boxes/CenterFrame";
import LoginForm from "../components/organisms/login/LoginForm";
import Body from "../components/templates/Body";

const LoginPage = () => {
  // 이미 로그인된 사람이라면 홈으로 돌려보내기
  const navigate = useNavigate();
  const { myInfo } = useGetMyInfo();

  useEffect(() => {
    if (myInfo?.id) {
      navigate("/");
    }
  }, []);
  return (
    <Body>
      <article
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <LoginForm />
      </article>
    </Body>
  );
};

export default LoginPage;
