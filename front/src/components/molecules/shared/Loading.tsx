import { BallTriangle } from "react-loader-spinner";
import { theme } from "../../../css/theme";
import { CenterBox } from "../../atomics/boxes/FlexBox";

const Loading = () => {
  return (
    <CenterBox style={{ width: "100%", height: "100%" }}>
      <BallTriangle
        height="80"
        width="80"
        color={theme.colors.purple}
        ariaLabel="loading"
      />
    </CenterBox>
  );
};

export default Loading;
