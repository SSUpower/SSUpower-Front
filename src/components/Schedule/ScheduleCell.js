import React from "react";
import styled from "styled-components";

const Td = styled.td`
  text-align: left;
  padding: 8px;
  border: 1px solid #ddd;

  &:hover {
    background-color: #ddd;
  }
`;

const EvenRow = styled(Td)`
  background-color: #f2f2f2;
`;

function ScheduleCell({ day, time, subject, room, onCellClick, isEvenRow }) {
  const Cell = isEvenRow ? EvenRow : Td;

  return (
    <Cell onClick={onCellClick}>{subject ? `${subject} (${room})` : ""}</Cell>
  );
}

export default ScheduleCell;
