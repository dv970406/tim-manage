import React from "react";
import CreateUser from "../../components/organisms/content/user/CreateUser";

const JoinPage = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <CreateUser />
    </section>
  );
};

export default JoinPage;
