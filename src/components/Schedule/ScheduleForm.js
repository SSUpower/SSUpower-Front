import React, { useState } from "react";
import styled from "styled-components";
import { timeSlots, daysOfWeek } from "./initialState";
import Modal from "./ScheduleModal";

function ScheduleForm({ onSubmit }) {
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [subject, setSubject] = useState("");
  const [room, setRoom] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!day || !startTime || !endTime) {
      return;
    }

    onSubmit({
      day,
      startTime,
      endTime,
      subject,
      room,
    });

    setDay("");
    setStartTime("");
    setEndTime("");
    setSubject("");
    setRoom("");
  };

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="day">Day:</Label>
      <Select
        name="day"
        id="day"
        value={day}
        onChange={(e) => setDay(e.target.value)}>
        <option value="">요일 선택</option>
        {daysOfWeek.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </Select>
      <Label htmlFor="startTime">Start Time:</Label>
      <Select
        name="startTime"
        id="startTime"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}>
        <option value="">시작 시간 선택</option>
        {timeSlots.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </Select>
      <Label htmlFor="endTime">End Time:</Label>
      <Select
        name="endTime"
        id="endTime"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}>
        <option value="">종료 시간 선택</option>
        {timeSlots.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </Select>
      <Label htmlFor="subject">Subject:</Label>
      <Input
        type="text"
        id="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Label htmlFor="room">Room:</Label>
      <Input
        type="text"
        id="room"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <Button type="submit">추가하기</Button>
      <div>
        <Button onClick={handleClick}>빈 강의실 추천 받기</Button>
        {modalOpen && (
          <Modal isOpen={modalOpen} closeModal={() => setModalOpen(false)} />
        )}
      </div>
    </Form>
  );
}

export default ScheduleForm;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  font-family: "ChosunGu";
  margin: 20px auto;
  width: 100%;
`;

const Label = styled.label`
  margin-top: 10px;
  font-size: 14px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 4px;
  font-size: 14px;
  font-family: "ChosunGu";
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
  width: 100px;
  font-family: "ChosunGu";
`;

const Button = styled.button`
  background-color: #ff4b2b;
  color: white;
  padding: 8px 8px;
  margin-left: 8px;
  border: 0.5px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-family: "ChosunGu";
`;
