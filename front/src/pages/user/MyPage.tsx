import {
  faM,
  faPooStorm,
  faS,
  faUserSecret,
  faV,
} from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import { Suspense, useEffect } from "react";
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import {
  getMyAllInfoQuery,
  useGetMyAllInfo,
} from "../../client/user/GetMyAllInfo.client";
import {
  getMyInfoQuery,
  useGetMyInfo,
} from "../../client/user/GetMyInfo.client";
import { getUserQuery, useGetUser } from "../../client/user/GetUser.client";
import { GetMyAllInfoQuery } from "../../client/user/__generated__/GetMyAllInfoQuery.graphql";
import { GetMyInfoQuery } from "../../client/user/__generated__/GetMyInfoQuery.graphql";
import { GetUserQuery } from "../../client/user/__generated__/GetUserQuery.graphql";
import { RowBox, GapBox } from "../../components/atomics/boxes/Boxes";
import { Section } from "../../components/atomics/sections/sections";
import { MainText } from "../../components/atomics/typographys/texts";
import { ButtonIcon } from "../../components/molecules/buttons/Buttons";
import NavIconButton from "../../components/organisms/header/NavIconButton";
import { theme } from "../../css/theme";
import { PAGINATION_LOAD_COUNT } from "../../utils/constants/share.constant";

const MyPage = () => {
  const [getMyAllInfoQueryReference, loadUserQuery] =
    useQueryLoader<GetMyAllInfoQuery>(getMyAllInfoQuery);

  useEffect(() => {
    loadUserQuery({ first: PAGINATION_LOAD_COUNT });
  }, []);
  return (
    <Suspense fallback="Loading...">
      {getMyAllInfoQueryReference && (
        <My getMyAllInfoQueryReference={getMyAllInfoQueryReference} />
      )}
    </Suspense>
  );
};

interface IMy {
  getMyAllInfoQueryReference: PreloadedQuery<GetMyAllInfoQuery>;
}
const My = ({ getMyAllInfoQueryReference }: IMy) => {
  const { myAllInfo } = useGetMyAllInfo(getMyAllInfoQueryReference);

  return (
    <GapBox>
      <Section>
        <RowBox style={{ justifyContent: "center", alignItems: "center" }}>
          <NavIconButton path="" icon={faM} />
          <NavIconButton path="post" icon={faPooStorm} />
          <NavIconButton path="comment" icon={faPooStorm} />
          <NavIconButton path="like" icon={faPooStorm} />
          <NavIconButton path="answer" icon={faS} />
          <NavIconButton path="vacation" icon={faV} />
          <NavIconButton path="update" icon={faUserSecret} />
        </RowBox>
      </Section>
      <Section style={{ height: "100%" }}>
        <Outlet context={myAllInfo} />
        {/* ShowUserPosts, ShowUserSurveys, ShowUserVacations, UpdateUserPassword */}
      </Section>
    </GapBox>
  );
};

export default MyPage;
