import {
  faBackpack,
  faCrown,
  faEllipsisVertical,
  faUser,
  faUsers,
} from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { useFragment } from "react-relay";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../css/theme";
import { POSITION_CEO } from "../../../../utils/constants/user.constant";
import { getKoreanDateFormat } from "../../../../utils/time/time";
import {
  RowBox,
  HorizontalDivider,
  GapBox,
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
    position {
      id
      position
    }
    team {
      id
      team
    }
    joinDate
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
        <GapBox>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <SectionTitle>{tableContentData.name}</SectionTitle>
            <ButtonIcon onClick={() => null} icon={faEllipsisVertical} />
          </div>
          <div>
            <MainText>{tableContentData.email}</MainText>
          </div>
        </GapBox>
      </RowBox>

      <HorizontalDivider />
      <RowBox
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: theme.spacing.sm,
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: theme.spacing.sm,
              alignItems: "center",
            }}
          >
            <BoxIcon
              icon={
                tableContentData.position.position === POSITION_CEO
                  ? faCrown
                  : faBackpack
              }
              color={
                tableContentData.position.position === POSITION_CEO
                  ? "gold"
                  : undefined
              }
            />
            <MainText>{tableContentData.position.position}</MainText>
          </div>

          <div
            style={{
              display: "flex",
              gap: theme.spacing.sm,
              alignItems: "center",
            }}
          >
            <BoxIcon icon={faUsers} />
            <MainText>{tableContentData.team.team}</MainText>
          </div>
        </div>

        <MainText>{joinDate}</MainText>
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
