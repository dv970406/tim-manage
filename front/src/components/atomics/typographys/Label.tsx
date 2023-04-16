import { SubTitle } from "./Sub";

interface ILabel {
  cursor?: string;
  labelId?: string;
  text: string;
}
export const Label = ({ cursor = "auto", labelId, text }: ILabel) => {
  return (
    <label
      style={{
        cursor,
      }}
      htmlFor={labelId}
    >
      <SubTitle>{text}</SubTitle>
    </label>
  );
};
