import {
  faBook,
  faComment,
  faFaceDiagonalMouth,
  faHeart,
  faHouseLeave,
  faInfo,
  faLips,
  faM,
  faPooStorm,
  faS,
  faSpeaker,
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

import { GetMyAllInfoQuery } from "../../client/user/__generated__/GetMyAllInfoQuery.graphql";

import { RowBox, ColumnBox } from "../../components/atomics/boxes/Boxes";
import Loading from "../../components/atomics/boxes/Loading";
import { Section } from "../../components/atomics/sections/sections";

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
    <Suspense fallback={<Loading />}>
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
    <ColumnBox gap={theme.spacing.md}>
      <Section>
        <RowBox style={{ justifyContent: "center", alignItems: "center" }}>
          <NavIconButton path="" icon={faInfo} />
          <NavIconButton path="post" icon={faBook} />
          <NavIconButton path="comment" icon={faComment} />
          <NavIconButton path="like" icon={faHeart} />
          <NavIconButton path="answer" icon={faLips} />
          <NavIconButton path="vacation" icon={faHouseLeave} />
          <NavIconButton path="update" icon={faUserSecret} />
        </RowBox>
      </Section>
      <Section style={{ height: "100%" }}>
        <Outlet context={myAllInfo} />
        {/* ShowUserPosts, ShowUserSurveys, ShowUserVacations, UpdateUserPassword */}
      </Section>
    </ColumnBox>
  );
};

export default MyPage;
