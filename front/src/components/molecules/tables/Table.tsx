import React from "react";
import { theme } from "../../../css/theme";
import { SubTitle } from "../../atomics/typographys/Sub";

interface ITable {
  headers: string[];
  children: React.ReactNode;
}
export const Table = ({ headers, children }: ITable) => {
  return (
    <>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr
            style={{
              borderBottom: `1px solid ${theme.colors.gray}`,
            }}
          >
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
        <tbody style={{ overflow: "auto" }}>{children}</tbody>
      </table>
    </>
  );
};
