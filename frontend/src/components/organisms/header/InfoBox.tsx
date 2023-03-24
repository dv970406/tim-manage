import React from "react";
import { IconButton, ButtonTextIcon } from "../../molecules/icons/icons";
import { faUser, faGear, faBell } from "@fortawesome/pro-solid-svg-icons";
import { theme } from "../../../css/theme";

const InfoBox = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: theme.spacing.lg,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input />
      <ButtonTextIcon icon={faUser} text="Sign In" />
      <IconButton icon={faGear} />
      <IconButton icon={faBell} />
    </div>
  );
};

export default InfoBox;
