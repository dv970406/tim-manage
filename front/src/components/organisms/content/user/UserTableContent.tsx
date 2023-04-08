import { faShield, faUser } from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { useFragment } from "react-relay";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../css/theme";
import { POSITION } from "../../../../utils/constants/user.constant";
import { getPositionIcon, getTeamIcon } from "../../../../utils/shared";
import { HorizontalDivider } from "../../../atomics/boxes/Divider";
import { ColumnBox, RowBox } from "../../../atomics/boxes/FlexBox";
import { GridItem } from "../../../atomics/boxes/ListBox";
import { SectionText, MainText } from "../../../atomics/typographys/texts";
import { SectionTitle } from "../../../atomics/typographys/titles";
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
  const tableContentData = useFragment(userTableContentFragment, user);
  const navigate = useNavigate();

  const [isHovering, setIsHovering] = useState(false);

  return (
    <GridItem
      onClick={
        isManager ? () => navigate(`/user/${tableContentData.id}`) : () => null
      }
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <RowBox>
        <IconBox
          bgColor={isHovering ? theme.bgColors.purple : theme.bgColors.gray}
          icon={faUser}
          size={"2x"}
        />
        <ColumnBox gap={theme.spacing.sm}>
          <SectionTitle className="one-line">
            {tableContentData.name}
          </SectionTitle>

          <MainText>{tableContentData.email}</MainText>
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
          </RowBox>

          <RowBox
            style={{
              alignItems: "center",
              gap: theme.spacing.xs,
            }}
          >
            <IconBox icon={getTeamIcon(tableContentData.team.team)} />
            <MainText style={{ whiteSpace: "nowrap" }}>
              {tableContentData.team.team}
            </MainText>
          </RowBox>
        </RowBox>
      </RowBox>
    </GridItem>
  );
};

export default UserTableContent;
