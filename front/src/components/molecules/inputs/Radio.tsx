import styled from "@emotion/styled";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { theme } from "../../../css/theme";
import { SCHEDULES } from "../../../utils/constants/schedule.constant";
import { CenterBox } from "../../atomics/boxes/Boxes";
import { SubTitle } from "../../atomics/typographys/titles";

interface IRadio {
  value: string;
  name?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  register?: UseFormRegisterReturn<string>;
  text: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

const SRadio = styled.input(({ theme }) => ({
  border: `2px solid ${theme.colors.gray}`,
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  transition: "border 0.2s ease-in-out",
  "&:checked": {
    border: `2px solid ${theme.colors.gray}`,
    backgroundColor: theme.bgColors.purple,
  },
  "&:hover": {
    border: `2px solid ${theme.hoverColors.purple}`,
    cursor: "pointer",
  },
}));
export const Radio = ({
  value,
  name,
  onClick,
  register,
  text,
  defaultChecked = false,
  disabled = false,
}: IRadio) => {
  return (
    <CenterBox>
      <SRadio
        type="radio"
        {...register}
        name={name}
        {...(value && { value })}
        id={value}
        onClick={onClick}
        disabled={disabled}
        defaultChecked={defaultChecked}
      />
      <label
        style={{
          cursor: "pointer",
        }}
        htmlFor={value}
      >
        <SubTitle>{text}</SubTitle>
      </label>
    </CenterBox>
  );
};
