import React, { useState } from "react";
import styled from "styled-components";
import { timeSlots } from "./initialState";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  margin-top: 10px;
  margin-bottom: 5px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #ff4b2b;
  color: white;
  padding: 8px 12px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
          <option value="">Select a day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </Select>
        <Label htmlFor="time">Time:</Label>
        <Select
          name="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}>
          <option value="">Select a time</option>
          {timeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </Select>
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

        <Button type="submit">Add Schedule</Button>
      </div>
    </Form>
  );
}

export default ScheduleForm;
