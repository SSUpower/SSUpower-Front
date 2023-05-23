import React, { useEffect, useState } from "react";
import ScheduleTable from "./ScheduleTable";
import ScheduleForm from "./ScheduleForm";
import initialState, { timeSlots } from "./initialState";
import axios from "axios";
import Navbar from "../Navigator/Navigator";
import { useRecoilState } from "recoil";
import { isUserState, isLoggedInState } from "../state";

function ScheduleMain() {
  const [schedule, setSchedule] = useState(initialState.schedule);
  const [scheduleList, setScheduleList] = useState([]);
  const [user, setUser] = useRecoilState(isUserState);
  const [loginState, setLoginState] = useRecoilState(isLoggedInState);
  const userId = user.id;

  useEffect(() => {
    if (loginState) {
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
    }
  }, [loginState, user]);

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

  // const handleDelete = (selectedSchedule) => {
  //   // 선택한 스케줄을 삭제 후 처리할 로직
  //   axios
  //     .delete(`/timetable/${userId}/${selectedSchedule}/delete`)
  //     .then(() => {
  //       const updatedSchedule = { ...schedule };
  //       const [subject, day] = selectedSchedule.split("  (");
  //       const startTime =
  //         timeSlots[timeSlots.indexOf(updatedSchedule[day][subject].endTime)];

  //       for (let i = timeSlots.indexOf(startTime); i < timeSlots.length; i++) {
  //         const timeSlot = timeSlots[i];
  //         if (updatedSchedule[day][timeSlot]?.subject === subject) {
  //           delete updatedSchedule[day][timeSlot];
  //         } else {
  //           break;
  //         }
  //       }

  //       setSchedule(updatedSchedule);
  //       setScheduleList((prevScheduleList) => {
  //         return prevScheduleList.filter(
  //           (schedule) => schedule[0] !== selectedSchedule
  //         );
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // };

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
