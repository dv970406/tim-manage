import React, { Suspense, useEffect, useState } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import {
  getManagerUsersQuery,
  useGetManagerUsers,
} from "../../client/manager/GetManagerUsers.client";
import { GetManagerUsersQuery } from "../../client/manager/__generated__/GetManagerUsersQuery.graphql";
import { useGetMyInfo } from "../../client/user/GetMyInfo.client";
import Loading from "../../components/molecules/shared/Loading";
import { Section } from "../../components/atomics/boxes/Sections";
import CenterFrame from "../../components/molecules/boxes/CenterFrame";
import ManagerUsersTable from "../../components/templates/content/manager/ManagerUsersTable";
import MutateUserForm from "../../components/templates/content/manager/MutateUserForm";

import { PAGINATION_LOAD_COUNT } from "../../utils/constants/share.constant";

const UserManagementPage = () => {
  const [managerUsersQueryReference, loadManagerUsersQuery] =
    useQueryLoader<GetManagerUsersQuery>(getManagerUsersQuery);

  useEffect(() => {
    loadManagerUsersQuery({ first: PAGINATION_LOAD_COUNT });
  }, []);
  return (
    <Suspense fallback={<Loading />}>
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
    <CenterFrame>
      <Section style={{ width: "60%" }}>
        <Suspense fallback={<Loading />}>
          <ManagerUsersTable
            users={users}
            clickedUserId={clickedUserId}
            setClickedUserId={setClickedUserId}
            myPosition={myInfo?.position.position}
          />
        </Suspense>
      </Section>
      <Section style={{ width: "40%" }}>
        <Suspense fallback={<Loading />}>
          <MutateUserForm
            clickedUserId={clickedUserId}
            setClickedUserId={setClickedUserId}
            myPosition={myInfo?.position.position}
            myId={myInfo?.id}
          />
        </Suspense>
      </Section>
    </CenterFrame>
  );
};
export default UserManagementPage;
