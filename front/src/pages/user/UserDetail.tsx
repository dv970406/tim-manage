import { Suspense, useEffect } from "react";
import { PreloadedQuery, useQueryLoader } from "react-relay";
import { useParams } from "react-router-dom";
import { getUserQuery, useGetUser } from "../../client/user/GetUser.client";
import { GetUserQuery } from "../../client/user/__generated__/GetUserQuery.graphql";

const UserDetailPage = () => {
  const { userId } = useParams();

  const [getUserQueryReference, loadGetUserQuery] =
    useQueryLoader<GetUserQuery>(getUserQuery);

  useEffect(() => {
    if (!userId) return;
    loadGetUserQuery({ id: userId });
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
  return <div>{user?.email}</div>;
};

export default UserDetailPage;
