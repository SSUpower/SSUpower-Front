import React, { useState } from "react";
import styled from "styled-components";
import { timeSlots, daysOfWeek } from "./initialState";
import axios from "axios";

const ScheduleModalForm = ({onSubmit}) => {
	const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [subject, setSubject] = useState("");
  const [room, setRoom] = useState("");

	const handleSubmit = (e) => {
    e.preventDefault();
    if (!day || !startTime || !endTime) {
      return;
    }

    const scheduleData = { day, startTime, endTime, subject, room };

    onSubmit(scheduleData);

    setDay("");
    setStartTime("");
    setEndTime("");
    setSubject("");
    setRoom("");

    axios
      .post(
        "https://port-0-ssupower-back-lhe2blhul1sus.sel4.cloudtype.app/timetable/insert",
        JSON.stringify(scheduleData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        setDay("");
        setStartTime("");
        setEndTime("");
        setSubject("");
        setRoom("");
      })
      .catch((err) => {
        console.log(err);
        console.log(scheduleData);
      });
  };

	return (
		<Form onSubmit={handleSubmit}>

			<FormItem>
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
			</FormItem>
			
			<FormItem>
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
			</FormItem>

			<FormItem>
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
			</FormItem>
			
			<FormItem>
				<Label htmlFor="subject">Subject:</Label>
				<Input
					type="text"
					id="subject"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
				/>
			</FormItem>
			
			<FormItem>
				<Label htmlFor="room">Room:</Label>
				
				<Input
					type="text"
					id="room"
					value={room}
					onChange={(e) => setRoom(e.target.value)}
				/>
			</FormItem>
			
			<FormItem>
				<Button type="submit">추가하기</Button>
			</FormItem>
		
		</Form>
	);
};

export default ScheduleModalForm;

const Form = styled.form`
  display: flex;
	flex-direction: column;
  align-items: center;
	align-content: center;
  font-family: "ChosunGu";
  margin: 20px auto;
  width: 100%;
`;

const FormItem = styled.div`
	display: flex;
	flex-direction: row;
	margin: 10px;
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
  background-color: #2e3a51;
  color: white;
  padding: 8px 8px;
  margin-left: 8px;
  border: 0.5px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-family: "ChosunGu";
`;
