import { MouseEventHandler } from "react";
import { ColumnBox } from "../../atomics/boxes/FlexBox";
import { SubmitButton } from "./SubmitButton";

interface IEndSubmitButton {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  text: string;
}
export const EndSubmitButton = ({
  onClick,
  disabled,
  text,
}: IEndSubmitButton) => {
  return (
    <ColumnBox
      style={{
        flexGrow: 1,
        justifyContent: "flex-end",
      }}
    >
      <SubmitButton onClick={onClick} disabled={disabled} text={text} />
    </ColumnBox>
  );
};
