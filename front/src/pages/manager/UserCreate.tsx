import React from "react";
import { Section } from "../../components/atomics/sections/sections";
import CreateUserForm from "../../components/templates/content/manager/CreateUserForm";

const UserCreatePage = () => {
  return (
    <Section style={{ width: "40%" }}>
      <CreateUserForm />
    </Section>
  );
};

export default UserCreatePage;
