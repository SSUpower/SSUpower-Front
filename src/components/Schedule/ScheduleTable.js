import React from "react";
import styled from "styled-components";
import { daysOfWeek, timeSlots } from "./initialState";
import ScheduleCell from "./ScheduleCell";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;
`;

const Th = styled.th`
  text-align: left;
  padding: 8px;
  border: 1px solid #ddd;
`;

function ScheduleTable({ schedule, onCellClick }) {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Time</Th>
          {daysOfWeek.map((day) => (
            <Th key={day}>{day}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timeSlots.map((time, index) => (
          <tr key={time}>
            <Th>{time}</Th>
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
