import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { ChangeEventHandler, useState } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { theme } from "../../../css/theme";
import { ErrorText, Text } from "../../atomics/typographys/texts";
import { LabelTitle } from "../../atomics/typographys/titles";
import { GapBox } from "../../atomics/boxes/Boxes";
import { BoxIcon } from "../icons/Icons";

interface ITextArea {
  label?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn<string>;
  defaultValue?: string;
  errorMessage?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}
export const TextArea = ({
  label,
  placeholder = "Placeholder",
  register,
  defaultValue,
  errorMessage,
  onChange,
}: ITextArea) => {
  const [isFocusing, setIsFocusing] = useState(false);
  return (
    <GapBox>
      {label && (
        <label htmlFor={label} style={{ cursor: "pointer" }}>
          <LabelTitle>{label}</LabelTitle>
        </label>
      )}
      <textarea
        id={label}
        placeholder={placeholder}
        style={{
          display: "flex",
          alignItems: "center",
          gap: theme.spacing.md,
          border: isFocusing
            ? `1px solid ${theme.colors.purple}`
            : `1px solid ${theme.colors.gray}`,
          borderRadius: theme.borderRadius.md,
          outline: "none",
          transition: "all 0.2s",
          width: "100%",
          background: "none",
          height: 100,
          padding: theme.spacing.md,
          color: theme.colors.white,
        }}
        onFocus={() => setIsFocusing(true)}
        onBlur={() => setIsFocusing(false)}
        {...(defaultValue && { defaultValue })}
        {...register}
        onChange={onChange}
      />
      <ErrorText style={{ height: 15 }}>{errorMessage}</ErrorText>
    </GapBox>
  );
};
