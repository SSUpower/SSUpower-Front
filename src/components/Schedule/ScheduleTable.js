import React from "react";
import styled from "styled-components";
import { daysOfWeek, timeSlots } from "./initialState";
import ScheduleCell from "./ScheduleCell";

const Table = styled.table`
  border-collapse: collapse;
  margin: 10px 0;
  font-size: 12px;
  width: 100%;
  table-layout: inherit;
`;

const Th = styled.th`
  text-align: right;
  padding: 4px;
  border: 1px solid #ddd;
  color:rgba(0,0,0,0.8);
  ${(props) => props.isEvenRow && "color: transparent;border-top: white"}
  ${(props) => !props.isEvenRow && "border-bottom: none"}
}
`;

function ScheduleTable({ schedule, onCellClick }) {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Time</Th>
          {daysOfWeek.map((day) => (
            <Th key={day}>{day.replace("요일", "")}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timeSlots.map((time, index) => (
          <tr key={time}>
            <Th isEvenRow={index % 2 !== 0}>
              {time.indexOf(":") === 1 ? time.slice(0, 1) : time.slice(0, 2)}
            </Th>
            {daysOfWeek.map((day) => (
              <ScheduleCell
                key={`${day}-${time}`}
                day={day}
                time={time}
                subject={schedule[day][time].subject}
                room={schedule[day][time].room}
                onCellClick={() => onCellClick(day, time)}
                isEvenRow={index % 2 !== 0}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ScheduleTable;
