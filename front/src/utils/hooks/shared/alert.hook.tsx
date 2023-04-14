import { useEffect, useRef, useState } from "react";
import { RowBox } from "../../../components/atomics/boxes/FlexBox";
import { MainText } from "../../../components/atomics/typographys/Main";
import { theme } from "../../../css/theme";

interface IEnqueueAlert {
  message: string | null;
  type: "error" | "success";
}
export const useAlert = () => {
  const [isAlertOn, setAlertOn] = useState(false);
  const enqueueAlert = ({ message, type }: IEnqueueAlert) => {
    setAlertOn(true);

    return (
      <>
        <RowBox
          style={{
            backgroundColor:
              type === "success" ? theme.bgColors.green : theme.bgColors.red,
            padding: theme.spacing.xl,
            alignItems: "center",
            zIndex: 10,
            position: "fixed",
            left: "50%",
            top: "1%",
          }}
        >
          <MainText>{message}</MainText>
        </RowBox>
      </>
    );
  };
  useEffect(() => {
    if (isAlertOn) {
      setTimeout(() => {
        setAlertOn(false);
      }, 2000);
    }
  }, [isAlertOn]);
  return { enqueueAlert };
};
