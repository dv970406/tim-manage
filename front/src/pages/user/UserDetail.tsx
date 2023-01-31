import { graphql } from "babel-plugin-relay/macro";
import { Suspense, useEffect } from "react";
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import { useParams } from "react-router-dom";
import { getUserQuery, useGetUser } from "../../client/user/GetUser.client";
import { GetUserQuery } from "../../client/user/__generated__/GetUserQuery.graphql";

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
  return <div>{user?.email}</div>;
};

export default UserDetailPage;
