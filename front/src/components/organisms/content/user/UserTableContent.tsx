import {
  faBackpack,
  faCrown,
  faEllipsisVertical,
  faShield,
  faUser,
  faUsers,
} from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { useFragment } from "react-relay";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../css/theme";
import { POSITION } from "../../../../utils/constants/user.constant";
import { getPositionIcon, getTeamIcon } from "../../../../utils/shared";
import { getKoreanDateFormat } from "../../../../utils/time/time";
import {
  RowBox,
  HorizontalDivider,
  ColumnBox,
  ItemBox,
} from "../../../atomics/boxes/Boxes";
import { SectionText, MainText } from "../../../atomics/typographys/texts";
import { SectionTitle } from "../../../atomics/typographys/titles";
import { ButtonIcon } from "../../../molecules/buttons/Buttons";
import { BoxIcon } from "../../../molecules/icons/Icons";
import { UserTableContent_user$key } from "./__generated__/UserTableContent_user.graphql";

interface IUserTableContent {
  user: UserTableContent_user$key;
  isManager?: boolean;
}

const userTableContentFragment = graphql`
  fragment UserTableContent_user on User {
    id
    name
    email
    isManager
    isLeader
    position {
      id
      position
    }
    team {
      id
      team
    }
    joinDate
    createdAt
  }
`;
const UserTableContent = ({ user, isManager }: IUserTableContent) => {
  const tableContentData = useFragment(userTableContentFragment, user);
  const navigate = useNavigate();
  const joinDate = getKoreanDateFormat(tableContentData.joinDate);

  const [isHovering, setIsHovering] = useState(false);

  return (
    <ItemBox
      onClick={
        isManager ? () => navigate(`/user/${tableContentData.id}`) : () => null
      }
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <RowBox>
        <BoxIcon
          bgColor={isHovering ? theme.bgColors.purple : theme.bgColors.gray}
          icon={faUser}
          size={"2x"}
        />
        <ColumnBox gap={theme.spacing.sm}>
          <RowBox
            style={{
              justifyContent: "space-between",
            }}
          >
            <SectionTitle>{tableContentData.name}</SectionTitle>
            <ButtonIcon onClick={() => null} icon={faEllipsisVertical} />
          </RowBox>
          <div>
            <MainText>{tableContentData.email}</MainText>
          </div>
        </ColumnBox>
      </RowBox>

      <HorizontalDivider />
      <RowBox
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <RowBox>
          {tableContentData.isLeader && (
            <div
              style={{
                display: "flex",
                gap: theme.spacing.sm,
                alignItems: "center",
              }}
            >
              <BoxIcon icon={faShield} color="gold" />
              <MainText>리더</MainText>
            </div>
          )}
        </RowBox>
        <RowBox>
          <div
            style={{
              display: "flex",
              gap: theme.spacing.sm,
              alignItems: "center",
            }}
          >
            <BoxIcon
              icon={getPositionIcon(tableContentData.position.position)}
              color={
                tableContentData.position.position === POSITION["대표"]
                  ? "gold"
                  : undefined
              }
            />
            <MainText style={{ whiteSpace: "nowrap" }}>
              {tableContentData.position.position}
            </MainText>
          </div>

          <div
            style={{
              display: "flex",
              gap: theme.spacing.sm,
              alignItems: "center",
            }}
          >
            <BoxIcon icon={getTeamIcon(tableContentData.team.team)} />
            <MainText style={{ whiteSpace: "nowrap" }}>
              {tableContentData.team.team}
            </MainText>
          </div>
        </RowBox>
      </RowBox>
    </ItemBox>
  );
  {
    /* <ItemBox onClick={() => navigate(`/user/${tableContentData.id}`)}>
    <MainText>{tableContentData.name}</MainText>
    <MainText>{tableContentData.email}</MainText>
    <MainText>{tableContentData.position.position}</MainText>
    <MainText>{tableContentData.team.team}</MainText>
    <MainText>{joinDate}</MainText>
  </ItemBox> */
  }
};

export default UserTableContent;
