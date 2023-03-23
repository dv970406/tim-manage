import React from "react";
import { CenterBox } from "../../components/atomics/boxes/Boxes";
import { Section } from "../../components/atomics/sections/sections";
import CreateUserForm from "../../components/templates/content/manager/CreateUserForm";

const UserCreatePage = () => {
  return (
    <CenterBox>
      <Section style={{ width: "40%" }}>
        <CreateUserForm />
      </Section>
    </CenterBox>
  );
};

export default UserCreatePage;
