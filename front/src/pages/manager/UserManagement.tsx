import React, { Suspense, useEffect, useState } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import {
  getManagerUsersQuery,
  useGetManagerUsers,
} from "../../client/manager/GetManagerUsers.client";
import { GetManagerUsersQuery } from "../../client/manager/__generated__/GetManagerUsersQuery.graphql";
import { useGetMyInfo } from "../../client/user/GetMyInfo.client";
import { Section } from "../../components/atomics/sections/sections";
import CenterBox from "../../components/molecules/boxes/CenterBox";
import ManagerUsersTable from "../../components/templates/content/manager/ManagerUsersTable";
import MutateUserForm from "../../components/templates/content/manager/MutateUserForm";
import { theme } from "../../css/theme";
import { PAGINATION_LOAD_COUNT } from "../../utils/constants/share.constant";

const UserManagementPage = () => {
  const [managerUsersQueryReference, loadManagerUsersQuery] =
    useQueryLoader<GetManagerUsersQuery>(getManagerUsersQuery);

  useEffect(() => {
    loadManagerUsersQuery({ first: PAGINATION_LOAD_COUNT });
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
    <CenterBox>
      <Section
        style={{
          width: "60%",
          overflow: "auto",
          gap: theme.spacing.xl,
        }}
      >
        <Suspense fallback="qweewq">
          <ManagerUsersTable
            users={users}
            clickedUserId={clickedUserId}
            setClickedUserId={setClickedUserId}
            myPosition={myInfo?.position.position}
          />
        </Suspense>
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
    </CenterBox>
  );
};
export default UserManagementPage;
