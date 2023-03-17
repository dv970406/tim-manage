import { faCirclePlus, faSearch } from "@fortawesome/pro-solid-svg-icons";
import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { useGetMyInfo } from "../../../client/user/GetMyInfo.client";
import { theme } from "../../../css/theme";
import { openModal } from "../../../utils/modal/controlModal";
import { RowBox } from "../../atomics/boxes/Boxes";
import { ButtonIcon } from "../buttons/Buttons";
import { BoxIcon } from "../icons/Icons";
interface IDataToolBar {
  onChange: ChangeEventHandler<HTMLInputElement>;
  mutateName?: string;
  hasAddButton?: boolean;
}

const DataToolBar = ({ onChange, mutateName, hasAddButton }: IDataToolBar) => {
  const [isFocusingSearch, setIsFocusingSearch] = useState(false);

  const handleModal: MouseEventHandler<HTMLButtonElement> = () => {
    if (!mutateName) return;
    openModal(mutateName);
  };

  const { myInfo } = useGetMyInfo();

  return (
    <RowBox
      style={{
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: theme.spacing.md,
          borderBottom: isFocusingSearch
            ? `1px solid ${theme.colors.purple}`
            : `1px solid ${theme.colors.gray}`,

          transition: "border 0.2s",
          padding: theme.spacing.sm,
          width: 250,
        }}
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
      </div>

      {(mutateName === "create-post" || myInfo?.isManager) && hasAddButton && (
        <ButtonIcon
          onClick={handleModal}
          color={theme.bgColors.green}
          icon={faCirclePlus}
          size="2xl"
        />
      )}
    </RowBox>
  );
};

export default DataToolBar;
