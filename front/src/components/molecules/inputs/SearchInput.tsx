import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/pro-solid-svg-icons";
import { ChangeEventHandler, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { theme } from "../../../css/theme";
import { BottomBorderInput } from "../../atomics/inputs/BottomBorderInput";
import { ErrorText } from "../../atomics/typographys/Etc";
import { IconBox } from "../boxes/IconBox";

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
    <BottomBorderInput
      onFocus={() => setisFocusing(true)}
      onBlur={() => setisFocusing(false)}
      isFocusing={isFocusing}
      width={width}
    >
      <IconBox
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
    </BottomBorderInput>
  );
};
