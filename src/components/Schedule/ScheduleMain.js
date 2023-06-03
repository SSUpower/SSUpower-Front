import React, { useEffect, useState } from "react";
import ScheduleTable from "./ScheduleTable";
import ScheduleForm from "./ScheduleForm";
import initialState, { timeSlots } from "./initialState";
import GlobalStyle from "../../fonts/GlobalStyle";
import axios from "axios";
import Navbar from "../Navigator/Navigator";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { isUserState, isLoggedInState } from "../state";

function ScheduleMain() {
  const [schedule, setSchedule] = useState(initialState.schedule);
  const [scheduleList, setScheduleList] = useState([]);
  const [user, setUser] = useRecoilState(isUserState);
  const [loginState, setLoginState] = useRecoilState(isLoggedInState);
  const navigate = useNavigate();
  const userId = user.id;

  useEffect(() => {
    axios
      .post(`/timetable/${userId}/select`)
      .then((response) => {
        const receivedSchedule = response.data;
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

        const schedules = receivedSchedule.map((timetable) => [
          timetable.subject + "  (" + timetable.day + ")",
        ]);

        setSchedule(updatedSchedule);
        setScheduleList(schedules);
      })
      .catch((error) => {
        console.log(error);
      });

      if (!loginState){
        navigate('/login');
      }

  }, [user]);

  const onSubmit = ({ day, startTime, endTime, subject, room, userId }) => {
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
      console.log(userId);
      return newSchedule;
    });
  };

  const handleDelete = (selectedSchedule) => {
    axios
      .delete(`/timetable/${userId}/${selectedSchedule}/delete`)
      .then(() => {
        setScheduleList((prevScheduleList) =>
          prevScheduleList.filter(
            (schedule) => schedule[0] !== selectedSchedule
          )
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <ScheduleForm
        onSubmit={onSubmit}
        scheduleList={scheduleList}
        onDelete={handleDelete}
        userId={userId}
      />

      <ScheduleTable schedule={schedule} />
    </>
  );
}
export default ScheduleMain;
