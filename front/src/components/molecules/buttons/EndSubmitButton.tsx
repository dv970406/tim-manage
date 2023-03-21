import { MouseEventHandler } from "react";
import { ColumnBox } from "../../atomics/boxes/Boxes";
import { SubmitButton } from "../../atomics/buttons/buttons";

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
        marginTop: "auto",
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <SubmitButton onClick={onClick} disabled={disabled}>
        {text}
      </SubmitButton>
    </ColumnBox>
  );
};
