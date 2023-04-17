import { ChangeEventHandler, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { theme } from "../../../css/theme";
import { ColumnBox } from "../../atomics/boxes/FlexBox";
import { ErrorText } from "../../atomics/typographys/Etc";
import { Label } from "../../atomics/typographys/Label";

interface ITextArea {
  label?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn<string>;
  errorMessage?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  defaultValue?: string;
  disabled?: boolean;
}
export const TextArea = ({
  label,
  placeholder = "Placeholder",
  register,
  errorMessage,
  onChange,
  defaultValue,
  disabled = false,
}: ITextArea) => {
  const [isFocusing, setIsFocusing] = useState(false);
  return (
    <ColumnBox>
      {label && <Label text={label} labelId={label} cursor="pointer" />}
      <textarea
        disabled={disabled}
        defaultValue={defaultValue}
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
    </ColumnBox>
  );
};
