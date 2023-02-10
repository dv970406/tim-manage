import React from "react";
import { theme } from "../../../css/theme";
import { LabelTitle, SubTitle } from "../../atomics/typographys/titles";

interface ITable {
  headers: string[];
  children: React.ReactNode;
}
const Table = ({ headers, children }: ITable) => {
  return (
    <table
      style={{
        width: "100%",
        tableLayout: "fixed",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr style={{ borderBottom: `1px solid ${theme.colors.gray}` }}>
          {headers.map((header) => (
            <th
              key={header}
              style={{
                padding: theme.spacing.sm,
                textAlign: "left",
              }}
            >
              <SubTitle>{header}</SubTitle>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
