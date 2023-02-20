import { faSearch } from "@fortawesome/pro-solid-svg-icons";
import React, { ChangeEventHandler, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { theme } from "../../../css/theme";
import { RowBox } from "../../atomics/boxes/Boxes";
import { BoxIcon } from "../icons/Icons";

interface ISearchBox {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ onChange }: ISearchBox) => {
  const [isFocusing, setIsFocusing] = useState(false);

  return (
    <RowBox
      style={{
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: theme.spacing.md,
          borderBottom: isFocusing
            ? `1px solid ${theme.colors.purple}`
            : `1px solid ${theme.colors.gray}`,

          transition: "all 0.2s",
          padding: theme.spacing.md,
          width: 300,
        }}
        onFocus={() => setIsFocusing(true)}
        onBlur={() => setIsFocusing(false)}
      >
        <BoxIcon
          bgColor={isFocusing ? theme.bgColors.purple : undefined}
          icon={faSearch}
        />
        <input
          // {...register}
          onChange={onChange}
          placeholder={"키워드를 입력해주세요."}
          style={{ width: "100%" }}
        />
      </div>
    </RowBox>
  );
};

export default SearchBox;
