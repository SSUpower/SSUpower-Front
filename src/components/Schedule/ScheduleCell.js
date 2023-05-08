import React from "react";
import styled from "styled-components";

function ScheduleCell({
  day,
  time,
  subject,
  room,
  isEvenRow,
  rowSpan,
  colSpan,
}) {
  return (
    <Td
      isEvenRow={isEvenRow}
      rowSpan={rowSpan}
      colSpan={colSpan}
      style={
        rowSpan
          ? { backgroundColor: "lavenderblush" }
          : { backgroundColor: "white" }
      }>
      {subject ? `${subject} (${room})` : ""}
    </Td>
  );
}

export default ScheduleCell;

const Td = styled.td`
  text-align: center;
  border: 1px solid #ddd;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 30px;
  ${(props) => props.isEvenRow && "border-top: white"}
  ${(props) => !props.isEvenRow && "border-bottom: none"}
`;
