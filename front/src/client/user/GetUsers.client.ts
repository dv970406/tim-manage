import { graphql } from "babel-plugin-relay/macro";
import { loadQuery, useLazyLoadQuery, usePreloadedQuery } from "react-relay";
import { environment } from "../client";
import { GetUsersQuery } from "./__generated__/GetUsersQuery.graphql";

// preloadedQuery로 쓰기엔 힘듦
// Users Page에서만 쓰면 아래 주석처리한 preloadedQuery쓰겠는데
// Home Page에서 휴가나 회의 추가할 때도 users 정보 불러와야해서 LazyLoadQuery로 사용
// preloadedQuery 쓰려면 users정보를 Home Page에서 사용중인 CreateScheduleModal에서도 queryLoader를 호출하고 MutateMeetingModal에서도 queryLoader를 호출해서 reference를 던져줘야함 - 코드 반복작성 비선호
// 그렇다고 이 파일에서 loadQuery를 사용하는 방법도 있긴한데 사용하지 않을 수도 있는 데이터를 아무 상황에나 가져오는 것은 별로 선호하지 않음
export const useGetUsers = () => {};
