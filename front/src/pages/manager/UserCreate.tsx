import React from "react";
import { Section } from "../../components/atomics/sections/sections";
import CreateUserForm from "../../components/templates/content/manager/CreateUserForm";

const UserCreatePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Section style={{ width: "40%" }}>
        <CreateUserForm />
      </Section>
    </div>
  );
};

export default UserCreatePage;
