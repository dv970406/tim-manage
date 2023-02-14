import {
  faPooStorm,
  faS,
  faUserSecret,
  faV,
} from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import { Suspense, useEffect } from "react";
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import { useGetMyInfo } from "../../client/user/GetMyInfo.client";
import { getUserQuery, useGetUser } from "../../client/user/GetUser.client";
import { GetUserQuery } from "../../client/user/__generated__/GetUserQuery.graphql";
import { RowBox, GapBox } from "../../components/atomics/boxes/Boxes";
import { Section } from "../../components/atomics/sections/sections";
import { MainText } from "../../components/atomics/typographys/texts";
import { ButtonIcon } from "../../components/molecules/buttons/Buttons";
import NavIconButton from "../../components/organisms/header/NavIconButton";
import { theme } from "../../css/theme";

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

  return (
    <GapBox>
      <Section>
        <RowBox
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <NavIconButton path="" icon={faS} />
          <NavIconButton path="vacation" icon={faV} />
        </RowBox>
      </Section>
      <Section style={{ height: "100%" }}>
        <Outlet context={user} />
        {/* ShowUserVacations */}
      </Section>
    </GapBox>
  );
};

export default UserDetailPage;
