import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { ChangeEventHandler, useState } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { theme } from "../../../css/theme";
import { ColumnBox } from "../../atomics/boxes/FlexBox";
import { FullBorderInput } from "../../atomics/inputs/FullBorderInput";
import { ErrorText, MainText } from "../../atomics/typographys/texts";
import { SubTitle } from "../../atomics/typographys/titles";
import { IconBox } from "../boxes/IconBox";

interface ITextInput {
  label?: string;
  icon: IconProp;
  placeholder?: string;
  type?: string;
  noError?: boolean;
  step?: number;
  register?: UseFormRegisterReturn<string>;
  defaultValue?: string;
  errorMessage?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
export const TextInput = ({
  label,
  icon,
  placeholder = "Placeholder",
  type = "text",
  noError = false,
  step,
  register,
  defaultValue,
  errorMessage,
  onChange,
}: ITextInput) => {
  const [isFocusing, setIsFocusing] = useState(false);
  return (
    <ColumnBox gap={theme.spacing.xs}>
      {label && (
        <label htmlFor={label} style={{ cursor: "pointer" }}>
          <SubTitle>{label}</SubTitle>
        </label>
      )}
      <FullBorderInput
        onFocus={() => setIsFocusing(true)}
        onBlur={() => setIsFocusing(false)}
        isFocusing={isFocusing}
      >
        {icon && (
          <div>
            <IconBox
              bgColor={isFocusing ? theme.bgColors.purple : undefined}
              icon={icon}
            />
          </div>
        )}
        <input
          id={label}
          placeholder={placeholder}
          style={{
            width: "100%",
            padding: theme.spacing.xs,
          }}
          type={type}
          {...(defaultValue && { defaultValue })}
          {...(type && {
            step,
            min: 0,
            max: 30,
          })}
          // 참고로 register와 onChange는 공존 불가
          {...register}
          {...(onChange && { onChange })}
        />
      </FullBorderInput>
      {!noError && <ErrorText style={{ height: 15 }}>{errorMessage}</ErrorText>}
    </ColumnBox>
  );
};
