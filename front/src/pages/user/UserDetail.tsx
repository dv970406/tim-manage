import { graphql } from "babel-plugin-relay/macro";
import { Suspense, useEffect } from "react";
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import { useParams } from "react-router-dom";
import { useGetMyInfo } from "../../client/user/GetMyInfo.client";
import { getUserQuery, useGetUser } from "../../client/user/GetUser.client";
import { GetUserQuery } from "../../client/user/__generated__/GetUserQuery.graphql";
import { Section } from "../../components/atomics/sections/sections";

const UserDetailPage = () => {
  const { userId } = useParams();

  const [getUserQueryReference, loadUserQuery] =
    useQueryLoader<GetUserQuery>(getUserQuery);

  useEffect(() => {
    if (!userId) return;
    loadUserQuery({ id: userId });
  }, []);
  return (
    <Suspense fallback="Loading...">
      {getUserQueryReference && (
        <UserDetail getUserQueryReference={getUserQueryReference} />
      )}
    </Suspense>
  );
};

interface IUserDetail {
  getUserQueryReference: PreloadedQuery<GetUserQuery>;
}
const UserDetail = ({ getUserQueryReference }: IUserDetail) => {
  const { user } = useGetUser(getUserQueryReference);
  console.log(user);
  return (
    <>
      <Section>
        {user?.name} & {user?.email}
        마이페이지면 중첩라우팅으로 표현하고 useLazyLoadQuery랑
        fragment활용해보자
      </Section>
    </>
  );
};

export default UserDetailPage;
