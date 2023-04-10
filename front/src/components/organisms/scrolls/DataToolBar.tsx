import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { faCirclePlus, faSearch } from "@fortawesome/pro-solid-svg-icons";
import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { useGetMyInfo } from "../../../client/user/GetMyInfo.client";
import { theme } from "../../../css/theme";
import { openModal } from "../../../utils/modal/controlModal";
import { RowBox } from "../../atomics/boxes/FlexBox";
import { IconButton } from "../../molecules/buttons/IconButton";
import { SearchInput } from "../../molecules/inputs/SearchInput";
interface IDataToolBar {
  onChange: ChangeEventHandler<HTMLInputElement>;
  mutateName?: string;
  hasAddButton?: boolean;
}

const DataToolBar = ({ onChange, mutateName, hasAddButton }: IDataToolBar) => {
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
      <SearchInput onChange={onChange} width={300} />

      {(mutateName === "create-post" || myInfo?.isManager) && hasAddButton && (
        <IconButton
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
