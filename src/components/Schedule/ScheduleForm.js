import React, { useState } from "react";
import styled from "styled-components";
import { timeSlots } from "./initialState";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 10px;
`;

const Label = styled.label`
  margin-top: 10px;
  margin-bottom: 5px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-right: 10px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 30%;
`;

const Button = styled.button`
  background-color: #ff4b2b;
  color: white;
  padding: 4px 8px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
`;

function ScheduleForm({ onSubmit }) {
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [subject, setSubject] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!day || !time) {
      return;
    }
    onSubmit({ day, time, subject, room });
    setDay("");
    setTime("");
    setSubject("");
    setRoom("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="day">Day:</Label>
        <Select
          name="day"
          id="day"
          value={day}
          onChange={(e) => setDay(e.target.value)}>
          <option value="">요일 선택</option>
          <option value="월요일">월요일</option>
          <option value="화요일">화요일</option>
          <option value="수요일">수요일</option>
          <option value="목요일">목요일</option>
          <option value="금요일">금요일</option>
        </Select>
        <Label htmlFor="time">Time:</Label>
        <Select
          name="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}>
          <option value="">날짜 선택</option>
          {timeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </Select>
        <Button type="submit">추가하기</Button>
      </div>
      <div>
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
      </div>
    </Form>
  );
}

export default ScheduleForm;
