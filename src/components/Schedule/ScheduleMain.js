import React, { useEffect, useState } from "react";
import ScheduleTable from "./ScheduleTable";
import ScheduleForm from "./ScheduleForm";
import initialState, { timeSlots } from "./initialState";
import axios from "axios";

function ScheduleMain() {
  const [schedule, setSchedule] = useState(initialState.schedule);

  useEffect(() => {
    axios
      .get("/timetable/select")
      .then((response) => {
        console.log(response.data);
        setSchedule(response.data); // 받아온 데이터를 state에 저장
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = ({ day, startTime, endTime, subject, room }) => {
    setSchedule((prevSchedule) => {
      const newSchedule = { ...prevSchedule };
      for (
        let i = timeSlots.indexOf(startTime);
        i < timeSlots.indexOf(endTime);
        i++
      ) {
        newSchedule[day][timeSlots[i]] = {
          subject: subject,
          room: room,
          endTime: endTime,
        };
      }
      return newSchedule;
    });
  };

  return (
    <>
      <ScheduleForm onSubmit={onSubmit} />
      <ScheduleTable schedule={schedule} />
    </>
  );
}

export default ScheduleMain;
