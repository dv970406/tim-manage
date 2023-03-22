import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { faSearch } from "@fortawesome/pro-solid-svg-icons";
import { ChangeEventHandler, useState } from "react";
import { theme } from "../../../css/theme";
import { InputBox } from "../../atomics/inputs/inputs";
import { BoxIcon } from "../icons/BoxIcon";

interface ISearchInput {
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export const SearchInput = ({ onChange }: ISearchInput) => {
  const [isFocusingSearch, setIsFocusingSearch] = useState(false);

  return (
    <InputBox
      onFocus={() => setIsFocusingSearch(true)}
      onBlur={() => setIsFocusingSearch(false)}
    >
      <BoxIcon
        bgColor={isFocusingSearch ? theme.bgColors.purple : undefined}
        icon={faSearch}
      />
      <input
        // {...register}
        onChange={onChange}
        placeholder={"키워드를 입력해주세요."}
      />
    </InputBox>
  );
};
