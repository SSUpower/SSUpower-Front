import React from "react";
import styled from "styled-components";

const Td = styled.td`
  text-align: left;
  padding: 8px;
  border: 1px solid #ddd;
  width: 18%;
  height: 12px;
  &:hover {
    background-color: #ddd;
  }
  ${(props) => props.isEvenRow && "border-top: white"}
  ${(props) => !props.isEvenRow && "border-bottom: none"}
`;

function ScheduleCell({ day, time, subject, room, onCellClick, isEvenRow }) {
  return (
    <Td height={"15px"} onClick={onCellClick}>
      {subject ? `${subject} (${room})` : ""}
    </Td>
  );
}

export default ScheduleCell;
