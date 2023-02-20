import React from "react";
import { ButtonIcon, TextIcon } from "../../molecules/icons/icons";
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
      <TextIcon icon={faUser} text="Sign In" />
      <ButtonIcon icon={faGear} />
      <ButtonIcon icon={faBell} />
    </div>
  );
};

export default InfoBox;
