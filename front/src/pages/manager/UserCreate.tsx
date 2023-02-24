import React from "react";
import { Section } from "../../components/atomics/sections/sections";
import { CenterFixBox } from "../../components/molecules/boxes/CenterBox";
import CreateUserForm from "../../components/templates/content/manager/CreateUserForm";

const UserCreatePage = () => {
  return (
    <CenterFixBox>
      <Section style={{ width: "40%" }}>
        <CreateUserForm />
      </Section>
    </CenterFixBox>
  );
};

export default UserCreatePage;
