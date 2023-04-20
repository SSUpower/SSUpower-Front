import React, { useState } from "react";
import ScheduleTable from "./ScheduleTable";
import ScheduleForm from "./ScheduleForm";
import initialState from "./initialState";

function ScheduleMain() {
  const [schedule, setSchedule] = useState(initialState.schedule);

  const onSubmit = ({ day, time, subject, room }) => {
    setSchedule((prevSchedule) => {
      return {
        ...prevSchedule,
        [day]: {
          ...prevSchedule[day],
          [time]: {
            subject: subject,
            room: room,
          },
        },
      };
    });
  };

  const handleCellClick = (day, time) => {
    const subject = prompt("과목명을 입력하세요");
    const room = prompt("강의실 번호를 입력하세요");
    const updatedSchedule = {
      ...schedule,
      [day]: {
        ...schedule[day],
        [time]: {
          subject,
          room,
        },
      },
    };
    setSchedule(updatedSchedule);
  };

  return (
    <>
      <div>
        <ScheduleForm onSubmit={onSubmit} />
        <ScheduleTable schedule={schedule} onCellClick={handleCellClick} />
      </div>
    </>
  );
}

export default ScheduleMain;
