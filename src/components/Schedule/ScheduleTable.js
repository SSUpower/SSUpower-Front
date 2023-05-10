import React from "react";
import styled from "styled-components";
import { daysOfWeek, timeSlots } from "./initialState";

function ScheduleTable({ schedule }) {
  return (
    <>
      <Table>
        <Thead>
          <tr>
            <Th />
            {daysOfWeek.map((day, index) => {
              if (index < 0 || index > 4) {
                return null;
              }
              return (
                <Th key={day} style={{ textAlign: "center" }}>
                  {day.replace("요일", "")}
                </Th>
              );
            })}
          </tr>
        </Thead>
        <tbody>
          {timeSlots.map((time, index) => {
            const firstDay = daysOfWeek[0];
            const subject = schedule[firstDay][time].subject;
            const room = schedule[firstDay][time].room;
            const startTime = schedule[firstDay][time].startTime;
            const endTime = schedule[firstDay][time].endTime;

            const timeRange = [];
            for (
              let i = timeSlots.indexOf(startTime);
              i <= timeSlots.indexOf(endTime);
              i++
            ) {
              timeRange.push(timeSlots[i]);
            }

            return (
              <tr key={time}>
                <Th isEvenRow={index % 2 !== 0} style={{ width: "50px" }}>
                  {time.indexOf(":") === 1
                    ? time.slice(0, 1)
                    : time.slice(0, 2)}
                </Th>
                <Td
                  key={`${firstDay}-${time}`}
                  day={firstDay}
                  time={time}
                  subject={subject}
                  room={room}
                  isEvenRow={index % 2 !== 0}>
                  {subject ? `${subject} (${room})` : ""}
                </Td>
                {daysOfWeek.slice(1).map((day) => (
                  <Td
                    key={`${day}-${time}`}
                    day={day}
                    time={time}
                    subject={schedule[day][time].subject}
                    room={schedule[day][time].room}
                    isEvenRow={index % 2 !== 0}>
                    {schedule[day][time].subject
                      ? `${schedule[day][time].subject} (${schedule[day][time].room})`
                      : ""}
                  </Td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default ScheduleTable;

const pastelColors = {
  pink: "#FFD1DC",
  blue: "#ADD8E6",
  yellow: "#FFFACD",
  green: "#90EE90",
  purple: "#E6E6FA",
};

const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  font-size: 16px;
`;

const Thead = styled.thead`
  color: #333;
`;

const Th = styled.th`
  text-align: right;
  padding: 4px;
  height: 18px;
  border: 1px solid #ddd;
  color: #333;
  ${(props) =>
    props.isEvenRow &&
    CSS`
      color: transparent;
      border-top: white;
    `}
  ${(props) =>
    !props.isEvenRow &&
    CSS`
      border-bottom: none;
    `}
  background-color: ${(props) =>
    props.day === "월"
      ? pastelColors.pink
      : props.day === "화"
      ? pastelColors.blue
      : props.day === "수"
      ? pastelColors.yellow
      : props.day === "목"
      ? pastelColors.green
      : props.day === "금"
      ? pastelColors.purple
      : ""};
`;

const Td = styled.td`
  text-align: center;
  border: 1px solid #ddd;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 30px;
  ${(props) =>
    props.isEvenRow &&
    CSS`
      border-top: white;
    `}
  ${(props) =>
    !props.isEvenRow &&
    CSS`
      border-bottom: none;
    `}
  background-color: ${(props) =>
    props.day === "월"
      ? pastelColors.pink
      : props.day === "화"
      ? pastelColors.blue
      : props.day === "수"
      ? pastelColors.yellow
      : props.day === "목"
      ? pastelColors.green
      : props.day === "금"
      ? pastelColors.purple
      : ""};
`;
