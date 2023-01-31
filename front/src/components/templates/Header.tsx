import { faBell, faGear, faUser } from "@fortawesome/pro-solid-svg-icons";
import React from "react";
import { useGetMyInfo } from "../../client/user/GetMyInfo.client";
import { theme } from "../../css/theme";
import { HeaderSection } from "../atomics/sections/sections";
import NavIconButton from "../organisms/header/NavIconButton";

const Header = () => {
  const { myInfo } = useGetMyInfo();

  return (
    <HeaderSection>
      <nav
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div></div>
        <ul
          style={{
            display: "flex",
            gap: theme.spacing.md,
          }}
        >
          <NavIconButton icon={faUser} path={`/user/${myInfo?.id}`} />
          <NavIconButton icon={faGear} path={`/asd`} />
          <NavIconButton icon={faBell} path={`/dsa`} />
        </ul>
      </nav>
    </HeaderSection>
  );
};

export default Header;
