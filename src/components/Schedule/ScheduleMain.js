import React, { useState } from "react";
import ScheduleTable from "./ScheduleTable";
import ScheduleForm from "./ScheduleForm";
import initialState from "./initialState";

function ScheduleMain() {
  const [schedule, setSchedule] = useState(initialState.schedule);

  const onSubmit = ({ day, startTime, endTime, subject, room, rowSpan }) => {
    setSchedule((prevSchedule) => {
      return {
        ...prevSchedule,
        [day]: {
          ...prevSchedule[day],
          [startTime]: {
            subject: subject,
            room: room,
            rowSpan: rowSpan,
          },
        },
      };
    });
  };

  // const handleCellClick = (day, startTime) => {
  //   const subject = prompt("과목명을 입력하세요");
  //   const room = prompt("강의실 번호를 입력하세요");
  //   const updatedSchedule = {
  //     ...schedule,
  //     [day]: {
  //       ...schedule[day],
  //       [startTime]: {
  //         subject,
  //         room,
  //       },
  //     },
  //   };
  //   setSchedule(updatedSchedule);
  // };

  return (
    <>
      <ScheduleForm onSubmit={onSubmit} />
      <ScheduleTable schedule={schedule} />
    </>
  );
}

export default ScheduleMain;
