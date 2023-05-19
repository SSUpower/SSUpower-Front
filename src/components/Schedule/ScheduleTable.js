import React, { useEffect, useState }  from "react";
import styled from "styled-components";
import { daysOfWeek, timeSlots } from "./initialState";

function ScheduleTable({ schedule}) {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [tdSize, setTdSize] = useState(200);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
    if (innerWidth < 400) setTdSize(50);
    else if (innerWidth < 800) setTdSize(70);
    else if (innerWidth < 1100) setTdSize(100);
    else setTdSize(200);
  }, [innerWidth]);

  const Td = styled.td`
  text-align: center;
  border: 1px solid #ddd;
  width: ${tdSize}px;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
  height: 30px;
  ${(props) => props.isEvenRow && "border-top: white"}
  ${(props) => !props.isEvenRow && "border-bottom: none"}
`;

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
                  {day}
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
                  isEvenRow={index % 2 !== 0}
                  style={subject ? { backgroundColor: "#e2eef9" } : {}}>
                  {subject ? `${subject} (${room})` : ""}
                </Td>
                {daysOfWeek.slice(1).map((day) => (
                  <Td
                    key={`${day}-${time}`}
                    day={day}
                    time={time}
                    subject={schedule[day][time].subject}
                    room={schedule[day][time].room}
                    isEvenRow={index % 2 !== 0}
                    style={
                      schedule[day][time].subject
                        ? { backgroundColor: "#e2eef9" }
                        : {}
                    }>
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

const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  font-size: 15px;
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
  ${(props) => props.isEvenRow && "color: transparent; border-top: white"}
  ${(props) => !props.isEvenRow && "border-bottom: none"}
`;

