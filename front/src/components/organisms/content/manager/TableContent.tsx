import React from "react";
import { theme } from "../../../../css/theme";
import { Tr } from "../../../molecules/tables/Td";

interface ITableContent {
  onClick: () => void;
  clickedItem: any;
  children: React.ReactNode;
}
const TableContent = ({ onClick, clickedItem, children }: ITableContent) => {
  return (
    <Tr
      onClick={onClick}
      style={{
        ...(clickedItem && { backgroundColor: theme.bgColors.purple }),
      }}
    >
      {children}
    </Tr>
  );
};

export default TableContent;
