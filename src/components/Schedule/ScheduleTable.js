import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { daysOfWeek, timeSlots } from "./initialState";

function ScheduleTable({ schedule }) {
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

  const colors = [
    "#DCF3FF",
    "#c6dae5",
    "#e3f1f5",
    "#c7e4eb",
    "#d2e9ef",
    "#e9f4f7",
    "#b4dbe5",
  ];
  const colorMap = {};

  const getRandomColor = (subject) => {
    if (!colorMap[subject]) {
      if (Object.keys(colorMap).length < colors.length) {
        const availableColors = colors.filter(
          (color) => !Object.values(colorMap).includes(color)
        );
        colorMap[subject] =
          availableColors[Math.floor(Math.random() * availableColors.length)];
      } else {
        colorMap[subject] = colors[Math.floor(Math.random() * colors.length)];
      }
    }
    return colorMap[subject];
  };

  const Td = styled.td`
    text-align: center;
    border: 1px solid #ddd;
    width: ${tdSize}px;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
    height: 30px;
    ${(props) => props.isEvenRow && "border-top: 1px solid white;"}
    ${(props) => !props.isEvenRow && "border-bottom: none;"}
    position: relative;
    background-color: ${(props) => props.backgroundColor};
  `;

  return (
    <>
      <Table>
        <Thead>
          <tr>
            <Th />
            {daysOfWeek.map((day, index) => (
              <Th key={day} style={{ textAlign: "center" }}>
                {day}
              </Th>
            ))}
          </tr>
        </Thead>
        <tbody>
          {timeSlots.map((time) => (
            <tr>
              <Th
                style={{ width: "50px" }}
                isEvenRow={timeSlots.indexOf(time) % 2 !== 0}
                key={time}
              >
                {time.indexOf(":") === 1 ? time.slice(0, 1) : time.slice(0, 2)}
              </Th>
              {daysOfWeek.map((day) => {
                const subject = schedule[day][time].subject;
                const room = schedule[day][time].room;
                const startTime = schedule[day][time].startTime;
                const endTime = schedule[day][time].endTime;

                const timeRange = [];
                for (
                  let i = timeSlots.indexOf(startTime);
                  i <= timeSlots.indexOf(endTime);
                  i++
                ) {
                  timeRange.push(timeSlots[i]);
                }

                const backgroundColor = getRandomColor(subject);

                return (
                  <Td
                    key={`${day}-${time}`}
                    day={day}
                    time={time}
                    subject={subject}
                    room={room}
                    isEvenRow={timeSlots.indexOf(time) % 2 !== 0}
                    style={subject ? { backgroundColor: backgroundColor } : {}}
                  >
                    {subject ? `${subject} (${room})` : ""}
                  </Td>
                );
              })}
            </tr>
          ))}
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
  ${(props) =>
    props.isEvenRow && "color: transparent; border-top: 1px solid white;"}
  ${(props) => !props.isEvenRow && "border-bottom: none;"}
  position: relative;
`;
