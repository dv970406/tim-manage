import styled from "@emotion/styled";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { theme } from "../../../css/theme";
import { SCHEDULES } from "../../../utils/constants/schedule.constant";
import { LabelTitle } from "../../atomics/typographys/titles";

interface IRadio {
  value: string;
  name?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  register?: UseFormRegisterReturn<string>;
  text: string;
  defaultChecked?: boolean;
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
  defaultChecked,
}: IRadio) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing.sm,
      }}
    >
      <SRadio
        type="radio"
        {...register}
        name={name}
        {...(value && { value })}
        id={value}
        defaultChecked={defaultChecked}
        onClick={onClick}
      />
      <label
        style={{
          cursor: "pointer",
        }}
        htmlFor={value}
      >
        <LabelTitle>{text}</LabelTitle>
      </label>
    </div>
  );
};
