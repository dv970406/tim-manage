import styled from "@emotion/styled";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { theme } from "../../../css/theme";
import { SCHEDULES } from "../../../utils/constants/schedule.constant";
import { SubTitle } from "../../atomics/typographys/titles";

interface ICheckbox {
  id: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  register?: UseFormRegisterReturn<string>;
  text: string;
  defaultChecked?: boolean;
}

const SCheckbox = styled.input(({ theme }) => ({
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
export const Checkbox = ({
  id,
  onClick,
  register,
  text,
  defaultChecked,
}: ICheckbox) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing.sm,
      }}
    >
      <SCheckbox
        type="checkbox"
        {...register}
        id={id}
        defaultChecked={defaultChecked}
        onClick={onClick}
      />
      <label
        style={{
          cursor: "pointer",
        }}
        htmlFor={id}
      >
        <SubTitle>{text}</SubTitle>
      </label>
    </div>
  );
};
