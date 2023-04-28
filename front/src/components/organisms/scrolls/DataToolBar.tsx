import { faCirclePlus } from "@fortawesome/pro-solid-svg-icons";
import React, { ChangeEventHandler, MouseEventHandler } from "react";
import { theme } from "../../../css/theme";
import { RowBox } from "../../atomics/boxes/FlexBox";
import { IconButton } from "../../molecules/buttons/IconButton";
import { SearchInput } from "../../molecules/inputs/SearchInput";
interface IDataToolBar {
  onChange: ChangeEventHandler<HTMLInputElement>;
  openModal?: () => void;
}

const DataToolBar = ({ onChange, openModal }: IDataToolBar) => {
  const handleModal: MouseEventHandler<HTMLButtonElement> = () => {
    if (openModal) openModal();
  };

  return (
    <RowBox
      style={{
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <SearchInput onChange={onChange} width={300} />

      {openModal && (
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
