import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { theme } from "../../../css/theme";
import { ColumnBox } from "../../atomics/boxes/Boxes";
import { FullBorderInputBox } from "../../atomics/inputs/inputs";
import { ErrorText } from "../../atomics/typographys/texts";
import { SubTitle } from "../../atomics/typographys/titles";
import { BoxIcon } from "../icons/BoxIcon";

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
      <FullBorderInputBox
        onFocus={() => setIsFocusing(true)}
        onBlur={() => setIsFocusing(false)}
        isFocusing={isFocusing}
      >
        {icon && (
          <BoxIcon
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
      </FullBorderInputBox>
      <ErrorText style={{ height: 15 }}>{errorMessage}</ErrorText>
    </ColumnBox>
  );
};

export default Select;
