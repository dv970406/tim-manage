import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { theme } from "../../../css/theme";
import { ColumnBox } from "../../atomics/boxes/FlexBox";
import { FullBorderInput } from "../../atomics/inputs/FullBorderInput";
import { ErrorText } from "../../atomics/typographys/texts";
import { SubTitle } from "../../atomics/typographys/titles";
import { IconBox } from "../boxes/IconBox";

interface ISelect {
  icon: IconProp;
  label: string;
  register?: UseFormRegisterReturn<string>;
  listName: string;
  list: any;
  errorMessage?: string;
  placeholder?: string;
}
const Select = ({
  icon,
  label,
  register,
  listName,
  list,
  errorMessage,
  placeholder = "Placeholder",
}: ISelect) => {
  const [isFocusing, setIsFocusing] = useState(false);

  return (
    <ColumnBox gap={theme.spacing.sm}>
      <label>
        <SubTitle>{label}</SubTitle>
      </label>
      <FullBorderInput
        onFocus={() => setIsFocusing(true)}
        onBlur={() => setIsFocusing(false)}
        isFocusing={isFocusing}
      >
        {icon && (
          <IconBox
            bgColor={isFocusing ? theme.bgColors.purple : undefined}
            icon={icon}
          />
        )}

        <input
          list={listName}
          {...register}
          placeholder={placeholder}
          style={{ width: "100%" }}
        />
        <datalist id={listName}>{list}</datalist>
      </FullBorderInput>
      <ErrorText style={{ height: 15 }}>{errorMessage}</ErrorText>
    </ColumnBox>
  );
};

export default Select;
