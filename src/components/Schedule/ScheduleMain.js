import React, { useState } from "react";
import ScheduleTable from "./ScheduleTable";
import ScheduleForm from "./ScheduleForm";
import initialState, { timeSlots } from "./initialState";
import Navbar from "../Navigator/Navigator";

function ScheduleMain() {
  const [schedule, setSchedule] = useState(initialState.schedule);

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
      <Navbar />
      <ScheduleForm onSubmit={onSubmit} />
      <ScheduleTable schedule={schedule} />
    </>
  );
}

export default ScheduleMain;
