import React from "react";
import { StyledTable } from "./StyledTable";
import numeral from "numeral";

const Table = ({ countries }) => {
  return (
    <StyledTable>
      {countries.length &&
        countries.map(({ country, cases }, index) => (
          <tr key={index}>
            <td>{country}</td>
            <td>
              <strong>{numeral(cases).format("0,0")}</strong>
            </td>
          </tr>
        ))}
    </StyledTable>
  );
};

export default Table;
