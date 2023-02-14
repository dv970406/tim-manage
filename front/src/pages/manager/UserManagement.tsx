import React, { Suspense, useEffect, useState } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import {
  getManagerUsersQuery,
  useGetManagerUsers,
} from "../../client/manager/GetManagerUsers.client";
import { GetManagerUsersQuery } from "../../client/manager/__generated__/GetManagerUsersQuery.graphql";
import { useGetMyInfo } from "../../client/user/GetMyInfo.client";
import { GapBox } from "../../components/atomics/boxes/Boxes";
import { Section } from "../../components/atomics/sections/sections";
import Table from "../../components/molecules/tables/Table";
import ManagerUserTableContent from "../../components/organisms/content/manager/ManagerUserTableContent";
import ManagerUsersTable from "../../components/templates/content/manager/ManagerUsersTable";
import MutateUserForm from "../../components/templates/content/manager/MutateUserForm";

const UserManagementPage = () => {
  const [managerUsersQueryReference, loadManagerUsersQuery] =
    useQueryLoader<GetManagerUsersQuery>(getManagerUsersQuery);

  useEffect(() => {
    loadManagerUsersQuery({});
  }, []);
  return (
    <Suspense fallback="qweewqqweewqqweewqqweewqqweewq">
      {managerUsersQueryReference && (
        <UserManagement
          managerUsersQueryReference={managerUsersQueryReference}
        />
      )}
    </Suspense>
  );
};
interface IUserManagement {
  managerUsersQueryReference: PreloadedQuery<GetManagerUsersQuery>;
}

const UserManagement = ({ managerUsersQueryReference }: IUserManagement) => {
  const { users } = useGetManagerUsers(managerUsersQueryReference);
  const { myInfo } = useGetMyInfo();

  const [clickedUserId, setClickedUserId] = useState("");

  if (!users) return <></>;

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
      <GapBox
        style={{
          flexDirection: "row",
          width: "70%",
        }}
      >
        <Section style={{ width: "60%" }}>
          <ManagerUsersTable
            users={users}
            clickedUserId={clickedUserId}
            setClickedUserId={setClickedUserId}
            myPosition={myInfo?.position.position}
          />
        </Section>

        <Section style={{ width: "40%" }}>
          <Suspense fallback="hihihihi">
            <MutateUserForm
              clickedUserId={clickedUserId}
              setClickedUserId={setClickedUserId}
              myPosition={myInfo?.position.position}
              myId={myInfo?.id}
            />
          </Suspense>
        </Section>
      </GapBox>
    </div>
  );
};
export default UserManagementPage;
