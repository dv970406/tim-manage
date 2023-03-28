import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/pro-solid-svg-icons";
import { ChangeEventHandler, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { theme } from "../../../css/theme";
import { BottomBorderInputBox } from "../../atomics/inputs/inputs";
import { ErrorText } from "../../atomics/typographys/texts";
import { BoxIcon } from "../icons/BoxIcon";

interface ISearchInput {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  register?: UseFormRegisterReturn<string>;
  noError?: boolean;
  errorMessage?: string;
  placeholder?: string;
  icon?: IconProp;
  width?: string | number;
}
export const SearchInput = ({
  onChange,
  register,
  noError = false,
  errorMessage,
  placeholder = "키워드를 입력해주세요.",
  icon,
  width,
}: ISearchInput) => {
  const [isFocusing, setisFocusing] = useState(false);

  return (
    <BottomBorderInputBox
      onFocus={() => setisFocusing(true)}
      onBlur={() => setisFocusing(false)}
      isFocusing={isFocusing}
      width={width}
    >
      <BoxIcon
        bgColor={isFocusing ? theme.bgColors.purple : undefined}
        icon={icon ? icon : faSearch}
      />
      <input
        // 참고로 register와 onChange는 공존 불가
        {...register}
        {...(onChange && { onChange })}
        placeholder={placeholder}
      />
      {!noError && <ErrorText style={{ height: 15 }}>{errorMessage}</ErrorText>}
    </BottomBorderInputBox>
  );
};
