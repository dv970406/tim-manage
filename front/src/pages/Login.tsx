import React from "react";
import LoginForm from "../components/organisms/login/LoginForm";
import Body from "../components/templates/Body";

const LoginPage = () => {
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
