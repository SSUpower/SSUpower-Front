import React, { useEffect, useState } from "react";
import ScheduleTable from "./ScheduleTable";
import ScheduleForm from "./ScheduleForm";
import initialState, { timeSlots } from "./initialState";
import axios from "axios";
import Navbar from "../Navigator/Navigator";

function ScheduleMain() {
  const [schedule, setSchedule] = useState(initialState.schedule);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [isMobile, setiIsMobile] = useState(false);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
    if (innerWidth < 510) setiIsMobile(true);
    else setiIsMobile(false);
    console.log(innerWidth);
  }, [innerWidth, isMobile]);

  useEffect(() => {
    axios
      .get("/timetable/select")
      .then((response) => {
        const receivedSchedule = response.data;
        console.log(receivedSchedule);
        const updatedSchedule = { ...initialState.schedule };

        receivedSchedule.forEach((timetable) => {
          const { day, startTime, endTime, subject, room } = timetable;

          const startIdx = timeSlots.indexOf(startTime);
          const endIdx = timeSlots.indexOf(endTime);

          for (let i = startIdx; i < endIdx; i++) {
            updatedSchedule[day][timeSlots[i]] = {
              subject: subject,
              room: room,
              endTime: endTime,
            };
          }
        });

        setSchedule(updatedSchedule);
        console.log(schedule);
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
      <Navbar />
      <ScheduleForm onSubmit={onSubmit} />
      <ScheduleTable schedule={schedule} />
    </>
  );
}

export default ScheduleMain;
