import { faShield, faUser } from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { useFragment } from "react-relay";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../css/theme";
import { POSITION } from "../../../../utils/constants/user.constant";
import { getPositionIcon, getTeamIcon } from "../../../../utils/func/icon";
import { HorizontalDivider } from "../../../atomics/boxes/Divider";
import { ColumnBox, RowBox } from "../../../atomics/boxes/FlexBox";
import { GridItem } from "../../../atomics/boxes/GridBox";
import { SectionTitle } from "../../../atomics/typographys/Etc";
import { MainText } from "../../../atomics/typographys/Main";
import { IconBox } from "../../../molecules/boxes/IconBox";
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
  const {
    id: userId,
    email,
    isLeader,
    name,
    position,
    team,
  } = useFragment(userTableContentFragment, user);
  const navigate = useNavigate();

  const [isHovering, setIsHovering] = useState(false);

  return (
    <GridItem
      onClick={isManager ? () => navigate(`/user/${userId}`) : () => null}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <RowBox style={{ width: "100%" }}>
        <IconBox
          bgColor={isHovering ? theme.bgColors.purple : theme.bgColors.gray}
          icon={faUser}
          size={"2x"}
        />
        <ColumnBox gap={theme.spacing.sm}>
          <SectionTitle className="one-line">{name}</SectionTitle>

          <MainText>{email}</MainText>
        </ColumnBox>
      </RowBox>

      <HorizontalDivider />
      <RowBox
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <RowBox>
          {isLeader && (
            <RowBox
              style={{
                display: "flex",
                gap: theme.spacing.sm,
                alignItems: "center",
              }}
            >
              <IconBox icon={faShield} color="gold" />
              <MainText style={{ whiteSpace: "nowrap" }}>리더</MainText>
            </RowBox>
          )}
        </RowBox>
        <RowBox>
          <RowBox
            style={{
              alignItems: "center",
              gap: theme.spacing.xs,
            }}
          >
            <IconBox
              icon={getPositionIcon(position.position)}
              color={
                position.position === POSITION["대표"] ? "gold" : undefined
              }
            />
            <MainText style={{ whiteSpace: "nowrap" }}>
              {position.position}
            </MainText>
          </RowBox>

          <RowBox
            style={{
              alignItems: "center",
              gap: theme.spacing.xs,
            }}
          >
            <IconBox icon={getTeamIcon(team.team)} />
            <MainText style={{ whiteSpace: "nowrap" }}>{team.team}</MainText>
          </RowBox>
        </RowBox>
      </RowBox>
    </GridItem>
  );
};

export default UserTableContent;
