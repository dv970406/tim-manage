import {
  faBaby,
  faBusinessFront,
  faCitrus,
  faCompass,
  faCrown,
  faCube,
  faFlower,
  faHeadSideGoggles,
  faSeedling,
  faSpiderWeb,
  faThoughtBubble,
  faUser,
  faVrCardboard,
} from "@fortawesome/pro-solid-svg-icons";
import { POSITION, TEAM } from "./constants/user.constant";

export const getTeamIcon = (team: string) => {
  switch (team) {
    case TEAM["비타민"]:
      return faCitrus;
    case TEAM["리얼라이즈"]:
      return faVrCardboard;
    case TEAM["시뮬레이션"]:
      return faHeadSideGoggles;
    case TEAM["웹"]:
      return faSpiderWeb;
    case TEAM["유니티"]:
      return faCube;
    case TEAM["프론티어"]:
      return faBusinessFront;
    default:
      return faUser;
  }
};

export const getPositionIcon = (position: string) => {
  switch (position) {
    case POSITION["대표"]:
      return faCrown;
    case POSITION["이사"]:
      return faCompass;
    case POSITION["책임"]:
      return faFlower;
    case POSITION["사원"]:
      return faSeedling;
    default:
      return faUser;
  }
};
