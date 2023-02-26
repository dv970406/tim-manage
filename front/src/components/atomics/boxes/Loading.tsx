import React from "react";
import { BallTriangle } from "react-loader-spinner";
import { theme } from "../../../css/theme";
import { CenterFixBox } from "../../molecules/boxes/CenterBox";

const Loading = () => {
  return (
    <CenterFixBox>
      <BallTriangle
        height="80"
        width="80"
        color={theme.colors.purple}
        ariaLabel="loading"
      />
    </CenterFixBox>
  );
};

export default Loading;
